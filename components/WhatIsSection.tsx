import Link from "next/link"
import { Smartphone, Globe, CreditCard, Layers, ArrowRight } from "lucide-react"

const serviceCards = [
  {
    icon: Smartphone,
    title: "소액결제현금화",
    fee: "20%~",
    description: "SKT, KT, LG U+ 소액결제 한도를 활용한 당일 현금화. 월 최대 100만원.",
    href: "/",
    color: "bg-toss-blue/8 text-toss-blue",
  },
  {
    icon: Globe,
    title: "정보이용료현금화",
    fee: "20%~",
    description: "구글 플레이, 앱스토어 콘텐츠이용료 현금화. 소액결제와 별도 한도.",
    href: "/info-fee",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: CreditCard,
    title: "신용카드현금화",
    fee: "8~15%",
    description: "신용카드 결제 한도를 활용한 현금 확보. 모든 카드사 지원.",
    href: "/credit-card",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Layers,
    title: "카드깡",
    fee: "8~15%",
    description: "신용카드 한도를 현금으로 전환하는 합법적 방법. 안전 거래 보장.",
    href: "/card-cash",
    color: "bg-amber-50 text-amber-600",
  },
]

export default function WhatIsSection() {
  return (
    <section id="services" className="border-t border-toss-gray-100 bg-toss-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
        <p className="text-[13px] font-bold tracking-widest text-toss-blue">서비스 소개</p>
        <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">
          소액결제현금화란?
        </h2>

        <div className="mt-6 max-w-3xl space-y-3">
          <p className="text-[15px] leading-[1.85] text-toss-gray-600">
            {"소액결제현금화는 휴대폰 소액결제 한도를 활용하여 디지털 상품(문화상품권, 해피머니 등)을 구매한 후 현금으로 전환하는 합법적인 금융 서비스입니다. 통신사에서 제공하는 월 최대 100만원의 한도를 이용하며, 당월 결제금액은 다음 달 통신요금과 함께 청구됩니다."}
          </p>
          <p className="text-[15px] leading-[1.85] text-toss-gray-600">
            {"본인 명의 휴대폰으로 상품권을 구매한 뒤, 전문 매입 서비스를 통해 구매가의 80%까지 즉시 현금으로 받을 수 있습니다. 전체 과정은 보통 5~10분이며 추가 비용은 없습니다."}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group flex flex-col rounded-2xl border border-toss-gray-100 bg-white p-6 shadow-sm transition-all hover:border-toss-blue/20 hover:shadow-md"
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${card.color}`}>
                <card.icon className="h-5 w-5" />
              </div>
              <h3 className="text-[15px] font-bold text-toss-gray-900">{card.title}</h3>
              <p className="mt-1 text-[13px] font-bold text-toss-blue">{card.fee}</p>
              <p className="mt-3 flex-1 text-[13px] leading-[1.7] text-toss-gray-500">{card.description}</p>
              <div className="mt-4 flex items-center gap-1 text-[13px] font-semibold text-toss-blue opacity-0 transition-opacity group-hover:opacity-100">
                자세히 보기 <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
