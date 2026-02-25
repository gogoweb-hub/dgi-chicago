import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock, Tag } from "lucide-react"
import { getPostBySlug, getRelatedPosts, getAllSlugs, CATEGORIES } from "@/lib/posts"
import { SITE_URL } from "@/lib/constants"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${BASE}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: `${BASE}/og.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.relatedSlugs)
  const categoryLabel = CATEGORIES.find((c) => c.id === post.category)?.label ?? post.category
  const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "dgi-chicago" },
    publisher: {
      "@type": "Organization",
      name: "dgi-chicago",
      logo: { "@type": "ImageObject", url: `${BASE}/favicon.png`, width: 32, height: 32 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE}/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
  }

  const faqSchema =
    post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          {/* Back */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-toss-gray-500 transition-colors hover:text-toss-blue"
          >
            <ArrowLeft className="h-4 w-4" />
            블로그 목록
          </Link>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-toss-blue/8 px-3 py-1 text-xs font-semibold text-toss-blue">
                <Tag className="h-3 w-3" />
                {categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-toss-gray-500">
                <Clock className="h-3 w-3" />
                {post.date}
              </span>
              {post.readTime && (
                <span className="inline-flex items-center gap-1 text-xs text-toss-gray-500">
                  읽기 {post.readTime}
                </span>
              )}
            </div>
            <h1 className="text-2xl font-black leading-tight text-toss-gray-900 md:text-3xl">
              {post.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-toss-gray-600">{post.description}</p>
          </header>

          {/* Intro */}
          <div className="prose-toss">
            <p className="text-base leading-[1.9] text-toss-gray-700">{post.intro}</p>
          </div>

          {/* TOC */}
          <nav className="my-10 rounded-2xl border border-toss-gray-200 bg-toss-gray-50 p-5">
            <p className="mb-3 text-sm font-bold text-toss-gray-900">목차</p>
            <ol className="flex flex-col gap-1.5">
              {post.sections.map((s, i) => (
                <li key={i}>
                  <a
                    href={`#section-${i}`}
                    className="text-sm text-toss-gray-600 transition-colors hover:text-toss-blue"
                  >
                    {i + 1}. {s.heading}
                  </a>
                </li>
              ))}
              {post.faq.length > 0 && (
                <li>
                  <a
                    href="#faq"
                    className="text-sm text-toss-gray-600 transition-colors hover:text-toss-blue"
                  >
                    {post.sections.length + 1}. 자주 묻는 질문 (FAQ)
                  </a>
                </li>
              )}
            </ol>
          </nav>

          {/* Sections */}
          <div className="prose-toss">
            {post.sections.map((section, i) => (
              <section key={i} id={`section-${i}`} className="scroll-mt-24">
                <h2>{section.heading}</h2>
                <p>{section.body}</p>

                {/* Steps */}
                {section.steps && section.steps.length > 0 && (
                  <ol className="my-4 flex flex-col gap-2 pl-0">
                    {section.steps.map((step, si) => (
                      <li key={si} className="flex items-start gap-3 rounded-xl border border-toss-gray-200 bg-toss-gray-50 px-4 py-3 text-sm leading-relaxed text-toss-gray-700">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-toss-blue text-xs font-bold text-white">{si + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                )}

                {/* Table */}
                {section.table && (
                  <div className="my-4 overflow-x-auto rounded-xl border border-toss-gray-200">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-toss-gray-200 bg-toss-gray-50">
                          {section.table.headers.map((h, hi) => (
                            <th key={hi} className="px-4 py-3 font-bold text-toss-gray-900">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, ri) => (
                          <tr key={ri} className="border-b border-toss-gray-100 last:border-0">
                            {row.map((cell, ci) => (
                              <td key={ci} className="px-4 py-3 text-toss-gray-700">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Tips */}
                {section.tips && section.tips.length > 0 && (
                  <div className="my-4 rounded-xl border border-toss-blue/20 bg-toss-blue/5 p-4">
                    <p className="mb-2 text-xs font-bold text-toss-blue">TIP</p>
                    <ul className="flex flex-col gap-1.5">
                      {section.tips.map((tip, ti) => (
                        <li key={ti} className="text-sm leading-relaxed text-toss-gray-700">- {tip}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Warnings */}
                {section.warnings && section.warnings.length > 0 && (
                  <div className="my-4 rounded-xl border border-toss-red/20 bg-toss-red/5 p-4">
                    <p className="mb-2 text-xs font-bold text-toss-red">주의</p>
                    <ul className="flex flex-col gap-1.5">
                      {section.warnings.map((w, wi) => (
                        <li key={wi} className="text-sm leading-relaxed text-toss-gray-700">- {w}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* FAQ */}
          {post.faq.length > 0 && (
            <section id="faq" className="mt-14 scroll-mt-24">
              <h2 className="mb-6 text-xl font-black text-toss-gray-900">자주 묻는 질문</h2>
              <div className="flex flex-col gap-3">
                {post.faq.map((item, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-toss-gray-200 bg-toss-gray-50 transition-colors open:border-toss-blue/20 open:bg-toss-blue/3"
                  >
                    <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-bold text-toss-gray-900 marker:content-none">
                      <span>Q. {item.q}</span>
                      <svg
                        className="h-4 w-4 shrink-0 text-toss-gray-400 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-4 text-sm leading-relaxed text-toss-gray-600">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="mb-5 text-lg font-black text-toss-gray-900">관련 글</h2>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border border-toss-gray-200 bg-toss-gray-50 p-5 transition-all hover:border-toss-blue/20 hover:bg-toss-blue/5"
                  >
                    <p className="text-xs text-toss-gray-500">{r.date}</p>
                    <p className="mt-1 text-sm font-bold text-toss-gray-900 transition-colors group-hover:text-toss-blue">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-toss-blue p-8 text-center">
            <p className="text-lg font-bold text-white">소액결제현금화 상담이 필요하신가요?</p>
            <p className="mt-2 text-sm text-white/80">24시간 전문 상담원이 친절하게 안내해 드립니다.</p>
            <Link
              href="/contact"
              className="mt-5 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-toss-blue transition-colors hover:bg-toss-gray-50"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
