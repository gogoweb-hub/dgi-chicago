import type { Metadata } from "next"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "소액결제현금화 전문 서비스의 이용약관입니다. 서비스 목적, 이용 조건, 면책 조항, 분쟁 해결 방법 등을 안내합니다.",
  alternates: { canonical: `${SITE_URL}/terms` },
}

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "이용약관",
      item: `${SITE_URL}/terms`,
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-black text-foreground md:text-4xl">
              이용약관
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {"시행일: 2026년 1월 1일"}
            </p>
          </div>

          <div className="prose-toss mt-12 space-y-10">
            {/* 1 */}
            <section>
              <h2>제1조 (목적)</h2>
              <p>
                {"본 약관은 dgi-chicago(이하 \"서비스\")가 제공하는 정보 서비스의 이용 조건 및 절차, 서비스 운영자와 이용자 간의 권리·의무 및 책임 사항, 기타 필요한 사항을 규정함을 목적으로 합니다."}
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2>제2조 (서비스의 성격)</h2>
              <p>
                {"본 서비스는 소액결제현금화, 정보이용료현금화, 신용카드현금화 등에 관한 정보 제공 및 상담 안내 서비스입니다. 본 서비스는 직접 금융 서비스를 제공하거나 대출을 중개하는 기관이 아니며, 이용자와 현금화 서비스 업체 간의 거래에 대한 정보를 안내하는 역할을 합니다."}
              </p>
              <div className="rounded-xl border border-toss-blue/20 bg-toss-blue-light p-5">
                <p className="text-[14px] font-medium leading-[1.7] text-toss-blue-dark">
                  {"본 서비스는 금융위원회에 등록된 금융기관이 아니며, 직접적인 금전 대출 또는 금융 상품을 판매하지 않습니다. 모든 거래 결정은 이용자 본인의 판단과 책임하에 이루어집니다."}
                </p>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2>제3조 (이용 조건)</h2>
              <ul>
                <li>{"만 19세 이상의 본인 명의 휴대폰 소지자에 한해 서비스 이용이 가능합니다."}</li>
                <li>{"이용자는 서비스 이용 시 정확한 정보를 제공해야 하며, 허위 정보 제공으로 인한 불이익은 이용자 본인에게 귀속됩니다."}</li>
                <li>{"타인 명의의 휴대폰을 이용한 서비스 신청은 관련 법령에 의해 처벌받을 수 있습니다."}</li>
                <li>{"이용자는 서비스 이용 후 발생하는 통신요금 납부 의무를 성실히 이행해야 합니다."}</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2>제4조 (서비스의 제공 및 변경)</h2>
              <p>
                {"서비스 운영자는 다음과 같은 서비스를 제공합니다."}
              </p>
              <ul>
                <li>{"소액결제현금화 관련 정보 제공"}</li>
                <li>{"수수료 계산기, 한도 확인 등 온라인 도구 제공"}</li>
                <li>{"카카오톡을 통한 실시간 상담 서비스"}</li>
                <li>{"소액결제현금화 관련 블로그 콘텐츠 제공"}</li>
              </ul>
              <p>
                {"서비스의 내용은 운영 상황에 따라 사전 공지 후 변경될 수 있으며, 변경 사항은 사이트 내 공지를 통해 안내합니다."}
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2>제5조 (면책 조항)</h2>
              <ul>
                <li>{"서비스 운영자는 정보 제공 및 상담 안내 역할만 수행하며, 이용자가 제3자 업체와 진행하는 실제 거래에 대해서는 직접적인 책임을 지지 않습니다."}</li>
                <li>{"서비스에서 제공하는 수수료, 한도, 법률 정보 등은 참고용이며, 실제 거래 조건은 업체 및 통신사 정책에 따라 달라질 수 있습니다."}</li>
                <li>{"천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해서는 책임을 지지 않습니다."}</li>
                <li>{"이용자가 서비스를 통해 얻은 정보를 바탕으로 내린 판단과 그로 인한 결과에 대해 서비스 운영자는 책임을 지지 않습니다."}</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2>제6조 (이용자의 의무)</h2>
              <ul>
                <li>{"이용자는 본 약관 및 관련 법령을 준수해야 합니다."}</li>
                <li>{"타인의 개인정보를 도용하거나, 서비스를 부정한 목적으로 이용해서는 안 됩니다."}</li>
                <li>{"서비스 이용 후 발생하는 통신요금, 정보이용료 등의 납부 의무는 전적으로 이용자에게 있습니다."}</li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2>제7조 (분쟁 해결)</h2>
              <p>
                {"서비스 이용과 관련하여 분쟁이 발생한 경우, 양 당사자는 원만한 합의를 위해 성실히 협의합니다. 협의가 이루어지지 않는 경우, 다음 절차에 따라 해결합니다."}
              </p>
              <ul>
                <li>{"한국인터넷진흥원(KISA) 개인정보침해신고센터를 통한 조정"}</li>
                <li>{"한국소비자원 소비자분쟁조정위원회를 통한 조정"}</li>
                <li>{"관할 법원에 의한 소송 (서비스 운영자 소재지 관할 법원)"}</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2>제8조 (준거법)</h2>
              <p>
                {"본 약관의 해석 및 적용에 관하여는 대한민국 법률을 준거법으로 합니다. 서비스 이용과 관련하여 발생하는 모든 분쟁에 대해서는 대한민국 법원에 전속 관할권이 있습니다."}
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2>제9조 (약관의 변경)</h2>
              <p>
                {"서비스 운영자는 관련 법령을 위배하지 않는 범위 내에서 본 약관을 변경할 수 있으며, 변경 시 시행일 7일 전 사이트 내 공지를 통해 안내합니다. 이용자가 변경된 약관에 동의하지 않는 경우 서비스 이용을 중단할 수 있습니다."}
              </p>
            </section>

            {/* 부칙 */}
            <section>
              <h2>부칙</h2>
              <p>
                {"본 약관은 2026년 1월 1일부터 시행됩니다."}
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
