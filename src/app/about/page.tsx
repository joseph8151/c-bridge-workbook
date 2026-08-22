import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About C-BRIDGE | C-BRIDGE TEST PREP",
  description:
    "C-BRIDGE는 TOEFL, IELTS, PTE, Duolingo English Test 등 글로벌 영어시험을 위한 전문 Test Prep Publishing Brand입니다.",
};

const points = [
  {
    title: "TEST-SPECIFIC PUBLISHING",
    desc: "각 시험의 공식 출제 구조를 그대로 반영한 유형별 문제집만을 만듭니다.",
  },
  {
    title: "SKILL-SPECIFIC DEPTH",
    desc: "Reading, Listening, Speaking, Writing을 각각 독립된 시리즈로 세분화합니다.",
  },
  {
    title: "PRACTICE OVER THEORY",
    desc: "개념 설명보다 반복 가능한 실전 문제량 확보를 최우선 원칙으로 삼습니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-purple/10 bg-lavender/20 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.28em] text-purple">About C-BRIDGE</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-black leading-[1.08] text-ink sm:text-5xl md:text-6xl text-balance">
            THE BRIDGE BETWEEN YOUR SCORE AND YOUR NEXT CHAPTER.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
            C-BRIDGE는 현재의 영어 실력과 목표 점수 사이, 그리고 목표 점수와 진학하고자 하는
            대학 사이를 연결하는 Test Prep Publishing Brand입니다. TOEFL, IELTS, PTE, Duolingo
            English Test를 준비하는 수험생을 위해 시험별·영역별로 세분화된 실전 문제집을
            출판합니다.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="Our Principles" title="PRACTICE CHANGES SCORES." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {points.map((p) => (
              <div key={p.title} className="rounded-sm border border-purple/10 bg-lavender/10 p-8">
                <h3 className="font-serif text-lg font-bold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-plum py-16 md:py-20">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-6 px-5 text-center md:px-10">
          <p className="font-serif text-3xl font-black text-ivory md:text-4xl">
            BUILD THE SCORE. CROSS THE BRIDGE.
          </p>
          <Link
            href="/all-books"
            className="rounded-sm bg-gold px-8 py-3.5 text-sm font-bold tracking-[0.08em] text-plum transition-transform hover:-translate-y-0.5"
          >
            EXPLORE BOOKS
          </Link>
        </div>
      </section>
    </>
  );
}
