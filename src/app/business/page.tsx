import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "C-BRIDGE FOR BUSINESS | 기업·기관 어학 평가",
  description:
    "임직원 평가, 승진시험, 해외 파견, 직무별 어학시험까지 조직의 목적에 맞는 시험 대비 자료를 구성합니다.",
  alternates: { canonical: "/business" },
};

const audiences = [
  "Corporate Language Assessment",
  "Promotion Exam Preparation",
  "Global Assignment Preparation",
  "Professional English Exams",
  "Custom Workbook",
  "Bulk Orders",
];

const supportedTests = ["Versant", "SPA", "FLEX", "PTE", "IELTS", "OET", "CELPIP", "기타 기업 요청 시험"];

const AUDIENCE_BORDER_CLASSES = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-l-0",
  "border-t lg:border-l",
  "border-t sm:border-l",
];

const services = [
  { no: "01", title: "기업 맞춤 문제 구성", desc: "조직의 평가 목적과 직무에 맞춰 문제 구성을 설계합니다." },
  { no: "02", title: "인원별 교재 제공", desc: "임직원 개별 수준·목표에 맞춰 교재를 나누어 제공합니다." },
  { no: "03", title: "시험별 학습 자료", desc: "지원 가능한 시험 목록에서 필요한 시험 자료를 구성합니다." },
  { no: "04", title: "대량 주문", desc: "인원 규모에 맞춘 대량 주문 및 일괄 전달을 지원합니다." },
  { no: "05", title: "기업 전용 구성 상담", desc: "담당자와 함께 조직 목적에 맞는 구성을 상담합니다." },
];

export default function BusinessPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--color-paper)" }}>
        <Container className="max-w-[1000px]">
          <p className="eyebrow" style={{ color: "var(--color-bronze)" }}>
            C—BRIDGE FOR BUSINESS
          </p>
          <h1
            className="mt-5 break-keep font-serif text-4xl font-bold leading-[1.2] md:text-5xl"
            style={{ color: "var(--color-ink)" }}
          >
            기업과 기관을 위한
            <br />
            맞춤형 어학평가 및 시험 대비
          </h1>
          <p className="mt-6 max-w-xl break-keep text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
            임직원 평가, 승진 시험, 해외 파견, 직무별 영어 시험까지. 조직의 목적에 맞는 시험 대비
            자료를 제공합니다.
          </p>
          <div className="mt-8 flex w-full flex-col gap-2.5 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:gap-4 md:mt-9">
            <Link href="/consultation?test=기타" className="btn-primary justify-center px-7 text-sm font-medium">
              기업 문의하기
            </Link>
            <Link href="/consultation?test=기타" className="btn-secondary justify-center px-7 text-sm font-medium">
              맞춤 구성 상담
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-paper)" }}>
        <Container>
          <SectionHeader eyebrow="SERVICES FOR ORGANIZATIONS" />
          <div className="mt-6 grid border-y sm:grid-cols-2 lg:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
            {audiences.map((a, i) => (
              <div key={a} className={`p-7 ${AUDIENCE_BORDER_CLASSES[i]}`} style={{ borderColor: "var(--color-border)" }}>
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {a}
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
            목록에 없는 시험도 기업 요청에 따라 구성 가능 여부를 상담을 통해 확인해드립니다.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-paper)" }}>
        <Container>
          <SectionHeader eyebrow="HOW IT WORKS" />
          <div className="mt-6 grid gap-x-10 gap-y-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-5" style={{ borderColor: "var(--color-border)" }}>
            {services.map((s) => (
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
            조직에 맞는 구성을 상담을 통해 안내해드립니다.
          </p>
          <div className="flex w-full flex-col gap-2.5 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:justify-center min-[430px]:gap-4">
            <Link href="/consultation?test=기타" className="btn-primary justify-center px-7 text-sm font-medium">
              기업 문의하기
            </Link>
            <Link href="/consultation?test=기타" className="btn-secondary justify-center px-7 text-sm font-medium">
              맞춤 구성 상담
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
