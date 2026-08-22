import Link from "next/link";
import BookCover from "../BookCover";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-40 h-[520px] w-[520px] rounded-full bg-lavender/70 blur-2xl" />
        <svg
          className="absolute left-0 top-1/3 h-64 w-full opacity-70 md:h-80"
          viewBox="0 0 1200 300"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 260 C 250 260, 350 40, 600 40 C 850 40, 950 260, 1200 260"
            stroke="var(--color-purple)"
            strokeOpacity="0.15"
            strokeWidth="1.5"
          />
          <circle cx="0" cy="260" r="5" fill="var(--color-gold)" />
          <circle cx="1200" cy="260" r="5" fill="var(--color-purple)" fillOpacity="0.4" />
        </svg>
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.06]"
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

      <div className="mx-auto flex max-w-[1440px] flex-col-reverse items-center gap-12 px-5 pb-16 pt-8 md:px-10 md:pb-24 md:pt-14 lg:min-h-[82vh] lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="max-w-xl animate-fade-up">
          <p className="text-xs md:text-sm font-bold tracking-[0.32em] text-purple">
            GLOBAL ENGLISH TEST PREP
          </p>
          <h1 className="mt-5 font-serif text-5xl font-black leading-[0.98] tracking-tight text-ink sm:text-6xl md:text-7xl">
            BUILD THE
            <br />
            SCORE.
            <br />
            <span className="text-purple">CROSS THE</span>
            <br />
            BRIDGE.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
            TOEFL, IELTS, PTE, Duolingo English Test까지.
            <br />
            목표 점수를 위한 유형별 집중 문제집과 실전 Mock Test.
          </p>
          <p className="mt-2 text-sm font-medium text-ink/50">
            목표 점수까지 가는 가장 확실한 연습.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/all-books"
              className="rounded-sm bg-purple px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-ivory transition-colors hover:bg-plum"
            >
              EXPLORE BOOKS
              <span className="block text-[10px] font-semibold tracking-normal opacity-70">
                문제집 둘러보기
              </span>
            </Link>
            <Link
              href="#choose-your-test"
              className="rounded-sm border border-purple/30 px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-purple transition-colors hover:bg-lavender"
            >
              FIND MY TEST
              <span className="block text-[10px] font-semibold tracking-normal opacity-70">
                시험별 추천받기
              </span>
            </Link>
          </div>
        </div>

        <div className="relative flex h-[320px] w-full max-w-md items-center justify-center gap-3 sm:h-[380px] md:h-[440px] lg:h-auto lg:max-w-none lg:flex-1 lg:justify-end lg:gap-5">
          <BookCover
            test="TOEFL"
            skill="Reading"
            number="300"
            tag="Practice Questions"
            color="var(--color-toefl)"
            size="hero"
            tilt={-6}
            className="animate-float-slow"
          />
          <BookCover
            test="IELTS"
            skill="Academic Reading"
            tag="Practice Questions"
            color="var(--color-ielts)"
            size="lg"
            tilt={4}
            className="animate-float-slow mt-10 [animation-delay:0.6s]"
          />
          <BookCover
            test="PTE"
            skill="Speaking & Writing"
            tag="Intensive Practice"
            color="var(--color-pte)"
            size="lg"
            tilt={-3}
            className="animate-float-slow mt-4 hidden sm:flex [animation-delay:1.2s]"
          />
          <BookCover
            test="DET"
            skill="Full Practice Tests"
            tag="Mock Test Series"
            color="var(--color-det)"
            size="md"
            tilt={7}
            className="animate-float-slow mt-16 hidden lg:flex [animation-delay:0.3s]"
          />
        </div>
      </div>
    </section>
  );
}
