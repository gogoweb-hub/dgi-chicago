import type { Metadata } from "next"
import SubpageLayout from "@/components/SubpageLayout"
import Link from "next/link"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "신용카드현금화 | 카드한도 당일현금 안전한 방법",
  description: "신용카드현금화 전문. 카드 결제 한도를 활용한 안전한 현금 확보 방법. 모든 카드사 지원, 수수료 8~15%, 당일 처리.",
  alternates: { canonical: "https://dgi-chicago.com/credit-card" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://dgi-chicago.com" },
    { "@type": "ListItem", position: 2, name: "신용카드현금화", item: "https://dgi-chicago.com/credit-card" },
  ],
}

const cardFees = [
  { card: "삼성카드", fee: "8~15%", time: "10~20분", note: "일시불/할부 모두 가능" },
  { card: "신한카드", fee: "8~15%", time: "10~20분", note: "온라인 결제 한도 확인 필요" },
  { card: "KB국민카드", fee: "8~15%", time: "10~30분", note: "해외 결제 차단 해제 필요 시 있음" },
  { card: "현대카드", fee: "8~15%", time: "10~20분", note: "M포인트 적립 가능" },
  { card: "롯데카드", fee: "8~15%", time: "10~30분", note: "L.POINT 적립 가능" },
  { card: "하나카드", fee: "8~15%", time: "10~20분", note: "하나머니 적립 가능" },
  { card: "우리카드", fee: "8~15%", time: "10~30분", note: "온라인 결제 한도 별도 설정" },
  { card: "BC카드", fee: "8~15%", time: "10~30분", note: "발급 은행에 따라 차이" },
]

const methodComparison = [
  { item: "수수료", card: "8~15%", cashService: "연 15~25%", cardLoan: "연 10~20%" },
  { item: "신용점수 영향", card: "없음", cashService: "하락", cardLoan: "하락" },
  { item: "이용 한도", card: "결제 한도 전체", cashService: "한도의 30~50%", cardLoan: "한도의 50~70%" },
  { item: "입금 속도", card: "10~30분", cashService: "즉시", cardLoan: "1~3일" },
  { item: "상환 방식", card: "카드 결제일 청구", cashService: "다음 결제일 일시상환", cardLoan: "분할 상환" },
  { item: "추가 서류", card: "불필요", cashService: "불필요", cardLoan: "소득증빙 필요 시" },
]

export default function Page() {
  return (
    <SubpageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
        신용카드현금화 |{" "}
        <span className="text-toss-blue">카드한도 안전하게 현금으로</span>
      </h1>

      {/* Section 1 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">신용카드현금화란?</h2>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-toss-gray-50 p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"신용카드현금화는 신용카드의 결제 한도를 활용하여 현금을 확보하는 방법입니다. 카드로 상품(상품권, 기프트카드, 가전제품 등)을 구매한 후 전문 매입 서비스를 통해 현금으로 전환합니다. 카드 결제 금액은 다음 결제일에 청구되며, 일시불 또는 할부로 상환할 수 있습니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"소액결제현금화와 달리 통신사 한도가 아닌 카드사 한도를 기반으로 하며, 일반적으로 수수료가 8~15% 수준입니다. 카드 현금서비스나 카드론과 비교했을 때 가장 큰 장점은 신용점수에 영향을 주지 않는다는 것입니다. 현금서비스와 카드론은 이용 즉시 신용점수가 하락하지만, 상품 구매 후 매입하는 방식은 일반적인 카드 결제로 처리되어 신용등급에 불이익이 없습니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"신용카드현금화는 급하게 현금이 필요하지만 현금서비스로 인한 신용등급 하락이 걱정되는 분들에게 적합한 방법입니다. 다만 카드 결제 대금은 반드시 결제일에 상환해야 하며, 연체 시 연체이자와 신용점수 하락이 발생할 수 있으므로 상환 계획을 세운 후 이용하시기 바랍니다."}
          </p>
        </div>
      </section>

      {/* Section: 현금서비스/카드론 비교 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">신용카드현금화 vs 현금서비스 vs 카드론 비교</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-toss-gray-50">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">항목</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">카드현금화</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">현금서비스</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">카드론</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {methodComparison.map((row) => (
                <TableRow key={row.item} className="border-border hover:bg-toss-gray-50">
                  <TableCell className="px-4 py-3 text-xs font-semibold text-foreground md:text-sm">{row.item}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.card}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.cashService}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.cardLoan}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {"카드현금화는 수수료가 일회성으로 발생하며, 할부 이용 시 무이자 할부 프로모션도 활용 가능합니다. 현금서비스와 카드론은 이자가 일할 계산되어 장기간 사용 시 비용이 크게 증가합니다. 신용점수 관리가 중요한 분이라면 카드현금화가 가장 안전한 선택입니다."}
        </p>
      </section>

      {/* Section 2: 방법 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">신용카드현금화 방법 - 4단계</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { step: "Step 1", title: "카드 한도 확인", desc: "카드사 앱에서 결제 가능 한도를 확인합니다. 온라인 결제 한도와 오프라인 결제 한도가 별도로 설정되어 있을 수 있으므로, 온라인 결제 한도를 기준으로 확인하세요." },
            { step: "Step 2", title: "카카오톡 상담", desc: "상담을 통해 카드사와 한도에 맞는 최적의 방법과 수수료를 안내받습니다. 카드사에 따라 결제 가능한 상품이 다를 수 있어 사전 상담이 필수입니다." },
            { step: "Step 3", title: "상품 구매", desc: "안내받은 방법대로 카드 결제를 진행합니다. 일시불 또는 할부를 선택할 수 있으며, 무이자 할부가 가능한 경우 추가 비용 없이 분할 상환이 가능합니다." },
            { step: "Step 4", title: "현금 입금", desc: "매입 확인 후 10~30분 내 본인 명의 계좌로 입금됩니다. 입금 전 최종 금액을 문자로 안내받으며, 확인 후 입금이 진행됩니다." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <span className="text-xs font-semibold text-toss-blue">{item.step}</span>
              <h3 className="mt-1 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Card fees table */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">카드사별 수수료 비교</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-toss-gray-50">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">카드사</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">수수료</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">처리시간</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">비고</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cardFees.map((row) => (
                <TableRow key={row.card} className="border-border hover:bg-toss-gray-50">
                  <TableCell className="px-4 py-3 text-xs font-semibold text-foreground md:text-sm">{row.card}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.fee}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.time}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {"수수료는 금액, 결제 방법, 시기에 따라 변동될 수 있습니다. 정확한 수수료는 상담 시 안내받으실 수 있습니다."}
        </p>
      </section>

      {/* Section: 금액별 예상 수령액 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">금액별 예상 수령액</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            { amount: "50만원", fee: "4~7.5만원", receive: "42.5~46만원" },
            { amount: "100만원", fee: "8~15만원", receive: "85~92만원" },
            { amount: "200만원", fee: "16~30만원", receive: "170~184만원" },
            { amount: "500만원", fee: "40~75만원", receive: "425~460만원" },
          ].map((item) => (
            <div key={item.amount} className="rounded-xl border border-border bg-toss-gray-50 p-4 text-center">
              <p className="text-sm font-bold text-foreground">{item.amount}{" 결제"}</p>
              <p className="mt-1 text-xs text-muted-foreground">{"수수료: "}{item.fee}</p>
              <p className="mt-1 text-sm font-semibold text-toss-blue">{"수령액: "}{item.receive}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: 주의사항 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">신용카드현금화 이용 시 주의사항</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { title: "상환 계획 수립 필수", desc: "카드 결제 대금은 반드시 결제일에 상환해야 합니다. 연체 시 연체이자(연 15~24%)가 발생하고, 신용점수가 크게 하락합니다. 이용 전 반드시 상환 가능한 금액만 현금화하시기 바랍니다." },
            { title: "본인 카드만 사용", desc: "타인 명의 카드를 사용하면 여신전문금융업법 위반으로 처벌받을 수 있습니다. 가족 카드라 하더라도 명의자의 동의 없이 사용하면 법적 문제가 발생할 수 있으니 반드시 본인 명의 카드만 사용하세요." },
            { title: "허위 매출 업체 주의", desc: "가맹점과 공모하여 실제 상품 거래 없이 결제만 진행하는 업체는 불법입니다. 이런 업체를 이용하면 카드사에서 이상거래로 감지하여 카드가 정지될 수 있으며, 법적 처벌 대상이 됩니다." },
            { title: "과도한 이용 자제", desc: "단기간에 반복적으로 대금액을 현금화하면 카드사 FDS(이상거래 탐지 시스템)에 감지되어 카드 이용이 제한될 수 있습니다. 필요한 금액만 적정 수준에서 이용하시기 바랍니다." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Legal */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">신용카드현금화 합법 여부</h2>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-toss-gray-50 p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"본인 명의 신용카드로 실제 상품을 구매하고, 해당 상품을 정식 매입업체에 판매하는 행위 자체는 일반적인 상거래에 해당합니다. 상품권, 기프트카드, 가전제품 등을 구매 후 중고 매입하는 것은 합법적인 거래입니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"다만, 카드 결제 후 의도적으로 상품을 반품하거나 허위 매출을 발생시키는 행위는 여신전문금융업법 제70조에 의해 처벌 대상입니다. 가맹점이 실제 거래 없이 매출 전표를 발행하는 행위는 3년 이하의 징역 또는 2천만원 이하의 벌금에 처해질 수 있습니다. 안전한 이용을 위해 반드시 실제 상품 거래 기반의 정식 업체를 통해 투명한 거래를 진행하시기 바랍니다."}
          </p>
        </div>
      </section>

      {/* Section: FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">신용카드현금화 자주 묻는 질문</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { q: "체크카드로도 현금화가 가능한가요?", a: "체크카드는 즉시 출금되므로 현금화 대상이 아닙니다. 신용카드현금화는 후불 결제 방식인 신용카드의 한도를 활용하는 것이므로, 반드시 신용카드로만 가능합니다." },
            { q: "할부로 결제하면 수수료가 달라지나요?", a: "할부 결제 자체로 수수료가 변동되지는 않습니다. 다만 카드사의 무이자 할부 프로모션을 활용하면 추가 이자 없이 분할 상환이 가능하므로, 상환 부담을 줄일 수 있습니다." },
            { q: "카드 현금화 후 신용점수에 영향이 있나요?", a: "일반 카드 결제로 처리되므로 신용점수에 직접적인 영향은 없습니다. 하지만 결제 대금을 연체하면 신용점수가 하락하므로, 반드시 결제일에 상환해야 합니다." },
            { q: "하루에 여러 번 현금화가 가능한가요?", a: "결제 한도 내에서 가능하지만, 단기간 과도한 결제는 카드사 FDS에 감지될 수 있습니다. 가급적 1~2회로 나누어 진행하는 것을 권장합니다." },
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
          <Link href="/info-fee" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">정보이용료현금화</Link>
          <Link href="/card-cash" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">카드깡</Link>
          <Link href="/policy-default" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">정책미납 해결</Link>
        </div>
      </section>
    </SubpageLayout>
  )
}
