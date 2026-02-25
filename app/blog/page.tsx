import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Tag } from "lucide-react"
import { getAllPosts, CATEGORIES } from "@/lib/posts"
import { SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "블로그 | 소액결제현금화 정보 모음",
  description:
    "소액결제현금화, 정보이용료현금화, 신용카드현금화 관련 유용한 정보와 가이드 20편을 제공합니다.",
  alternates: { canonical: `${SITE_URL}/blog` },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl font-black text-toss-gray-900 md:text-4xl">
          <span className="text-toss-blue">블로그</span>
        </h1>
        <p className="mt-3 text-base text-toss-gray-600">
          {"소액결제현금화, 정보이용료, 신용카드현금화에 관한 전문 가이드 모음"}
        </p>

        {/* Category chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <span
              key={cat.id}
              className="rounded-full border border-toss-gray-200 bg-toss-gray-50 px-4 py-1.5 text-xs font-semibold text-toss-gray-700"
            >
              {cat.label}
            </span>
          ))}
        </div>

        {/* Post list */}
        <div className="mt-8 flex flex-col gap-4">
          {posts.map((post) => {
            const catLabel =
              CATEGORIES.find((c) => c.id === post.category)?.label ?? post.category
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-2 rounded-2xl border border-toss-gray-200 bg-white p-6 transition-all hover:border-toss-blue/20 hover:shadow-md md:flex-row md:items-center md:justify-between"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-toss-blue/8 px-2.5 py-0.5 text-[11px] font-semibold text-toss-blue">
                      <Tag className="h-2.5 w-2.5" />
                      {catLabel}
                    </span>
                    <time className="text-xs text-toss-gray-500">{post.date}</time>
                  </div>
                  <h2 className="mt-2 text-base font-bold text-toss-gray-900 transition-colors group-hover:text-toss-blue md:text-lg">
                    {post.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-toss-gray-600">
                    {post.description}
                  </p>
                </div>
                <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-toss-gray-400 opacity-0 transition-opacity group-hover:opacity-100 md:mt-0" />
              </Link>
            )
          })}
        </div>

        {/* Total count */}
        <p className="mt-8 text-center text-sm text-toss-gray-500">
          {"총 "}
          <span className="font-bold text-toss-blue">{posts.length}</span>
          {"개의 글"}
        </p>
      </div>
    </div>
  )
}
