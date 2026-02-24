"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "소액결제현금화가 합법인가요?",
    answer: "네, 합법입니다. 본인 명의 기기로 디지털 상품을 구매 후 판매하는 방식으로, 현행법상 위법이 아닙니다. 단, 타인 명의 사용이나 허위 거래는 불법입니다.",
  },
  {
    question: "소액결제 한도는 얼마나 되나요?",
    answer: "통신사별 월 30~100만원입니다. SKT 기본 50만원, KT와 LG U+도 유사하며 신용 등급과 가입 기간에 따라 한도 상향이 가능합니다.",
  },
  {
    question: "당일 입금이 정말 가능한가요?",
    answer: "네, 가능합니다. 정상적인 한도와 신청 완료 시 평균 5~10분 내 입금됩니다. 은행 점검 시간(23:30~00:30)에는 다소 지연될 수 있습니다.",
  },
  {
    question: "수수료는 어떻게 계산되나요?",
    answer: "서비스 유형에 따라 다릅니다. 소액결제/정보이용료현금화는 20%~, 신용카드현금화/카드깡은 8~15% 수준입니다. 정확한 수수료는 상담 시 안내드립니다.",
  },
  {
    question: "미납 상태에서도 이용 가능한가요?",
    answer: "소액결제 정책 미납이 있을 경우 이용이 제한될 수 있습니다. 미납 해소 방법은 전문 상담사가 안내해드립니다.",
  },
  {
    question: "신용불량자도 이용 가능한가요?",
    answer: "소액결제현금화는 통신사 한도 기반이므로 신용불량 여부와 관계없이 본인 명의 휴대폰만 있으면 이용 가능합니다.",
  },
  {
    question: "어떤 통신사를 지원하나요?",
    answer: "SKT, KT, LG U+ 3대 통신사를 모두 지원합니다. MVNO(알뜰폰)는 통신사별 정책에 따라 달라질 수 있으니 상담을 통해 확인해 주세요.",
  },
  {
    question: "개인정보는 안전한가요?",
    answer: "거래 시 최소한의 정보만 수집하며, 개인정보보호법에 따라 거래 완료 후 즉시 폐기됩니다. 제3자 제공 없음을 보장합니다.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function FaqSection() {
  return (
    <section id="faq" className="border-t border-toss-gray-100 bg-toss-gray-50 py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
        <p className="text-[13px] font-bold tracking-widest text-toss-blue">FAQ</p>
        <h2 className="mt-2 text-[24px] font-black text-toss-gray-900 md:text-[30px]">
          자주 묻는 질문
        </h2>

        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-toss-gray-200/60"
              >
                <AccordionTrigger className="py-5 text-left text-[14px] font-bold text-toss-gray-800 hover:text-toss-blue hover:no-underline md:text-[15px] [&[data-state=open]]:text-toss-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[14px] leading-[1.8] text-toss-gray-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
