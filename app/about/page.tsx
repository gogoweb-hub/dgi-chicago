import type { Metadata } from "next"
import Link from "next/link"
import { Shield, Scale, Users, FileText, AlertTriangle, Building, Rocket, BarChart3, BookOpen, Wrench, RefreshCw, ChevronRight } from "lucide-react"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "dgi-chicago 소개 | 운영 철학 검수 기준 신뢰도",
  description:
    "dgi-chicago 사이트 소개. 2023년부터 운영된 신뢰 정보 플랫폼. 전문가 검수 기준, 정보 제공 철학, 광고 정책까지 투명하게 공개합니다.",
  keywords: ["소액결제현금화 사이트 소개", "소액결제현금화 운영자", "소액결제 정보 플랫폼"],
  openGraph: {
    title: "dgi-chicago -- 사이트 소개",
    description: "2023년부터 운영. 전문가 검수 정보만 제공. 투명한 광고 정책.",
    url: `${SITE_URL}/about`,
  },
  alternates: { canonical: `${SITE_URL}/about` },
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "dgi-chicago",
  url: SITE_URL,
  description: "소액결제현금화, 정보이용료현금화, 신용카드현금화 전문 정보 제공 플랫폼",
  foundingDate: "2023",
  areaServed: "KR",
  knowsAbout: ["소액결제현금화", "정보이용료현금화", "신용카드현금화", "소액결제 오류 해결", "소액결제 한도 관리"],
  logo: { "@type": "ImageObject", url: `${SITE_URL}/favicon.png`, width: 32, height: 32 },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", availableLanguage: "Korean", hoursAvailable: "Mo-Su 00:00-24:00" },
}

const stats = [
  { icon: "calendar", label: "운영 시작", value: "2023년", sub: "꾸준한 콘텐츠 업데이트" },
  { icon: "docs", label: "총 콘텐츠", value: "50개+", sub: "전문가 검수 완료 아티클" },
  { icon: "users", label: "월 방문자", value: "매월 방문", sub: "소액결제 정보 이용자" },
]

const missions = [
  { icon: Shield, color: "text-toss-blue", title: "정확성 최우선", desc: "모든 콘텐츠는 실제 통신사 정책, 법령, 판례를 기반으로 작성되며 변경 사항 발생 시 즉시 업데이트합니다." },
  { icon: Scale, color: "text-toss-green", title: "투명한 광고 정책", desc: "본 사이트는 업체 광고료를 받는 디렉터리 모델로 운영됩니다. 광고 업체와 일반 정보를 명확히 구분하여 표시합니다." },
  { icon: Users, color: "text-[#3B82F6]", title: "이용자 보호", desc: "사기 업체 경고, 안전 이용 가이드, 법률 정보를 무료로 제공하여 이용자가 안전하게 서비스를 이용할 수 있도록 돕습니다." },
]

const team = [
  { initial: "편", bg: "bg-toss-blue", textColor: "text-white", role: "수석 편집장", field: "소액결제 통신정책", desc: "국내 이동통신 업계 7년 근무 경력. SKT KT 협력사 전문 소액결제 정책 분석 및 이용자 가이드 작성 담당. 통신 관련 커뮤니티 운영 경험 보유.", areas: ["통신사별 소액결제 정책", "오류코드 해결 가이드", "한도 수수료 정보"] },
  { initial: "법", bg: "bg-toss-green", textColor: "text-white", role: "법률 자문 편집자", field: "금융 통신 법률", desc: "법학 학위 보유. 정보통신망법, 전기통신사업법, 여신전문금융업법 관련 5년 이상 연구 경험. 금융소비자 보호 관련 다수 아티클 게재.", areas: ["법률 조항 해설", "판례 분석", "이용자 권리 안내"] },
  { initial: "정", bg: "bg-[#3B82F6]", textColor: "text-white", role: "데이터 분석 편집자", field: "핀테크 시장 분석", desc: "핀테크 기업 데이터 분석팀 근무 경력 5년. 모바일 결제 시장 통계 및 트렌드 분석 전문. 한국은행 금감원 공개 데이터 활용 콘텐츠 작성.", areas: ["시장 통계 트렌드", "수수료 비교 데이터", "사례연구 검증"] },
]

const standards = [
  { emoji: "1", title: "출처 기반 작성", desc: "모든 통계 및 법률 정보는 공식 출처를 명시합니다. 활용 출처: 한국은행, 과학기술정보통신부, 금융감독원, 대한민국 법원 판례, 각 통신사 공식 발표 자료" },
  { emoji: "2", title: "정기 업데이트", desc: "통신사 정책이나 법령이 변경될 경우 해당 콘텐츠를 즉시 업데이트하며, 각 페이지에 '마지막 업데이트 날짜'를 표시합니다. 주요 정책 변경은 48시간 이내 반영을 원칙으로 합니다." },
  { emoji: "3", title: "균형 잡힌 정보 제공", desc: "소액결제현금화의 장점뿐 아니라 단점, 법적 리스크, 사기 주의사항을 동등하게 제공합니다. 특정 업체를 일방적으로 홍보하지 않습니다." },
  { emoji: "4", title: "이용자 안전 우선", desc: "사기 업체 정보 입수 시 즉시 경고 콘텐츠를 게시합니다. 개인정보 보호, 사기 예방 가이드를 별도 섹션으로 항상 제공합니다." },
  { emoji: "5", title: "광고 콘텐츠 명시", desc: "광고료를 받은 업체는 '광고' 또는 '협찬' 배지를 명확히 표시합니다. 광고 업체라도 기본 검증 기준(사업자등록 운영기간 후기)을 통과해야 등록이 가능합니다." },
]

const timeline = [
  { date: "2023년 1월", icon: Rocket, text: "사이트 개설. 소액결제현금화 기본 가이드 5개 포스팅." },
  { date: "2023년 6월", icon: BarChart3, text: "월 방문자 1,000명 돌파. 오류코드 가이드 시리즈 시작." },
  { date: "2023년 12월", icon: Scale, text: "법률 전문 편집자 합류. 법률 섹션 전면 개편." },
  { date: "2024년 3월", icon: BarChart3, text: "시장 통계 섹션 추가. 데이터 기반 콘텐츠 강화." },
  { date: "2024년 9월", icon: Shield, text: "사기 예방 가이드 시리즈 런칭. 피해 사례 분석 10건 게재." },
  { date: "2025년 1월", icon: RefreshCw, text: "전체 콘텐츠 대규모 업데이트. 2025년 통신사 정책 반영." },
  { date: "2025년 6월", icon: Wrench, text: "수수료 계산기 한도 체크 도구 추가." },
  { date: "2026년 2월", icon: BookOpen, text: "블로그 포스트 50개 돌파. 전문 정보 플랫폼으로 확장." },
]

const contactCards = [
  { icon: FileText, title: "콘텐츠 오류 제보", desc: "정보 오류, 사실 오류, 업데이트 필요 내용을 발견하셨나요? 아래 링크로 제보해주시면 48시간 내에 검토 후 수정합니다.", btn: "오류 제보하기" },
  { icon: AlertTriangle, title: "사기 업체 신고", desc: "소액결제 관련 사기 업체 정보를 알고 계신가요? 제보 즉시 확인 후 경고 공지를 게재합니다.", btn: "사기 신고하기" },
  { icon: Building, title: "업체 등록 문의", desc: "업체 디렉터리 등록을 원하시는 업체는 사업자등록증, 운영 기간, 서비스 내용을 포함하여 문의해주세요.", btn: "등록 문의하기" },
]

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-toss-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-toss-green/30 bg-toss-green/5 px-4 py-1.5 text-[13px] font-medium text-toss-green">
              2023년부터 운영 중인 신뢰 플랫폼
            </span>
            <h1 className="mt-6 text-balance text-[28px] font-bold leading-tight text-toss-gray-900 md:text-[36px]">
              {"dgi-chicago"}<br className="hidden md:block" />
              {"소개 및 운영 철학"}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-toss-gray-500">
              {"정확한 정보, 투명한 운영, 이용자 보호를 최우선으로 하는 소액결제현금화 전문 정보 플랫폼입니다."}
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-toss-gray-100 bg-white p-6 text-center">
                  <p className="text-[13px] font-medium text-toss-gray-400">{s.label}</p>
                  <p className="mt-1 text-[28px] font-bold text-toss-blue">{s.value}</p>
                  <p className="mt-1 text-[13px] text-toss-gray-500">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Mission */}
        <section id="mission" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
            <h2 className="text-[22px] font-bold text-toss-gray-900 md:text-[26px]">{"저희가 이 사이트를 만든 이유"}</h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="prose-toss">
                <p>{"소액결제현금화는 수많은 사람들이 실제로 이용하고 있는 금융 수단임에도 불구하고, 인터넷에는 부정확한 정보, 과장된 광고, 심지어 사기 업체의 허위 정보가 넘쳐납니다."}</p>
                <p>{"저희 팀은 소액결제 관련 업무에 종사하거나 직접 이용 경험이 있는 전문 편집진으로 구성되어 있으며, 2023년부터 다음의 세 가지 원칙에 따라 정직하고 정확한 정보만을 제공해왔습니다."}</p>
              </div>
              <div className="flex flex-col gap-4">
                {missions.map((m) => (
                  <div key={m.title} className="rounded-2xl border border-toss-gray-100 bg-white p-6">
                    <m.icon className={`h-6 w-6 ${m.color}`} />
                    <h3 className="mt-3 text-[16px] font-bold text-toss-gray-900">{m.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-toss-gray-600">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Team */}
        <section id="team" className="bg-toss-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
            <h2 className="text-[22px] font-bold text-toss-gray-900 md:text-[26px]">{"콘텐츠 편집진 소개"}</h2>
            <div className="mt-4 rounded-2xl border border-toss-blue/20 bg-toss-blue/5 p-5">
              <p className="text-[14px] leading-relaxed text-toss-gray-700">{"본 사이트의 모든 콘텐츠는 아래 편집 기준에 따라 작성 검수됩니다. 개인정보 보호를 위해 실명 대신 직책으로 표시합니다."}</p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {team.map((t) => (
                <div key={t.role} className="rounded-2xl border border-toss-gray-100 bg-white p-6">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-full ${t.bg}`}>
                    <span className={`text-[20px] font-bold ${t.textColor}`}>{t.initial}</span>
                  </div>
                  <h3 className="mt-4 text-[16px] font-bold text-toss-gray-900">{t.role}</h3>
                  <p className="mt-1 text-[13px] font-medium text-toss-blue">{t.field}</p>
                  <p className="mt-3 text-[14px] leading-relaxed text-toss-gray-600">{t.desc}</p>
                  <div className="mt-4 flex flex-col gap-1.5">
                    {t.areas.map((a) => (
                      <div key={a} className="flex items-center gap-2 text-[13px] text-toss-gray-600">
                        <span className="text-toss-green">{"✓"}</span>{a}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Standards */}
        <section id="standards" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
            <h2 className="text-[22px] font-bold text-toss-gray-900 md:text-[26px]">{"콘텐츠 작성 및 검수 기준"}</h2>
            <p className="mt-2 text-[15px] text-toss-gray-500">{"Google의 E-E-A-T(경험 전문성 권위성 신뢰성) 원칙에 따라 모든 콘텐츠를 작성하고 관리합니다."}</p>
            <div className="relative mt-10 ml-4 border-l-2 border-toss-gray-200 pl-8">
              {standards.map((s) => (
                <div key={s.title} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-full bg-toss-blue text-[13px] font-bold text-white">{s.emoji}</div>
                  <h3 className="text-[16px] font-bold text-toss-gray-900">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-toss-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Advertising */}
        <section id="advertising" className="bg-toss-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
            <h2 className="text-[22px] font-bold text-toss-gray-900 md:text-[26px]">{"투명한 광고 수익 구조 공개"}</h2>
            <div className="mt-8 rounded-2xl border border-toss-blue/20 bg-white p-6 md:p-8">
              <h3 className="text-[16px] font-bold text-toss-blue">{"본 사이트의 수익 구조"}</h3>
              <p className="mt-4 text-[14px] leading-[1.9] text-toss-gray-700">{"본 사이트는 두 가지 방식으로 운영 비용을 충당합니다."}</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl bg-toss-gray-50 p-5">
                  <p className="text-[14px] font-bold text-toss-gray-800">{"① 업체 디렉터리 등록 광고"}</p>
                  <p className="mt-2 text-[14px] leading-[1.9] text-toss-gray-600">{"소액결제현금화 관련 업체들이 업체 정보를 등록하는 방식으로 광고료를 지불합니다. 광고 업체는 반드시 사업자등록번호 확인, 운영 기간 1년 이상, 실제 이용자 후기 존재 등 3가지 기준을 통과해야 합니다. 광고 업체 카드에는 반드시 \"광고\" 배지가 표시됩니다."}</p>
                </div>
                <div className="rounded-xl bg-toss-gray-50 p-5">
                  <p className="text-[14px] font-bold text-toss-gray-800">{"② 제휴 링크 (해당 시)"}</p>
                  <p className="mt-2 text-[14px] leading-[1.9] text-toss-gray-600">{"일부 외부 서비스 링크에 제휴 코드가 포함될 수 있으며, 이 경우 \"(제휴)\" 표시를 명시합니다."}</p>
                </div>
              </div>
              <div className="mt-6 rounded-xl border-l-4 border-toss-green bg-toss-green/5 p-4">
                <p className="text-[14px] leading-relaxed text-toss-gray-700">{"본 사이트의 콘텐츠(가이드, 법률 정보, 오류 해결 가이드 등)는 광고와 완전히 독립적으로 작성되며, 광고비가 콘텐츠 내용에 영향을 주지 않습니다."}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: History */}
        <section id="history" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
            <h2 className="text-[22px] font-bold text-toss-gray-900 md:text-[26px]">{"사이트 운영 이력"}</h2>
            <div className="relative mt-10 ml-4 border-l-2 border-toss-gray-200 pl-8">
              {timeline.map((t) => (
                <div key={t.date} className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[41px] flex h-7 w-7 items-center justify-center rounded-full border-2 border-toss-blue bg-white">
                    <t.icon className="h-3.5 w-3.5 text-toss-blue" />
                  </div>
                  <p className="text-[13px] font-bold text-toss-blue">{t.date}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-toss-gray-700">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Contact */}
        <section id="contact" className="bg-toss-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
            <h2 className="text-[22px] font-bold text-toss-gray-900 md:text-[26px]">{"문의 및 제보"}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {contactCards.map((c) => (
                <div key={c.title} className="rounded-2xl border border-toss-gray-100 bg-white p-6">
                  <c.icon className="h-6 w-6 text-toss-blue" />
                  <h3 className="mt-3 text-[16px] font-bold text-toss-gray-900">{c.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-toss-gray-600">{c.desc}</p>
                  <Link href="/contact" className="mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-toss-blue hover:underline">
                    {c.btn}<ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="bg-toss-blue py-16">
          <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-6">
            <p className="text-[22px] font-bold text-white md:text-[26px]">{"저희 사이트의 모든 정보는 무료입니다"}</p>
            <p className="mt-3 text-[15px] text-white/80">{"소액결제현금화에 관한 질문이 있으시면 언제든지 문의하세요"}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/" className="rounded-xl bg-white px-6 py-3 text-[14px] font-bold text-toss-blue transition-colors hover:bg-toss-gray-50">{"메인 가이드 보기"}</Link>
              <Link href="/contact" className="rounded-xl border border-white/30 px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-white/10">{"문의하기"}</Link>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-10">
          <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-center gap-4 px-5 lg:px-6">
            <Link href="/privacy" className="rounded-xl border border-toss-gray-100 bg-white px-5 py-3 text-[14px] font-medium text-toss-gray-600 transition-colors hover:border-toss-blue/30 hover:text-toss-blue">{"개인정보처리방침"}</Link>
            <Link href="/terms" className="rounded-xl border border-toss-gray-100 bg-white px-5 py-3 text-[14px] font-medium text-toss-gray-600 transition-colors hover:border-toss-blue/30 hover:text-toss-blue">{"이용약관"}</Link>
          </div>
        </section>
      </main>
    </>
  )
}
