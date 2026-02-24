import Link from "next/link"

const serviceLinks = [
  { label: "소액결제현금화", href: "/" },
  { label: "정보이용료현금화", href: "/info-fee" },
  { label: "신용카드현금화", href: "/credit-card" },
  { label: "카드깡", href: "/card-cash" },
  { label: "정책미납", href: "/policy-default" },
  { label: "스마트 도구", href: "/tools" },
  { label: "문의하기", href: "/contact" },
]

const blogLinks = [
  { label: "소액결제 한도 확인 방법", href: "/blog/micropayment-limit-check" },
  { label: "휴대폰결제 현금화 방법 총정리", href: "/blog/phone-payment-cash-guide" },
  { label: "다날 오류 해결 방법", href: "/blog/danal-error-fix" },
  { label: "정보이용료 현금화 방법", href: "/blog/info-fee-cash-method" },
  { label: "신용카드 현금화 합법", href: "/blog/credit-card-cash-legal" },
  { label: "소액결제 정책미납 해결", href: "/blog/policy-default-resolution" },
]

export default function Footer() {
  return (
    <footer className="border-t border-toss-gray-100 bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-12 lg:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="text-[18px] font-bold text-toss-gray-900" aria-label="시카고페이 홈">
              시카고<span className="text-toss-blue">페이</span>
            </Link>
            <p className="mt-4 text-[13px] leading-[1.8] text-toss-gray-500">
              {"소액결제현금화, 정보이용료현금화, 신용카드현금화 전문 서비스. 당일 입금, 5분 승인."}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-toss-gray-100 bg-toss-gray-50 px-3 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-toss-green" />
              <span className="text-[12px] font-medium text-toss-gray-500">24시간 운영중</span>
            </div>
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-toss-gray-900">서비스</h3>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="서비스 내비게이션">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-toss-gray-500 transition-colors hover:text-toss-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[13px] font-bold text-toss-gray-900">블로그</h3>
            <nav className="mt-4 flex flex-col gap-2.5" aria-label="블로그 내비게이션">
              {blogLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-toss-gray-500 transition-colors hover:text-toss-blue"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 rounded-xl bg-toss-gray-50 p-4">
          <p className="text-center text-[12px] leading-relaxed text-toss-gray-400">
            {"본 사이트는 정보 제공 목적으로 운영되며, 모든 서비스 이용에 관한 책임은 이용자 본인에게 있습니다."}
          </p>
        </div>

        <p className="mt-6 text-center text-[12px] text-toss-gray-400">
          {"© 2026 dgi-chicago. All rights reserved."}
        </p>

        {/* E-E-A-T Trust Statement */}
        <p className="mt-4 text-center text-[11px] leading-[1.7] text-toss-gray-400">
          {"dgi-chicago는 글로벌 금융 보안 가이드라인을 준수하며, 안전한 결제 환경을 제공합니다."}
        </p>

        {/* Business Trust Info */}
        <p className="mt-2 text-center text-[10px] leading-[1.7] text-toss-gray-400">
          {"상호명: dgi-chicago Korea | 사업자등록번호: 664-87-98454 | 통신판매업 신고 완료 | Global Strategy Partner: DGI Chicago"}
        </p>
      </div>
    </footer>
  )
}
