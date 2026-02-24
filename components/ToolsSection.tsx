"use client"

import { useState } from "react"
import { Calculator, Smartphone, Target } from "lucide-react"
import FeeCalculator from "./tools/FeeCalculator"
import LimitChecker from "./tools/LimitChecker"
import MethodRecommender from "./tools/MethodRecommender"

const TABS = [
  { key: "calc", label: "수수료 계산기", icon: Calculator },
  { key: "limit", label: "한도 체크", icon: Smartphone },
  { key: "method", label: "방법 추천", icon: Target },
] as const

type TabKey = (typeof TABS)[number]["key"]

export default function ToolsSection() {
  const [active, setActive] = useState<TabKey>("calc")

  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto max-w-[680px] px-5 lg:px-6">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-[22px] font-bold text-toss-gray-900 md:text-[26px]">
            소액결제현금화 스마트 도구
          </h2>
          <p className="mt-2 text-[14px] text-toss-gray-500">
            직접 계산하고, 한도 확인하고, 최적 방법까지 찾아보세요
          </p>
        </div>

        {/* Tab Bar */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex gap-2 overflow-x-auto rounded-2xl bg-toss-gray-50 p-1.5">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = active === tab.key
              return (
                <button
                  key={tab.key}
                  onClick={() => setActive(tab.key)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl px-5 py-2.5 text-[13px] font-medium transition-all ${
                    isActive
                      ? "bg-toss-blue text-white shadow-sm"
                      : "text-toss-gray-500 hover:text-toss-gray-700"
                  }`}
                  aria-label={`${tab.label} 탭`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Content */}
        <div className="rounded-3xl border border-toss-gray-200 bg-white p-5 shadow-sm sm:p-8">
          {/* Title */}
          <div className="mb-6">
            {active === "calc" && (
              <>
                <h3 className="text-[18px] font-bold text-toss-gray-900">소액결제 수수료 계산기</h3>
                <p className="mt-1 text-[13px] text-toss-gray-500">
                  금액과 수수료율을 입력하면 실제 수령액을 즉시 계산해드립니다
                </p>
              </>
            )}
            {active === "limit" && (
              <>
                <h3 className="text-[18px] font-bold text-toss-gray-900">소액결제 한도 체크 위젯</h3>
                <p className="mt-1 text-[13px] text-toss-gray-500">
                  통신사와 개통 기간을 선택하면 예상 가능 한도를 알려드립니다
                </p>
              </>
            )}
            {active === "method" && (
              <>
                <h3 className="text-[18px] font-bold text-toss-gray-900">나에게 맞는 현금화 방법 찾기</h3>
                <p className="mt-1 text-[13px] text-toss-gray-500">
                  몇 가지 질문에 답하면 최적의 현금화 방법을 추천해드립니다
                </p>
              </>
            )}
          </div>

          {active === "calc" && <FeeCalculator />}
          {active === "limit" && <LimitChecker />}
          {active === "method" && <MethodRecommender />}
        </div>
      </div>
    </section>
  )
}
