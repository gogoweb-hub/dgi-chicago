"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, Zap, Clock, CreditCard, Shield } from "lucide-react"
import Link from "next/link"

interface Answers {
  amount?: string
  urgency?: string
  card?: string
  months?: string
  unpaid?: string
}

interface Recommendation {
  primary: string
  secondary?: string
  reason: string
  fee: string
  time?: string
  warning?: string
  maxAmount?: number
}

const QUESTIONS = [
  {
    id: "amount",
    title: "지금 얼마가 필요하세요?",
    options: [
      { key: "30-", label: "30만원 이하" },
      { key: "30-100", label: "30~100만원" },
      { key: "100-200", label: "100~200만원" },
      { key: "200+", label: "200만원 이상" },
    ],
  },
  {
    id: "urgency",
    title: "얼마나 빨리 필요하세요?",
    options: [
      { key: "now", label: "지금 당장 (5~10분)" },
      { key: "today", label: "오늘 중으로" },
      { key: "tomorrow", label: "내일까지" },
      { key: "later", label: "며칠 여유 있음" },
    ],
  },
  {
    id: "card",
    title: "현재 신용카드가 있으신가요?",
    options: [
      { key: "yes", label: "신용카드 있고 한도 남아있음" },
      { key: "limit", label: "신용카드 있지만 한도 소진" },
      { key: "no", label: "신용카드 없음" },
      { key: "unknown", label: "잘 모르겠음" },
    ],
  },
  {
    id: "months",
    title: "현재 스마트폰 개통 기간은?",
    options: [
      { key: "0~3", label: "3개월 미만" },
      { key: "3~12", label: "3~12개월" },
      { key: "1~3y", label: "1~3년" },
      { key: "3y+", label: "3년 이상" },
    ],
  },
  {
    id: "unpaid",
    title: "현재 통신요금 미납이 있나요?",
    options: [
      { key: "none", label: "미납 없음 (정상 납부 중)" },
      { key: "some", label: "약간의 미납 있음" },
      { key: "much", label: "미납 많음 (2개월 이상)" },
    ],
  },
]

function getRecommendation(answers: Answers): Recommendation {
  const { amount, urgency, card, months, unpaid } = answers

  if (amount === "200+") {
    return {
      primary: "소액결제 + 정보이용료 동시 이용",
      secondary: "신용카드현금화 추가",
      reason:
        "200만원 이상은 소액결제(최대 100만) + 정보이용료(최대 100만) 합산 또는 카드 병행이 필요합니다. 최대 300만원까지 가능합니다.",
      maxAmount: 3000000,
      fee: "8~15%",
      time: "20~30분",
    }
  }

  if (urgency === "now" && months !== "0~3" && unpaid === "none") {
    return {
      primary: "소액결제현금화",
      secondary: "정보이용료 병행 가능",
      reason: "가장 빠른 방법입니다. 신청 후 5~10분 내 입금됩니다.",
      fee: "20%~",
      time: "5~10분",
    }
  }

  if (card === "yes") {
    return {
      primary: "신용카드현금화",
      secondary: "소액결제 병행 가능",
      reason: "수수료가 더 낮습니다(8~15%). 카드 한도의 50~70%를 활용할 수 있습니다.",
      fee: "8~15%",
      time: "5~15분",
    }
  }

  if (months === "0~3") {
    return {
      primary: "신용카드현금화",
      secondary: "개통 3개월 후 소액결제 가능",
      reason:
        "개통 3개월 미만은 소액결제가 차단됩니다. 신용카드 방식을 추천드립니다.",
      fee: "8~15%",
      time: "5~15분",
      warning: "개통 3개월 미만으로 소액결제 이용 불가",
    }
  }

  if (unpaid !== "none") {
    return {
      primary: "미납 해결 후 소액결제현금화",
      secondary: "신용카드현금화 (미납과 무관)",
      reason:
        "미납 요금을 먼저 납부해야 소액결제가 가능합니다. 신용카드는 미납과 무관하게 이용 가능합니다.",
      fee: "20%~",
      time: "30분~2시간 (미납 해결 후)",
      warning: "미납 납부 후 30분~2시간 내 소액결제 자동 복구",
    }
  }

  return {
    primary: "소액결제현금화",
    secondary: "정보이용료 병행 가능",
    fee: "20%~",
    time: "5~10분",
    reason: "현재 조건에서 가장 적합한 방법입니다. 빠르고 간편하게 이용할 수 있습니다.",
  }
}

const METHOD_DETAILS: Record<string, { pros: string[] }> = {
  "소액결제현금화": { pros: ["5~10분 즉시 입금", "신용무관", "24시간 가능"] },
  "소액결제 + 정보이용료 동시 이용": { pros: ["최대 200만원 합산", "당일 입금", "전 통신사"] },
  "신용카드현금화": { pros: ["수수료 8~15%", "카드 한도 활용", "신용무관"] },
  "미납 해결 후 소액결제현금화": { pros: ["미납 해결 시 즉시 가능", "5~10분 입금", "24시간"] },
  "정보이용료 병행 가능": { pros: ["추가 100만원 한도", "별도 한도 운영", "합산 활용"] },
  "신용카드현금화 추가": { pros: ["낮은 수수료", "카드 한도 별도", "즉시 가능"] },
  "소액결제 병행 가능": { pros: ["추가 한도 활용", "5~10분 입금", "통신사 한도 별도"] },
  "개통 3개월 후 소액결제 가능": { pros: ["대기 후 자동 개방", "별도 신청 불필요", "최대 100만원"] },
  "신용카드현금화 (미납과 무관)": { pros: ["미납 무관", "즉시 가능", "낮은 수수료"] },
}

export default function MethodRecommender() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [result, setResult] = useState<Recommendation | null>(null)

  function handleAnswer(questionId: string, value: string) {
    const updated = { ...answers, [questionId]: value }
    setAnswers(updated)

    if (step < QUESTIONS.length - 1) {
      setTimeout(() => setStep(step + 1), 200)
    } else {
      setTimeout(() => {
        setResult(getRecommendation(updated))
        setStep(QUESTIONS.length)
      }, 200)
    }
  }

  function handleReset() {
    setStep(0)
    setAnswers({})
    setResult(null)
  }

  const progress = ((step) / QUESTIONS.length) * 100
  const currentQ = QUESTIONS[step]

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div>
        <div className="mb-2 flex items-center justify-between text-[12px] text-toss-gray-500">
          <span>
            {step < QUESTIONS.length ? `STEP ${step + 1}/${QUESTIONS.length}` : "결과"}
          </span>
          <span>{Math.min(Math.round(progress), 100)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-toss-gray-100">
          <div
            className="h-full rounded-full bg-toss-blue transition-all duration-500"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Questions */}
      {step < QUESTIONS.length && currentQ && (
        <div className="animate-fade-up space-y-4">
          <h3 className="text-center text-[16px] font-bold text-toss-gray-900">{currentQ.title}</h3>
          <div className={`grid gap-3 ${currentQ.options.length <= 3 ? "grid-cols-1" : "grid-cols-2"}`}>
            {currentQ.options.map((opt) => (
              <button
                key={opt.key}
                onClick={() => handleAnswer(currentQ.id, opt.key)}
                className={`rounded-2xl border-2 p-4 text-left text-[14px] font-medium transition-all ${
                  answers[currentQ.id as keyof Answers] === opt.key
                    ? "border-toss-blue bg-toss-blue/[0.04] text-toss-blue"
                    : "border-toss-gray-200 text-toss-gray-700 hover:border-toss-gray-300"
                }`}
                aria-label={`${opt.label} 선택`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1 text-[13px] text-toss-gray-400 transition-colors hover:text-toss-gray-600"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> 이전 질문
            </button>
          )}
        </div>
      )}

      {/* Result */}
      {step === QUESTIONS.length && result && (
        <div className="animate-fade-up space-y-5">
          <div className="rounded-2xl border-2 border-toss-blue bg-toss-blue/[0.03] p-6">
            <span className="inline-block rounded-full bg-toss-blue px-3 py-1 text-[11px] font-bold text-white">
              1순위 추천
            </span>
            <p className="mt-3 text-[24px] font-black text-toss-gray-900">{result.primary}</p>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              {result.time && (
                <div className="rounded-xl bg-white p-3 text-center">
                  <Zap className="mx-auto mb-1 h-5 w-5 text-toss-blue" />
                  <p className="text-[11px] text-toss-gray-500">처리 시간</p>
                  <p className="text-[13px] font-bold text-toss-gray-900">{result.time}</p>
                </div>
              )}
              <div className="rounded-xl bg-white p-3 text-center">
                <CreditCard className="mx-auto mb-1 h-5 w-5 text-toss-blue" />
                <p className="text-[11px] text-toss-gray-500">수수료</p>
                <p className="text-[13px] font-bold text-toss-gray-900">{result.fee}</p>
              </div>
              <div className="rounded-xl bg-white p-3 text-center">
                <Shield className="mx-auto mb-1 h-5 w-5 text-toss-blue" />
                <p className="text-[11px] text-toss-gray-500">안전도</p>
                <p className="text-[13px] font-bold text-toss-green">검증완료</p>
              </div>
            </div>

            {/* Reason */}
            <div className="mt-4 rounded-xl bg-white p-4">
              <p className="text-[13px] leading-relaxed text-toss-gray-600">{result.reason}</p>
            </div>

            {/* Warning */}
            {result.warning && (
              <div className="mt-3 flex items-start gap-2 rounded-xl border border-yellow-300/60 bg-yellow-50 p-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-yellow-600" />
                <p className="text-[12px] text-yellow-700">{result.warning}</p>
              </div>
            )}
          </div>

          {/* Comparison Cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Primary */}
            <div className="rounded-2xl border-2 border-toss-blue p-5">
              <span className="inline-block rounded-full bg-toss-blue/10 px-2.5 py-0.5 text-[11px] font-bold text-toss-blue">
                추천
              </span>
              <p className="mt-2 text-[15px] font-bold text-toss-gray-900">{result.primary}</p>
              <p className="mt-1 text-[12px] text-toss-gray-500">수수료: {result.fee}</p>
              {result.time && <p className="text-[12px] text-toss-gray-500">처리시간: {result.time}</p>}
              <ul className="mt-3 space-y-1">
                {(METHOD_DETAILS[result.primary]?.pros ?? []).map((p, i) => (
                  <li key={i} className="text-[12px] text-toss-gray-600">{"- " + p}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 flex w-full items-center justify-center gap-1 rounded-xl bg-toss-blue py-3 text-[13px] font-bold text-white transition-colors hover:bg-toss-blue-dark"
              >
                이 방법으로 상담하기 <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Secondary */}
            {result.secondary && (
              <div className="rounded-2xl border border-toss-gray-200 p-5">
                <span className="inline-block rounded-full bg-toss-gray-100 px-2.5 py-0.5 text-[11px] font-bold text-toss-gray-600">
                  대안
                </span>
                <p className="mt-2 text-[15px] font-bold text-toss-gray-900">{result.secondary}</p>
                <ul className="mt-3 space-y-1">
                  {(METHOD_DETAILS[result.secondary]?.pros ?? []).map((p, i) => (
                    <li key={i} className="text-[12px] text-toss-gray-600">{"- " + p}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-4 flex w-full items-center justify-center gap-1 rounded-xl border border-toss-blue py-3 text-[13px] font-bold text-toss-blue transition-colors hover:bg-toss-blue/[0.04]"
                >
                  대안 방법 상담하기
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={handleReset}
            className="w-full text-[13px] text-toss-gray-400 underline underline-offset-4 transition-colors hover:text-toss-gray-600"
          >
            {"다시 계산하기"}
          </button>
        </div>
      )}
    </div>
  )
}
