import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "화상과외 | C-BRIDGE",
  description: "전문 튜터와 1:1로 진행하는 실시간 화상과외. 목표 시험과 약점에 맞춰 커리큘럼을 구성합니다.",
  alternates: { canonical: "/tutoring" },
  openGraph: { title: "화상과외 | C-BRIDGE", description: "전문 튜터와 1:1로 진행하는 실시간 화상과외. 목표 시험과 약점에 맞춰 커리큘럼을 구성합니다.", url: "/tutoring" },
  twitter: { card: "summary", title: "화상과외 | C-BRIDGE", description: "전문 튜터와 1:1로 진행하는 실시간 화상과외. 목표 시험과 약점에 맞춰 커리큘럼을 구성합니다." },
};

const features = [
  "1:1 맞춤 커리큘럼",
  "목표 시험 집중 대비",
  "스피킹·라이팅 첨삭",
  "발음·억양 교정",
  "수업 녹화 제공",
  "문제집 병행 학습",
];

const supportedTests = ["PTE Academic", "IELTS", "TOEFL", "CELPIP", "OET", "MET", "기타 상담 시 요청 시험"];

const steps = [
  { no: "01", title: "상담 신청", desc: "목표 시험과 현재 수준, 원하는 일정을 알려주세요." },
  { no: "02", title: "레벨 확인", desc: "간단한 레벨 확인 후 약점 영역을 파악합니다." },
  { no: "03", title: "튜터 매칭", desc: "목표 시험과 성향에 맞는 튜터를 배정합니다." },
  { no: "04", title: "커리큘럼 구성", desc: "주차별 커리큘럼과 수업 횟수를 함께 정합니다." },
  { no: "05", title: "정기 수업 진행", desc: "실시간 화상으로 수업하고, 녹화본을 전달받습니다." },
];

const AUDIENCE_BORDER_CLASSES = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-l-0",
  "border-t lg:border-l",
  "border-t sm:border-l",
];

export default function TutoringPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--color-paper)" }}>
        <Container className="max-w-[1000px]">
          <p className="eyebrow" style={{ color: "var(--color-bronze)" }}>
            C—BRIDGE 화상과외
          </p>
          <h1
            className="mt-5 break-keep font-serif text-4xl font-bold leading-[1.2] md:text-5xl"
            style={{ color: "var(--color-ink)" }}
          >
            전문 튜터와 1:1로 진행하는
            <br />
            실시간 화상과외
          </h1>
          <p className="mt-6 max-w-xl break-keep text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
            목표 시험과 약점에 맞춰 커리큘럼을 구성하는 1:1 화상 수업입니다. 문제집과 함께
            병행하면 학습 효과를 높일 수 있습니다.
          </p>
          <div className="mt-8 flex w-full flex-col gap-2.5 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:gap-4 md:mt-9">
            <Link href="/consultation?test=화상과외" className="btn-primary justify-center px-7 text-sm font-medium">
              화상과외 상담하기
            </Link>
            <Link href="/all-books" className="btn-secondary justify-center px-7 text-sm font-medium">
              문제집 먼저 둘러보기
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-paper)" }}>
        <Container>
          <SectionHeader eyebrow="WHAT'S INCLUDED" />
          <div className="mt-6 grid border-y sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
            {features.map((f, i) => (
              <div key={f} className={`p-7 ${AUDIENCE_BORDER_CLASSES[i]}`} style={{ borderColor: "var(--color-border)" }}>
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {f}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow" style={{ color: "var(--color-bronze)" }}>
            SUPPORTED EXAMS
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {supportedTests.map((t) => (
              <span
                key={t}
                className="border px-4 py-2 text-sm font-medium"
                style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm" style={{ color: "var(--color-muted)" }}>
            목록에 없는 시험도 상담을 통해 가능 여부를 확인해드립니다.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-paper)" }}>
        <Container>
          <SectionHeader eyebrow="HOW IT WORKS" />
          <div className="mt-6 grid gap-x-10 gap-y-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-5" style={{ borderColor: "var(--color-border)" }}>
            {steps.map((s) => (
              <div key={s.no}>
                <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                  {s.no}
                </span>
                <p className="mt-2 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {s.title}
                </p>
                <p className="mt-1 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }}>
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl break-keep font-serif text-2xl font-bold md:text-3xl" style={{ color: "var(--color-ink)" }}>
            목표 시험과 일정을 알려주시면 맞는 튜터를 안내해드립니다.
          </p>
          <div className="flex w-full flex-col gap-2.5 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:justify-center min-[430px]:gap-4">
            <Link href="/consultation?test=화상과외" className="btn-primary justify-center px-7 text-sm font-medium">
              화상과외 상담하기
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
