/**
 * Google Indexing API — sitemap 전체 URL 제출 스크립트
 *
 * 사용법:
 *   node scripts/index-urls.mjs
 *   node scripts/index-urls.mjs ./path/to/service-account.json
 *
 * 기본 키 파일 위치: 프로젝트 루트의 service-account.json
 * 또는 환경변수: GOOGLE_APPLICATION_CREDENTIALS=./service-account.json
 *
 * 사전 조건:
 *   1. Google Cloud Console에서 Indexing API 활성화
 *   2. 서비스 계정 JSON 키 발급 후 아래 경로에 저장
 *   3. Google Search Console에서 해당 서비스 계정 이메일을 소유자(Owner)로 등록
 */

import { createSign } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { request } from 'node:https'
import { parseArgs } from 'node:util'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ── 설정 ─────────────────────────────────────────────────────────────────────

const SITEMAP_URL = 'https://dgi-chicago.com/sitemap.xml'
const INDEXING_API = 'https://indexing.googleapis.com/v3/urlNotifications:publish'
const TOKEN_URL    = 'https://oauth2.googleapis.com/token'
const SCOPE        = 'https://www.googleapis.com/auth/indexing'

/** 요청 간 딜레이 (ms) — Indexing API 일일 할당: 200건 */
const DELAY_MS = 500

// ── 서비스 계정 JSON 키 로드 ──────────────────────────────────────────────────

const { values: args } = parseArgs({
  args: process.argv.slice(2),
  options: { key: { type: 'string', short: 'k' } },
  allowPositionals: true,
  strict: false,
})

const keyPath =
  args.key ??
  process.env.GOOGLE_APPLICATION_CREDENTIALS ??
  resolve(__dirname, '..', 'service-account.json')

let serviceAccount
try {
  serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'))
} catch {
  console.error(`\n❌  서비스 계정 JSON 파일을 찾을 수 없습니다: ${keyPath}`)
  console.error('   파일을 프로젝트 루트의 service-account.json 으로 저장하거나')
  console.error('   --key ./path/to/file.json 옵션으로 경로를 지정하세요.\n')
  process.exit(1)
}

// ── 유틸리티 ─────────────────────────────────────────────────────────────────

function b64url(str) {
  return Buffer.from(str).toString('base64url')
}

function httpsRequest(url, options, body) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url)
    const req = request(
      { ...parsed, ...options },
      (res) => {
        let data = ''
        res.on('data', (chunk) => (data += chunk))
        res.on('end', () => resolve({ status: res.statusCode, body: data }))
      }
    )
    req.on('error', reject)
    if (body) req.write(body)
    req.end()
  })
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

// ── JWT → Access Token ────────────────────────────────────────────────────────

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000)
  const header  = b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))
  const payload = b64url(JSON.stringify({
    iss: serviceAccount.client_email,
    scope: SCOPE,
    aud: TOKEN_URL,
    iat: now,
    exp: now + 3600,
  }))

  const sign = createSign('RSA-SHA256')
  sign.update(`${header}.${payload}`)
  const signature = sign.sign(serviceAccount.private_key, 'base64url')
  const jwt = `${header}.${payload}.${signature}`

  const body = new URLSearchParams({
    grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
    assertion: jwt,
  }).toString()

  const res = await httpsRequest(TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(body),
    },
  }, body)

  const json = JSON.parse(res.body)
  if (!json.access_token) {
    throw new Error(`토큰 발급 실패: ${res.body}`)
  }
  return json.access_token
}

// ── sitemap.xml 파싱 ──────────────────────────────────────────────────────────

async function fetchSitemapUrls() {
  const res = await httpsRequest(SITEMAP_URL, { method: 'GET' })
  if (res.status !== 200) {
    throw new Error(`sitemap 요청 실패 (HTTP ${res.status})`)
  }
  const urls = [...res.body.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
  if (urls.length === 0) throw new Error('sitemap에서 URL을 찾을 수 없습니다.')
  return urls
}

// ── Indexing API 제출 ─────────────────────────────────────────────────────────

async function publishUrl(token, url) {
  const body = JSON.stringify({ url, type: 'URL_UPDATED' })
  const res = await httpsRequest(INDEXING_API, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(body),
    },
  }, body)
  return { status: res.status, body: res.body }
}

// ── 메인 ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🔑  서비스 계정:', serviceAccount.client_email)
  console.log('📡  sitemap 가져오는 중...', SITEMAP_URL)

  const urls = await fetchSitemapUrls()
  console.log(`📋  총 ${urls.length}개 URL 발견\n`)

  console.log('🔐  액세스 토큰 발급 중...')
  const token = await getAccessToken()
  console.log('✅  토큰 발급 완료\n')

  let ok = 0, fail = 0
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i]
    try {
      const { status, body } = await publishUrl(token, url)
      if (status === 200) {
        console.log(`  [${i + 1}/${urls.length}] ✅  ${url}`)
        ok++
      } else {
        const errMsg = JSON.parse(body)?.error?.message ?? body
        console.log(`  [${i + 1}/${urls.length}] ⚠️   ${url}`)
        console.log(`        HTTP ${status}: ${errMsg}`)
        fail++
      }
    } catch (e) {
      console.log(`  [${i + 1}/${urls.length}] ❌  ${url} — ${e.message}`)
      fail++
    }
    if (i < urls.length - 1) await sleep(DELAY_MS)
  }

  console.log(`\n완료 — 성공 ${ok}건 / 실패 ${fail}건 / 전체 ${urls.length}건`)
}

main().catch((e) => {
  console.error('\n❌ 오류:', e.message)
  process.exit(1)
})
