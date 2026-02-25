import type { Metadata } from "next"
import Link from "next/link"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "개인정보처리방침 | dgi-chicago",
  description: "dgi-chicago의 개인정보처리방침. 수집 항목, 이용 목적, 보유 기간, 제3자 제공, 이용자 권리를 안내합니다.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE_URL}/privacy` },
}

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "개인정보처리방침",
  url: `${SITE_URL}/privacy`,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  dateModified: "2026-02-23",
}

const tocItems = [
  "수집하는 개인정보 항목",
  "개인정보 수집 및 이용 목적",
  "개인정보 보유 및 이용 기간",
  "개인정보 제3자 제공",
  "개인정보 처리 위탁",
  "이용자 권리와 행사 방법",
  "개인정보 자동 수집 장치",
  "개인정보 보호책임자",
  "개인정보처리방침 변경 안내",
]

export default function PrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <main className="pt-16">
        {/* Hero */}
        <section className="bg-toss-gray-50 py-12 md:py-20">
          <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-toss-gray-200 bg-white px-4 py-1.5 text-[13px] font-medium text-toss-gray-600">
              {"최종 개정일: 2026년 2월 23일"}
            </span>
            <h1 className="mt-6 text-[28px] font-bold text-toss-gray-900 md:text-[36px]">{"개인정보처리방침"}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-toss-gray-500">
              {"dgi-chicago(이하 '사이트')는 개인정보보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률을 준수하여 이용자의 개인정보를 보호합니다."}
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-[1080px] px-5 py-12 lg:flex lg:gap-10 lg:px-6 lg:py-20">
          {/* TOC Sidebar */}
          <aside className="mb-8 lg:sticky lg:top-24 lg:mb-0 lg:w-60 lg:shrink-0 lg:self-start">
            <nav className="rounded-2xl border border-toss-gray-100 bg-toss-gray-50 p-5">
              <p className="text-[13px] font-bold text-toss-gray-900">{"목차"}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {tocItems.map((item, i) => (
                  <li key={i}>
                    <a href={`#article-${i + 1}`} className="text-[13px] text-toss-gray-500 transition-colors hover:text-toss-blue">
                      {`제${i + 1}조. ${item}`}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-10">
            {/* Article 1 */}
            <section id="article-1" className="scroll-mt-24 rounded-2xl border border-toss-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제1조 수집하는 개인정보 항목"}</h2>
              <h3 className="mt-5 text-[15px] font-bold text-toss-gray-800">{"가. 필수 수집 항목"}</h3>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead><tr className="border-b border-toss-gray-100 bg-toss-gray-50"><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"수집 목적"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"수집 항목"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"수집 방법"}</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"업체 문의"}</td><td className="px-4 py-3 text-toss-gray-700">{"이름, 연락처(전화번호), 희망 금액"}</td><td className="px-4 py-3 text-toss-gray-700">{"문의 양식"}</td></tr>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"서비스 이용 통계"}</td><td className="px-4 py-3 text-toss-gray-700">{"접속 IP, 브라우저 정보, 방문 페이지"}</td><td className="px-4 py-3 text-toss-gray-700">{"자동 수집"}</td></tr>
                    <tr><td className="px-4 py-3 text-toss-gray-700">{"광고 효과 분석"}</td><td className="px-4 py-3 text-toss-gray-700">{"쿠키, 방문 시간, 클릭 이벤트"}</td><td className="px-4 py-3 text-toss-gray-700">{"Google Analytics"}</td></tr>
                  </tbody>
                </table>
              </div>
              <h3 className="mt-6 text-[15px] font-bold text-toss-gray-800">{"나. 민감 정보 비수집 선언"}</h3>
              <div className="mt-3 rounded-xl border-l-4 border-toss-green bg-toss-green/5 p-4">
                <p className="text-[14px] leading-relaxed text-toss-gray-700">{"본 사이트는 주민등록번호, 금융계좌번호, 비밀번호, 신용카드번호 등 민감한 금융정보를 일절 수집하지 않습니다. 이러한 정보를 요구하는 경우 사기이므로 즉시 신고하시기 바랍니다."}</p>
              </div>
            </section>

            {/* Article 2 */}
            <section id="article-2" className="scroll-mt-24 rounded-2xl border border-toss-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제2조 개인정보 수집 및 이용 목적"}</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-2 text-[14px] leading-relaxed text-toss-gray-700"><span className="mt-0.5 shrink-0 text-toss-blue">{"①"}</span>{"업체 문의 연결: 이용자가 업체 디렉터리를 통해 상담을 요청할 경우 해당 업체에 연락처를 전달하기 위한 목적"}</li>
                <li className="flex items-start gap-2 text-[14px] leading-relaxed text-toss-gray-700"><span className="mt-0.5 shrink-0 text-toss-blue">{"②"}</span>{"서비스 개선: 방문 통계 분석을 통한 콘텐츠 품질 향상"}</li>
                <li className="flex items-start gap-2 text-[14px] leading-relaxed text-toss-gray-700"><span className="mt-0.5 shrink-0 text-toss-blue">{"③"}</span>{"법적 의무 이행: 관계 법령에 의한 개인정보 보관 의무 이행"}</li>
              </ul>
              <div className="mt-4 rounded-xl bg-toss-gray-50 p-4">
                <p className="text-[14px] text-toss-gray-600">{"본 사이트는 이용자의 개인정보를 마케팅, 광고 발송, 제3자 판매 목적으로 이용하지 않습니다."}</p>
              </div>
            </section>

            {/* Article 3 */}
            <section id="article-3" className="scroll-mt-24 rounded-2xl border border-toss-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제3조 개인정보 보유 및 이용 기간"}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead><tr className="border-b border-toss-gray-100 bg-toss-gray-50"><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"수집 목적"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"보유 기간"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"근거 법령"}</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"업체 문의 정보"}</td><td className="px-4 py-3 text-toss-gray-700">{"문의 완료 후 즉시 삭제"}</td><td className="px-4 py-3 text-toss-gray-700">{"이용자 동의"}</td></tr>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"서비스 이용 기록"}</td><td className="px-4 py-3 text-toss-gray-700">{"3개월"}</td><td className="px-4 py-3 text-toss-gray-700">{"정보통신망법 제22조"}</td></tr>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"접속 로그 기록"}</td><td className="px-4 py-3 text-toss-gray-700">{"3개월"}</td><td className="px-4 py-3 text-toss-gray-700">{"통신비밀보호법 제15조의2"}</td></tr>
                    <tr><td className="px-4 py-3 text-toss-gray-700">{"광고 분석 데이터"}</td><td className="px-4 py-3 text-toss-gray-700">{"26개월"}</td><td className="px-4 py-3 text-toss-gray-700">{"Google Analytics 기본 설정"}</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Article 4 */}
            <section id="article-4" className="scroll-mt-24 rounded-2xl border border-toss-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제4조 개인정보 제3자 제공"}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead><tr className="border-b border-toss-gray-100 bg-toss-gray-50"><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"제공 대상"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"제공 항목"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"제공 목적"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"보유 기간"}</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"등록 업체"}</td><td className="px-4 py-3 text-toss-gray-700">{"연락처"}</td><td className="px-4 py-3 text-toss-gray-700">{"상담 연결"}</td><td className="px-4 py-3 text-toss-gray-700">{"상담 완료 후 삭제"}</td></tr>
                    <tr><td className="px-4 py-3 text-toss-gray-700">{"Google"}</td><td className="px-4 py-3 text-toss-gray-700">{"익명화된 방문 통계"}</td><td className="px-4 py-3 text-toss-gray-700">{"서비스 개선 분석"}</td><td className="px-4 py-3 text-toss-gray-700">{"26개월"}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-[14px] leading-relaxed text-toss-gray-600">{"위의 경우를 제외하고는 이용자의 사전 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단, 법령에 의해 수사기관 등이 요구하는 경우 예외로 합니다."}</p>
            </section>

            {/* Article 5 */}
            <section id="article-5" className="scroll-mt-24 rounded-2xl border border-toss-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제5조 개인정보 처리 위탁"}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead><tr className="border-b border-toss-gray-100 bg-toss-gray-50"><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"수탁업체"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"위탁 업무"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"보유 기간"}</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"Google LLC"}</td><td className="px-4 py-3 text-toss-gray-700">{"웹 분석 (Google Analytics 4)"}</td><td className="px-4 py-3 text-toss-gray-700">{"26개월"}</td></tr>
                    <tr><td className="px-4 py-3 text-toss-gray-700">{"Vercel Inc."}</td><td className="px-4 py-3 text-toss-gray-700">{"웹 호스팅 서비스"}</td><td className="px-4 py-3 text-toss-gray-700">{"계약 기간"}</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Article 6 */}
            <section id="article-6" className="scroll-mt-24 rounded-2xl border border-toss-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제6조 이용자 권리와 행사 방법"}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-toss-gray-700">{"이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다."}</p>
              <div className="mt-4 space-y-2">
                {["개인정보 처리 현황 열람 요청", "오류가 있는 개인정보 정정 요청", "개인정보 삭제 요청 (단, 법령 의무 보관 정보 제외)", "개인정보 처리 정지 요청"].map((r) => (
                  <div key={r} className="flex items-center gap-2 text-[14px] text-toss-gray-700"><span className="text-toss-green">{"✓"}</span>{r}</div>
                ))}
              </div>
              <div className="mt-5 rounded-xl bg-toss-gray-50 p-4">
                <p className="text-[14px] font-medium text-toss-gray-800">{"행사 방법"}</p>
                <ul className="mt-2 space-y-1 text-[14px] text-toss-gray-600">
                  <li>{"- 문의하기 페이지를 통해 서면으로 요청"}</li>
                  <li>{"- 요청 접수 후 10일 이내 처리"}</li>
                  <li>{"- 법정 대리인이 요청하는 경우 별도 위임장 필요"}</li>
                </ul>
              </div>
            </section>

            {/* Article 7 */}
            <section id="article-7" className="scroll-mt-24 rounded-2xl border border-toss-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제7조 개인정보 자동 수집 장치 (쿠키)"}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-toss-gray-700">{"본 사이트는 Google Analytics 및 광고 분석을 위해 쿠키(Cookie)를 사용합니다."}</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead><tr className="border-b border-toss-gray-100 bg-toss-gray-50"><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"쿠키 종류"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"목적"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"보유 기간"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"거부 방법"}</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"_ga"}</td><td className="px-4 py-3 text-toss-gray-700">{"방문자 구분"}</td><td className="px-4 py-3 text-toss-gray-700">{"2년"}</td><td className="px-4 py-3 text-toss-gray-700">{"브라우저 설정에서 거부"}</td></tr>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"_gid"}</td><td className="px-4 py-3 text-toss-gray-700">{"세션 구분"}</td><td className="px-4 py-3 text-toss-gray-700">{"24시간"}</td><td className="px-4 py-3 text-toss-gray-700">{"브라우저 설정에서 거부"}</td></tr>
                    <tr><td className="px-4 py-3 text-toss-gray-700">{"_gat"}</td><td className="px-4 py-3 text-toss-gray-700">{"요청 제한"}</td><td className="px-4 py-3 text-toss-gray-700">{"1분"}</td><td className="px-4 py-3 text-toss-gray-700">{"브라우저 설정에서 거부"}</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 rounded-xl bg-toss-gray-50 p-4">
                <p className="text-[14px] font-medium text-toss-gray-800">{"쿠키 거부 방법"}</p>
                <ul className="mt-2 space-y-1 text-[14px] text-toss-gray-600">
                  <li>{"Chrome: 설정 → 개인정보 보호 → 쿠키 → 타사 쿠키 차단"}</li>
                  <li>{"Safari: 환경설정 → 개인정보 → 사이트 간 추적 방지 활성화"}</li>
                  <li>{"Firefox: 설정 → 개인정보 → 쿠키 차단"}</li>
                </ul>
              </div>
            </section>

            {/* Article 8 */}
            <section id="article-8" className="scroll-mt-24 rounded-2xl border border-toss-blue/20 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제8조 개인정보 보호책임자"}</h2>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead><tr className="border-b border-toss-gray-100 bg-toss-gray-50"><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"항목"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"내용"}</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"이름"}</td><td className="px-4 py-3 text-toss-gray-700">{"소액결제현금화 가이드 운영팀"}</td></tr>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"직책"}</td><td className="px-4 py-3 text-toss-gray-700">{"개인정보 보호책임자"}</td></tr>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"연락처"}</td><td className="px-4 py-3 text-toss-gray-700">{"문의하기 페이지 통해 접수"}</td></tr>
                    <tr><td className="px-4 py-3 text-toss-gray-700">{"처리 기간"}</td><td className="px-4 py-3 text-toss-gray-700">{"접수 후 10일 이내"}</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-5 rounded-xl bg-toss-gray-50 p-4">
                <p className="text-[14px] font-medium text-toss-gray-800">{"불만 처리 외부 기관"}</p>
                <ul className="mt-2 space-y-1 text-[14px] text-toss-gray-600">
                  <li>{"개인정보 침해 신고센터: 118 (privacy.kisa.or.kr)"}</li>
                  <li>{"개인정보 분쟁조정위원회: 1833-6972 (www.kopico.go.kr)"}</li>
                  <li>{"대검찰청 사이버수사과: 1301 (www.spo.go.kr)"}</li>
                  <li>{"경찰청 사이버수사국: 182 (cyberbureau.police.go.kr)"}</li>
                </ul>
              </div>
            </section>

            {/* Article 9 */}
            <section id="article-9" className="scroll-mt-24 rounded-2xl border border-toss-gray-100 bg-white p-6 md:p-8">
              <h2 className="text-[18px] font-bold text-toss-gray-900">{"제9조 개인정보처리방침 변경 안내"}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-toss-gray-700">{"본 개인정보처리방침은 2023년 1월 1일부터 시행되었으며, 법령 또는 서비스 변경에 따라 개정될 수 있습니다. 변경 시 사이트 공지사항 및 본 페이지를 통해 7일 전 사전 고지합니다."}</p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-[14px]">
                  <thead><tr className="border-b border-toss-gray-100 bg-toss-gray-50"><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"버전"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"시행일"}</th><th className="px-4 py-3 text-left font-medium text-toss-gray-600">{"주요 변경 내용"}</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"v1.0"}</td><td className="px-4 py-3 text-toss-gray-700">{"2023.01.01"}</td><td className="px-4 py-3 text-toss-gray-700">{"최초 시행"}</td></tr>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"v1.1"}</td><td className="px-4 py-3 text-toss-gray-700">{"2024.01.01"}</td><td className="px-4 py-3 text-toss-gray-700">{"Google Analytics 4 반영"}</td></tr>
                    <tr className="border-b border-toss-gray-50"><td className="px-4 py-3 text-toss-gray-700">{"v1.2"}</td><td className="px-4 py-3 text-toss-gray-700">{"2025.01.01"}</td><td className="px-4 py-3 text-toss-gray-700">{"Vercel 호스팅 위탁 추가"}</td></tr>
                    <tr><td className="px-4 py-3 font-medium text-toss-blue">{"v1.3"}</td><td className="px-4 py-3 text-toss-gray-700">{"2026.02.23"}</td><td className="px-4 py-3 font-medium text-toss-blue">{"현행 버전 (최신)"}</td></tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Related Pages */}
            <div className="flex flex-wrap gap-3 pt-4">
              <Link href="/" className="rounded-xl border border-toss-gray-100 bg-white px-5 py-3 text-[14px] font-medium text-toss-gray-600 transition-colors hover:border-toss-blue/30 hover:text-toss-blue">{"메인 가이드"}</Link>
              <Link href="/about" className="rounded-xl border border-toss-gray-100 bg-white px-5 py-3 text-[14px] font-medium text-toss-gray-600 transition-colors hover:border-toss-blue/30 hover:text-toss-blue">{"사이트 소개"}</Link>
              <Link href="/terms" className="rounded-xl border border-toss-gray-100 bg-white px-5 py-3 text-[14px] font-medium text-toss-gray-600 transition-colors hover:border-toss-blue/30 hover:text-toss-blue">{"이용약관"}</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
