import Link from "next/link"
import { ArrowRight, Globe, CreditCard, Layers, AlertTriangle } from "lucide-react"

const serviceLinks = [
  { href: "/info-fee", icon: Globe, title: "정보이용료현금화" },
  { href: "/credit-card", icon: CreditCard, title: "신용카드현금화" },
  { href: "/card-cash", icon: Layers, title: "카드깡" },
  { href: "/policy-default", icon: AlertTriangle, title: "소액결제 정책미납" },
]

const blogLinks = [
  { href: "/blog/micropayment-limit-check", title: "소액결제 한도 확인 방법 -- 통신사별 완벽 가이드" },
  { href: "/blog/phone-payment-cash-guide", title: "휴대폰결제 현금화 방법 루트 총정리" },
  { href: "/blog/danal-error-fix", title: "다날 소액결제 오류 원인과 해결방법" },
  { href: "/blog/info-fee-cash-method", title: "정보이용료 현금화 방법 완벽 가이드" },
  { href: "/blog/credit-card-cash-legal", title: "신용카드 현금화 합법 여부 총정리" },
  { href: "/blog/policy-default-resolution", title: "소액결제 정책미납 해결방법 가이드" },
]

export default function InternalLinksSection() {
  return (
    <section className="border-t border-toss-gray-100 bg-toss-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
        <p className="text-[13px] font-bold tracking-widest text-toss-blue">관련 서비스</p>
        <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">
          더 알아보기
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {serviceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-3 rounded-2xl border border-toss-gray-100 bg-white p-4 shadow-sm transition-all hover:border-toss-blue/20 hover:shadow-md"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-toss-blue/8">
                <link.icon className="h-4 w-4 text-toss-blue" />
              </div>
              <span className="flex-1 text-[14px] font-bold text-toss-gray-800">{link.title}</span>
              <ArrowRight className="h-4 w-4 text-toss-gray-300 transition-colors group-hover:text-toss-blue" />
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <p className="text-[13px] font-bold tracking-widest text-toss-blue">블로그</p>
          <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">
            유용한 정보
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {blogLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-3 rounded-2xl border border-toss-gray-100 bg-white p-5 shadow-sm transition-all hover:border-toss-blue/20 hover:shadow-md"
              >
                <span className="flex-1 text-[14px] leading-snug text-toss-gray-600 transition-colors group-hover:text-toss-gray-900">{link.title}</span>
                <ArrowRight className="h-4 w-4 shrink-0 text-toss-gray-300 transition-colors group-hover:text-toss-blue" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
