import type { Metadata } from "next"
import SubpageLayout from "@/components/SubpageLayout"
import Link from "next/link"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "정보이용료현금화 | 구글 애플 콘텐츠이용료 당일입금",
  description:
    "정보이용료현금화 전문. 구글플레이, 애플 앱스토어 콘텐츠이용료를 당일 현금으로 전환. 수수료 20%~, SKT KT LG U+ 전 통신사 지원.",
  alternates: { canonical: "https://dgi-chicago.com/info-fee" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://dgi-chicago.com" },
    { "@type": "ListItem", position: 2, name: "정보이용료현금화", item: "https://dgi-chicago.com/info-fee" },
  ],
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "정보이용료현금화란 무엇인가요?", acceptedAnswer: { "@type": "Answer", text: "구글 플레이스토어, 앱스토어의 콘텐츠 이용료 한도를 활용하여 현금으로 전환하는 서비스입니다." } },
    { "@type": "Question", name: "정보이용료 한도는 얼마인가요?", acceptedAnswer: { "@type": "Answer", text: "월 최대 50만원이며, 소액결제 한도와 별도로 운영됩니다." } },
    { "@type": "Question", name: "정보이용료현금화 수수료는?", acceptedAnswer: { "@type": "Answer", text: "20%~ 수준이며, 금액과 상황에 따라 달라집니다." } },
    { "@type": "Question", name: "소액결제와 동시에 이용 가능한가요?", acceptedAnswer: { "@type": "Answer", text: "네, 정보이용료와 소액결제는 별도 한도이므로 동시 이용 가능합니다." } },
    { "@type": "Question", name: "구글플레이와 앱스토어 모두 가능한가요?", acceptedAnswer: { "@type": "Answer", text: "네, 두 플랫폼 모두 지원합니다." } },
    { "@type": "Question", name: "당일 입금 가능한가요?", acceptedAnswer: { "@type": "Answer", text: "네, 평균 10~20분 내 입금 완료됩니다." } },
  ],
}

const comparison = [
  { item: "결제 경로", info: "구글/애플", micro: "통신사" },
  { item: "한도", info: "월 50만원", micro: "월 100만원" },
  { item: "수수료", info: "20%~", micro: "20%~" },
  { item: "청구", info: "카드/통신요금", micro: "통신요금" },
]

const platformComparison = [
  { item: "운영사", google: "구글(Google)", apple: "애플(Apple)" },
  { item: "결제 수단", google: "통신사 결제, 카드, 페이팔", apple: "통신사 결제, 카드" },
  { item: "최대 한도", google: "월 50만원", apple: "월 50만원" },
  { item: "결제 반영", google: "즉시 반영", apple: "즉시 반영" },
  { item: "환불 정책", google: "구매 후 48시간 이내", apple: "구매 후 14일 이내 요청" },
  { item: "현금화 난이도", google: "비교적 쉬움", apple: "다소 까다로움" },
]

export default function Page() {
  return (
    <SubpageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h1 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
        정보이용료현금화 |{" "}
        <span className="text-toss-blue">{"구글·애플 콘텐츠이용료 당일입금"}</span>
      </h1>

      {/* Section 1 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정보이용료현금화란?</h2>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-toss-gray-50 p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"정보이용료현금화는 구글 플레이스토어, 애플 앱스토어에서 제공하는 콘텐츠 이용료 결제 한도를 활용하여 현금으로 전환하는 서비스입니다. 소액결제와 달리 '콘텐츠 이용료'로 청구되며, 소액결제 한도와 별도로 월 최대 50만원까지 이용할 수 있어 추가 현금화가 가능합니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"구글 플레이의 경우 앱 내 구매나 구글 기프트카드를 통해, 앱스토어의 경우 앱 내 결제를 통해 진행됩니다. 결제 금액은 통신요금 또는 연결된 신용카드로 청구됩니다. 정보이용료는 디지털 콘텐츠 구매에 특화된 결제 수단으로, 게임 아이템, 앱 구독, 음원 구매 등 다양한 디지털 상품에 사용할 수 있습니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"정보이용료현금화의 가장 큰 장점은 소액결제 한도와 별개로 운영된다는 점입니다. 소액결제 한도를 이미 소진한 상태에서도 정보이용료 한도가 남아 있다면 추가로 현금을 확보할 수 있습니다. 또한 SKT, KT, LG U+ 등 모든 통신사에서 지원하며, 알뜰폰(MVNO) 사용자도 대부분 이용 가능합니다."}
          </p>
        </div>
      </section>

      {/* Section: 정보이용료 한도 상세 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">통신사별 정보이용료 한도 안내</h2>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-toss-gray-50 p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"정보이용료 한도는 통신사와 개인 신용도에 따라 다르게 설정됩니다. 일반적으로 월 최대 50만원까지 설정 가능하며, 신규 가입자의 경우 초기 한도가 낮게 책정될 수 있습니다. 한도를 높이려면 통신사 고객센터에 문의하거나 통신사 앱에서 직접 변경할 수 있습니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"SKT 사용자는 T world 앱에서 '콘텐츠이용료 한도'를 검색하여 변경할 수 있으며, KT는 마이케이티 앱, LG U+는 당신의 U+ 앱에서 설정 가능합니다. 미성년자의 경우 법정대리인 동의가 필요하며, 한도가 월 7만원으로 제한됩니다. 성인이라도 가입 후 3개월 미만인 경우 한도가 제한될 수 있으므로, 가입 후 일정 기간이 지난 뒤 한도를 확인하는 것이 좋습니다."}
          </p>
        </div>
      </section>

      {/* Section 2: 방법 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정보이용료현금화 방법 - 4단계</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { step: "Step 1", title: "결제 한도 확인", desc: "구글플레이 또는 앱스토어에서 콘텐츠 이용료 결제 한도를 확인합니다. 통신사 앱에서도 정보이용료 잔여 한도를 확인할 수 있습니다." },
            { step: "Step 2", title: "앱 내 콘텐츠 구매", desc: "안내받은 방법대로 앱 내에서 콘텐츠를 구매합니다. 결제 시 반드시 '통신사 결제'를 선택해야 정보이용료로 처리됩니다." },
            { step: "Step 3", title: "매입 서비스 연락", desc: "카카오톡으로 구매 내역 스크린샷을 전달합니다. 구매 확인이 완료되면 수수료를 제외한 최종 입금액을 안내받습니다." },
            { step: "Step 4", title: "당일 현금 입금", desc: "확인 후 10~20분 내 본인 명의 계좌로 입금됩니다. 은행 점검 시간(23:30~00:30)에는 다소 지연될 수 있습니다." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <span className="text-xs font-semibold text-toss-blue">{item.step}</span>
              <h3 className="mt-1 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Comparison */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정보이용료 vs 소액결제 비교표</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-toss-gray-50">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">항목</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">정보이용료</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">소액결제</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparison.map((row) => (
                <TableRow key={row.item} className="border-border hover:bg-toss-gray-50">
                  <TableCell className="px-4 py-3 text-xs font-semibold text-foreground md:text-sm">{row.item}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.info}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.micro}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Section: 구글 vs 애플 비교 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">구글 플레이 vs 앱스토어 비교</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-toss-gray-50">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">항목</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">구글 플레이</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">앱스토어</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {platformComparison.map((row) => (
                <TableRow key={row.item} className="border-border hover:bg-toss-gray-50">
                  <TableCell className="px-4 py-3 text-xs font-semibold text-foreground md:text-sm">{row.item}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.google}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.apple}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* Section: 수수료 상세 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정보이용료현금화 수수료 안내</h2>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-toss-gray-50 p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"정보이용료현금화의 수수료는 일반적으로 20%~ 수준입니다. 금액대별 예상 수령액은 다음과 같습니다."}
          </p>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { amount: "10만원 결제", fee: "2만원~", receive: "~8만원" },
              { amount: "30만원 결제", fee: "6만원~", receive: "~24만원" },
              { amount: "50만원 결제", fee: "10만원~", receive: "~40만원" },
            ].map((item) => (
              <div key={item.amount} className="rounded-xl border border-border bg-background p-4 text-center">
                <p className="text-sm font-bold text-foreground">{item.amount}</p>
                <p className="mt-1 text-xs text-muted-foreground">{"수수료: "}{item.fee}</p>
                <p className="mt-1 text-sm font-semibold text-toss-blue">{"수령액: "}{item.receive}</p>
              </div>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {"수수료는 업체마다 다를 수 있으며, 이벤트 기간에는 할인 수수료가 적용되기도 합니다. 상담 시 정확한 수수료와 최종 입금액을 반드시 확인한 후 진행하시기 바랍니다. 수수료가 지나치게 낮은 업체(5% 미만)는 사기 가능성이 있으므로 주의가 필요합니다."}
          </p>
        </div>
      </section>

      {/* Section: 주의사항 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정보이용료현금화 이용 시 주의사항</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { title: "결제 수단 확인 필수", desc: "구글플레이 결제 시 반드시 '통신사 결제'를 선택해야 합니다. 신용카드나 체크카드로 결제하면 정보이용료가 아닌 카드 결제로 처리되어 현금화 방식이 달라집니다. 결제 전 결제 수단을 꼭 확인하세요." },
            { title: "한도 초과 결제 불가", desc: "정보이용료 한도를 초과하는 금액은 결제가 거절됩니다. 결제 전 잔여 한도를 반드시 확인하고, 한도 내에서 결제를 진행하세요. 한도 부족 시 통신사에 한도 증액을 요청할 수 있습니다." },
            { title: "환불 악용 주의", desc: "구매 후 환불을 반복하면 구글/애플에서 계정을 제재할 수 있습니다. 한번 현금화를 진행한 건은 절대 환불 요청하지 마세요. 환불 시 매입업체와 분쟁이 발생할 수 있으며, 향후 이용이 제한됩니다." },
            { title: "사기 업체 구별법", desc: "선입금을 요구하는 업체, 수수료가 비정상적으로 낮은 업체, 사업자등록 정보를 공개하지 않는 업체는 사기일 가능성이 높습니다. 반드시 카카오톡 상담을 통해 수수료를 사전 확인하고, 입금 전 업체 신뢰도를 검증하세요." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정보이용료현금화 자주 묻는 질문</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { q: "알뜰폰에서도 정보이용료현금화가 가능한가요?", a: "대부분의 알뜰폰(MVNO)에서 정보이용료 결제가 가능합니다. 다만 일부 알뜰폰 사업자는 콘텐츠이용료 결제를 지원하지 않는 경우가 있으므로, 사전에 통신사에 확인하시기 바랍니다." },
            { q: "정보이용료와 소액결제를 동시에 이용할 수 있나요?", a: "네, 가능합니다. 정보이용료와 소액결제는 완전히 별도의 한도로 운영됩니다. 소액결제 한도가 100만원, 정보이용료 한도가 50만원이라면 최대 150만원까지 현금화가 가능합니다." },
            { q: "정보이용료 결제 후 청구는 언제 되나요?", a: "정보이용료는 다음 달 통신요금에 합산되어 청구됩니다. 예를 들어 1월에 결제한 금액은 2월 통신요금 청구서에 포함됩니다. 통신사에 따라 청구 주기가 다를 수 있으니 확인하시기 바랍니다." },
            { q: "미성년자도 정보이용료현금화를 이용할 수 있나요?", a: "미성년자의 경우 법정대리인(부모) 동의가 있어야 정보이용료 결제가 가능하며, 한도가 월 7만원으로 제한됩니다. 현실적으로 미성년자의 정보이용료현금화는 금액이 작아 권장되지 않습니다." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <h3 className="text-sm font-bold text-foreground">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">관련 서비스</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">소액결제현금화</Link>
          <Link href="/credit-card" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">신용카드현금화</Link>
          <Link href="/card-cash" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">카드깡</Link>
          <Link href="/policy-default" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">정책미납 해결</Link>
        </div>
      </section>
    </SubpageLayout>
  )
}
