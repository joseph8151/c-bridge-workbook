import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            About C-BRIDGE
          </p>
          <h1
            className="mt-5 max-w-2xl break-keep font-serif text-3xl font-black leading-[1.3] sm:text-4xl md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            직군과 나라가 다르면 같은 영어가 아닙니다.
          </h1>
          <p className="mt-7 max-w-2xl break-keep text-base leading-relaxed text-ink/70 md:text-lg">
            C-BRIDGE는 취업, 이직, 승진, 유학·이민을 준비하는 분들을 위한 성인 어학시험 전문
            브랜드입니다. 시험마다, 직군마다 필요한 학습 자료를 하나의 패키지로 구성해
            제공합니다.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.18em] text-ink/45">이런 분들이 찾습니다</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6" style={{ borderColor: "var(--color-line)" }}>
            {audiences.map((a) => (
              <span key={a} className="text-sm font-semibold text-ink/75">
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.18em] text-ink/45">원칙</p>
          <div className="mt-6 grid gap-10 border-t pt-10 md:grid-cols-3" style={{ borderColor: "var(--color-line)" }}>
            {points.map((p) => (
              <div key={p.title}>
                <h3 className="font-serif text-lg font-black" style={{ color: "var(--color-inkstrong)" }}>
                  {p.title}
                </h3>
                <p className="mt-3 break-keep text-sm leading-relaxed text-ink/65">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-inkstrong)" }}>
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 text-center md:px-10">
          <p className="font-serif text-2xl font-black md:text-3xl" style={{ color: "var(--color-paper)" }}>
            BUILD THE SCORE. CROSS THE BRIDGE.
          </p>
          <Link
            href="/consultation"
            className="inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] transition-all duration-300 hover:brightness-90"
            style={{ background: "var(--color-rust)", color: "var(--color-paper)" }}
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
