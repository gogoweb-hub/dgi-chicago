"use client"

import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 1400
          const steps = 40
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const stats = [
  { label: "누적 거래", value: 50000, suffix: "건+" },
  { label: "평균 수수료", value: 8, suffix: "%" },
  { label: "처리 시간", value: 5, suffix: "분" },
  { label: "고객 만족도", value: 98, suffix: "%" },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-14">
      {/* subtle bg glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-toss-blue/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-[1080px] px-5 py-20 lg:px-6 lg:py-32">
        <div className="mx-auto max-w-xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-toss-blue/20 bg-toss-blue-light px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-toss-green" />
            <span className="text-[13px] font-semibold text-toss-blue">24시간 실시간 상담</span>
          </div>

          <h1
            className="animate-fade-up mt-7 text-balance text-[32px] font-black leading-[1.25] tracking-[-0.02em] text-toss-gray-900 md:text-[44px]"
            style={{ animationDelay: "0.08s" }}
          >
            {"소액결제를"}
            <br />
            <span className="text-toss-blue">가장 빠르게</span>
            {" 현금으로"}
          </h1>

          <p
            className="animate-fade-up mx-auto mt-5 max-w-sm text-[15px] leading-[1.7] text-toss-gray-500 md:text-[16px]"
            style={{ animationDelay: "0.16s" }}
          >
            {"전 통신사 지원 · 업계 최저 수수료 · 5분 입금"}
          </p>

          <div
            className="animate-fade-up mx-auto mt-6 max-w-md rounded-xl border border-toss-gray-100 bg-toss-gray-50/60 px-5 py-3 text-center"
            style={{ animationDelay: "0.20s" }}
          >
            <p className="text-[13px] font-medium leading-[1.6] tracking-tight text-toss-gray-600">
              {"Global Financial Insights from Chicago,"}
              <br />
              {"Now Optimized for Korean Payment Solutions."}
            </p>
            <p className="mt-1 text-[12px] leading-[1.6] text-toss-gray-400">
              {"시카고의 글로벌 금융 통찰력을 한국형 결제 솔루션에 담았습니다."}
            </p>
          </div>

          <div
            className="animate-fade-up mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.28s" }}
          >
            <a
              href="https://open.kakao.com/o/seuka3hi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-toss-blue px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-toss-blue/25 transition-all hover:bg-toss-blue-dark hover:shadow-xl hover:shadow-toss-blue/30 sm:w-auto"
              aria-label="카카오톡 상담하기"
            >
              카카오톡 상담하기
            </a>
            <a
              href="#how-it-works"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-toss-gray-200 bg-white px-8 py-4 text-[15px] font-bold text-toss-gray-700 transition-all hover:border-toss-gray-300 hover:bg-toss-gray-50 sm:w-auto"
              aria-label="이용방법 보기"
            >
              이용방법 보기
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mx-auto mt-16 grid max-w-lg grid-cols-2 gap-3 md:max-w-2xl md:grid-cols-4"
          style={{ animationDelay: "0.32s" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-2xl border border-toss-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="text-[24px] font-black tracking-tight text-toss-blue md:text-[26px]">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[13px] font-medium text-toss-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
