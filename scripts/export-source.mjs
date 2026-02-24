import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = '/vercel/share/v0-project'

const files = [
  'package.json',
  'next.config.mjs',
  'tsconfig.json',
  'app/globals.css',
  'app/layout.tsx',
  'app/page.tsx',
  'app/sitemap.ts',
  'app/robots.ts',
  'app/info-fee/page.tsx',
  'app/credit-card/page.tsx',
  'app/card-cash/page.tsx',
  'app/policy-default/page.tsx',
  'app/tools/page.tsx',
  'app/blog/page.tsx',
  'app/blog/[slug]/page.tsx',
  'app/contact/page.tsx',
  'app/about/page.tsx',
  'app/terms/page.tsx',
  'app/privacy/page.tsx',
  'components/Header.tsx',
  'components/Footer.tsx',
  'components/FloatingCta.tsx',
  'components/ReadingProgress.tsx',
  'components/TableOfContents.tsx',
  'components/FaqAccordion.tsx',
  'components/SubpageLayout.tsx',
  'components/CtaBanner.tsx',
  'components/HeroSection.tsx',
  'components/HowItWorksSection.tsx',
  'components/FeesSection.tsx',
  'components/FaqSection.tsx',
  'components/WhatIsSection.tsx',
  'components/InternalLinksSection.tsx',
  'components/ToolsSection.tsx',
  'lib/posts.ts',
  'lib/utils.ts',
]

let output = `${'='.repeat(60)}\n`
output += `  시카고페이(Chicago Pay) - 프로덕션 소스 코드\n`
output += `  도메인: dgi-chicago.com\n`
output += `  생성일: ${new Date().toISOString()}\n`
output += `${'='.repeat(60)}\n\n`

for (const file of files) {
  const fullPath = join(ROOT, file)
  if (!existsSync(fullPath)) continue
  const content = readFileSync(fullPath, 'utf-8')
  output += `${'─'.repeat(60)}\n`
  output += `📄 ${file}\n`
  output += `${'─'.repeat(60)}\n`
  output += content
  output += '\n\n'
}

const outPath = join(ROOT, 'public', 'source-export.txt')
writeFileSync(outPath, output, 'utf-8')
console.log(`[v0] Source exported to: ${outPath}`)
console.log(`[v0] Total files: ${files.filter(f => existsSync(join(ROOT, f))).length}`)
console.log(`[v0] Total size: ${(Buffer.byteLength(output, 'utf-8') / 1024).toFixed(1)} KB`)
