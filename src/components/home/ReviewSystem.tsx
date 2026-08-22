import { reviewCriteria } from "@/lib/qualityContent";

export default function ReviewSystem() {
  return (
    <section className="relative overflow-hidden bg-plum py-20 md:py-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-purple/25 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.32em] text-gold">REVIEW SYSTEM</p>
          <h2 className="mt-5 break-keep font-serif text-2xl font-black leading-[1.35] text-ivory sm:text-3xl md:text-[2.5rem] text-balance">
            AI로 만들 수는 있습니다.
            <br />
            하지만 품질은 검수에서 결정됩니다.
          </h2>
          <p className="mx-auto mt-6 break-keep text-sm leading-relaxed text-lavender/80 md:text-base">
            C-BRIDGE는 기술을 활용해 효율적으로 문제를 제작하지만, 최종 교재에서는 다음 요소를
            중요하게 검토합니다.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviewCriteria.map((c, i) => (
            <div
              key={c.title}
              className="rounded-[18px] border border-ivory/10 bg-ivory/5 p-6"
            >
              <span className="font-serif text-xl font-black text-gold/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm font-bold tracking-[0.02em] text-ivory">{c.title}</p>
              <p className="mt-1.5 break-keep text-xs leading-relaxed text-lavender/70">
                {c.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-col items-center gap-2 text-center">
          <p className="font-serif text-lg font-black tracking-[0.02em] text-gold">
            Generate Less. Review More.
          </p>
          <p className="text-sm font-semibold tracking-[0.02em] text-lavender/70">
            Made with Technology. Refined with Standards.
          </p>
        </div>
      </div>
    </section>
  );
}
