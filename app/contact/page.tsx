import type { Metadata } from "next"
import { MessageCircle, Clock, Shield } from "lucide-react"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "문의하기 | 24시간 카카오톡 상담",
  description: "소액결제현금화 전문 상담. 카카오톡으로 24시간 빠르게 문의하세요. 수수료 안내, 한도 확인, 이용 방법까지 친절히 상담해드립니다.",
  alternates: { canonical: `${SITE_URL}/contact` },
}

const features = [
  { icon: Clock, title: "24시간 운영", description: "주말, 공휴일 관계없이 연중무휴 상담" },
  { icon: MessageCircle, title: "1분 내 응답", description: "평균 응답 시간 1분 이내 보장" },
  { icon: Shield, title: "안전한 상담", description: "개인정보 보호, 상담 내용 비밀 보장" },
]

export default function Page() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
            <span className="text-toss-blue">문의하기</span>
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground md:text-lg">
            {"소액결제현금화, 정보이용료현금화, 신용카드현금화에 대해 궁금한 점이 있으시면 카카오톡으로 편하게 문의해주세요."}
          </p>
        </div>

        {/* Features */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-border bg-toss-gray-50 p-6 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-toss-blue/8">
                <feature.icon className="h-6 w-6 text-toss-blue" />
              </div>
              <h3 className="text-base font-bold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-toss-blue px-8 py-12 text-center md:py-16">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            카카오톡으로 바로 상담하기
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-white/70">
            {"아래 버튼을 클릭하면 카카오톡 오픈채팅으로 바로 연결됩니다. 수수료, 한도, 이용방법 등 무엇이든 물어보세요."}
          </p>
          <a
            href="https://open.kakao.com/o/seuka3hi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#FEE500] px-10 py-4 text-base font-bold text-[#3C1E1E] shadow-lg transition-all hover:brightness-95 md:text-lg"
            aria-label="카카오톡 상담 시작"
          >
            <MessageCircle className="h-5 w-5" />
            {"카카오톡 상담 시작하기 →"}
          </a>
        </div>

        {/* Info */}
        <div className="mt-10 rounded-xl border border-border bg-toss-gray-50 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            {"상담 시간: 24시간 365일 | 상담 방법: 카카오톡 오픈채팅 | 평균 응답: 1분 이내"}
          </p>
        </div>
      </div>
    </div>
  )
}
