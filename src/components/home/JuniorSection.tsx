import Link from "next/link";
import BookCover from "../BookCover";
import { testMeta } from "@/lib/testMeta";

export default function JuniorSection() {
  const meta = testMeta.JUNIOR;

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-col items-center gap-10 rounded-sm border border-purple/10 bg-ivory/60 p-8 md:flex-row md:gap-14 md:p-12">
          <div className="flex shrink-0 -space-x-8">
            <BookCover
              test="JUNIOR"
              skill="Academic Reading"
              tag="Foundation Series"
              color={meta.color}
              size="sm"
              tilt={-6}
            />
            <BookCover
              test="PRIMARY"
              skill="Academic Vocabulary"
              tag="Foundation Series"
              color={meta.color}
              size="sm"
              tilt={5}
            />
          </div>

          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[0.2em] text-purple">
              For Younger Learners
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-ink md:text-3xl">
              C-BRIDGE JUNIOR
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60 md:text-base">
              TOEFL Junior, TOEFL Primary, 국제학교 영어 커리큘럼을 위한 기초 학술 영어 시리즈.
              Academic Reading과 Vocabulary부터 차근차근 시작합니다.
            </p>
          </div>

          <Link
            href="/junior"
            className="shrink-0 rounded-sm border border-purple/25 px-6 py-3 text-xs font-bold tracking-[0.1em] text-purple transition-colors hover:bg-lavender"
          >
            EXPLORE JUNIOR
          </Link>
        </div>
      </div>
    </section>
  );
}
