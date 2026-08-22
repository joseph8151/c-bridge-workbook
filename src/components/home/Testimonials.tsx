import SectionHeading from "../SectionHeading";
import { GradientBlob } from "../Decor";
import { testimonials } from "@/lib/reviews";

const general = testimonials.find((t) => t.id === "general")!;
const cases = testimonials.filter((t) => t.id !== "general");

function QuoteMark() {
  return (
    <svg viewBox="0 0 32 24" className="h-6 w-8 shrink-0 text-gold/50" fill="currentColor">
      <path d="M9.4 0C4.2 2.6 0 8.2 0 14.4 0 19.8 3.6 24 8.8 24c4 0 7-3.2 7-7.2 0-3.8-2.8-6.6-6.4-6.6-.6 0-1.2.1-1.6.2C8.4 6.6 11 3.2 15 1.2L9.4 0Zm17 0c-5.2 2.6-9.4 8.2-9.4 14.4 0 5.4 3.6 9.6 8.8 9.6 4 0 7-3.2 7-7.2 0-3.8-2.8-6.6-6.4-6.6-.6 0-1.2.1-1.6.2C25.4 6.6 28 3.2 32 1.2L26.4 0Z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-lavender/15 py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <GradientBlob className="-top-32 -left-32 h-[420px] w-[420px] opacity-[0.15]" />
        <GradientBlob
          color="var(--color-gold)"
          className="-bottom-40 -right-32 h-[380px] w-[380px] opacity-[0.1]"
        />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow="Customer Story"
          title="목표점수와 약한 영역에 맞춰 구성한 분들의 후기"
          subtitle="같은 시험이라도 목표와 집중 영역에 따라 다르게 구성한 실제 구매자들의 이야기입니다."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="rounded-[24px] bg-plum p-8 md:p-9 lg:sticky lg:top-24">
            <QuoteMark />
            <p className="mt-4 break-keep text-base leading-relaxed text-ivory md:text-lg">
              {general.quote}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-ivory/10 pt-5">
              <div>
                <p className="text-sm font-bold text-ivory">{general.author}</p>
                <p className="mt-0.5 text-xs text-lavender/70">{general.tag}</p>
              </div>
              <span className="rounded-full bg-gold/15 px-3 py-1.5 text-[11px] font-bold tracking-[0.06em] text-gold">
                {general.tier}
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cases.map((t) => (
              <div
                key={t.id}
                className="flex flex-col rounded-[18px] border border-purple/10 bg-ivory p-5 shadow-[0_10px_28px_-18px_rgba(69,53,101,0.35)] md:p-6"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-black tracking-[0.02em] text-purple">{t.test}</span>
                  <span className="shrink-0 rounded-full bg-lavender/50 px-2.5 py-1 text-[10px] font-bold text-purple">
                    {t.tier}
                  </span>
                </div>
                <p className="mt-1 text-[11px] font-semibold text-ink/45">{t.tag}</p>
                <p className="mt-3 break-keep text-sm leading-relaxed text-ink/75">{t.quote}</p>
                <p className="mt-4 text-xs font-bold text-ink/40">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
