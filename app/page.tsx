import Link from "next/link"
import { Phone, MessageCircle, Shield, Zap, Clock, CheckCircle, ArrowRight, Star, Smartphone, Globe, CreditCard, Layers, AlertTriangle, TrendingUp, FileText, Scale, ChevronRight } from "lucide-react"
import ReadingProgress from "@/components/ReadingProgress"
import TableOfContents from "@/components/TableOfContents"
import FaqAccordion from "@/components/FaqAccordion"

/* ── CTA Button Group (reused across sections) ── */
function CtaButtons({ size = "lg" }: { size?: "lg" | "md" }) {
  const base = size === "lg"
    ? "rounded-2xl px-7 py-4 text-[15px] font-bold"
    : "rounded-xl px-5 py-3 text-[14px] font-bold"

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
      <a
        href="https://open.kakao.com/o/seuka3hi"
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#3C1E1E] shadow-lg shadow-[#FEE500]/25 transition-all hover:brightness-95`}
        aria-label="카카오톡 상담"
      >
        <MessageCircle className="h-4 w-4" />
        카카오톡 상담
      </a>
      <a
        href="tel:010-9999-6484"
        className={`${base} inline-flex items-center justify-center gap-2 bg-toss-blue text-white shadow-lg shadow-toss-blue/25 transition-all hover:bg-toss-blue-dark`}
        aria-label="전화 상담"
      >
        <Phone className="h-4 w-4" />
        전화 상담
      </a>
      <Link
        href="/contact"
        className={`${base} inline-flex items-center justify-center gap-2 border border-toss-gray-200 bg-white text-toss-gray-800 transition-all hover:border-toss-blue hover:text-toss-blue`}
        aria-label="채팅 상담"
      >
        <MessageCircle className="h-4 w-4" />
        채팅 상담
      </Link>
    </div>
  )
}

/* ── Reviews ── */
const reviews = [
  { name: "김**", age: "34세 직장인", text: "급하게 현금이 필요했는데 5분 만에 입금됐습니다. 수수료도 합리적이고 친절하게 안내해줬어요.", rating: 5 },
  { name: "이**", age: "29세 프리랜서", text: "다른 업체보다 수수료가 낮고 빠릅니다. 밤 11시에 신청했는데 바로 처리해줬어요.", rating: 5 },
  { name: "박**", age: "42세 자영업자", text: "신용불량자라 걱정했는데 아무 문제 없이 이용했어요. 진짜 당일입금 맞네요.", rating: 5 },
]

/* ── Service cards ── */
const services = [
  { icon: Smartphone, title: "소액결제현금화", fee: "20%~", href: "#definition", color: "bg-toss-blue/8 text-toss-blue" },
  { icon: Globe, title: "정보이용료현금화", fee: "20%~", href: "/info-fee", color: "bg-emerald-50 text-emerald-600" },
  { icon: CreditCard, title: "신용카드현금화", fee: "8~15%", href: "/credit-card", color: "bg-violet-50 text-violet-600" },
  { icon: Layers, title: "카드깡", fee: "8~15%", href: "/card-cash", color: "bg-amber-50 text-amber-600" },
]

/* ── Responsive table wrapper ── */
function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-toss-gray-200">
      <table className="w-full min-w-[600px] text-[14px] md:text-[15px]">{children}</table>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <ReadingProgress />

      {/* ═══════════════════════════════════════════════
          PART A — LANDING HERO (conversion-focused)
          ═══════════════════════════════════════════════ */}

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden bg-white pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-toss-blue/[0.04] blur-3xl" />

        <div className="relative mx-auto max-w-xl px-5 text-center">
          {/* badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-toss-blue/20 bg-toss-blue-light px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-toss-green" />
            <span className="text-[13px] font-semibold text-toss-blue">24시간 실시간 상담 가능</span>
          </div>

          <h1 className="mt-7 text-balance text-[30px] font-black leading-[1.25] tracking-tight text-toss-gray-900 md:text-[44px]">
            안전하고 빠른{" "}
            <span className="text-toss-blue">소액결제현금화</span>
          </h1>
          <p className="mx-auto mt-5 max-w-sm text-pretty text-[15px] leading-[1.7] text-toss-gray-500 md:text-[16px]">
            전 통신사 지원 &middot; 업계 최저 수수료 &middot; 당일 5분 입금
            <br />
            신용조회 없이, 선입금 없이 안전하게 이용하세요.
          </p>

          {/* DGI Chicago global tagline */}
          <p className="mx-auto mt-4 max-w-md text-[13px] italic leading-[1.7] tracking-wide text-toss-blue/60">
            <span>Global</span>{" "}
            <span>Financial</span>{" "}
            Insights from{" "}
            <span>Chicago</span>,{" "}
            Now Optimized for Korean Payment Solutions.
          </p>
          <p className="mt-1 text-[12px] leading-[1.6] tracking-tight text-toss-gray-400">
            시카고의 글로벌 금융 통찰력을 한국형 결제 솔루션에 담았습니다.
          </p>

          {/* Top CTA */}
          <div className="mt-9">
            <CtaButtons size="lg" />
          </div>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[13px] font-medium text-toss-gray-500">
            <span className="flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-toss-blue" /> 개인정보 안전</span>
            <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-toss-blue" /> 평균 5분 입금</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-toss-blue" /> 선입금 없음</span>
          </div>
        </div>
      </section>

      {/* ═══════ STATS ═══════ */}
      <section className="border-t border-toss-gray-100 bg-toss-gray-50 py-12">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-3 px-5 md:grid-cols-4">
          {[
            { label: "누적 거래", value: "50,000건+" },
            { label: "수수료", value: "8%~" },
            { label: "평균 처리 시간", value: "5분" },
            { label: "고객 만족도", value: "98%" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1 rounded-2xl border border-toss-gray-100 bg-white p-5 shadow-sm">
              <span className="text-[24px] font-black tracking-tight text-toss-blue">{s.value}</span>
              <span className="text-[13px] font-medium text-toss-gray-500">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ SUPPORTED CARRIERS ═══════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1080px] px-5 text-center lg:px-6">
          <p className="text-[13px] font-bold tracking-widest text-toss-blue">이용 가능 통신사</p>
          <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">전 통신사 지원</h2>
          <div className="mx-auto mt-10 grid max-w-xl grid-cols-3 gap-4">
            {[
              { name: "SKT", limit: "최대 100만원" },
              { name: "KT", limit: "최대 100만원" },
              { name: "LG U+", limit: "최대 100만원" },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl border border-toss-gray-100 bg-white p-6 shadow-sm">
                <p className="text-[20px] font-black text-toss-gray-900">{c.name}</p>
                <p className="mt-1 text-[13px] font-medium text-toss-blue">{c.limit}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[13px] text-toss-gray-400">정보이용료 한도 최대 100만원 별도 &middot; 알뜰폰(MVNO)은 제한적 지원</p>
        </div>
      </section>

      {/* ═══════ 3-STEP PROCESS ═══════ */}
      <section className="border-t border-toss-gray-100 bg-toss-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
          <p className="text-center text-[13px] font-bold tracking-widest text-toss-blue">진행 절차</p>
          <h2 className="mt-2 text-center text-[24px] font-black text-toss-gray-900 md:text-[30px]">간단 3단계로 완료</h2>

          <div className="mx-auto mt-12 grid max-w-3xl gap-4 md:grid-cols-3">
            {[
              { num: "01", icon: Smartphone, title: "한도 확인", desc: "통신사 앱 또는 114 전화로 소액결제 잔여 한도를 확인합니다." },
              { num: "02", icon: MessageCircle, title: "카카오톡 상담", desc: "카카오톡 오픈채팅으로 연락하시면 수수료와 이용 방법을 즉시 안내해 드립니다." },
              { num: "03", icon: CheckCircle, title: "5분 내 입금", desc: "상담 완료 후 평균 5~10분 내 본인 계좌로 현금이 입금됩니다." },
            ].map((step) => (
              <div key={step.num} className="rounded-2xl border border-toss-gray-100 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-toss-blue/8">
                    <step.icon className="h-5 w-5 text-toss-blue" />
                  </div>
                  <span className="text-[12px] font-black tracking-wide text-toss-blue">STEP {step.num}</span>
                </div>
                <h3 className="mt-5 text-[17px] font-bold text-toss-gray-900">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.75] text-toss-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="mt-12">
            <CtaButtons size="md" />
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
          <p className="text-center text-[13px] font-bold tracking-widest text-toss-blue">서비스 안내</p>
          <h2 className="mt-2 text-center text-[24px] font-black text-toss-gray-900 md:text-[30px]">다양한 현금화 서비스</h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
            {services.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group flex flex-col rounded-2xl border border-toss-gray-100 bg-white p-6 shadow-sm transition-all hover:border-toss-blue/20 hover:shadow-md"
              >
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${card.color}`}>
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-[15px] font-bold text-toss-gray-900">{card.title}</h3>
                <p className="mt-1 text-[13px] font-bold text-toss-blue">수수료 {card.fee}</p>
                <div className="mt-3 flex items-center gap-1 text-[13px] font-semibold text-toss-blue opacity-0 transition-opacity group-hover:opacity-100">
                  {"자세히 보기"} <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TRUST / REVIEWS ═══════ */}
      <section className="border-t border-toss-gray-100 bg-toss-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
          <p className="text-center text-[13px] font-bold tracking-widest text-toss-blue">고객 후기</p>
          <h2 className="mt-2 text-center text-[24px] font-black text-toss-gray-900 md:text-[30px]">실제 이용자 후기</h2>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-toss-gray-100 bg-white p-6 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-toss-blue text-toss-blue" />
                  ))}
                </div>
                <p className="mt-4 text-[14px] leading-[1.75] text-toss-gray-600">{`"${r.text}"`}</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-toss-blue/8 text-[12px] font-bold text-toss-blue">{r.name.charAt(0)}</div>
                  <div>
                    <p className="text-[13px] font-bold text-toss-gray-800">{r.name}</p>
                    <p className="text-[12px] text-toss-gray-400">{r.age}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ WHY US / TRUST ═══════ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
          <p className="text-center text-[13px] font-bold tracking-widest text-toss-blue">신뢰 포인트</p>
          <h2 className="mt-2 text-center text-[24px] font-black text-toss-gray-900 md:text-[30px]">왜 저희를 선택해야 할까요?</h2>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
            {[
              { icon: Clock, title: "24시간 365일", desc: "야간, 주말, 공휴일 언제든 상담 가능합니다." },
              { icon: Shield, title: "선입금 없음", desc: "절대 선입금을 요구하지 않습니다. 안전 거래 보장." },
              { icon: Zap, title: "평균 5분 입금", desc: "상담 완료 후 평균 5~10분 내 계좌 입금." },
              { icon: CheckCircle, title: "신용조회 없음", desc: "신용점수와 무관하게 누구나 이용 가능합니다." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center rounded-2xl border border-toss-gray-100 bg-white p-6 text-center shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-toss-blue/8">
                  <item.icon className="h-5 w-5 text-toss-blue" />
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-toss-gray-900">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-[1.7] text-toss-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PART B — DETAILED CONTENT (SEO / information)
          ═══════════════════════════════════════════════ */}

      {/* ═══════ TOC + CONTENT LAYOUT ═══════ */}
      <div className="border-t border-toss-gray-100" />
      <div className="mx-auto flex max-w-6xl gap-8 px-5 pb-20 pt-12 xl:gap-12">
        <TableOfContents />

        <article className="prose-toss min-w-0 flex-1">

          {/* ═══════ SECTION: definition ═══════ */}
          <section id="definition">
            <h2>소액결제현금화란 무엇인가?</h2>

            <h3>소액결제의 기본 개념</h3>
            <p>
              소액결제(小額決濟)는 스마트폰 전화번호와 인증번호만으로 결제가 이루어지는 간편 결제 방식입니다. 신용카드나 계좌이체 없이도 즉시 결제가 가능하며, 사용 금액은 다음 달 통신요금 청구서에 합산되어 청구됩니다. SKT, KT, LG U+ 등 모든 이동통신사에서 기본 제공하는 서비스로, 게임 아이템 구매, 웹툰/음원 콘텐츠 결제, 온라인 쇼핑 등 다양한 분야에서 활용됩니다.
            </p>
            <p>
              소액결제 한도는 통신사와 가입자 조건에 따라 월 최소 5만원에서 최대 100만원까지 설정되어 있습니다. 신규 가입자(개통 3개월 미만)의 경우 초기 한도가 15만원으로 제한될 수 있으며, 납부 이력이 쌓일수록 한도가 증가합니다. 한도 변경은 월 1회만 가능하며, 통신사 고객센터 또는 앱을 통해 신청할 수 있습니다.
            </p>

            <h3>소액결제현금화의 원리</h3>
            <p>
              소액결제현금화(小額決濟現金化)란 위의 소액결제 한도를 활용하여 디지털 상품(주로 문화상품권, 구글 기프트카드, 넥슨캐시 등)을 구매한 후, 해당 상품을 현금으로 전환하는 행위를 말합니다.
            </p>
            <p>
              구체적인 원리는 다음과 같습니다. 이용자가 온라인 쇼핑몰이나 콘텐츠 플랫폼에서 소액결제로 10만원짜리 문화상품권을 구매합니다. 구매한 상품권을 현금화 업체에 판매하면, 업체는 상품권 액면가에서 수수료(통상 20%~)를 차감한 금액을 현금으로 지급합니다. 즉, 10만원 상품권 판매 시 ~8만원을 현금으로 받게 됩니다. 이 과정에서 신용카드 사용 이력이나 대출 조회 없이 순수하게 통신요금 할부 방식으로 현금을 확보할 수 있습니다.
            </p>

            <h3>소액결제현금화가 필요한 상황</h3>
            <p>소액결제현금화가 실질적으로 필요한 상황은 크게 네 가지입니다.</p>
            <p>
              <strong>첫째, 긴급 자금이 필요하지만 은행 대출 심사가 통과되지 않는 경우입니다.</strong> 신용점수가 낮거나 소득 증빙이 어려운 프리랜서, 일용직 근로자, 무직자는 제1금융권은 물론 저축은행/캐피탈 대출도 거절당하기 쉽습니다. 이런 경우 소액결제현금화는 신용점수 조회 없이 즉시 현금을 마련할 수 있는 현실적인 수단이 됩니다.
            </p>
            <p>
              <strong>둘째, 소액이지만 즉시 현금이 필요한 경우입니다.</strong> 은행 대출은 최소 한도가 높고 심사 기간이 길어 수십만원 수준의 소액 긴급 자금에는 오히려 부적합합니다. 소액결제현금화는 30만원~200만원 수준의 소액을 5~10분 내에 해결할 수 있습니다.
            </p>
            <p>
              <strong>셋째, 신용카드가 없는 경우입니다.</strong> 대학생이나 사회초년생, 신용카드 발급 기준 미달자는 신용카드 현금서비스를 이용할 수 없습니다. 스마트폰만 있으면 누구나 이용 가능한 소액결제현금화가 유일한 대안이 됩니다.
            </p>
            <p>
              <strong>넷째, 신용점수 하락을 피하고 싶은 경우입니다.</strong> 대출 조회만으로도 신용점수에 영향을 줄 수 있는 현 제도에서, 소액결제현금화는 신용조회 없이 진행되므로 점수 하락 없이 자금을 조달할 수 있습니다.
            </p>

            {/* info box */}
            <div className="my-6 rounded-2xl border-l-4 border-toss-blue bg-toss-blue/5 p-5 md:p-6">
              <p className="text-[14px] leading-[1.8] text-toss-gray-700 md:text-[15px]">
                <strong className="text-toss-blue">참고</strong> &mdash; 소액결제현금화는 통신요금 선불 할부 방식이므로, 신용카드/은행 대출과 달리 금융감독원 신용정보에 등록되지 않습니다. 단, 통신요금 미납 시에는 신용점수에 영향을 줄 수 있으므로 납부 계획을 반드시 수립한 후 이용하세요.
              </p>
            </div>
          </section>

          {/* ═══════ SECTION: fees ═══════ */}
          <section id="fees" className="mt-16">
            <h2>소액결제현금화 수수료 및 한도 완전 분석</h2>

            <h3>서비스 유형별 수수료 비교표</h3>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">현금화 종류</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">수수료 범위</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">100만원 신청 시</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">처리 속도</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">난이도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                {[
                  ['문화상품권 현금화', '20%~', '~80만원', '5~10분', '쉬움'],
                  ['구글 기프트카드 현금화', '20%~', '~80만원', '5~10분', '쉬움'],
                  ['정보이용료 현금화', '20%~', '~80만원', '10~20분', '보통'],
                  ['교통카드 충전 현금화', '0~1%', '약 99만 5,000원', '30~60분', '어려움'],
                  ['신용카드 현금화(카드깡)', '8~15%', '85~92만원', '5~15분', '보통'],
                  ['중고거래 직접 판매', '0~5%', '95~100만원', '1~7일', '매우 어려움'],
                ].map(([name, fee, amount, speed, diff]) => (
                  <tr key={name} className="hover:bg-toss-gray-50/50">
                    <td className="px-4 py-3 font-medium text-toss-gray-900">{name}</td>
                    <td className="px-4 py-3 font-medium text-toss-blue">{fee}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{amount}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{speed}</td>
                    <td className="px-4 py-3 text-toss-gray-500">{diff}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p className="text-[13px] text-toss-gray-400">
              {"※ 수수료는 업체 및 이용 조건에 따라 변동될 수 있습니다. 위 표는 2026년 2월 기준 평균값입니다."}
            </p>

            <h3>통신사별 소액결제 한도표</h3>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">통신사</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">기본 한도</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">최대 한도</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">한도 변경</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">정보이용료</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">합산 최대</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                {[
                  ['SKT (SK텔레콤)', '30만원', '100만원', '월 1회', '100만원', '200만원'],
                  ['KT', '30만원', '100만원', '월 1회', '100만원', '200만원'],
                  ['LG U+', '30만원', '100만원', '월 1회', '100만원', '200만원'],
                  ['알뜰폰(MVNO)', '0~30만원', '30만원', '월 1회', '제공 안 함', '30만원'],
                ].map(([carrier, base, max, change, info, total]) => (
                  <tr key={carrier} className="hover:bg-toss-gray-50/50">
                    <td className="px-4 py-3 font-medium text-toss-gray-900">{carrier}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{base}</td>
                    <td className="px-4 py-3 font-medium text-toss-blue">{max}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{change}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{info}</td>
                    <td className="px-4 py-3 font-bold text-toss-gray-900">{total}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p className="text-[13px] text-toss-gray-400">{"※ 신규 개통 3개월 미만, 법인폰, 선불폰은 소액결제가 기본 차단되어 있습니다."}</p>

            <h3>한도 확인 방법</h3>
            <p>현재 남은 소액결제 한도를 확인하는 방법은 세 가지입니다.</p>
            <p><strong>방법 1 &mdash; 통신사 공식 앱</strong><br />T world(SKT), My KT(KT), U+ 고객센터(LG U+) 앱을 실행한 후 &apos;요금/납부&apos; 또는 &apos;소액결제&apos; 메뉴에서 이번 달 사용 금액과 잔여 한도를 실시간으로 확인할 수 있습니다.</p>
            <p><strong>방법 2 &mdash; ARS 전화</strong><br />SKT: 114, KT: 100, LG U+: 101로 전화 후 소액결제 한도 조회 메뉴를 선택합니다. 본인인증 후 즉시 확인됩니다.</p>
            <p><strong>방법 3 &mdash; 문자 조회</strong><br />통신사에 따라 특정 단문 문자를 보내면 한도 정보를 SMS로 회신해주는 서비스를 제공합니다. 자세한 번호는 각 통신사 고객센터에 문의하세요.</p>

            {/* warning box */}
            <div className="my-6 rounded-2xl border border-toss-red/30 bg-toss-red/5 p-5 md:p-6">
              <p className="text-[14px] leading-[1.8] text-toss-gray-700 md:text-[15px]">
                <strong className="text-toss-red">주의</strong> &mdash; 소액결제 한도는 월 초(1일 00:00)에 초기화됩니다. 한도 변경 신청은 월 1회로 제한되므로, 한 번 증액하면 당월 내에는 재조정이 불가합니다.
              </p>
            </div>

            <h3>수수료가 결정되는 요인</h3>
            <p>소액결제현금화 수수료는 단순히 업체가 임의로 정하는 것이 아니라 여러 구조적 요인에 의해 결정됩니다.</p>
            <p><strong>첫째, 상품권의 종류에 따라 달라집니다.</strong> 유통 경로가 많고 환금성이 높은 문화상품권(온/오프라인 모두 사용 가능)은 수수료가 낮은 편이며, 특정 플랫폼에서만 사용 가능한 게임 포인트는 수수료가 높습니다.</p>
            <p><strong>둘째, 현금화 금액에 따라 달라집니다.</strong> 소액(10만~30만원)보다 고액(50만~100만원)에서 수수료 협상 여지가 생깁니다. 단, 무조건 낮은 수수료를 제시하는 업체는 사기 위험이 높습니다.</p>
            <p><strong>셋째, 업체의 운영 방식에 따라 달라집니다.</strong> 직접 운영 업체는 중간 마진이 없어 수수료가 낮고, 중개 업체를 통하면 추가 수수료가 붙습니다.</p>
          </section>

          {/* ═══════ SECTION: errors ═══════ */}
          <section id="errors" className="mt-16">
            <h2>소액결제 오류코드 완전 해결 가이드</h2>

            <h3>다날 오류코드 전체 목록</h3>
            <p>국내 소액결제 PG사(결제대행사) 중 가장 많이 쓰이는 다날(DANAL)의 오류코드별 원인과 해결 방법을 정리했습니다.</p>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">코드</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">오류명</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">원인</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">해결 방법</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                {[
                  ['50', '소액한도부족', '현재 한도가 결제 금액보다 부족', '통신사 앱에서 한도 상향 신청'],
                  ['57', '결제금액한도초과', '1회 결제 한도 초과', '소액으로 분할 결제 또는 한도 상향'],
                  ['59', 'IP차단', '동일 IP에서 반복 결제 시도', '모바일 데이터 사용, 1시간 후 재시도'],
                  ['91', '결제취소불가', '이미 결제 완료된 건의 취소 요청', '판매처에 직접 환불 요청'],
                  ['100', '통신사정보없음', '시스템에 가입자 정보 미등록', '통신사 고객센터 문의'],
                  ['414', 'LGU+ 미납', 'LG U+ 요금 미납 상태', '미납 요금 납부 후 재시도'],
                  ['432', 'KT/SKT 미납', 'KT 또는 SKT 요금 미납', '미납 요금 납부 후 재시도'],
                  ['437', '신규개통 차단', '개통 3개월 미만 회선', '개통 3개월 이상 경과 후 이용'],
                  ['515', '비밀번호 미설정', '소액결제 비밀번호 미설정', '통신사 앱에서 비밀번호 설정'],
                  ['605', '신규회선 차단', '개통 3개월 미만', '개통 3개월 경과 후 이용'],
                  ['615', '고액미납 차단', '고액 미납 또는 분쟁 이력', '통신사 고객센터 해제 신청'],
                  ['902', '명의 차단', '개인 신용 이슈로 차단', '통신사 고객센터 문의'],
                  ['915', '정책차단', '이통사 자체 정책 차단', '통신사에서 차단 해제 요청'],
                ].map(([code, name, cause, fix]) => (
                  <tr key={code} className="hover:bg-toss-gray-50/50">
                    <td className="px-4 py-3 font-mono text-[13px] font-bold text-toss-blue">{code}</td>
                    <td className="px-4 py-3 font-medium text-toss-gray-900">{name}</td>
                    <td className="px-4 py-3 text-toss-gray-600">{cause}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h3>오류코드별 자가 해결 플로우차트</h3>
            <p>소액결제가 거절될 때 아래 순서로 확인하세요.</p>
            <div className="my-6 flex flex-col gap-3">
              {[
                ['STEP 1', '오류코드 확인 -> 위 표에서 원인 파악'],
                ['STEP 2', '미납 여부 확인 -> 통신사 앱 접속 -> 미납 요금 즉시 납부'],
                ['STEP 3', '한도 확인 -> 잔여 한도가 결제 금액보다 많은지 확인 -> 부족 시 한도 상향 신청'],
                ['STEP 4', '비밀번호 설정 여부 확인 -> 소액결제 비밀번호 설정'],
                ['STEP 5', 'IP 차단 확인 -> Wi-Fi 해제 후 모바일 데이터로 재시도'],
                ['STEP 6', '그래도 안 될 경우 -> 당사 고객센터 문의 (무료 원인 분석 제공)'],
              ].map(([step, desc]) => (
                <div key={step} className="flex items-start gap-4 rounded-xl border border-toss-gray-200 bg-white p-4">
                  <span className="shrink-0 rounded-lg bg-toss-blue/10 px-3 py-1 text-[12px] font-bold text-toss-blue">{step}</span>
                  <span className="text-[14px] leading-[1.7] text-toss-gray-700">{desc}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════ SECTION: types ═══════ */}
          <section id="types" className="mt-16">
            <h2>소액결제현금화 종류별 완전 비교</h2>

            <h3>1. 문화상품권/구글 기프트카드 현금화</h3>
            <p>가장 보편적이고 처리 속도가 빠른 방법입니다. 소액결제로 온라인 쇼핑몰 또는 통신사 공식 스토어에서 문화상품권(도서문화상품권, 해피머니상품권, 컬처랜드 등) 또는 구글 기프트카드를 구매합니다. 구매 즉시 핀번호(코드)를 업체에 전달하면 업체가 해당 상품권을 자체 매입해 현금을 지급합니다.</p>
            <p><strong>장점:</strong> 처리 속도가 가장 빠르고(평균 5~10분), 이용 방법이 단순합니다.<br /><strong>단점:</strong> 수수료가 20%~이며, 구매 가능 채널이 제한적입니다.</p>

            <h3>2. 정보이용료 현금화</h3>
            <p>구글플레이(Google Play) 또는 애플 앱스토어에서 디지털 콘텐츠(앱, 인앱 결제, 구독 등)를 정보이용료로 결제하는 방식입니다. 정보이용료는 소액결제와 별도 한도(최대 100만원)가 있어, 소액결제 한도를 모두 사용한 이후에도 추가로 현금화할 수 있습니다.</p>
            <p><strong>장점:</strong> 소액결제 한도 외 추가 한도(최대 100만원) 활용 가능, 수수료가 소액결제와 동일 수준(20%~).<br /><strong>단점:</strong> 구글플레이/앱스토어 계정 설정이 필요하고 처리 시간이 10~20분으로 다소 더 걸립니다.</p>

            <h3>3. 교통카드(티머니/캐시비) 충전 현금화</h3>
            <p>소액결제로 교통카드 충전 후, 충전된 잔액을 편의점 등에서 환불받는 방식입니다. 티머니 환불은 고객센터나 지정 편의점에서 가능하며, 건당 수수료가 약 500원으로 매우 낮습니다.</p>
            <p><strong>장점:</strong> 수수료가 압도적으로 낮습니다(0~1%).<br /><strong>단점:</strong> 처리 시간이 30분~1시간으로 길며, 1회 환불 가능 금액에 제한이 있고, 직접 방문이 필요한 경우가 있어 번거롭습니다.</p>

            <h3>4. 중고거래 플랫폼 직접 판매</h3>
            <p>소액결제로 구매한 상품권이나 게임 아이템을 당근마켓, 번개장터 등 중고거래 플랫폼에 직접 등록하여 개인 판매자로 판매하는 방법입니다.</p>
            <p><strong>장점:</strong> 수수료가 0~5%로 낮고, 경우에 따라 100% 환금도 가능합니다.<br /><strong>단점:</strong> 구매자를 찾기까지 수 시간~수일이 소요되며, 거래 리스크(사기)가 존재하고 긴급 자금 마련에는 부적합합니다.</p>

            <h3>현금화 방법별 비교 요약</h3>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">방법</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">수수료</th>
                  <th className="px-4 py-3 text-center font-medium text-toss-gray-700">처리속도</th>
                  <th className="px-4 py-3 text-center font-medium text-toss-gray-700">편의성</th>
                  <th className="px-4 py-3 text-center font-medium text-toss-gray-700">긴급적합도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                {[
                  ['문화상품권 현금화', '20%~', 5, 5, 5],
                  ['정보이용료 현금화', '20%~', 4, 4, 4],
                  ['교통카드 현금화', '0~1%', 2, 2, 2],
                  ['중고거래 직접 판매', '0~5%', 1, 2, 1],
                  ['신용카드 현금화', '8~15%', 5, 4, 5],
                ].map(([name, fee, speed, ease, urgent]) => (
                  <tr key={name as string} className="hover:bg-toss-gray-50/50">
                    <td className="px-4 py-3 font-medium text-toss-gray-900">{name}</td>
                    <td className="px-4 py-3 font-medium text-toss-blue">{fee}</td>
                    <td className="px-4 py-3 text-center text-toss-gray-500">{'★'.repeat(speed as number)}{'☆'.repeat(5 - (speed as number))}</td>
                    <td className="px-4 py-3 text-center text-toss-gray-500">{'★'.repeat(ease as number)}{'☆'.repeat(5 - (ease as number))}</td>
                    <td className="px-4 py-3 text-center text-toss-gray-500">{'★'.repeat(urgent as number)}{'☆'.repeat(5 - (urgent as number))}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </section>

          {/* ═══════ SECTION: howto ═══════ */}
          <section id="howto" className="mt-16">
            <h2>소액결제현금화 이용 방법 5단계</h2>

            <div className="my-6 flex flex-col gap-4">
              {[
                { step: 1, title: '한도/자격 확인', time: '5분', desc: '이용 전 반드시 본인의 소액결제 잔여 한도를 확인하세요. T world, My KT, U+ 고객센터 앱에서 실시간 확인이 가능합니다. 또한 선불폰이 아닐 것, 법인/미성년자 명의가 아닐 것, 통신요금 미납이 없을 것, 개통 3개월 이상일 것의 네 가지 조건을 확인하세요.' },
                { step: 2, title: '업체 상담 신청', time: '2분', desc: '저희 사이트의 문의하기 페이지에서 연락처를 확인 후 전화 또는 문자로 상담을 신청합니다. 이름, 전화번호, 원하는 금액, 통신사만 알려주시면 됩니다. 추가 서류나 개인정보는 필요하지 않습니다.' },
                { step: 3, title: '결제 안내 수신', time: '3분', desc: '담당자가 현금화 가능 금액을 확인하고, 상품권 구매 링크 또는 정보이용료 결제 방법을 문자/카카오톡으로 안내합니다. 안내에 따라 해당 채널에서 결제를 진행합니다.' },
                { step: 4, title: '결제 완료 후 코드 전달', time: '1분', desc: '상품권 구매 완료 후 받은 핀번호(코드)를 담당자에게 전달합니다. 정보이용료의 경우 결제 완료 스크린샷을 공유합니다.' },
                { step: 5, title: '현금 입금 수령', time: '5~10분', desc: '업체가 코드 확인 후 수수료를 차감하고 입금 처리합니다. 평균 5~10분 내에 지정 계좌로 입금됩니다. 야간/주말/공휴일에도 동일하게 처리됩니다.' },
              ].map((s) => (
                <div key={s.step} className="rounded-2xl border-l-4 border-toss-blue bg-white p-5 shadow-sm md:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-toss-blue text-[14px] font-bold text-white">{s.step}</span>
                    <span className="text-[16px] font-bold text-toss-gray-900">{s.title}</span>
                    <span className="ml-auto rounded-full bg-toss-blue/8 px-3 py-1 text-[12px] font-medium text-toss-blue">{s.time}</span>
                  </div>
                  <p className="text-[14px] leading-[1.8] text-toss-gray-600">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* checklist */}
            <div className="my-6 rounded-2xl bg-toss-gray-50 p-5 md:p-6">
              <p className="mb-4 text-[15px] font-bold text-toss-gray-900">이용 전 확인 사항</p>
              <ul className="flex flex-col gap-2">
                {[
                  '소액결제 잔여 한도 확인',
                  '통신요금 미납 없음 확인',
                  '입금받을 계좌 준비',
                  '결제용 소액결제 비밀번호 확인',
                  '신뢰할 수 있는 업체인지 사업자등록 확인',
                ].map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[14px] text-toss-gray-700">
                    <CheckCircle className="h-4 w-4 shrink-0 text-toss-blue" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ═══════ SECTION: cases ═══════ */}
          <section id="cases" className="mt-16">
            <h2>실제 사례연구 &mdash; 소액결제현금화 이용 사례 3건</h2>
            <p>아래 사례들은 실제 이용자들의 경험을 바탕으로 구성된 대표적인 활용 사례입니다. 개인정보 보호를 위해 이름과 일부 세부 정보는 변경하였습니다.</p>

            {/* Case 1 */}
            <div className="my-6 rounded-2xl border border-toss-gray-200 bg-white p-5 md:p-6">
              <span className="inline-block rounded-full bg-toss-blue/10 px-3 py-1 text-[12px] font-medium text-toss-blue">사례 연구 #1 | 신용불량자 긴급자금 마련</span>
              <h3>신용불량자 30대 직장인 &mdash; 월말 급여 전 100만원 마련</h3>
              <p><strong>배경:</strong> 경기도 수원에 거주하는 직장인 A씨(34세, 제조업 근무)는 2025년 10월, 예상치 못한 차량 수리비 130만원이 발생했습니다. 급여일은 8일이나 남았고, 통장 잔액은 12만원이었습니다.</p>
              <p><strong>문제:</strong> A씨는 3년 전 카드 대금 연체로 신용점수가 595점에 머물러 있었습니다. 1금융권 대출은 물론, 인터넷은행(카카오뱅크/토스뱅크)도 거절. 저축은행 앱 대출도 &apos;심사 불가&apos; 메시지가 떴습니다.</p>
              <p><strong>해결 과정:</strong> 인터넷 검색 중 소액결제현금화를 알게 된 A씨는 SKT 통신사의 소액결제 한도 100만원을 확인하고 현금화를 신청했습니다. 오후 11시 30분에 신청하였음에도 담당자가 즉시 응대했으며, 문화상품권 구매 링크를 받아 100만원 결제 후 핀번호를 전달했습니다.</p>
              <p><strong>결과:</strong> 10분 후 수수료 12%(12만원)가 차감된 88만원이 계좌에 입금됐습니다. A씨는 나머지 42만원을 다른 방법으로 조달해 차량 수리비를 해결하고, 다음 달 급여일에 통신요금 100만원을 납부했습니다.</p>
              <div className="mt-3 rounded-xl bg-toss-blue/5 p-4">
                <p className="text-[13px] font-medium text-toss-blue">핵심 교훈: 신용점수와 무관하게 소액결제 한도만 있으면 이용 가능. 야간에도 즉시 처리. 수수료 12%는 급전 비용으로 감수 가능한 수준.</p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="my-6 rounded-2xl border border-toss-gray-200 bg-white p-5 md:p-6">
              <span className="inline-block rounded-full bg-toss-blue/10 px-3 py-1 text-[12px] font-medium text-toss-blue">사례 연구 #2 | 프리랜서 자금 조달</span>
              <h3>프리랜서 디자이너 &mdash; 명절 전날 밤 150만원 마련</h3>
              <p><strong>배경:</strong> 서울 마포구에 거주하는 프리랜서 디자이너 B씨(29세, 여성)는 2025년 추석 연휴 전날 저녁, 고향 부모님께 드릴 명절 선물 구입비와 교통비 합산 150만원이 필요했습니다. 클라이언트 프로젝트 대금 200만원은 연휴 이후 입금 예정이었습니다.</p>
              <p><strong>문제:</strong> B씨는 프리랜서 특성상 월정 소득 증빙이 어려워 신용대출이 어려웠고, 신용카드 한도도 소진된 상태였습니다.</p>
              <p><strong>해결 과정:</strong> 소액결제 한도 100만원 + 정보이용료 한도 100만원을 동시에 활용하기로 했습니다. 소액결제로 문화상품권 100만원 구매, 구글플레이 정보이용료로 디지털 콘텐츠 50만원 결제를 순차적으로 진행했습니다.</p>
              <p><strong>결과:</strong></p>
              <ul>
                <li>소액결제 100만원 &rarr; 수수료 10% &rarr; 90만원 수령</li>
                <li>정보이용료 50만원 &rarr; 수수료 9% &rarr; 45만 5,000원 수령</li>
                <li>합계 135만 5,000원 수령 (수수료 총 14만 5,000원)</li>
              </ul>
              <div className="mt-3 rounded-xl bg-toss-blue/5 p-4">
                <p className="text-[13px] font-medium text-toss-blue">핵심 교훈: 소액결제 + 정보이용료를 동시 활용하면 최대 200만원까지 가능. 수입이 불규칙한 프리랜서에게 유용한 단기 유동성 수단.</p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="my-6 rounded-2xl border border-toss-gray-200 bg-white p-5 md:p-6">
              <span className="inline-block rounded-full bg-toss-blue/10 px-3 py-1 text-[12px] font-medium text-toss-blue">사례 연구 #3 | 자영업자 운전자금 위기</span>
              <h3>편의점 자영업자 &mdash; 월세 납부 마감일 위기 극복</h3>
              <p><strong>배경:</strong> 인천에서 편의점을 운영하는 자영업자 C씨(42세)는 2025년 12월, 임박한 월세(80만원)와 가맹점 물품대금(120만원) 합산 200만원이 부족한 상황에 처했습니다.</p>
              <p><strong>문제:</strong> 추가 대출 불가, 신용카드 한도 소진, 가족 차용도 어려운 상황.</p>
              <p><strong>해결 과정:</strong> C씨는 본인 명의 KT 회선(소액결제 한도 100만원)과 배우자 명의 SKT 회선(소액결제 한도 100만원)을 각각 활용했습니다.</p>
              <p><strong>결과:</strong></p>
              <ul>
                <li>KT 100만원 &rarr; 수수료 13% &rarr; 87만원 수령</li>
                <li>SKT 100만원 &rarr; 수수료 13% &rarr; 87만원 수령</li>
                <li>합계 174만원 수령 (수수료 총 26만원)</li>
              </ul>
              <div className="mt-3 rounded-xl bg-toss-blue/5 p-4">
                <p className="text-[13px] font-medium text-toss-blue">핵심 교훈: 가족 명의 회선을 활용하면 한도를 배로 늘릴 수 있음. 사업 운전자금 단기 조달에도 활용 가능.</p>
              </div>
            </div>

            {/* case summary table */}
            <h3>사례 요약</h3>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">사례</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">이용자</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">필요 금액</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">방법</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">수령액</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">수수료</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">소요 시간</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                <tr className="hover:bg-toss-gray-50/50">
                  <td className="px-4 py-3 font-medium text-toss-blue">#1</td>
                  <td className="px-4 py-3 text-toss-gray-900">직장인(신용불량)</td>
                  <td className="px-4 py-3 text-toss-gray-700">100만원</td>
                  <td className="px-4 py-3 text-toss-gray-700">문화상품권</td>
                  <td className="px-4 py-3 font-medium text-toss-gray-900">88만원</td>
                  <td className="px-4 py-3 text-toss-gray-500">12%</td>
                  <td className="px-4 py-3 text-toss-gray-500">10분</td>
                </tr>
                <tr className="hover:bg-toss-gray-50/50">
                  <td className="px-4 py-3 font-medium text-toss-blue">#2</td>
                  <td className="px-4 py-3 text-toss-gray-900">프리랜서(디자이너)</td>
                  <td className="px-4 py-3 text-toss-gray-700">150만원</td>
                  <td className="px-4 py-3 text-toss-gray-700">소액결제+정보이용료</td>
                  <td className="px-4 py-3 font-medium text-toss-gray-900">135만 5천원</td>
                  <td className="px-4 py-3 text-toss-gray-500">평균 9.7%</td>
                  <td className="px-4 py-3 text-toss-gray-500">25분</td>
                </tr>
                <tr className="hover:bg-toss-gray-50/50">
                  <td className="px-4 py-3 font-medium text-toss-blue">#3</td>
                  <td className="px-4 py-3 text-toss-gray-900">자영업자(편의점)</td>
                  <td className="px-4 py-3 text-toss-gray-700">200만원</td>
                  <td className="px-4 py-3 text-toss-gray-700">2개 회선 활용</td>
                  <td className="px-4 py-3 font-medium text-toss-gray-900">174만원</td>
                  <td className="px-4 py-3 text-toss-gray-500">13%</td>
                  <td className="px-4 py-3 text-toss-gray-500">20분</td>
                </tr>
              </tbody>
            </Table>
          </section>

          {/* ═══════ SECTION: statistics ═══════ */}
          <section id="statistics" className="mt-16">
            <h2>소액결제현금화 시장 통계 및 트렌드</h2>

            <h3>국내 모바일 결제 시장 규모</h3>
            <p>한국의 모바일 결제 시장은 지난 10년간 폭발적으로 성장해왔습니다. 한국은행과 금융감독원의 자료에 따르면, 국내 모바일 결제 거래 규모는 2018년 28조원에서 2020년 100조원을 돌파하였으며, 2023년에는 약 174조원을 기록했습니다. 업계에서는 2026년까지 250조원 규모로 성장할 것으로 전망하고 있습니다.</p>

            <div className="my-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { value: '28조원', label: '2018년 시장', desc: '한국은행 기준' },
                { value: '100조원', label: '2020년 돌파', desc: '전년 대비 42% 성장' },
                { value: '174조원', label: '2023년 실적', desc: 'CAGR 31%' },
                { value: '250조원', label: '2026년 예상', desc: '업계 전망' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-toss-gray-200 bg-white p-4 text-center">
                  <p className="text-[22px] font-bold text-toss-blue md:text-[24px]">{s.value}</p>
                  <p className="mt-1 text-[13px] font-medium text-toss-gray-700">{s.label}</p>
                  <p className="text-[11px] text-toss-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>

            <h3>소액결제 이용 현황 통계</h3>
            <p>과학기술정보통신부와 이동통신사 공개 자료에 따르면, 2023년 기준 국내 소액결제 서비스 이용자는 약 2,423만 명으로, 전체 스마트폰 이용자의 약 50%에 달하는 것으로 나타났습니다.</p>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">연도</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">이용자 수</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">연간 거래액</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">평균 월 이용액</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                {[
                  ['2020', '1,890만 명', '약 4.2조원', '약 1만 8,000원'],
                  ['2021', '2,100만 명', '약 5.1조원', '약 2만원'],
                  ['2022', '2,280만 명', '약 5.8조원', '약 2만 1,000원'],
                  ['2023', '2,423만 명', '약 6.4조원', '약 2만 2,000원'],
                ].map(([y, users, vol, avg]) => (
                  <tr key={y} className="hover:bg-toss-gray-50/50">
                    <td className="px-4 py-3 font-medium text-toss-gray-900">{y}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{users}</td>
                    <td className="px-4 py-3 font-medium text-toss-blue">{vol}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{avg}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h3>이용자 연령대 분포</h3>
            <p>소액결제현금화 서비스 업체들의 자체 집계 및 업계 조사에 따르면, 이용자 연령대는 20대(31%), 30대(38%), 40대(21%), 50대 이상(10%)으로 30대가 가장 많고, 20~40대가 전체의 90%를 차지합니다.</p>
            <div className="my-6 flex flex-col gap-3">
              {[
                { age: '20대', pct: 31 },
                { age: '30대', pct: 38 },
                { age: '40대', pct: 21 },
                { age: '50대+', pct: 10 },
              ].map((d) => (
                <div key={d.age} className="flex items-center gap-4">
                  <span className="w-12 text-[14px] font-medium text-toss-gray-700">{d.age}</span>
                  <div className="flex-1 overflow-hidden rounded-full bg-toss-gray-100">
                    <div className="h-6 rounded-full bg-toss-blue transition-all" style={{ width: `${d.pct}%` }} />
                  </div>
                  <span className="w-10 text-right text-[14px] font-bold text-toss-blue">{d.pct}%</span>
                </div>
              ))}
            </div>

            <h3>주요 이용 목적</h3>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">이용 목적</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">비율</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">주요 이용자층</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                {[
                  ['긴급 생활비 마련', '35%', '20~30대 직장인/프리랜서'],
                  ['월세/관리비 납부', '22%', '30~40대 자영업자'],
                  ['의료비/약값 마련', '15%', '전 연령'],
                  ['사업 운전자금', '13%', '40대 자영업자'],
                  ['기타 (여행, 쇼핑 등)', '15%', '20~30대'],
                ].map(([purpose, rate, users]) => (
                  <tr key={purpose} className="hover:bg-toss-gray-50/50">
                    <td className="px-4 py-3 text-toss-gray-900">{purpose}</td>
                    <td className="px-4 py-3 font-bold text-toss-blue">{rate}</td>
                    <td className="px-4 py-3 text-toss-gray-600">{users}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h3>업계 동향 및 2026년 전망</h3>
            <p>소액결제현금화 시장은 2024~2026년 동안 몇 가지 중요한 변화가 예상됩니다.</p>
            <p><strong>첫째, 통신사의 결제 보안 강화입니다.</strong> SKT, KT, LG U+는 비정상 결제 패턴 탐지 시스템을 고도화하고 있어, 동일 IP에서 반복 결제나 고액 결제에 대한 자동 차단이 강화됩니다.</p>
            <p><strong>둘째, 핀테크 서비스의 확산입니다.</strong> 카카오페이, 네이버페이, 토스의 간편결제 규모가 커지면서 소액결제현금화의 대안으로 부상하고 있습니다. 다만 이들 서비스도 신용점수 조회가 필요한 경우가 있어 완전한 대체재는 아닙니다.</p>
            <p><strong>셋째, 수수료 경쟁 심화입니다.</strong> 시장 경쟁이 심화되면서 수수료가 전반적으로 하락하는 추세입니다. 2020년 평균 25~30%에서 2026년 현재 8~20%로 낮아졌습니다.</p>
          </section>

          {/* ═══════ SECTION: legal ═══════ */}
          <section id="legal" className="mt-16">
            <h2>소액결제현금화 관련 법률 완전 해설</h2>

            <div className="my-6 rounded-2xl border border-toss-red/30 bg-toss-red/5 p-5 md:p-6">
              <div className="flex items-start gap-3">
                <Scale className="mt-0.5 h-5 w-5 shrink-0 text-toss-red" />
                <div>
                  <p className="font-bold text-toss-gray-900">법률 안내 고지</p>
                  <p className="mt-1 text-[14px] leading-[1.7] text-toss-gray-600">아래 내용은 법률 정보 제공 목적으로 작성된 것으로, 법률 자문이 아닙니다. 구체적인 법률 문제는 반드시 변호사 또는 법무사와 상담하시기 바랍니다.</p>
                </div>
              </div>
            </div>

            <h3>1. 정보통신망법 제72조</h3>
            <p>정보통신망법 제72조(벌칙)는 소액결제 현금화와 가장 직접적으로 관련된 조항입니다.</p>
            <div className="my-4 rounded-xl border-l-4 border-toss-gray-300 bg-toss-gray-50 p-4 font-mono text-[13px] leading-[1.8] text-toss-gray-700">
              {'「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제72조 제1항 제2호'}<br />
              {'제72조(벌칙) ① 다음 각 호의 어느 하나에 해당하는 자는 3년 이하의 징역 또는 3천만원 이하의 벌금에 처한다.'}
            </div>
            <p>소액결제현금화 관련해서는 제32조(정보이용료 취소/환불 등)와 제50조의7(전자금융거래 제한)이 간접적으로 적용될 수 있습니다. 핵심은 &apos;재판매 목적으로 할인된 금액에 상품권 등을 구매하는 행위&apos;에 대한 해석입니다.</p>

            <h3>2. 전기통신사업법 제95조의2</h3>
            <div className="my-4 rounded-xl border-l-4 border-toss-gray-300 bg-toss-gray-50 p-4 font-mono text-[13px] leading-[1.8] text-toss-gray-700">
              {'「전기통신사업법」 제95조의2 (전기통신역무의 부정이용 금지)'}<br />
              {'제95조의2 ① 누구든지 정당한 사유 없이 전기통신역무의 제공에 관한 약관을 위반하여 전기통신역무를 이용하거나 이용자로 하여금 이용하게 하여서는 아니 된다.'}<br />
              {'② 제1항을 위반한 자는 3년 이하의 징역 또는 1억원 이하의 벌금에 처한다.'}
            </div>
            <p>통신사 이용 약관에는 일반적으로 &quot;소액결제를 본인의 콘텐츠 구매 외 목적으로 사용하는 행위&quot;를 금지하고 있습니다. 따라서 현금화 목적으로 소액결제를 반복적으로 사용하는 경우, 통신사로부터 서비스 이용 제한 조치를 받을 수 있습니다. 다만 이것은 민사적 계약 위반(서비스 해지)에 해당하는 것으로, 형사 처벌과는 구분됩니다.</p>

            <h3>3. 여신전문금융업법 (신용카드현금화 관련)</h3>
            <div className="my-4 rounded-xl border-l-4 border-toss-gray-300 bg-toss-gray-50 p-4 font-mono text-[13px] leading-[1.8] text-toss-gray-700">
              {'「여신전문금융업법」 제70조 제2항'}<br />
              {'제70조 ② 다음 각 호의 어느 하나에 해당하는 자는 3년 이하의 징역 또는 2천만원 이하의 벌금에 처한다.'}
            </div>
            <p>신용카드현금화(카드깡)는 소액결제현금화와 달리 명확히 불법으로 규정된 영역이 있습니다. 가맹점이 실제 물건이나 서비스를 제공하지 않고 카드 결제만 발생시켜 현금을 지급하는 행위는 위 조항에 따라 형사 처벌 대상이 됩니다.</p>

            <h3>4. 실제 판례 및 수사 사례</h3>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">연도</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">사건 유형</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">처벌 결과</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">적용 법조</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                {[
                  ['2022', '대규모 현금화 업체 운영', '징역 1년 6개월 집행유예 3년', '정보통신망법 위반'],
                  ['2023', '타인 명의 소액결제 현금화', '징역 2년 실형', '사기죄/전기통신사업법'],
                  ['2023', '카드깡 가맹점 운영', '벌금 2,000만원', '여신전문금융업법'],
                  ['2024', '피싱 통해 타인 소액결제 사용', '징역 3년', '사기죄'],
                  ['2025', '개인 소액결제현금화 1회 이용', '기소유예 또는 무혐의', '위법성 없음 판단'],
                ].map(([year, type, result, law]) => (
                  <tr key={`${year}-${type}`} className="hover:bg-toss-gray-50/50">
                    <td className="px-4 py-3 font-medium text-toss-gray-900">{year}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{type}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{result}</td>
                    <td className="px-4 py-3 text-[13px] text-toss-gray-500">{law}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <p>판례를 분석하면 명확한 패턴이 보입니다. 본인 명의, 1회성, 소액의 경우 개인 이용자는 형사 처벌로 이어지지 않았습니다. 반면 타인 명의 도용, 조직적 반복 운영, 피싱/사기와 결합된 경우에는 실형이 선고됐습니다.</p>

            <h3>5. 이용자가 주의해야 할 법적 포인트</h3>
            <div className="my-4 flex flex-col gap-3">
              {[
                '반드시 본인 명의 회선을 사용하세요. 타인 명의 회선을 무단으로 사용하면 사기죄(형법 제347조) 성립 가능성이 높습니다.',
                '업체의 사업자등록번호를 확인하세요. 사업자등록이 없는 개인이 운영하는 현금화 업체는 법적 보호를 받기 어렵습니다.',
                '과도한 개인정보를 요구하는 업체는 거절하세요. 주민등록번호, 공인인증서, 통장 비밀번호를 요구하면 금융사기일 수 있습니다.',
                '선입금 요구 업체는 100% 사기입니다. 합법적인 현금화 업체는 이용자로부터 선입금을 요구하지 않습니다.',
                '미성년자는 이용 불가합니다. 법정대리인(부모) 동의 없이 미성년자가 소액결제를 이용하면 취소 청구가 가능합니다.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl bg-toss-gray-50 p-4">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-toss-blue text-[11px] font-bold text-white">{i + 1}</span>
                  <p className="text-[14px] leading-[1.7] text-toss-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ═══════ SECTION: safety ═══════ */}
          <section id="safety" className="mt-16">
            <h2>안전하게 소액결제현금화를 이용하는 방법</h2>

            <h3>신뢰할 수 있는 업체 선별 기준 7가지</h3>
            <p>소액결제현금화 시장에는 신뢰할 수 있는 업체와 사기 업체가 혼재합니다. 아래 7가지 기준으로 업체를 선별하세요.</p>
            <div className="my-4 flex flex-col gap-2">
              {[
                '사업자등록번호 공개 여부 -- 공개된 사업자등록번호를 국세청 홈택스에서 직접 조회할 수 있어야 합니다.',
                '운영 기간 -- 1년 이상 운영한 업체가 안전합니다. 최근 오픈한 업체는 사기 위험이 높습니다.',
                '실제 후기 존재 여부 -- 네이버 블로그, 카페, 지식인에 실명 후기가 있는지 확인하세요.',
                '선입금 요구 없음 -- 합법적인 업체는 절대 선입금을 요구하지 않습니다.',
                '개인정보 최소 수집 -- 이름, 전화번호, 입금 계좌번호 외에 추가 정보를 요구하지 않아야 합니다.',
                '수수료 투명 공개 -- 수수료를 상담 전에 명확히 공개하는 업체를 선택하세요.',
                '연락처 실시간 응대 -- 전화, 문자, 카카오톡 중 하나 이상으로 실시간 응대가 가능해야 합니다.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-toss-gray-200 bg-white p-4">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-toss-green" />
                  <p className="text-[14px] leading-[1.7] text-toss-gray-700"><strong>{i + 1}.</strong> {item}</p>
                </div>
              ))}
            </div>

            <h3>소액결제 사기 유형 및 대처법</h3>
            <div className="my-4 flex flex-col gap-4">
              <div className="rounded-2xl border border-toss-red/20 bg-toss-red/3 p-5">
                <p className="font-bold text-toss-gray-900">유형 1 &mdash; 선입금 후 잠수 사기</p>
                <p className="mt-2 text-[14px] leading-[1.8] text-toss-gray-600">수수료 선납을 요구하며, 입금 후 연락이 끊기는 가장 흔한 사기 유형입니다. 합법적인 현금화 업체는 선입금을 요구하지 않으므로, 선입금을 요구하면 즉시 거절하세요.</p>
              </div>
              <div className="rounded-2xl border border-toss-red/20 bg-toss-red/3 p-5">
                <p className="font-bold text-toss-gray-900">유형 2 &mdash; 낚시 수수료 사기</p>
                <p className="mt-2 text-[14px] leading-[1.8] text-toss-gray-600">처음에는 매우 낮은 수수료(예: 3%)를 제시하고, 진행 중에 &quot;수수료가 올랐다&quot;, &quot;추가 수수료가 필요하다&quot;며 추가 비용을 요구합니다. 사전에 수수료를 문서(문자/카톡)로 확인받고 진행하세요.</p>
              </div>
              <div className="rounded-2xl border border-toss-red/20 bg-toss-red/3 p-5">
                <p className="font-bold text-toss-gray-900">유형 3 &mdash; 개인정보 탈취 사기</p>
                <p className="mt-2 text-[14px] leading-[1.8] text-toss-gray-600">현금화를 빌미로 주민등록번호, 공인인증서, 통장 비밀번호를 요구해 금융정보를 탈취합니다. 이러한 요구는 즉시 거절하고 경찰(112) 또는 금융감독원(1332)에 신고하세요.</p>
              </div>
            </div>

            <h3>보안 설정 체크리스트</h3>
            <div className="my-4 rounded-2xl bg-toss-gray-50 p-5 md:p-6">
              <ul className="flex flex-col gap-2.5">
                {[
                  '소액결제 비밀번호 설정 (통신사 앱에서 설정)',
                  '2단계 인증 활성화 (통신사 앱)',
                  '공공 Wi-Fi에서 소액결제 결제 금지',
                  'V3 모바일, 알약 등 보안 앱 설치',
                  '낯선 링크를 통한 소액결제 금지',
                  '결제 문자 수신 시 즉시 확인 습관',
                  '분기별 소액결제 한도 확인 및 불필요한 한도 하향 조정',
                  '사용하지 않는 경우 소액결제 완전 차단 설정',
                ].map((c) => (
                  <li key={c} className="flex items-center gap-3 text-[14px] text-toss-gray-700">
                    <Shield className="h-4 w-4 shrink-0 text-toss-blue" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ═══════ SECTION: compare ═══════ */}
          <section id="compare" className="mt-16">
            <h2>소액결제현금화 vs 신용카드현금화 vs 신용대출 완전 비교</h2>

            <h3>3가지 자금 조달 수단 비교표</h3>
            <Table>
              <thead>
                <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">비교 항목</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-blue">소액결제현금화</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">신용카드현금화</th>
                  <th className="px-4 py-3 text-left font-medium text-toss-gray-700">신용대출</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-toss-gray-100">
                {[
                  ['이용 가능자', '스마트폰 보유자 전원', '신용카드 소유자', '신용점수 600+ 이상'],
                  ['신용점수 영향', '없음', '없음 (연체 시 영향)', '조회 시 소폭 하락'],
                  ['최대 한도', '200만원/월', '카드 한도의 50~70%', '수천만원~수억원'],
                  ['수수료/이자', '수수료 20%~', '수수료 8~15%', '연 이자 3~20%'],
                  ['처리 속도', '5~10분', '5~15분', '1일~1주일'],
                  ['서류 필요', '없음', '없음', '소득증빙, 재직증명 등'],
                  ['상환 방법', '다음 달 통신요금', '다음 달 카드 청구', '매월 분할 상환'],
                  ['금융감독원 등록', '없음', '없음', '있음'],
                  ['연체 시 영향', '통신 연체', '카드 연체', '금융 연체'],
                  ['장기 이용', '부적합', '부적합', '적합'],
                ].map(([item, micro, card, loan]) => (
                  <tr key={item} className="hover:bg-toss-gray-50/50">
                    <td className="px-4 py-3 font-medium text-toss-gray-900">{item}</td>
                    <td className="px-4 py-3 font-medium text-toss-blue">{micro}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{card}</td>
                    <td className="px-4 py-3 text-toss-gray-700">{loan}</td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <h3>언제 어떤 수단을 선택해야 하는가?</h3>
            <div className="my-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border-2 border-toss-blue bg-toss-blue/3 p-5">
                <p className="mb-2 font-bold text-toss-blue">소액결제현금화</p>
                <p className="text-[14px] leading-[1.7] text-toss-gray-600">즉시 현금 필요(5~10분 내), 신용카드가 없거나 한도 소진, 신용점수가 낮아 대출 거절, 금액이 소액(30만~200만원), 한 달 안에 상환 가능한 경우.</p>
              </div>
              <div className="rounded-2xl border border-toss-gray-200 bg-white p-5">
                <p className="mb-2 font-bold text-toss-gray-900">신용카드현금화</p>
                <p className="text-[14px] leading-[1.7] text-toss-gray-600">소액결제 한도 소진, 신용카드 한도가 충분히 남아있음, 수수료를 조금이라도 낮추고 싶음, 빠른 처리가 필요한 경우.</p>
              </div>
              <div className="rounded-2xl border border-toss-gray-200 bg-white p-5">
                <p className="mb-2 font-bold text-toss-gray-900">신용대출</p>
                <p className="text-[14px] leading-[1.7] text-toss-gray-600">200만원 이상의 목돈 필요, 안정적인 소득이 있어 월 상환 가능, 신용점수 600점 이상, 심사 기간을 기다릴 수 있는 경우.</p>
              </div>
            </div>
          </section>

          {/* ═══════ SECTION: faq ═══════ */}
          <section id="faq" className="mt-16">
            <h2>자주 묻는 질문 (FAQ)</h2>
            <FaqAccordion />
          </section>

          {/* ═══════ SECTION: directory ═══════ */}
          <section id="directory" className="mt-16">
            <h2>소액결제현금화 추천 업체 디렉터리</h2>

            <div className="my-6 rounded-2xl border border-toss-blue/20 bg-toss-blue/5 p-5 md:p-6">
              <p className="text-[14px] leading-[1.7] text-toss-gray-700">
                <strong className="text-toss-blue">업체 디렉터리 안내</strong> &mdash; 본 디렉터리에 등록된 업체들은 사업자등록 확인, 운영 기간(1년 이상), 이용자 후기 검증, 수수료 투명성 등 4가지 기준을 통과한 업체들입니다.
              </p>
            </div>

            <div className="my-6 grid gap-4 md:grid-cols-3">
              {[
                { name: '청년티켓', services: '소액결제현금화, 정보이용료현금화', fee: '20%~', speed: '평균 7분', tel: '010-5738-0192' },
                { name: '페이론', services: '소액결제현금화, 신용카드현금화', fee: '7~13%', speed: '평균 8분', tel: '010-7775-0095' },
                { name: '다다뱅크', services: '소액결제현금화, 정보이용료현금화, 카드깡', fee: '8~15%', speed: '평균 10분', tel: '1877-4498' },
              ].map((biz) => (
                <div key={biz.name} className="flex flex-col rounded-2xl border border-toss-gray-200 bg-white p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4 text-toss-blue" />
                    <span className="text-[12px] font-medium text-toss-blue">추천</span>
                  </div>
                  <p className="text-[18px] font-bold text-toss-gray-900">{biz.name}</p>
                  <p className="mt-2 text-[13px] text-toss-gray-500">{biz.services}</p>
                  <div className="mt-4 flex flex-col gap-1.5 text-[13px]">
                    <div className="flex justify-between"><span className="text-toss-gray-500">수수료</span><span className="font-medium text-toss-gray-900">{biz.fee}</span></div>
                    <div className="flex justify-between"><span className="text-toss-gray-500">처리속도</span><span className="font-medium text-toss-gray-900">{biz.speed}</span></div>
                    <div className="flex justify-between"><span className="text-toss-gray-500">연락처</span><span className="font-medium text-toss-blue">{biz.tel}</span></div>
                  </div>
                  <a href={`tel:${biz.tel}`} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-toss-blue py-3 text-[14px] font-medium text-white transition-colors hover:bg-toss-blue-dark">
                    <Phone className="h-4 w-4" /> 상담하기
                  </a>
                </div>
              ))}
            </div>

            <p className="text-[12px] text-toss-gray-400">
              {"본 사이트는 「전자상거래 등에서의 소비자보호에 관한 법률」 제20조에 따른 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서 본 사이트는 등록된 업체에서 제공하는 서비스에 대한 의무와 책임이 없습니다."}
            </p>
          </section>

          {/* ═══════ SECTION: internal links ═══════ */}
          <section className="mt-16">
            <h2>관련 서비스 더 알아보기</h2>
            <div className="my-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                { href: '/info-fee', title: '정보이용료 현금화', sub: '구글플레이/앱스토어 활용', badge: '한도 +100만원' },
                { href: '/credit-card', title: '신용카드 현금화', sub: '수수료 8~15%', badge: '카드한도 50~70%' },
                { href: '/card-cash', title: '카드깡 가이드', sub: '법적 주의사항 포함', badge: '안전 이용법' },
                { href: '/policy-default', title: '소액결제 정책미납', sub: '연체 해결 방법', badge: '차단 해제 가이드' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group rounded-2xl border border-toss-gray-200 bg-white p-4 transition-all hover:border-toss-blue/30 hover:shadow-md md:p-5">
                  <p className="text-[15px] font-bold text-toss-gray-900 group-hover:text-toss-blue md:text-[16px]">{l.title}</p>
                  <p className="mt-1 text-[13px] text-toss-gray-500">{l.sub}</p>
                  <span className="mt-3 inline-block rounded-full bg-toss-blue/8 px-2.5 py-0.5 text-[11px] font-medium text-toss-blue">{l.badge}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ═══════ SECTION: final CTA ═══════ */}
          <section className="mt-16 rounded-3xl bg-toss-blue p-8 text-center md:p-12">
            <h2 className="!mt-0 !mb-4 text-[22px] font-bold !text-white md:text-[28px]">지금 바로 소액결제현금화 무료 상담 받으세요</h2>
            <p className="!mb-8 text-[15px] !text-white/80">24시간 365일 언제든지 &mdash; 평균 5분 내 처리 &mdash; 수수료 8%~</p>
            <div className="mb-6 flex flex-wrap justify-center gap-4 text-[13px] font-medium text-white/90">
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> 개인정보 안전 보호</span>
              <span className="flex items-center gap-1.5"><Zap className="h-4 w-4" /> 평균 입금 5~10분</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4" /> 선입금 없음</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="https://open.kakao.com/o/seuka3hi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FEE500] px-8 py-4 text-[15px] font-bold text-[#3C1E1E] shadow-lg transition-all hover:brightness-95"
                aria-label="카카오톡 상담"
              >
                <MessageCircle className="h-4 w-4" />
                카카오톡 상담하기
              </a>
              <a
                href="tel:010-9999-6484"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-[15px] font-bold text-toss-blue shadow-lg transition-all hover:bg-toss-gray-50"
                aria-label="전화 상담"
              >
                <Phone className="h-4 w-4" />
                전화 상담하기
              </a>
            </div>
            <p className="mt-4 text-[13px] text-white/60">선입금 없음 &middot; 신용조회 없음 &middot; 24시간 운영</p>
          </section>

        </article>
      </div>

      {/* ═══════ MOBILE FIXED BOTTOM CTA ═══════ */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-toss-gray-200 bg-white/95 px-4 py-3 backdrop-blur-xl md:hidden">
        <div className="flex gap-2">
          <a
            href="https://open.kakao.com/o/seuka3hi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#FEE500] py-3 text-[13px] font-bold text-[#3C1E1E] transition-all"
            aria-label="카카오톡 상담"
          >
            <MessageCircle className="h-4 w-4" />
            {"카카오톡"}
          </a>
          <a
            href="tel:010-9999-6484"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-toss-blue py-3 text-[13px] font-bold text-white transition-all"
            aria-label="전화 상담"
          >
            <Phone className="h-4 w-4" />
            {"전화"}
          </a>
          <Link
            href="/contact"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-toss-gray-200 bg-white py-3 text-[13px] font-bold text-toss-gray-800 transition-all"
            aria-label="채팅 상담"
          >
            <MessageCircle className="h-4 w-4" />
            {"채팅"}
          </Link>
        </div>
      </div>
    </>
  )
}
