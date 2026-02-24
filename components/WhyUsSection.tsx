import { Shield, Zap, Gem, Smartphone } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "안전한 거래",
    description: "본인 인증 기반 거래만 진행. 개인정보 보호법 철저 준수.",
  },
  {
    icon: Zap,
    title: "5분 빠른 처리",
    description: "업계 최단 처리 시간. 신청 후 5~10분 내 입금 완료.",
  },
  {
    icon: Gem,
    title: "투명한 수수료",
    description: "상담 전 수수료를 먼저 안내. 숨겨진 비용 없이 100% 투명.",
  },
  {
    icon: Smartphone,
    title: "24시간 상담",
    description: "카카오톡 24시간 운영. 주말, 공휴일 관계없이 상담 가능.",
  },
]

export default function WhyUsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
        <p className="text-[13px] font-bold tracking-widest text-toss-blue">왜 저희인가</p>
        <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">
          선택해야 하는 이유
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group flex gap-5 rounded-2xl border border-toss-gray-100 bg-white p-6 shadow-sm transition-all hover:border-toss-blue/20 hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-toss-blue/8">
                <feature.icon className="h-5 w-5 text-toss-blue" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-toss-gray-900">{feature.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-toss-gray-500">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
