"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navLinks = [
  { label: "소액결제현금화", href: "/" },
  { label: "정보이용료", href: "/info-fee" },
  { label: "신용카드", href: "/credit-card" },
  { label: "카드깡", href: "/card-cash" },
  { label: "정책미납", href: "/policy-default" },
  { label: "도구", href: "/tools" },
  { label: "블로그", href: "/blog" },
  { label: "문의", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-toss-gray-100 bg-white/95 backdrop-blur-xl"
          : "bg-white"
      )}
    >
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-3 lg:px-6">
        <Link
          href="/"
          className="text-[18px] font-bold tracking-tight text-toss-gray-900"
          aria-label="시카고페이 홈"
        >
          시카고<span className="text-toss-blue">페이</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-[14px] font-medium text-toss-gray-600 transition-colors hover:bg-toss-gray-50 hover:text-toss-gray-900"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://open.kakao.com/o/seuka3hi"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-xl bg-toss-blue px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-toss-blue-dark"
            aria-label="카카오 상담"
          >
            무료 상담
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-toss-gray-700 transition-colors hover:bg-toss-gray-50 lg:hidden"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-b border-toss-gray-100 bg-white transition-all duration-300 lg:hidden",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 border-b-0 opacity-0"
        )}
      >
        <div className="flex flex-col gap-0.5 px-4 pb-4 pt-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-[15px] font-medium text-toss-gray-600 transition-colors hover:bg-toss-gray-50 hover:text-toss-gray-900"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://open.kakao.com/o/seuka3hi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-2xl bg-toss-blue py-3.5 text-center text-[15px] font-bold text-white transition-colors hover:bg-toss-blue-dark"
            aria-label="카카오 상담"
          >
            카카오톡 무료 상담
          </a>
        </div>
      </div>
    </header>
  )
}
