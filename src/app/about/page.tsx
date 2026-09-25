import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About C-BRIDGE",
  description:
    "C-BRIDGE는 취업, 이직, 승진, 유학·이민을 준비하는 분들을 위한 성인 어학시험 전문 문제집 & 실전 대비 플랫폼입니다.",
  alternates: { canonical: "/about" },
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
  { title: "시험별 전문 구성", desc: "각 시험의 공식 출제 구조를 그대로 반영한 유형별 교재만을 만듭니다." },
  { title: "문제집 이상의 패키지", desc: "해설집, 모의고사, 요약집, 학습계획표까지 하나의 구성으로 제공합니다." },
  { title: "연습량이 곧 실력", desc: "이론 설명보다 반복 가능한 실전 문제량 확보를 최우선 원칙으로 삼습니다." },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">ABOUT C-BRIDGE</p>
          <h1
            className="mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.3] sm:text-5xl md:text-6xl"
            style={{ color: "var(--color-ink)" }}
          >
            직군과 나라가 다르면 같은 영어가 아닙니다.
          </h1>
          <p className="mt-7 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            C-BRIDGE는 취업, 이직, 승진, 유학·이민을 준비하는 분들을 위한 성인 어학시험 전문
            브랜드입니다. 시험마다, 직군마다 필요한 학습 자료를 하나의 패키지로 구성해
            제공합니다.
          </p>
        </Container>
      </section>

      <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
        <Container>
          <SectionHeader eyebrow="THE NAME" title="Score와 Goal 사이의 Bridge." />
          <p className="mt-6 max-w-[650px] break-keep text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
            C-BRIDGE라는 이름은 현재 점수와 목표 점수 사이를 잇는다는 뜻에서 시작했습니다. 시험마다
            평가 구조와 채점 기준이 다르기 때문에, 그 차이를 정확히 이해하고 필요한 훈련으로
            연결하는 과정이 곧 저희가 만드는 문제집의 역할입니다. 단순한 문제 모음이 아니라, 그
            과정을 설계하는 것이 C-BRIDGE의 일입니다.
          </p>
        </Container>
      </section>

      <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
        <Container>
          <SectionHeader eyebrow="이런 분들이 찾습니다" />
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            {audiences.map((a) => (
              <span key={a} className="text-sm font-semibold" style={{ color: "var(--color-muted)" }}>
                {a}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
        <Container>
          <SectionHeader eyebrow="원칙" />
          <div className="mt-6 grid gap-10 border-t pt-10 md:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
            {points.map((p) => (
              <div key={p.title}>
                <h3 className="font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
                  {p.title}
                </h3>
                <p className="mt-3 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-navy)" }}>
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="font-serif text-2xl font-bold md:text-3xl" style={{ color: "var(--color-navy-text)" }}>
            BUILD THE SCORE. CROSS THE BRIDGE.
          </p>
          <Link href="/consultation" className="btn-primary-inverse px-7 text-sm font-medium">
            상담
          </Link>
        </Container>
      </section>
    </>
  );
}
