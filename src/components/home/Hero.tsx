import Link from "next/link";
import BookCover from "../BookCover";
import { GradientBlob, DotGrid } from "../Decor";
import { getTestPriceLabel } from "@/lib/products";

const heroLines = [
  "TOEIC · OPIc · TOEFL · IELTS · PTE",
  "SJPT · TSC · JLPT · HSK · FLEX 등",
];

const goalChips = ["TOEFL 110+ 목표", "OPIc AL 목표", "SJPT Level 8", "Reading 집중"];

const floatingBadges = [
  { label: "100P", className: "left-[6%] top-[6%]", delay: "0s" },
  { label: "200P BEST", className: "right-[2%] top-[2%]", delay: "0.4s", accent: true },
  { label: "300P PREMIUM", className: "right-[-2%] top-[46%]", delay: "0.9s", accent: true },
  { label: "Mock Test", className: "left-[0%] bottom-[18%]", delay: "1.3s" },
  { label: "Answer Guide", className: "right-[10%] bottom-[4%]", delay: "0.6s" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <GradientBlob className="-top-24 -right-40 h-[560px] w-[560px] opacity-70" />
        <GradientBlob
          color="var(--color-studyabroad)"
          className="-bottom-40 left-[-10%] h-[380px] w-[380px] opacity-[0.12]"
        />
        <DotGrid id="hero-dot-grid" className="inset-0 h-full w-full opacity-[0.35]" />
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-12 px-5 pb-16 pt-8 md:px-10 md:pb-20 md:pt-14 lg:min-h-[80vh] lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-xl animate-fade-up">
          <p className="text-xs md:text-sm font-bold tracking-[0.28em] text-purple">
            성인 어학시험 전문 문제집
          </p>
          <h1 className="mt-5 font-serif text-4xl font-black leading-[1.2] tracking-tight text-ink sm:text-5xl md:text-[3.4rem] text-balance">
            점수를 올려야 할 때,
            <br />
            문제집도 전략적으로
            <br />
            골라야 합니다.
          </h1>

          <div className="mt-6 space-y-0.5">
            {heroLines.map((line) => (
              <p key={line} className="text-sm font-semibold text-ink/60 md:text-base">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            성인 어학시험별 문제집과 실전 대비 자료를 제공합니다. 원하는 분야와 목표 수준에 맞춰
            선택할 수 있습니다.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {goalChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-purple/15 bg-lavender/40 px-3.5 py-1.5 text-xs font-bold text-purple"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/all-books"
              className="rounded-[14px] bg-purple px-7 py-3.5 text-sm font-bold tracking-[0.04em] text-ivory transition-all hover:-translate-y-0.5 hover:bg-plum hover:shadow-[0_16px_32px_-16px_rgba(69,53,101,0.6)]"
            >
              문제집 둘러보기
            </Link>
            <Link
              href="/finder"
              className="rounded-[14px] border border-purple/30 px-7 py-3.5 text-sm font-bold tracking-[0.04em] text-purple transition-all hover:-translate-y-0.5 hover:bg-lavender"
            >
              내 교재 찾기
            </Link>
          </div>
          <p className="mt-4 text-sm font-medium text-ink/45">
            전문 대비 패키지 {getTestPriceLabel()}
          </p>
        </div>

        <div className="relative flex h-[300px] w-full max-w-md items-center justify-center gap-3 sm:h-[360px] md:h-[420px] lg:h-[480px] lg:max-w-none lg:flex-1 lg:justify-end lg:gap-5">
          {floatingBadges.map((b) => (
            <span
              key={b.label}
              className={`animate-float-slow absolute z-10 hidden rounded-full border px-3.5 py-2 text-[11px] font-bold shadow-[0_8px_20px_-8px_rgba(69,53,101,0.35)] md:block ${b.className} ${
                b.accent
                  ? "border-gold/40 bg-plum text-gold"
                  : "border-purple/15 bg-white/90 text-purple"
              }`}
              style={{ animationDelay: b.delay }}
            >
              {b.label}
            </span>
          ))}

          <BookCover
            test="TOEIC"
            skill="취업 · 승진"
            tag="패키지 시리즈"
            color="var(--color-employment)"
            size="hero"
            tilt={-6}
            className="animate-float-slow"
          />
          <BookCover
            test="SJPT"
            skill="일본어 말하기"
            tag="패키지 시리즈"
            color="var(--color-japanese)"
            size="lg"
            tilt={4}
            className="animate-float-slow mt-10 [animation-delay:0.6s]"
          />
          <BookCover
            test="TSC"
            skill="중국어 말하기"
            tag="패키지 시리즈"
            color="var(--color-chinese)"
            size="lg"
            tilt={-3}
            className="animate-float-slow mt-4 hidden sm:flex [animation-delay:1.2s]"
          />
          <BookCover
            test="TOEFL"
            skill="유학 · 이민"
            tag="패키지 시리즈"
            color="var(--color-studyabroad)"
            size="md"
            tilt={7}
            className="animate-float-slow mt-16 hidden lg:flex [animation-delay:0.3s]"
          />
        </div>
      </div>
    </section>
  );
}
