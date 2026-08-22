import Link from "next/link";
import BookCover from "../BookCover";
import { getTestPriceLabel } from "@/lib/products";

const heroLines = [
  "TOEIC · OPIc · TOEIC Speaking · Versant · SPA",
  "JLPT · JPT · SJPT",
  "HSK · HSKK · TSC",
  "FLEX · SNULT",
  "TOEFL · IELTS · PTE · Duolingo",
  "OET · EPTA 등",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-40 h-[520px] w-[520px] rounded-full bg-lavender/70 blur-2xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="var(--color-purple)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-12 px-5 pb-16 pt-8 md:px-10 md:pb-20 md:pt-14 lg:min-h-[78vh] lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-xl animate-fade-up">
          <p className="text-xs md:text-sm font-bold tracking-[0.28em] text-purple">
            성인 어학시험 전문 대비
          </p>
          <h1 className="mt-5 font-serif text-4xl font-black leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl text-balance">
            취업부터 유학까지
            <br />
            필요한 시험을 제대로 준비하세요.
          </h1>

          <div className="mt-6 space-y-0.5">
            {heroLines.map((line) => (
              <p key={line} className="text-sm font-semibold text-ink/60 md:text-base">
                {line}
              </p>
            ))}
          </div>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            영어부터 일본어·중국어·제2외국어까지, 시험별 문제집과 실전 대비 자료를 제공합니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/all-books"
              className="rounded-[14px] bg-purple px-7 py-3.5 text-sm font-bold tracking-[0.04em] text-ivory transition-colors hover:bg-plum"
            >
              시험별 교재 보기
            </Link>
            <Link
              href="/finder"
              className="rounded-[14px] border border-purple/30 px-7 py-3.5 text-sm font-bold tracking-[0.04em] text-purple transition-colors hover:bg-lavender"
            >
              나에게 맞는 시험 찾기
            </Link>
          </div>
          <p className="mt-4 text-sm font-medium text-ink/45">
            전문 대비 패키지 {getTestPriceLabel()}
          </p>
        </div>

        <div className="relative flex h-[280px] w-full max-w-md items-center justify-center gap-3 sm:h-[340px] md:h-[400px] lg:h-auto lg:max-w-none lg:flex-1 lg:justify-end lg:gap-5">
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
