import { Smartphone, MessageSquare, Banknote } from "lucide-react"

const steps = [
  {
    icon: Smartphone,
    num: "01",
    title: "한도 확인",
    description:
      "통신사 앱 또는 114 전화로 소액결제 한도를 확인합니다. SKT *130#, KT *225#, LGU+ #7070 으로도 확인 가능합니다.",
  },
  {
    icon: MessageSquare,
    num: "02",
    title: "카카오톡 상담",
    description:
      "카카오톡 오픈채팅으로 연락하시면 이용 방법, 수수료, 한도를 안내해드립니다. 24시간 빠른 답변.",
  },
  {
    icon: Banknote,
    num: "03",
    title: "당일 입금",
    description:
      "상담 완료 후 5~10분 내 본인 계좌로 입금됩니다. 모든 은행, 주말, 공휴일 모두 처리됩니다.",
  },
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
        <p className="text-[13px] font-bold tracking-widest text-toss-blue">이용 방법</p>
        <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">
          간단 3단계
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.num}
              className="group rounded-2xl border border-toss-gray-100 bg-white p-7 shadow-sm transition-all hover:border-toss-blue/20 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-toss-blue/8">
                  <item.icon className="h-5 w-5 text-toss-blue" />
                </div>
                <span className="text-[12px] font-black tracking-wide text-toss-blue">
                  STEP {item.num}
                </span>
              </div>

              <h3 className="mt-5 text-[17px] font-bold text-toss-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-[14px] leading-[1.75] text-toss-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
