import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"

export default function SubpageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-24 pb-12">
      <div className="mx-auto max-w-[760px] px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-[14px] text-toss-gray-500 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          메인으로 돌아가기
        </Link>

        <article className="prose-toss">{children}</article>

        {/* CTA */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-primary px-6 py-10 text-center md:px-10">
          <h2 className="text-[20px] font-bold text-primary-foreground md:text-[24px]">
            지금 바로 상담받기
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-[14px] text-primary-foreground/70">
            {"24시간 카카오톡 상담 · 5분 처리 · 당일 입금"}
          </p>
          <a
            href="https://open.kakao.com/o/seuka3hi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-3.5 text-[14px] font-semibold text-primary transition-colors hover:bg-primary-foreground/90"
            aria-label="카카오톡 상담 시작하기"
          >
            <MessageCircle className="h-4 w-4" />
            카카오톡 상담 시작하기
          </a>
        </div>
      </div>
    </div>
  )
}
