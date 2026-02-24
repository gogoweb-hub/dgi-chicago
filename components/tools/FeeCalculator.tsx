"use client"

import { useState } from "react"
import { Calculator, ArrowRight } from "lucide-react"
import Link from "next/link"

type ServiceType = "voucher" | "data" | "card" | "custom"

const SERVICE_TABS: { key: ServiceType; label: string; defaultFee: number }[] = [
  { key: "voucher", label: "문화상품권", defaultFee: 12 },
  { key: "data", label: "정보이용료", defaultFee: 10 },
  { key: "card", label: "신용카드", defaultFee: 7 },
  { key: "custom", label: "직접입력", defaultFee: 10 },
]

const QUICK_AMOUNTS = [100000, 300000, 500000, 1000000, 1500000, 2000000]
const FEE_TICKS = [5, 10, 15, 20, 25, 30]
const COMPARE_RATES = [5, 7, 10, 12, 15, 20]

export default function FeeCalculator() {
  const [amount, setAmount] = useState(500000)
  const [feeRate, setFeeRate] = useState(12)
  const [serviceType, setServiceType] = useState<ServiceType>("voucher")

  const fee = Math.floor((amount * feeRate) / 100)
  const received = amount - fee
  const ratio = amount > 0 ? ((received / amount) * 100).toFixed(0) : "0"

  function handleServiceChange(tab: (typeof SERVICE_TABS)[number]) {
    setServiceType(tab.key)
    if (tab.key !== "custom") setFeeRate(tab.defaultFee)
  }

  return (
    <div className="space-y-6">
      {/* Service Tabs */}
      <div className="flex flex-wrap gap-2">
        {SERVICE_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => handleServiceChange(tab)}
            className={`rounded-full px-5 py-2.5 text-[13px] font-medium transition-all ${
              serviceType === tab.key
                ? "bg-toss-blue text-white shadow-sm"
                : "border border-toss-gray-200 bg-white text-toss-gray-600 hover:border-toss-blue/40 hover:text-toss-blue"
            }`}
            aria-label={`${tab.label} 선택`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Amount Input */}
      <div>
        <label className="mb-2 block text-[13px] font-bold text-toss-gray-900">현금화 금액</label>
        <div className="relative">
          <input
            type="number"
            min={10000}
            max={2000000}
            step={10000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full rounded-xl border border-toss-gray-200 bg-white p-4 pr-12 text-xl font-bold text-toss-gray-900 transition-colors focus:border-toss-blue focus:ring-2 focus:ring-toss-blue/20 focus:outline-none"
            aria-label="현금화 금액 입력"
          />
          <span className="absolute top-1/2 right-4 -translate-y-1/2 text-[14px] text-toss-gray-400">원</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_AMOUNTS.map((v) => (
            <button
              key={v}
              onClick={() => setAmount(v)}
              className={`rounded-full px-4 py-2 text-[13px] transition-all ${
                amount === v
                  ? "bg-toss-blue/10 font-medium text-toss-blue"
                  : "border border-toss-gray-200 text-toss-gray-600 hover:border-toss-blue/40"
              }`}
              aria-label={`${(v / 10000).toFixed(0)}만원 선택`}
            >
              {(v / 10000).toFixed(0)}만원
            </button>
          ))}
        </div>
      </div>

      {/* Fee Slider */}
      <div>
        <label className="mb-2 block text-[13px] font-bold text-toss-gray-900">
          수수료율 <span className="text-toss-blue">{feeRate}%</span>
        </label>
        <input
          type="range"
          min={5}
          max={30}
          step={1}
          value={feeRate}
          onChange={(e) => setFeeRate(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-toss-gray-100 accent-[#3182F6]"
          aria-label="수수료율 슬라이더"
        />
        <div className="mt-1.5 flex justify-between">
          {FEE_TICKS.map((t) => (
            <button
              key={t}
              onClick={() => setFeeRate(t)}
              className={`text-[11px] transition-colors ${
                feeRate === t ? "font-bold text-toss-blue" : "text-toss-gray-400 hover:text-toss-gray-600"
              }`}
              aria-label={`수수료율 ${t}% 선택`}
            >
              {t}%
            </button>
          ))}
        </div>
      </div>

      {/* Result Card */}
      <div className="rounded-2xl border border-toss-blue/20 bg-toss-blue/[0.03] p-6">
        <p className="text-center text-[14px] text-toss-gray-600">
          {amount.toLocaleString()}원 x {feeRate}% = 수수료{" "}
          <span className="font-bold text-toss-red">{fee.toLocaleString()}원</span>
        </p>

        <div className="my-4 border-t border-toss-gray-200" />

        <p className="text-center text-[13px] text-toss-gray-500">실제 수령 금액</p>
        <p className="mt-1 text-center text-[36px] font-black tracking-tight text-toss-blue">
          {received.toLocaleString()}
          <span className="text-[20px] font-bold">원</span>
        </p>

        {/* Progress Bar */}
        <div className="mx-auto mt-4 max-w-sm">
          <div className="h-2 w-full overflow-hidden rounded-full bg-toss-gray-100">
            <div
              className="h-full rounded-full bg-toss-blue transition-all duration-300"
              style={{ width: `${ratio}%` }}
            />
          </div>
          <p className="mt-1.5 text-center text-[12px] text-toss-gray-500">
            신청 금액의 <span className="font-bold text-toss-blue">{ratio}%</span> 수령
          </p>
        </div>
      </div>

      {/* Detail Table */}
      <div className="overflow-hidden rounded-xl border border-toss-gray-200">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
              <th className="px-4 py-3 text-left font-medium text-toss-gray-600">항목</th>
              <th className="px-4 py-3 text-right font-medium text-toss-gray-600">금액</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-toss-gray-100">
              <td className="px-4 py-3 text-toss-gray-700">신청 금액</td>
              <td className="px-4 py-3 text-right font-medium text-toss-gray-900">{amount.toLocaleString()}원</td>
            </tr>
            <tr className="border-b border-toss-gray-100">
              <td className="px-4 py-3 text-toss-gray-700">수수료 ({feeRate}%)</td>
              <td className="px-4 py-3 text-right font-medium text-toss-red">- {fee.toLocaleString()}원</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-bold text-toss-gray-900">최종 수령액</td>
              <td className="px-4 py-3 text-right font-bold text-toss-blue">{received.toLocaleString()}원</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Fee Comparison */}
      <div className="overflow-hidden rounded-xl border border-toss-gray-200">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
              <th className="px-4 py-3 text-left font-medium text-toss-gray-600">수수료율</th>
              <th className="px-4 py-3 text-right font-medium text-toss-gray-600">수수료 금액</th>
              <th className="px-4 py-3 text-right font-medium text-toss-gray-600">수령액</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE_RATES.map((rate) => {
              const f = Math.floor((amount * rate) / 100)
              const isCurrent = rate === feeRate
              return (
                <tr
                  key={rate}
                  className={`border-b border-toss-gray-100 last:border-b-0 ${
                    isCurrent ? "bg-toss-blue/[0.06]" : ""
                  }`}
                >
                  <td className={`px-4 py-3 ${isCurrent ? "font-bold text-toss-blue" : "text-toss-gray-700"}`}>
                    {rate}% {isCurrent && "(현재)"}
                  </td>
                  <td className="px-4 py-3 text-right text-toss-gray-600">{f.toLocaleString()}원</td>
                  <td className={`px-4 py-3 text-right font-medium ${isCurrent ? "text-toss-blue" : "text-toss-gray-900"}`}>
                    {(amount - f).toLocaleString()}원
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Info Box */}
      <div className="rounded-xl border border-toss-gray-200 bg-toss-gray-50 p-4">
        <div className="flex items-start gap-2">
          <Calculator className="mt-0.5 h-4 w-4 shrink-0 text-toss-blue" />
          <div className="text-[13px] leading-relaxed text-toss-gray-600">
            <p className="mb-1 font-bold text-toss-gray-700">계산 결과 안내</p>
            <ul className="space-y-1">
              <li>{"실제 수수료는 업체 및 이용 조건에 따라 다를 수 있습니다"}</li>
              <li>{"수수료 10% 이하인 경우 정보이용료 방식을 권장드립니다"}</li>
              <li>{"200만원 초과 시 소액결제 + 정보이용료 분리 이용 가능합니다"}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Link
        href="/contact"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-toss-blue py-4 text-[15px] font-bold text-white transition-colors hover:bg-toss-blue-dark"
        aria-label="무료 상담으로 수수료 확인"
      >
        무료 상담으로 정확한 수수료 확인하기 <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
