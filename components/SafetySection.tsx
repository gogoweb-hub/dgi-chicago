import { CheckCircle2, XCircle } from "lucide-react"

const safeMethods = [
  "반드시 본인 명의 기기 사용",
  "수수료를 사전에 명확히 고지하는 업체 선택",
  "카카오톡 오픈채팅 등 검증된 채널로만 연락",
  "처리 전 이용약관 및 환불 정책 확인",
  "거래 내역 캡처 보관",
]

const avoidMethods = [
  "'수수료 0%' 또는 '무제한 한도' 광고 업체",
  "개인 계좌로 선입금 요구하는 업체",
  "신분증 사진 요구 업체",
  "타인 명의 기기 이용 제안",
  "비공식 앱 설치를 요구하는 업체",
]

export default function SafetySection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
        <p className="text-[13px] font-bold tracking-widest text-toss-blue">안전 가이드</p>
        <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">
          안전하게 이용하는 방법
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-toss-green/20 bg-emerald-50/30 p-6 lg:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-toss-green/10">
                <CheckCircle2 className="h-4 w-4 text-toss-green" />
              </div>
              <h3 className="text-[15px] font-bold text-toss-gray-900">이렇게 하세요</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {safeMethods.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-toss-green" />
                  <span className="text-[14px] leading-relaxed text-toss-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-toss-red/20 bg-red-50/30 p-6 lg:p-7">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-toss-red/10">
                <XCircle className="h-4 w-4 text-toss-red" />
              </div>
              <h3 className="text-[15px] font-bold text-toss-gray-900">이것은 피하세요</h3>
            </div>
            <ul className="flex flex-col gap-3">
              {avoidMethods.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-toss-red" />
                  <span className="text-[14px] leading-relaxed text-toss-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
