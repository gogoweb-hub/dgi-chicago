import type { Metadata } from "next"
import SubpageLayout from "@/components/SubpageLayout"
import Link from "next/link"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

export const metadata: Metadata = {
  title: "소액결제 정책미납 해결방법 | PG사 차단 해제 가이드",
  description: "소액결제 정책미납 원인과 해결방법 완벽 가이드. 다날, KG모빌리언스 등 PG사별 차단 해제 방법과 예방법을 상세히 안내합니다.",
  alternates: { canonical: "https://dgi-chicago.com/policy-default" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: "https://dgi-chicago.com" },
    { "@type": "ListItem", position: 2, name: "정책미납", item: "https://dgi-chicago.com/policy-default" },
  ],
}

const causes = [
  { cause: "통신요금 연체 이력 (3개월 이내)", detail: "통신요금을 기한 내 납부하지 않은 이력이 있으면 PG사에서 결제를 차단합니다. 연체 횟수가 아닌 연체 이력 자체가 문제이므로 1회 연체만으로도 차단될 수 있습니다." },
  { cause: "소액결제 대금 미납 (1회 이상)", detail: "이전에 소액결제로 구매한 상품의 대금을 납부하지 않은 경우입니다. 통신요금과 별도로 소액결제 대금이 미납되면 PG사에서 즉시 차단합니다." },
  { cause: "PG사 자체 신용 평가 미달", detail: "PG사는 통신사와 별개로 자체적인 신용 평가 시스템을 운영합니다. 결제 패턴, 이용 금액, 이용 빈도 등을 종합적으로 분석하여 위험도가 높다고 판단되면 결제를 제한합니다." },
  { cause: "단기간 과도한 소액결제 이용", detail: "짧은 기간에 소액결제를 반복적으로 이용하면 비정상 거래로 의심받아 차단됩니다. 특히 한도에 근접한 금액을 매달 반복 사용하는 패턴은 PG사에서 주의깊게 모니터링합니다." },
  { cause: "결제 승인 후 취소 반복", detail: "결제 승인을 받은 후 취소를 반복하면 악의적 이용으로 판단되어 차단됩니다. 특히 같은 상점에서 반복적으로 결제와 취소를 진행하면 즉시 제한이 걸릴 수 있습니다." },
  { cause: "타인 명의 도용 의심 거래", detail: "평소와 다른 결제 패턴, 다른 지역에서의 결제, 이상한 시간대의 결제 등이 감지되면 명의 도용으로 의심하여 보호 차원에서 결제를 차단합니다." },
  { cause: "신규 가입자 결제 제한 (가입 후 3개월 미만)", detail: "통신사 신규 가입자는 가입 후 일정 기간(보통 1~3개월) 동안 소액결제가 제한되거나 한도가 낮게 설정됩니다. 이는 명의 도용 방지를 위한 보호 조치입니다." },
]

const pgCompare = [
  { pg: "다날", phone: "1566-3255", share: "약 40%", autoRelease: "미납금 완납 후 24~48시간", manualRelease: "고객센터 문의 필요", note: "가장 점유율이 높아 대부분의 소액결제에 관여" },
  { pg: "KG모빌리언스", phone: "1600-5765", share: "약 30%", autoRelease: "자동 해제 어려움", manualRelease: "고객센터 수동 해제", note: "게임, 디지털 콘텐츠 결제에 많이 사용" },
  { pg: "KSNET", phone: "1588-3575", share: "약 15%", autoRelease: "미납금 완납 후 1~3일", manualRelease: "통신사 경유 요청 가능", note: "쇼핑몰, 배달 앱 결제에 주로 사용" },
  { pg: "갤럭시아머니트리", phone: "1566-6000", share: "약 10%", autoRelease: "자동 해제 가능", manualRelease: "고객센터 문의", note: "일부 온라인 서비스 결제에 사용" },
  { pg: "NHN페이코", phone: "1544-6891", share: "약 5%", autoRelease: "미납금 완납 후 자동", manualRelease: "고객센터 문의", note: "페이코 연동 결제 서비스" },
]

export default function Page() {
  return (
    <SubpageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <h1 className="text-3xl font-black text-foreground md:text-4xl lg:text-5xl">
        소액결제 정책미납이란?{" "}
        <span className="text-toss-blue">원인과 해결방법 완벽 가이드</span>
      </h1>

      {/* Section 1 */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">소액결제 정책미납이란?</h2>
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-toss-gray-50 p-6">
          <p className="text-base leading-relaxed text-muted-foreground">
            {"소액결제 정책미납은 단순 통신요금 미납과 다릅니다. PG사(Payment Gateway, 결제대행사)가 자체 정책에 의해 특정 사용자의 소액결제를 차단하는 상태를 말합니다. 다날, KG모빌리언스, KSNET 등 주요 PG사가 각자의 기준으로 결제 승인 여부를 결정합니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"통신요금을 정상적으로 납부하고 있더라도 PG사 정책에 의해 소액결제가 차단될 수 있으며, 이 경우 통신사가 아닌 해당 PG사에 직접 문의해야 합니다. 많은 분들이 통신사에 문의하지만, 통신사는 소액결제 결제 승인 권한이 없기 때문에 근본적인 해결이 불가능합니다."}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {"정책미납은 실제로 돈을 내지 않아서 발생하는 '미납'과는 다른 개념입니다. PG사가 자체적으로 판단하여 결제를 거부하는 것이므로, 본인이 미납 상태가 아니더라도 발생할 수 있습니다. 이 때문에 정책미납이 걸리면 당혹스러운 경우가 많으며, 해결 방법을 모르는 분들이 대부분입니다. 아래에서 정책미납의 정확한 원인과 해결 방법을 단계별로 안내합니다."}
          </p>
        </div>
      </section>

      {/* Section 2: Causes */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정책미납 발생 원인 7가지</h2>
        <div className="mt-6 flex flex-col gap-4">
          {causes.map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-toss-blue/8 text-xs font-bold text-toss-blue">{i + 1}</span>
                <div>
                  <h3 className="text-sm font-bold text-foreground">{item.cause}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Resolution */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정책미납 해결 방법 - 단계별 가이드</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { step: "1단계", title: "현재 상태 정확히 파악", desc: "통신사 앱(T world, 마이케이티, 당신의 U+)에서 소액결제 한도와 이용 가능 여부를 확인합니다. 한도가 0원이거나 '이용 불가' 상태이면 정책미납일 가능성이 높습니다. 또한 결제 시도 시 나오는 오류 코드와 메시지를 캡처해두면 해결에 도움이 됩니다." },
            { step: "2단계", title: "차단 PG사 확인", desc: "소액결제는 여러 PG사를 통해 처리됩니다. 특정 PG사에서만 차단된 경우 다른 PG사를 통한 결제는 가능할 수 있습니다. 결제 시도 시 나오는 오류 메시지에서 PG사 정보(다날, KG모빌리언스 등)를 확인하세요. 오류 코드 앞에 PG사명이 표시되는 경우가 많습니다." },
            { step: "3단계", title: "미납금 완전 해소", desc: "기존 미납 이력이 있다면 모든 미납금을 완납합니다. 통신요금뿐 아니라 소액결제 대금, 정보이용료 대금 모두 포함됩니다. 미납금이 남아 있는 상태에서는 어떤 방법으로든 해제가 불가능하므로, 미납금 완납이 최우선입니다." },
            { step: "4단계", title: "PG사 고객센터 직접 문의", desc: "미납금을 완납한 후 해당 PG사 고객센터에 직접 전화하여 차단 해제를 요청합니다. 다날(1566-3255), KG모빌리언스(1600-5765), KSNET(1588-3575) 등 PG사별 연락처를 확인하여 문의하세요. 상담 시 본인 인증이 필요하므로 신분증을 준비하세요." },
            { step: "5단계", title: "해제 후 확인 및 테스트", desc: "해제 요청 후 24~48시간 후에 소액결제가 정상 작동하는지 소액(1,000원 등)으로 테스트해보세요. 즉시 해제되지 않는 경우도 있으므로 인내심을 갖고 기다리시기 바랍니다. 48시간 이후에도 해제되지 않으면 재문의하세요." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <span className="text-xs font-semibold text-toss-blue">{item.step}</span>
              <h3 className="mt-1 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: PG-specific table */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">PG사별 상세 비교 및 해결 방법</h2>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-toss-gray-50">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">PG사</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">연락처</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">시장 점유율</TableHead>
                <TableHead className="bg-toss-blue/5 px-4 py-3 text-xs font-semibold text-toss-blue md:text-sm">자동 해제</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pgCompare.map((row) => (
                <TableRow key={row.pg} className="border-border hover:bg-toss-gray-50">
                  <TableCell className="px-4 py-3 text-xs font-semibold text-foreground md:text-sm">{row.pg}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.phone}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.share}</TableCell>
                  <TableCell className="px-4 py-3 text-xs text-muted-foreground md:text-sm">{row.autoRelease}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {pgCompare.slice(0, 3).map((pg) => (
            <div key={pg.pg} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <h3 className="text-base font-bold text-toss-blue">{pg.pg}</h3>
              <p className="mt-1 text-sm font-semibold text-foreground">{pg.phone}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pg.note}</p>
              <div className="mt-3 border-t border-border pt-3">
                <p className="text-xs text-muted-foreground"><span className="font-semibold">{"자동 해제: "}</span>{pg.autoRelease}</p>
                <p className="mt-1 text-xs text-muted-foreground"><span className="font-semibold">{"수동 해제: "}</span>{pg.manualRelease}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: 통신사별 소액결제 관리 */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">통신사별 소액결제 관리 방법</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { carrier: "SKT (T world)", steps: "T world 앱 실행 > 나의 이용정보 > 소액결제 > 이용 제한/해제 확인. T world 고객센터(114) 또는 온라인(www.tworld.co.kr)에서도 소액결제 차단/해제 설정이 가능합니다. 다만 PG사 정책미납은 통신사에서 해제할 수 없으므로, 통신사 측 차단이 아닌 경우 PG사에 직접 문의해야 합니다." },
            { carrier: "KT (마이케이티)", steps: "마이케이티 앱 실행 > 요금/결제 > 소액결제 > 이용 한도 및 상태 확인. KT 고객센터(100) 또는 olleh.com에서도 관리 가능합니다. KT는 소액결제 한도 변경 시 본인 인증이 필요하며, 한도 증액은 가입 기간과 납부 실적에 따라 제한될 수 있습니다." },
            { carrier: "LG U+ (당신의 U+)", steps: "당신의 U+ 앱 실행 > 요금/결제 > 소액결제 관리 > 이용 한도 확인. LG U+ 고객센터(114) 또는 www.lguplus.com에서도 관리 가능합니다. LG U+는 소액결제 차단 후 해제 시 24시간의 유예 기간이 적용되는 경우가 있으니 참고하세요." },
          ].map((item, i) => (
            <div key={i} className="rounded-xl border border-border bg-toss-gray-50 p-5">
              <h3 className="text-base font-bold text-foreground">{item.carrier}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.steps}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Prevention */}
      <section className="mt-12">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정책미납 예방 방법</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { title: "통신요금 자동이체 설정", desc: "통신요금과 소액결제 대금을 자동이체로 설정하면 연체를 방지할 수 있습니다. 은행 계좌나 신용카드로 자동이체를 설정해두면 납부일을 놓칠 걱정이 없습니다. 자동이체 설정은 통신사 앱이나 고객센터에서 간단히 할 수 있습니다." },
            { title: "소액결제 이용 패턴 관리", desc: "단기간에 과도한 소액결제를 반복 이용하지 마세요. 한 달에 2~3회, 적정 금액 범위 내에서 이용하는 것이 안전합니다. 한도를 매달 꽉 채워서 사용하는 패턴은 PG사에서 위험 신호로 판단할 수 있습니다." },
            { title: "결제 취소/환불 최소화", desc: "결제 후 불필요한 취소나 환불을 반복하면 PG사에서 악의적 이용으로 판단합니다. 구매 전에 신중하게 결정하고, 불가피한 경우에만 취소를 진행하세요. 같은 상점에서 반복적으로 결제와 취소를 하는 것은 절대 피해야 합니다." },
            { title: "한도 설정 적정 유지", desc: "필요 이상으로 높은 한도를 설정하면 피해 발생 시 손실이 커질 수 있고, PG사의 모니터링 대상이 될 수 있습니다. 실제 이용하는 금액에 맞게 적정 한도를 설정하고, 사용하지 않을 때는 한도를 낮추어 두는 것도 좋은 방법입니다." },
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
        <h2 className="text-xl font-bold text-foreground md:text-2xl">정책미납 자주 묻는 질문</h2>
        <div className="mt-6 flex flex-col gap-4">
          {[
            { q: "정책미납은 신용점수에 영향을 주나요?", a: "PG사의 정책미납 자체는 금융기관 신용정보에 직접 등록되지 않으므로 신용점수에 영향을 주지 않습니다. 다만, 정책미납의 원인이 통신요금 연체인 경우에는 연체 정보가 신용정보에 반영되어 신용점수가 하락할 수 있습니다." },
            { q: "정책미납 상태에서 정보이용료는 사용 가능한가요?", a: "정보이용료(구글/애플 콘텐츠이용료)는 소액결제와 다른 결제 경로를 사용합니다. 따라서 소액결제가 정책미납으로 차단되어도 정보이용료는 정상적으로 이용 가능한 경우가 많습니다. 다만 PG사가 아닌 통신사 차원에서 전체 결제를 차단한 경우에는 정보이용료도 함께 차단될 수 있습니다." },
            { q: "정책미납 해제까지 얼마나 걸리나요?", a: "PG사마다 다르지만, 미납금 완납 후 빠르면 24시간, 늦으면 7일 정도 소요됩니다. 다날의 경우 비교적 빠르게(24~48시간) 해제되는 편이며, KG모빌리언스는 수동 해제가 필요한 경우가 많아 3~5일 소요될 수 있습니다." },
            { q: "해외에서도 정책미납 해제가 가능한가요?", a: "PG사 고객센터는 국내 전화번호로만 연결 가능한 경우가 많습니다. 해외에서는 통신사 고객센터(+82-2-114 등)를 통해 우회적으로 요청하거나, 귀국 후 처리하는 것이 현실적입니다. 통신사 앱을 통한 온라인 문의도 시도해볼 수 있습니다." },
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
          <Link href="/credit-card" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">신용카드현금화</Link>
          <Link href="/card-cash" className="rounded-full border border-border bg-toss-gray-50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-toss-blue">카드깡</Link>
        </div>
      </section>
    </SubpageLayout>
  )
}
