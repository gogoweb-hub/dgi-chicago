"use client"

import { useState, useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <a
      href="https://open.kakao.com/o/seuka3hi"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#FEE500] shadow-lg shadow-black/10 transition-all duration-500 hover:scale-105 md:bottom-8 md:right-8 md:flex",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"
      )}
      aria-label="카카오톡 상담하기"
    >
      <MessageCircle className="h-6 w-6 text-[#3C1E1E]" />
    </a>
  )
}
