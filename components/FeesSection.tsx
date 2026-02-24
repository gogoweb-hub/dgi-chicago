import { AlertTriangle } from "lucide-react"

const fees = [
  { service: "소액결제현금화", fee: "20%~", payout: "~80만원", time: "5~10분", popular: true },
  { service: "정보이용료현금화", fee: "20%~", payout: "~80만원", time: "10~20분", popular: false },
  { service: "신용카드현금화", fee: "8~15%", payout: "85~92만원", time: "10~30분", popular: false },
  { service: "카드깡", fee: "8~15%", payout: "85~92만원", time: "당일", popular: false },
]

export default function FeesSection() {
  return (
    <section id="fees" className="border-t border-toss-gray-100 bg-toss-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
        <p className="text-[13px] font-bold tracking-widest text-toss-blue">수수료 안내</p>
        <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">
          수수료 한눈에 비교
        </h2>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-toss-gray-500">
          {"수수료는 결제 수단, 금액에 따라 달라집니다. 정확한 수수료는 상담을 통해 확인하세요."}
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {fees.map((item) => (
            <div
              key={item.service}
              className={`relative rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                item.popular
                  ? "border-toss-blue/30 ring-1 ring-toss-blue/10"
                  : "border-toss-gray-100 hover:border-toss-blue/20"
              }`}
            >
              {item.popular && (
                <span className="absolute -top-2.5 left-4 rounded-full bg-toss-blue px-3 py-0.5 text-[11px] font-bold text-white">
                  인기
                </span>
              )}
              <h3 className="text-[15px] font-bold text-toss-gray-900">{item.service}</h3>
              <div className="mt-4 text-[32px] font-black tracking-tight text-toss-blue">{item.fee}</div>
              <div className="mt-4 space-y-2 border-t border-toss-gray-100 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-toss-gray-400">100만원 기준</span>
                  <span className="text-[14px] font-bold text-toss-gray-800">{item.payout}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] text-toss-gray-400">처리 시간</span>
                  <span className="text-[14px] font-bold text-toss-blue">{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl bg-toss-red/5 p-5">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-toss-red" />
          <p className="text-[13px] leading-relaxed text-toss-gray-600">
            {"'수수료 0%', '무수수료 현금화'를 광고하는 업체는 사기일 가능성이 높습니다. 수수료를 투명하게 공개하는 업체를 선택하세요."}
          </p>
        </div>
      </div>
    </section>
  )
}
