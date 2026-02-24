import type { Metadata, Viewport } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCta from '@/components/FloatingCta'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dgi-chicago.com'),
  title: {
    default: '소액결제현금화 24시 한도 해결 전문 | 시카고페이 dgi-chicago',
    template: '%s | 시카고페이 dgi-chicago',
  },
  description:
    '사업자번호 664-87-98454 정식 등록 업체. 소액결제현금화 정의·수수료·한도·오류코드·법률·사례연구까지 국내 최대 분량 완전 가이드. SKT·KT·LG U+ 전 통신사 지원, 당일입금 5분 승인, 수수료 8%~.',
  keywords: [
    '소액결제현금화',
    '소액결제 현금화',
    '핸드폰소액결제현금화',
    '정보이용료현금화',
    '신용카드현금화',
    '카드깡',
    '문화상품권현금화',
    '당일입금',
    '소액결제 한도',
    '다날 오류코드',
    '소액결제 수수료',
  ],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dgi-chicago.com',
    siteName: '시카고페이 dgi-chicago',
    title: '소액결제현금화 24시 한도 해결 전문 | 시카고페이 dgi-chicago',
    description:
      '당일입금 5분 승인, 수수료 8%~, 24시간 운영. 법률·사례연구·통계 포함.',
    images: [{ url: 'https://dgi-chicago.com/og.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '소액결제현금화 24시 한도 해결 전문 | 시카고페이 dgi-chicago',
    description: '소액결제현금화 5분 승인 당일입금. 전 통신사 지원.',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://dgi-chicago.com' },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

/* ── Schema 1: WebSite ── */
const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://dgi-chicago.com/#website',
  name: 'dgi-chicago',
  url: 'https://dgi-chicago.com',
  description:
    '소액결제현금화, 정보이용료현금화, 신용카드현금화 전문 정보 사이트. 당일입금, 낮은수수료, 24시간 안내.',
  inLanguage: 'ko-KR',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://dgi-chicago.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'dgi-chicago',
    url: 'https://dgi-chicago.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dgi-chicago.com/favicon.png',
      width: 32,
      height: 32,
    },
  },
}

/* ── Schema 2: FinancialService + AggregateRating + Reviews ── */
const jsonLdService = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': 'https://dgi-chicago.com/#service',
  name: '소액결제현금화 전문 서비스',
  alternateName: ['소액결제 현금화', '핸드폰소액결제현금화', '정보이용료현금화'],
  description:
    'SKT KT LG U+ 전 통신사 소액결제현금화 전문. 정보이용료현금화, 신용카드현금화, 카드깡 서비스. 당일입금 5분 승인, 수수료 8%~, 24시간 연중무휴 운영.',
  url: 'https://dgi-chicago.com',
  telephone: '010-9999-6484',
  email: 'contact@dgi-chicago.com',
  areaServed: {
    '@type': 'Country',
    name: '대한민국',
    sameAs: 'https://www.wikidata.org/wiki/Q884',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  priceRange: '수수료 8%~',
  currenciesAccepted: 'KRW',
  paymentAccepted: '현금',
  serviceType: [
    '소액결제현금화',
    '정보이용료현금화',
    '신용카드현금화',
    '카드깡',
    '문화상품권현금화',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '1247',
    reviewCount: '1247',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: '김**' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        '급하게 현금이 필요했는데 5분 만에 입금됐습니다. 수수료도 합리적이고 친절하게 안내해줬어요.',
      datePublished: '2025-12-01',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: '이**' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        '다른 업체보다 수수료가 낮고 빠릅니다. 재이용 의사 100%입니다.',
      datePublished: '2026-01-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: '박**' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody:
        '신용불량자라 걱정했는데 아무 문제 없이 이용했어요. 진짜 당일입금 맞네요.',
      datePublished: '2026-02-03',
    },
  ],
}

/* ── Schema 3: FAQPage (10 Q&A) ── */
const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '소액결제현금화가 합법인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '소액결제현금화 자체는 법으로 명시적으로 금지된 행위가 아닙니다. 다만 정보통신망법 제72조에 따라 재판매 목적의 할인 구매는 불법 방조 소지가 있을 수 있으므로, 신뢰할 수 있는 업체를 통한 이용이 중요합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '소액결제 한도가 얼마인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '통신사별로 월 최대 30만원~100만원이며, 정보이용료 한도 최대 100만원을 포함하면 월 최대 200만원까지 현금화가 가능합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '당일 입금이 정말 가능한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 가능합니다. 신청 후 평균 5~10분 내 입금 처리됩니다. 24시간 365일 운영하므로 야간 주말 공휴일에도 동일하게 서비스됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '수수료는 얼마인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '서비스 유형에 따라 다릅니다. 소액결제현금화는 수수료 20%~ 수준이며, 정보이용료현금화도 20%~ 수준입니다. 신용카드현금화와 카드깡은 8~15% 수준입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '신용불량자(금융채무불이행자)도 이용할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네, 이용 가능합니다. 소액결제현금화는 신용카드나 대출과 달리 신용점수와 무관하며, 정상적으로 사용 중인 스마트폰(선불폰 법인폰 제외)만 있으면 누구나 신청할 수 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '소액결제가 안 되는 이유는 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '소액결제 오류의 주요 원인은 한도 초과, 미납 요금, 개통 3개월 미만 신규 회선, 법인 미성년자 명의, 선불 요금제, IP 차단(에러코드 59), 소액결제 비밀번호 미설정(에러코드 515) 등입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '소액결제와 정보이용료현금화의 차이는 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '소액결제는 온라인 콘텐츠 게임 아이템 등 구매 후 다음 달 통신요금에 합산 청구되는 방식입니다. 정보이용료는 앱스토어 구글플레이 등 플랫폼을 통한 디지털 콘텐츠 구매 요금입니다. 두 가지 한도를 합산하면 월 최대 200만원까지 현금화가 가능합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '개인정보는 안전한가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '저희는 이름, 전화번호, 입금 계좌번호 외에는 추가 개인정보를 요구하지 않습니다. 과도한 개인정보(주민등록번호, 공인인증서, 통장 비밀번호 등)를 요구하는 업체는 사기일 가능성이 높으니 즉시 거절하시기 바랍니다.',
      },
    },
    {
      '@type': 'Question',
      name: '소액결제 현금화 후 통신요금 연체하면 어떻게 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '통신요금 미납 시 연체이자(연 2~3.5%)가 부과되며, 2개월 이상 연체 시 서비스 일시정지, 3개월 이상 연체 시 완전 해지될 수 있습니다. 장기 연체 시 신용점수에 영향을 줄 수 있으므로 반드시 납부 가능한 금액 내에서 이용하시기 바랍니다.',
      },
    },
    {
      '@type': 'Question',
      name: '이용 절차가 어떻게 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '상담 신청(전화 카카오톡) -> 희망 금액 및 통신사 확인 -> 상품권 또는 정보이용료 결제 안내 -> 결제 완료 확인 -> 수수료 차감 후 5~10분 내 입금. 전 과정은 비대면으로 진행되며 24시간 이용 가능합니다.',
      },
    },
  ],
}

/* ── Schema 4: Article ── */
const jsonLdArticle = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://dgi-chicago.com/#article',
  headline:
    '소액결제현금화 완벽 가이드 2026 -- 수수료 한도 방법 주의사항 법률',
  description:
    '소액결제현금화의 정의, 이용 방법, 수수료 비교, 한도 확인, 다날 오류코드, 법률 주의사항까지 국내 최대 분량의 완전 가이드.',
  image: {
    '@type': 'ImageObject',
    url: 'https://dgi-chicago.com/og.jpg',
    width: 1200,
    height: 630,
  },
  author: {
    '@type': 'Organization',
    name: 'dgi-chicago',
    url: 'https://dgi-chicago.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'dgi-chicago',
    logo: {
      '@type': 'ImageObject',
      url: 'https://dgi-chicago.com/favicon.png',
      width: 32,
      height: 32,
    },
  },
  datePublished: '2025-01-01T09:00:00+09:00',
  dateModified: '2026-02-23T09:00:00+09:00',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://dgi-chicago.com',
  },
  articleSection: '소액결제현금화',
  keywords: [
    '소액결제현금화',
    '소액결제 현금화',
    '핸드폰소액결제현금화',
    '정보이용료현금화',
    '신용카드현금화',
    '카드깡',
    '문화상품권현금화',
    '당일입금',
    '소액결제 한도',
    '다날 오류코드',
  ],
  wordCount: 30000,
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  about: [
    {
      '@type': 'Thing',
      name: '소액결제현금화',
      description:
        '모바일 소액결제 한도를 이용해 상품권 등을 구매 후 현금으로 전환하는 서비스',
    },
    {
      '@type': 'Thing',
      name: '정보이용료현금화',
      description:
        '구글플레이 앱스토어 정보이용료 한도를 이용한 현금화 서비스',
    },
  ],
}

/* ── Schema 5: BreadcrumbList ── */
const jsonLdBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://dgi-chicago.com' },
    { '@type': 'ListItem', position: 2, name: '소액결제현금화', item: 'https://dgi-chicago.com' },
    { '@type': 'ListItem', position: 3, name: '정보이용료현금화', item: 'https://dgi-chicago.com/info-fee' },
    { '@type': 'ListItem', position: 4, name: '신용카드현금화', item: 'https://dgi-chicago.com/credit-card' },
    { '@type': 'ListItem', position: 5, name: '카드깡', item: 'https://dgi-chicago.com/card-cash' },
    { '@type': 'ListItem', position: 6, name: '문의하기', item: 'https://dgi-chicago.com/contact' },
  ],
}

const schemas = [jsonLdWebSite, jsonLdService, jsonLdFaq, jsonLdArticle, jsonLdBreadcrumb]
const stringifiedSchemas = schemas.map((schema) => JSON.stringify(schema))

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={notoSansKR.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        {stringifiedSchemas.map((json, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: json }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <FloatingCta />
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
