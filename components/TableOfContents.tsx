'use client'

import { useState, useEffect } from 'react'

const tocItems = [
  { id: 'definition', label: '소액결제현금화란?' },
  { id: 'fees', label: '수수료 및 한도 분석' },
  { id: 'errors', label: '오류코드 해결법' },
  { id: 'types', label: '현금화 종류별 비교' },
  { id: 'howto', label: '이용 방법 5단계' },
  { id: 'cases', label: '실제 사례연구 3건' },
  { id: 'statistics', label: '시장 통계 및 트렌드' },
  { id: 'legal', label: '관련 법률 해설' },
  { id: 'safety', label: '안전하게 이용하는 법' },
  { id: 'compare', label: '소액결제 vs 카드 vs 대출' },
  { id: 'faq', label: '자주 묻는 질문' },
  { id: 'directory', label: '추천 업체 디렉터리' },
]

export default function TableOfContents() {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    )
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden lg:block" aria-label="Table of Contents">
      <div className="sticky top-24 w-56 xl:w-64">
        <p className="mb-4 text-[13px] font-bold uppercase tracking-wider text-toss-gray-400">
          목차
        </p>
        <ul className="flex flex-col gap-0.5">
          {tocItems.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[13px] transition-all ${
                  activeId === id
                    ? 'bg-toss-blue/8 font-medium text-toss-blue'
                    : 'text-toss-gray-500 hover:bg-toss-gray-50 hover:text-toss-gray-700'
                }`}
              >
                <span className="min-w-[18px] text-[11px] text-toss-gray-400">{String(i + 1).padStart(2, '0')}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
