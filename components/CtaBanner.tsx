export default function CtaBanner() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1080px] px-5 lg:px-6">
        <div className="overflow-hidden rounded-3xl bg-toss-blue px-6 py-16 text-center md:px-12 md:py-20">
          <h2 className="text-balance text-[24px] font-black text-white md:text-[32px]">
            지금 바로 상담받기
          </h2>
          <p className="mx-auto mt-3 max-w-sm text-[15px] text-white/70">
            {"24시간 카카오톡 상담 · 5분 처리 · 당일 입금"}
          </p>
          <a
            href="https://open.kakao.com/o/seuka3hi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-10 py-4 text-[15px] font-bold text-toss-blue shadow-lg shadow-black/10 transition-all hover:bg-toss-gray-50"
            aria-label="카카오톡으로 상담하기"
          >
            카카오톡 상담하기
          </a>
        </div>
      </div>
    </section>
  )
}
