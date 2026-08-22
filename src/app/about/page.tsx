import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About C-BRIDGE",
  description:
    "C-BRIDGE는 취업, 이직, 승진, 유학·이민을 준비하는 분들을 위한 성인 어학시험 전문 문제집 & 실전 대비 플랫폼입니다.",
};

const audiences = [
  "취업 준비생",
  "이직 준비 직장인",
  "승진 및 사내 평가 준비자",
  "외국계 기업 지원자",
  "일본계·중국계 기업 취업 준비자",
  "유학·이민 준비자",
  "의료·항공 등 전문직 시험 준비자",
];

const points = [
  {
    title: "시험별 전문 구성",
    desc: "각 시험의 공식 출제 구조를 그대로 반영한 유형별 교재만을 만듭니다.",
  },
  {
    title: "문제집 이상의 패키지",
    desc: "해설집, 모의고사, 요약집, 학습계획표까지 하나의 구성으로 제공합니다.",
  },
  {
    title: "연습량이 곧 실력",
    desc: "이론 설명보다 반복 가능한 실전 문제량 확보를 최우선 원칙으로 삼습니다.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-purple/10 bg-lavender/20 py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em] text-purple">About C-BRIDGE</p>
          <h1 className="mt-5 max-w-3xl font-serif text-4xl font-black leading-[1.15] text-ink sm:text-5xl md:text-6xl text-balance">
            성인 어학시험 전문 문제집 & 실전 대비 플랫폼
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
            C-BRIDGE는 취업, 이직, 승진, 유학·이민을 준비하는 분들을 위한 성인 어학시험 전문
            브랜드입니다. TOEIC, OPIc, JLPT, HSK, FLEX, TOEFL, IELTS부터 전문직 시험까지, 시험별로
            필요한 학습 자료를 하나의 패키지로 구성해 제공합니다.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="Who We Serve" title="이런 분들이 C-BRIDGE를 찾습니다." />
          <div className="mt-10 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <span
                key={a}
                className="rounded-full border border-purple/15 bg-lavender/20 px-5 py-2.5 text-sm font-semibold text-ink/75"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="Our Principles" title="시험은 다르지만, 준비하는 방법은 같습니다." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {points.map((p) => (
              <div key={p.title} className="rounded-[20px] border border-purple/10 bg-ivory p-8">
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
            className="rounded-[14px] bg-gold px-8 py-3.5 text-sm font-bold tracking-[0.04em] text-plum transition-transform hover:-translate-y-0.5"
          >
            전체 교재 보기
          </Link>
        </div>
      </section>
    </>
  );
}
