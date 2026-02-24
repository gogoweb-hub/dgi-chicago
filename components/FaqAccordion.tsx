'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FaqItem {
  q: string
  a: string
}

const faqs: FaqItem[] = [
  {
    q: '소액결제현금화가 합법인가요?',
    a: '소액결제현금화 자체는 법으로 명시적으로 금지된 행위가 아닙니다. 다만 이용 방식과 목적에 따라 통신사 이용 약관 위반 또는 정보통신망법의 적용을 받을 수 있습니다. 본인 명의, 개인적 사용 목적의 1회성 이용은 형사 처벌 사례가 거의 없으나, 타인 명의 사용이나 조직적 반복 이용은 법적 리스크가 있습니다. 합법적인 업체를 통해 이용하시면 보다 안전합니다.',
  },
  {
    q: '소액결제 한도가 얼마인가요?',
    a: '통신사별로 월 최대 30만원~100만원이며, 정보이용료 한도(최대 100만원)를 포함하면 월 최대 200만원까지 현금화가 가능합니다. 한도는 개통 이력, 요금제, 납부 이력에 따라 개인별로 다르게 설정됩니다. T world, My KT, U+ 앱에서 실시간 확인 가능합니다.',
  },
  {
    q: '당일 입금이 정말 가능한가요?',
    a: '네, 가능합니다. 신청 후 평균 5~10분 내 입금 처리됩니다. 24시간 365일 운영하므로 야간, 주말, 공휴일에도 동일하게 서비스됩니다. 다만 은행 점검 시간(자정 전후 30분)에는 입금이 지연될 수 있습니다.',
  },
  {
    q: '수수료는 얼마인가요?',
    a: '서비스 유형에 따라 다릅니다. 소액결제현금화는 수수료 20%~, 정보이용료현금화도 20%~ 수준입니다. 신용카드현금화와 카드깡은 8~15%입니다. 예를 들어 100만원 신청 시 소액결제 기준 ~80만원을 수령하게 됩니다.',
  },
  {
    q: '신용불량자(금융채무불이행자)도 이용할 수 있나요?',
    a: '네, 이용 가능합니다. 소액결제현금화는 신용카드나 대출과 달리 신용점수와 완전히 무관합니다. 정상적으로 사용 중인 스마트폰(선불폰, 법인폰, 미성년자 명의 제외)만 있으면 신용점수 0점인 분도 이용할 수 있습니다.',
  },
  {
    q: '소액결제가 안 되는 이유는 무엇인가요?',
    a: '주요 원인은 한도 초과(에러 50, 57), 미납 요금(에러 414, 432, 615), 개통 3개월 미만 신규 회선(에러 437, 605), 법인/미성년자 명의, 선불 요금제, IP 차단(에러 59), 소액결제 비밀번호 미설정(에러 515)입니다. 자세한 해결 방법은 위의 오류코드 해결 섹션을 참고하세요.',
  },
  {
    q: '소액결제와 정보이용료현금화의 차이는 무엇인가요?',
    a: '소액결제는 온라인 쇼핑몰이나 콘텐츠 플랫폼에서 직접 결제하는 방식이고, 정보이용료는 구글플레이, 앱스토어를 통한 앱 내 결제입니다. 두 가지는 별도의 한도를 가지며, 합산 시 월 최대 200만원까지 현금화가 가능합니다. 정보이용료는 구글 계정 또는 애플 ID가 필요합니다.',
  },
  {
    q: '개인정보는 안전한가요?',
    a: '저희 서비스에서는 이름, 전화번호, 입금 계좌번호 외에 추가 개인정보를 수집하지 않습니다. 주민등록번호, 공인인증서, 통장 비밀번호 등을 요구하는 업체는 사기 가능성이 매우 높으니 즉시 거절하고 신고하시기 바랍니다.',
  },
  {
    q: '통신요금 연체하면 어떻게 되나요?',
    a: '통신요금 미납 시 연체이자(연 2~3.5%)가 부과됩니다. 2개월 이상 연체 시 서비스 일시정지, 3개월 이상 시 완전 해지될 수 있으며, 장기 연체는 신용점수에 영향을 줄 수 있습니다. 반드시 납부 가능한 금액 내에서 이용하시고, 이용 전에 다음 달 통신요금 납부 계획을 수립하세요.',
  },
  {
    q: '이용 절차가 어떻게 되나요?',
    a: '상담 신청(전화, 문자) -> 희망 금액 및 통신사 확인 -> 상품권 또는 정보이용료 결제 링크 안내 -> 결제 완료 후 핀번호/스크린샷 전달 -> 수수료 차감 후 5~10분 내 입금. 전 과정은 비대면으로 진행되며 24시간 이용 가능합니다.',
  },
]

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-2">
      {faqs.map((item, i) => {
        const isOpen = openIdx === i
        return (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? 'border-toss-blue/20 bg-toss-blue/3' : 'border-toss-gray-200 bg-white'
            }`}
          >
            <button
              onClick={() => setOpenIdx(isOpen ? null : i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left md:px-6 md:py-5"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3 pr-4 text-[15px] font-medium text-toss-gray-900 md:text-[16px]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-toss-blue/10 text-[11px] font-bold text-toss-blue">
                  {i + 1}
                </span>
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-toss-gray-400 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-200 ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pl-14 text-[14px] leading-[1.8] text-toss-gray-600 md:px-6 md:pb-6 md:pl-[60px] md:text-[15px]">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
