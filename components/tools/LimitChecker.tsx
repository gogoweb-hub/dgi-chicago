"use client"

import { useState } from "react"
import { Check, AlertTriangle, XCircle, ChevronDown, ArrowRight, Smartphone } from "lucide-react"
import Link from "next/link"

type Carrier = "skt" | "kt" | "lgu" | "mvno"
type Months = 0 | 1 | 3 | 12
type Plan = "low" | "mid" | "high"
type ResultType = "success" | "warning" | "error"

interface LimitResult {
  limit: number
  infoFee: number
  type: ResultType
  message: string
}

const CARRIERS: { key: Carrier; label: string; sub: string; base: string; max: string }[] = [
  { key: "skt", label: "SKT", sub: "SK텔레콤", base: "30만원", max: "100만원" },
  { key: "kt", label: "KT", sub: "KT", base: "30만원", max: "100만원" },
  { key: "lgu", label: "LG U+", sub: "LG유플러스", base: "30만원", max: "100만원" },
  { key: "mvno", label: "알뜰폰", sub: "MVNO", base: "0~30만원", max: "30만원" },
]

const MONTH_OPTIONS: { key: Months; label: string }[] = [
  { key: 0, label: "1개월 미만" },
  { key: 1, label: "1~3개월" },
  { key: 3, label: "3~12개월" },
  { key: 12, label: "12개월 이상" },
]

const PLAN_OPTIONS: { key: Plan; label: string; desc: string }[] = [
  { key: "low", label: "저가 요금제", desc: "3만원 이하" },
  { key: "mid", label: "중간 요금제", desc: "3~7만원" },
  { key: "high", label: "고가 요금제", desc: "7만원 이상" },
]

const LIMIT_TABLE = [
  { period: "1개월 미만", skt: "0원", kt: "0원", lgu: "0원", mvno: "0원" },
  { period: "1~3개월", skt: "15만원", kt: "15만원", lgu: "15만원", mvno: "0원" },
  { period: "3~12개월", skt: "30만원", kt: "30만원", lgu: "30만원", mvno: "30만원" },
  { period: "12개월+(저가)", skt: "30만원", kt: "30만원", lgu: "30만원", mvno: "30만원" },
  { period: "12개월+(중간)", skt: "70만원", kt: "70만원", lgu: "70만원", mvno: "30만원" },
  { period: "12개월+(고가)", skt: "100만원", kt: "100만원", lgu: "100만원", mvno: "30만원" },
]

function calculateLimit(carrier: Carrier, months: Months, plan: Plan, hasUnpaid: boolean): LimitResult {
  if (hasUnpaid) return { limit: 0, infoFee: 0, type: "error", message: "미납 요금을 먼저 납부하셔야 합니다." }
  if (months === 0) return { limit: 0, infoFee: 0, type: "warning", message: "개통 1개월 미만으로 소액결제가 제한됩니다." }

  if (carrier === "mvno") {
    const limit = months >= 3 ? 300000 : 0
    return {
      limit,
      infoFee: limit > 0 ? 1000000 : 0,
      type: limit > 0 ? "success" : "warning",
      message: limit > 0 ? "알뜰폰은 최대 30만원까지 가능합니다." : "알뜰폰 개통 3개월 미만은 이용이 제한됩니다.",
    }
  }

  let baseLimit = 0
  if (months === 1) baseLimit = 150000
  if (months === 3) baseLimit = 300000
  if (months === 12) baseLimit = 500000

  if (plan === "high" && months >= 12) baseLimit = 1000000
  if (plan === "mid" && months >= 12) baseLimit = 700000
  if (plan === "low") baseLimit = Math.min(baseLimit, 300000)

  return { limit: baseLimit, infoFee: 1000000, type: "success", message: "소액결제현금화 이용이 가능합니다." }
}

export default function LimitChecker() {
  const [step, setStep] = useState(1)
  const [carrier, setCarrier] = useState<Carrier | "">("")
  const [months, setMonths] = useState<Months | null>(null)
  const [plan, setPlan] = useState<Plan | "">("")
  const [hasUnpaid, setHasUnpaid] = useState(false)
  const [result, setResult] = useState<LimitResult | null>(null)
  const [showTable, setShowTable] = useState(false)

  function handleCalculate() {
    if (!carrier || months === null || !plan) return
    const r = calculateLimit(carrier, months, plan, hasUnpaid)
    setResult(r)
    setStep(3)
  }

  function handleReset() {
    setStep(1)
    setCarrier("")
    setMonths(null)
    setPlan("")
    setHasUnpaid(false)
    setResult(null)
  }

  const carrierLabel = CARRIERS.find((c) => c.key === carrier)?.label ?? ""

  return (
    <div className="space-y-6">
      {/* Step Indicator */}
      <div className="flex items-center justify-center gap-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-bold transition-colors ${
                step > s
                  ? "bg-toss-green text-white"
                  : step === s
                    ? "bg-toss-blue text-white"
                    : "bg-toss-gray-100 text-toss-gray-400"
              }`}
            >
              {step > s ? <Check className="h-4 w-4" /> : s}
            </div>
            {s < 3 && <div className={`h-0.5 w-8 ${step > s ? "bg-toss-green" : "bg-toss-gray-200"}`} />}
          </div>
        ))}
      </div>

      {/* STEP 1: Carrier */}
      {step === 1 && (
        <div className="space-y-4 animate-fade-up">
          <h3 className="text-center text-[16px] font-bold text-toss-gray-900">
            어느 통신사를 사용하시나요?
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {CARRIERS.map((c) => (
              <button
                key={c.key}
                onClick={() => {
                  setCarrier(c.key)
                  setTimeout(() => setStep(2), 200)
                }}
                className={`rounded-2xl border-2 p-5 text-left transition-all ${
                  carrier === c.key
                    ? "border-toss-blue bg-toss-blue/[0.04]"
                    : "border-toss-gray-200 hover:border-toss-gray-300"
                }`}
                aria-label={`${c.label} 선택`}
              >
                <Smartphone className="mb-2 h-5 w-5 text-toss-blue" />
                <p className="text-[15px] font-bold text-toss-gray-900">{c.label}</p>
                <p className="text-[12px] text-toss-gray-500">{c.sub}</p>
                <div className="mt-3 space-y-1 text-[11px] text-toss-gray-500">
                  <p>기본 한도: {c.base}</p>
                  <p>최대 한도: {c.max}</p>
                </div>
                {c.key === "mvno" && (
                  <p className="mt-2 text-[11px] text-toss-red">
                    {"알뜰폰은 소액결제 제한이 있을 수 있습니다"}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: Conditions */}
      {step === 2 && (
        <div className="space-y-5 animate-fade-up">
          <h3 className="text-center text-[16px] font-bold text-toss-gray-900">
            개통 기간과 요금제를 알려주세요
          </h3>

          {/* Months */}
          <div>
            <label className="mb-2 block text-[13px] font-bold text-toss-gray-700">개통 기간</label>
            <div className="grid grid-cols-2 gap-2">
              {MONTH_OPTIONS.map((m) => (
                <button
                  key={m.key}
                  onClick={() => setMonths(m.key)}
                  className={`rounded-xl px-4 py-3 text-[13px] font-medium transition-all ${
                    months === m.key
                      ? "bg-toss-blue text-white"
                      : "border border-toss-gray-200 text-toss-gray-600 hover:border-toss-blue/40"
                  }`}
                  aria-label={`${m.label} 선택`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          {/* Plan */}
          <div>
            <label className="mb-2 block text-[13px] font-bold text-toss-gray-700">요금제 등급</label>
            <div className="flex flex-col gap-2">
              {PLAN_OPTIONS.map((p) => (
                <button
                  key={p.key}
                  onClick={() => setPlan(p.key)}
                  className={`rounded-xl px-4 py-3.5 text-left text-[13px] font-medium transition-all ${
                    plan === p.key
                      ? "bg-toss-blue text-white"
                      : "border border-toss-gray-200 text-toss-gray-600 hover:border-toss-blue/40"
                  }`}
                  aria-label={`${p.label} 선택`}
                >
                  {p.label}
                  <span className={`ml-1.5 text-[12px] ${plan === p.key ? "text-white/70" : "text-toss-gray-400"}`}>
                    ({p.desc})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Unpaid Toggle */}
          <div className="flex items-center justify-between rounded-xl border border-toss-gray-200 p-4">
            <span className="text-[13px] font-medium text-toss-gray-700">현재 통신요금 미납이 있나요?</span>
            <button
              onClick={() => setHasUnpaid(!hasUnpaid)}
              className={`relative h-7 w-12 rounded-full transition-colors ${hasUnpaid ? "bg-toss-red" : "bg-toss-gray-200"}`}
              role="switch"
              aria-checked={hasUnpaid}
              aria-label="미납 여부 토글"
            >
              <span
                className={`absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform ${
                  hasUnpaid ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
          {hasUnpaid && (
            <div className="flex items-start gap-2 rounded-xl border border-toss-red/30 bg-toss-red/[0.04] p-3">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-toss-red" />
              <p className="text-[12px] text-toss-red">
                {"미납 요금이 있으면 소액결제가 차단됩니다. 먼저 미납 요금을 납부하세요."}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setStep(1)}
              className="rounded-xl border border-toss-gray-200 px-6 py-3 text-[13px] font-medium text-toss-gray-600 transition-colors hover:bg-toss-gray-50"
            >
              이전
            </button>
            <button
              onClick={handleCalculate}
              disabled={months === null || !plan}
              className="flex-1 rounded-xl bg-toss-blue py-3 text-[14px] font-bold text-white transition-colors hover:bg-toss-blue-dark disabled:bg-toss-gray-200 disabled:text-toss-gray-400"
            >
              한도 확인하기
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Result */}
      {step === 3 && result && (
        <div className="space-y-5 animate-fade-up">
          {/* Success */}
          {result.type === "success" && (
            <div className="rounded-2xl border border-toss-green/30 bg-toss-green/[0.04] p-6">
              <div className="mb-4 flex items-center gap-2">
                <Check className="h-5 w-5 text-toss-green" />
                <span className="text-[15px] font-bold text-toss-green">소액결제현금화 이용 가능합니다!</span>
              </div>

              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-[12px] text-toss-gray-500">예상 소액결제 한도</p>
                  <p className="text-[32px] font-black text-toss-blue">{result.limit.toLocaleString()}원</p>
                </div>
                <div className="text-center">
                  <p className="text-[12px] text-toss-gray-500">정보이용료 한도 (추가)</p>
                  <p className="text-[22px] font-bold text-toss-green">최대 1,000,000원</p>
                </div>
                <div className="border-t border-toss-gray-200 pt-4 text-center">
                  <p className="text-[12px] text-toss-gray-500">합산 최대 한도</p>
                  <p className="text-[26px] font-bold text-toss-gray-900">
                    {(result.limit + result.infoFee).toLocaleString()}원
                  </p>
                </div>
              </div>

              {/* Bars */}
              <div className="mt-5 space-y-2.5">
                <div>
                  <div className="mb-1 flex justify-between text-[11px] text-toss-gray-500">
                    <span>소액결제</span>
                    <span>{result.limit.toLocaleString()}원</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-toss-gray-100">
                    <div
                      className="h-full rounded-full bg-toss-blue transition-all duration-500"
                      style={{ width: `${(result.limit / 1000000) * 100}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-[11px] text-toss-gray-500">
                    <span>정보이용료</span>
                    <span>1,000,000원</span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-toss-gray-100">
                    <div className="h-full w-full rounded-full bg-toss-green transition-all duration-500" />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[11px] text-toss-gray-400">
                {"위 한도는 예상치이며, 실제 한도는 통신사 앱(T world / My KT / U+고객센터)에서 확인하세요."}
              </p>

              {/* Next Steps */}
              <div className="mt-4 rounded-xl bg-white p-4">
                <p className="mb-2 text-[13px] font-bold text-toss-gray-900">지금 바로 하실 수 있는 것</p>
                <ol className="space-y-1.5 text-[12px] text-toss-gray-600">
                  <li>1. {carrierLabel} 앱 실행 - 소액결제 한도 실시간 확인</li>
                  <li>2. 한도 부족 시: 통신사 고객센터에서 한도 상향 신청 (월 1회)</li>
                  <li>3. 현금화 진행: 아래 버튼으로 무료 상담 신청</li>
                </ol>
              </div>

              <Link
                href="/contact"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-toss-blue py-4 text-[15px] font-bold text-white transition-colors hover:bg-toss-blue-dark"
              >
                예상 한도 {result.limit.toLocaleString()}원 현금화 시작하기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          {/* Error: Unpaid */}
          {result.type === "error" && (
            <div className="rounded-2xl border border-toss-red/30 bg-toss-red/[0.04] p-6">
              <div className="mb-4 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-toss-red" />
                <span className="text-[15px] font-bold text-toss-red">현재 소액결제가 차단된 상태입니다</span>
              </div>
              <div className="rounded-xl bg-white p-4">
                <p className="mb-2 text-[13px] font-bold text-toss-gray-900">미납 요금 해결 방법</p>
                <ol className="space-y-1.5 text-[12px] text-toss-gray-600">
                  <li>{"1. T world 앱 → 요금 납부 → 즉시 해제"}</li>
                  <li>{"2. 통신사 고객센터(114/100/101) 전화 → 납부 안내"}</li>
                  <li>{"3. 편의점 ATM → 통신요금 납부 가능"}</li>
                </ol>
                <p className="mt-3 text-[11px] text-toss-gray-400">
                  {"미납 해결 후 평균 30분~2시간 내 소액결제 자동 복구됩니다."}
                </p>
              </div>
            </div>
          )}

          {/* Warning: New line */}
          {result.type === "warning" && (
            <div className="rounded-2xl border border-yellow-400/40 bg-yellow-50 p-6">
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <span className="text-[15px] font-bold text-yellow-700">소액결제가 제한됩니다</span>
              </div>
              <p className="mb-4 text-[13px] text-toss-gray-600">{result.message}</p>
              <div className="rounded-xl bg-white p-4">
                <p className="mb-2 text-[13px] font-bold text-toss-gray-900">이용 가능한 대안</p>
                <ul className="space-y-1.5 text-[12px] text-toss-gray-600">
                  <li>{"- 신용카드현금화: 카드 한도의 50~70% 즉시 가능"}</li>
                  <li>{"- 개통 기간이 지나면 소액결제 자동 개방"}</li>
                </ul>
              </div>
              <Link
                href="/credit-card"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-toss-blue py-4 text-[15px] font-bold text-white transition-colors hover:bg-toss-blue-dark"
              >
                신용카드현금화 상담하기 <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}

          <button
            onClick={handleReset}
            className="w-full text-[13px] text-toss-gray-400 underline underline-offset-4 transition-colors hover:text-toss-gray-600"
          >
            {"다시 계산하기"}
          </button>
        </div>
      )}

      {/* Collapsible Table */}
      <div className="rounded-xl border border-toss-gray-200">
        <button
          onClick={() => setShowTable(!showTable)}
          className="flex w-full items-center justify-between p-4 text-[13px] font-bold text-toss-gray-700 transition-colors hover:bg-toss-gray-50"
          aria-expanded={showTable}
        >
          통신사별 소액결제 한도 기준표
          <ChevronDown className={`h-4 w-4 text-toss-gray-400 transition-transform ${showTable ? "rotate-180" : ""}`} />
        </button>
        {showTable && (
          <div className="overflow-x-auto border-t border-toss-gray-200">
            <table className="w-full text-[12px]">
              <thead>
                <tr className="bg-toss-gray-50">
                  <th className="whitespace-nowrap px-3 py-2.5 text-left font-medium text-toss-gray-600">개통 기간</th>
                  <th className="whitespace-nowrap px-3 py-2.5 text-center font-medium text-toss-gray-600">SKT</th>
                  <th className="whitespace-nowrap px-3 py-2.5 text-center font-medium text-toss-gray-600">KT</th>
                  <th className="whitespace-nowrap px-3 py-2.5 text-center font-medium text-toss-gray-600">LG U+</th>
                  <th className="whitespace-nowrap px-3 py-2.5 text-center font-medium text-toss-gray-600">알뜰폰</th>
                </tr>
              </thead>
              <tbody>
                {LIMIT_TABLE.map((row, i) => (
                  <tr key={i} className="border-t border-toss-gray-100">
                    <td className="whitespace-nowrap px-3 py-2.5 font-medium text-toss-gray-700">{row.period}</td>
                    <td className="px-3 py-2.5 text-center text-toss-gray-600">{row.skt}</td>
                    <td className="px-3 py-2.5 text-center text-toss-gray-600">{row.kt}</td>
                    <td className="px-3 py-2.5 text-center text-toss-gray-600">{row.lgu}</td>
                    <td className="px-3 py-2.5 text-center text-toss-gray-600">{row.mvno}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
