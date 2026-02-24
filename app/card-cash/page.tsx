import type { Metadata } from "next"
import SubpageLayout from "@/components/SubpageLayout"
import Link from "next/link"
import { CheckCircle, XCircle } from "lucide-react"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "카드깡 | 신용카드 한도현금화 합법 방법 2026",
  description: "카드깡이란? 신용카드 한도를 현금으로 전환하는 방법, 합법과 불법의 차이, 안전한 이용법을 완벽 가이드로 안내합니다.",
  alternates: { canonical: "https://dgi-chicago.com/card-cash" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://dgi-chicago.com" },
    { "@type": "ListItem", position: 2, name: "카드깡", item: "https://dgi-chicago.com/card-cash" },
  ],
}

const feeByAmount = [
  { amount: "50만원", fee: "4~7.5만원", receive: "42.5~46만원" },
  { amount: "100만원", fee: "8~15만원", receive: "85~92만원" },
  { amount: "200만원", fee: "16~30만원", receive: "170~184만원" },
  { amount: "300만원", fee: "24~45만원", receive: "255~276만원" },
  { amount: "500만원", fee: "40~75만원", receive: "425~460만원" },
]

export default function Page() {
  return (
    <SubpageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
        카드깡이란?{" "}
        <span className="text-toss-blue">신용카드 한도현금화 완벽 가이드</span>
      </h1>

      {/* Section 1 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">카드깡이란?</h2>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-toss-gray-50 p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"카드깡은 신용카드의 결제 한도를 현금으로 전환하는 행위를 통칭하는 용어입니다. '깡'이라는 표현이 부정적으로 들릴 수 있지만, 실제로는 합법적인 상품 매매를 통한 현금화와 불법적인 허위 매출을 이용한 현금화가 공존하는 영역입니다. 중요한 것은 이 두 가지의 차이를 정확히 이해하고, 합법적인 방법으로만 이용하는 것입니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"카드깡의 기본 원리는 신용카드로 환금성 높은 상품(상품권, 기프트카드, 가전제품, 귀금속 등)을 구매한 후, 매입업체에 판매하여 현금을 수령하는 것입니다. 구매 대금은 카드 결제일에 청구되므로, 실질적으로 카드 한도를 현금으로 전환하는 효과가 있습니다. 현금서비스보다 수수료가 낮고 신용점수에 영향을 주지 않아 많은 분들이 이용하고 있습니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"카드깡이 주목받는 이유는 현금서비스나 카드론의 대안으로서 장점이 뚜렷하기 때문입니다. 현금서비스는 이용 즉시 신용정보에 기록되어 신용점수가 하락하지만, 정상적인 상품 구매 후 매입은 일반 카드 결제로 처리되므로 신용점수에 불이익이 없습니다. 또한 현금서비스는 카드 한도의 30~50%만 이용 가능하지만, 카드깡은 결제 한도 전체를 활용할 수 있다는 점도 큰 장점입니다."}
          </p>
        </div>
      </section>

      {/* Section 2: Legal vs Illegal */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">합법적 카드깡 vs 불법 카드깡 차이</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-chart-3/30 bg-chart-3/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-chart-3" />
              <h3 className="text-base font-bold text-foreground">합법적 방법</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {[
                "실제 상품(상품권, 기프트카드, 가전 등) 구매 후 매입",
                "본인 명의 카드로 정상 결제 진행",
                "실물 상품이 존재하는 정상적인 상거래",
                "매입업체가 투명하게 수수료 공개",
                "매출 전표와 실제 거래 내역 일치",
                "구매자 본인이 직접 결제 및 수령",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-chart-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <XCircle className="h-5 w-5 text-destructive" />
              <h3 className="text-base font-bold text-foreground">불법적 방법</h3>
            </div>
            <ul className="flex flex-col gap-2">
              {[
                "가맹점과 공모한 허위 매출 발생 (실물 거래 없음)",
                "실제 상품 없이 결제만 진행하는 유령 거래",
                "타인 카드 도용 또는 명의 대여",
                "POS 단말기를 이용한 무자료 결제",
                "가맹점이 매출 전표를 허위 발행",
                "결제 후 즉시 취소하여 현금만 수령",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-toss-gray-50 p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"핵심적인 차이는 '실제 상품 거래의 존재 여부'입니다. 실제로 상품을 구매하고 그 상품을 매입업체에 판매하는 것은 일반적인 중고 거래와 동일한 합법적 상거래입니다. 반면, 상품 거래 없이 카드 결제만 진행하는 것은 여신전문금융업법 제70조 위반으로, 3년 이하의 징역 또는 2천만원 이하의 벌금에 처해질 수 있습니다."}
          </p>
        </div>
      </section>

      {/* Section: 방법 상세 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">카드깡 진행 방법 - 5단계</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { step: "1단계", title: "카드 한도 및 상태 확인", desc: "카드사 앱에서 결제 가능 한도를 확인합니다. 일시불 한도, 할부 한도, 온라인 결제 한도를 각각 확인하세요. 카드가 정지 상태이거나 한도가 부족하면 진행이 불가합니다." },
            { step: "2단계", title: "전문 상담 진행", desc: "카카오톡으로 상담을 진행합니다. 카드사, 가용 한도, 희망 금액을 알려주시면 최적의 방법과 정확한 수수료를 안내받을 수 있습니다. 무이자 할부 가능 여부도 이때 확인합니다." },
            { step: "3단계", title: "상품 구매 진행", desc: "안내받은 상품을 카드로 결제합니다. 상품권, 기프트카드, 가전제품 등 환금성 높은 상품을 구매하며, 결제 시 일시불 또는 할부를 선택할 수 있습니다." },
            { step: "4단계", title: "매입 및 검증", desc: "구매한 상품의 정품 여부와 상태를 확인한 후 매입이 진행됩니다. 상품권의 경우 PIN 번호 유효성 검증, 실물 상품의 경우 배송 확인 후 매입됩니다." },
            { step: "5단계", title: "현금 입금", desc: "매입 확인 즉시 수수료를 제외한 금액이 본인 명의 계좌로 입금됩니다. 상품권 기반의 경우 10~20분, 실물 상품의 경우 배송 완료 후 입금됩니다." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <span className="text-xs font-semibold text-toss-blue">{item.step}</span>
              <h3 className="mt-1 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Safe usage */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">안전한 카드깡 이용을 위한 체크리스트</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { title: "정식 매입업체 선택", desc: "사업자등록증을 보유하고, 실제 상품 거래 기반으로 운영되는 정식 매입업체를 선택하세요. 사업자 정보를 공개하지 않거나, 허위 매출을 제안하는 업체는 불법 업체이므로 즉시 거래를 중단하세요. 국세청 사업자등록 조회(www.nts.go.kr)에서 업체 정보를 확인할 수 있습니다." },
            { title: "수수료 사전 확인 및 비교", desc: "여러 업체의 수수료를 비교한 후 진행하세요. 일반적인 수수료는 8~15% 수준이며, 이보다 지나치게 낮은 수수료(3% 미만)를 제시하는 업체는 사기 가능성이 높습니다. 수수료 외에 숨겨진 추가 비용이 있는지도 확인하세요." },
            { title: "선입금 요구 업체 절대 이용 금지", desc: "정상적인 카드깡 거래에서 고객이 먼저 현금을 입금할 일은 절대 없습니다. '수수료를 선입금하면 할인해준다', '보증금이 필요하다' 등의 이유로 선입금을 요구하는 업체는 100% 사기입니다." },
            { title: "카드사 FDS 주의", desc: "카드사마다 FDS(이상거래 탐지 시스템)를 운영하고 있습니다. 단기간에 대금액의 환금성 상품을 반복 구매하면 이상거래로 감지되어 카드가 일시 정지될 수 있습니다. 한 번에 과도한 금액보다는 적정 금액을 분산하여 이용하는 것이 안전합니다." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Fees */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">카드깡 금액별 수수료 및 수령액</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-toss-gray-50">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">결제 금액</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">수수료 (8~15%)</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">예상 수령액</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {feeByAmount.map((row) => (
                <TableRow key={row.amount} className="border-border hover:bg-toss-gray-50">
                  <TableCell className="px-4 py-3 text-xs font-semibold text-foreground md:text-sm">{row.amount}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.fee}</TableCell>
                  <TableCell className="px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">{row.receive}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {"수수료는 카드사, 결제 상품, 금액 규모에 따라 변동됩니다. 대금액 거래 시 수수료가 다소 낮아지는 경향이 있습니다. 정확한 수수료는 상담 시 안내받으실 수 있습니다."}
        </p>
      </section>

      {/* Section: FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">카드깡 자주 묻는 질문</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { q: "카드깡을 하면 카드가 정지되나요?", a: "정상적인 상품 구매 거래는 일반 결제와 동일하게 처리됩니다. 다만 단기간에 환금성 높은 상품을 반복 구매하면 카드사 FDS에 감지될 수 있으므로, 적정 수준에서 이용하는 것이 좋습니다." },
            { q: "할부로도 카드깡이 가능한가요?", a: "네, 일시불뿐 아니라 할부 결제도 가능합니다. 카드사의 무이자 할부 프로모션을 활용하면 수수료 부담을 줄이면서 분할 상환이 가능합니다. 2~3개월 무이자 할부가 가장 보편적으로 이용됩니다." },
            { q: "법인카드로도 카드깡이 가능한가요?", a: "법인카드로도 가능한 경우가 있으나, 법인카드 사용 내역은 세무 검증 대상이 될 수 있으므로 주의가 필요합니다. 법인카드 사용 시에는 반드시 사전 상담을 통해 진행 가능 여부를 확인하세요." },
            { q: "카드깡 후 카드 포인트도 적립되나요?", a: "정상적인 카드 결제이므로 카드사별 포인트/마일리지가 적립됩니다. 실적 기반 카드 혜택(전월 실적 충족 등)에도 반영되므로, 카드 혜택을 유지하면서 현금을 확보할 수 있는 장점이 있습니다." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <h3 className="text-sm font-bold text-foreground">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">관련 서비스</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">소액결제현금화</Link>
          <Link href="/credit-card" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">신용카드현금화</Link>
          <Link href="/info-fee" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">정보이용료현금화</Link>
          <Link href="/policy-default" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">정책미납 해결</Link>
        </div>
      </section>
    </SubpageLayout>
  )
}
