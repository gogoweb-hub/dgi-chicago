import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"
import ToolsSection from "@/components/ToolsSection"
import Link from "next/link"

export const metadata: Metadata = {
  title: "소액결제 수수료 계산기 | 한도 체크 | 방법 추천 도구",
  description:
    "소액결제현금화 수수료를 즉시 계산하고, 통신사별 한도를 확인하고, 나에게 맞는 현금화 방법을 추천받으세요. 무료 온라인 계산기.",
  keywords: ["소액결제 수수료 계산기", "소액결제 한도 확인", "소액결제현금화 방법 추천"],
  openGraph: {
    title: "소액결제 수수료 계산기 & 한도 체크",
    description: "무료 소액결제현금화 계산 도구. 수수료, 한도, 방법 추천 한번에.",
    url: `${SITE_URL}/tools`,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "소액결제현금화 수수료 계산기",
  url: `${SITE_URL}/tools`,
  description: "소액결제현금화 수수료를 즉시 계산하는 무료 온라인 도구",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web Browser",
  offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  featureList: ["수수료 실시간 계산", "통신사별 한도 체크", "최적 현금화 방법 추천"],
}

export default function ToolsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="border-b border-toss-gray-100 bg-toss-gray-50 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <div className="mx-auto max-w-[680px] px-5 text-center lg:px-6">
          <h1 className="text-[26px] font-bold tracking-tight text-toss-gray-900 md:text-[32px]">
            소액결제현금화 <span className="text-toss-blue">스마트 도구</span>
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-toss-gray-500">
            수수료를 미리 계산하고, 내 한도를 확인하고, 나에게 딱 맞는 방법까지 찾아보세요.
          </p>
        </div>
      </section>

      {/* Tools */}
      <ToolsSection />

      {/* Related Links */}
      <section className="border-t border-toss-gray-100 bg-toss-gray-50 py-12">
        <div className="mx-auto max-w-[680px] px-5 lg:px-6">
          <h2 className="mb-4 text-center text-[15px] font-bold text-toss-gray-700">관련 페이지</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "메인페이지", href: "/" },
              { label: "문의하기", href: "/contact" },
              { label: "정보이용료현금화", href: "/info-fee" },
              { label: "신용카드현금화", href: "/credit-card" },
              { label: "블로그", href: "/blog" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-toss-gray-200 bg-white px-4 py-2 text-[13px] text-toss-gray-600 transition-colors hover:border-toss-blue/40 hover:text-toss-blue"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
