import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { tierMeta, tierOrder, getProfessionalPriceLine } from "@/lib/products";

const recommendedFor: Record<string, string[]> = {
  STANDARD: [
    "시험이 처음이거나 특정 시험을 집중적으로 연습하고 싶은 분",
    "시간이 많지 않아 짧고 집중적으로 준비해야 하는 분",
    "핵심 문제부터 먼저 풀어보고 싶은 분",
  ],
  COMPLETE: [
    "4~8주 정도 시험을 준비하는 분",
    "충분한 실전 연습과 확실한 점수 상승이 필요한 분",
    "한 번에 제대로 준비하고 싶은 분",
  ],
  PREMIUM: [
    "고득점이나 상위 레벨을 목표로 하는 분",
    "재응시이거나 시험까지 2~3개월 이상 남은 분",
    "이전에 문제량이 부족했다고 느낀 분",
  ],
};

export default function PricingTiers({
  eyebrow = "가격 안내",
  title = "나는 몇 페이지를 선택해야 할까요?",
  subtitle,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="center"
          className="mx-auto max-w-2xl"
        />

        <p className="mt-8 text-center text-xs font-semibold text-ink/45">
          아래 가격은 일반 어학시험 기준입니다. 전문직 시험은 과목 페이지에서 확인하세요.
        </p>

        <div className="mt-8 grid items-end gap-6 md:grid-cols-3 md:gap-5">
          {tierOrder.map((tier) => {
            const meta = tierMeta[tier];
            const isComplete = tier === "COMPLETE";
            return (
              <div
                key={tier}
                className={`group relative flex flex-col rounded-[24px] border bg-white/70 p-8 transition-all ${
                  isComplete
                    ? "border-purple/30 shadow-[0_24px_48px_-20px_rgba(69,53,101,0.35)] md:-translate-y-4 md:py-10"
                    : "border-purple/10 shadow-[0_1px_2px_rgba(36,35,41,0.04)] hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-20px_rgba(69,53,101,0.25)]"
                }`}
              >
                {meta.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] shadow-sm ${
                      isComplete ? "bg-gold text-plum" : "bg-purple text-ivory"
                    }`}
                  >
                    {isComplete ? "가장 많이 선택하는 구성" : meta.badge}
                  </span>
                )}

                <p className="text-xs font-bold tracking-[0.18em] text-purple/60">{meta.name}</p>
                <p className="mt-3 font-serif text-5xl font-black text-ink">{meta.label}</p>
                <p className="mt-1 text-sm text-ink/50">{meta.pages}페이지 · 모의고사 {meta.mockTestsLabel}</p>
                <p className="mt-5 font-serif text-3xl font-black text-purple">
                  {meta.price.toLocaleString()}원
                </p>

                <p className="mt-4 text-sm leading-relaxed text-ink/60">{meta.shortDesc}</p>

                <ul className="mt-6 space-y-2.5">
                  {recommendedFor[tier].map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {r}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-purple/10 pt-6">
                  <p className="text-[11px] font-bold tracking-[0.1em] text-ink/40">포함 구성</p>
                  <ul className="mt-3 space-y-2">
                    {meta.includes.map((inc) => (
                      <li key={inc} className="flex items-center gap-2 text-xs leading-relaxed text-ink/60">
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={isComplete ? "var(--color-gold)" : "var(--color-purple)"}
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="shrink-0"
                        >
                          <path d="m5 12.5 4.5 4.5L19 7" />
                        </svg>
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>

                {isComplete && (
                  <p className="mt-5 text-xs font-semibold text-purple/70">
                    100P 두 권 대비 29,000원 절감
                  </p>
                )}

                <Link
                  href="/all-books"
                  className={`mt-7 flex items-center justify-center rounded-[14px] py-3.5 text-sm font-bold tracking-[0.04em] transition-colors ${
                    isComplete
                      ? "bg-purple text-ivory hover:bg-plum"
                      : "border border-purple/25 text-purple hover:bg-lavender"
                  }`}
                >
                  {meta.ctaLabel}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink/50">
          100P · 200P · 300P 중 분량을 선택한 후, 원하는 영역과 목표 수준에 맞춰 구성할 수 있습니다.
        </p>
        <p className="mt-3 text-center text-xs font-semibold text-ink/40">
          {getProfessionalPriceLine()}
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/finder" className="text-sm font-bold text-purple hover:underline">
            아직 모르겠다면 무료 교재 추천 받기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
