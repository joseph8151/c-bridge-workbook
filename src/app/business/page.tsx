import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "C-BRIDGE FOR BUSINESS | 기업·기관 어학 평가",
  description:
    "임직원 평가, 승진시험, 해외 파견, 직무별 어학시험까지 조직의 목적에 맞는 시험 대비 자료를 구성합니다.",
};

const audiences = [
  "기업 어학 평가",
  "임직원 승진 시험",
  "해외 파견 준비",
  "직무별 영어 평가",
  "사내 교육 프로그램",
  "기관 및 교육센터",
];

const supportedTests = [
  "TOEIC",
  "TOEIC Speaking",
  "OPIc",
  "Versant",
  "SPA",
  "TEPS",
  "FLEX",
  "PTE",
  "IELTS",
  "OET",
  "CELPIP",
  "기타 기업 요청 시험",
];

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
      <section className="py-20 md:py-28" style={{ background: "var(--color-inkstrong)" }}>
        <div className="mx-auto max-w-[1000px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-pistachio)" }}>
            C-BRIDGE FOR BUSINESS
          </p>
          <h1
            className="mt-5 break-keep font-serif text-4xl font-black leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-paper)" }}
          >
            기업과 기관을 위한
            <br />
            맞춤형 어학 평가 및 시험 대비
          </h1>
          <p className="mt-6 max-w-xl break-keep text-base leading-relaxed text-paper/75">
            임직원 평가, 승진시험, 해외 파견, 직무별 어학시험까지 조직의 목적에 맞는 시험 대비 자료를
            구성합니다.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/consultation?test=기타"
              className="btn-primary rounded-sm px-7 text-sm font-bold"
            >
              기업 상담 문의
            </Link>
            <Link
              href="/consultation?test=기타"
              className="inline-flex min-h-[48px] items-center border border-paper/25 px-7 text-sm font-bold text-paper"
            >
              맞춤 교재 문의
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t bg-paper py-16 md:py-20" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            대상
          </p>
          <div
            className="mt-6 grid border-y sm:grid-cols-2 lg:grid-cols-3"
            style={{ borderColor: "var(--color-line)" }}
          >
            {audiences.map((a, i) => (
              <div
                key={a}
                className={`p-7 ${AUDIENCE_BORDER_CLASSES[i]}`}
                style={{ borderColor: "var(--color-line)" }}
              >
                <p className="text-sm font-bold" style={{ color: "var(--color-inkstrong)" }}>
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            지원 가능한 시험 예시
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {supportedTests.map((t) => (
              <span
                key={t}
                className="border px-4 py-2 text-sm font-semibold"
                style={{ borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }}
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink/50">
            목록에 없는 시험도 기업 요청에 따라 구성 가능 여부를 상담을 통해 확인해드립니다.
          </p>
        </div>
      </section>

      <section className="border-t bg-paper py-16 md:py-20" style={{ borderColor: "var(--color-line)" }}>
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            서비스
          </p>
          <div className="mt-6 grid gap-x-10 gap-y-8 border-t pt-8 sm:grid-cols-2 lg:grid-cols-5" style={{ borderColor: "var(--color-line)" }}>
            {services.map((s) => (
              <div key={s.no}>
                <span className="font-serif text-2xl font-black" style={{ color: "var(--color-rust)" }}>
                  {s.no}
                </span>
                <p className="mt-2 text-sm font-bold" style={{ color: "var(--color-inkstrong)" }}>
                  {s.title}
                </p>
                <p className="mt-1 break-keep text-xs leading-relaxed text-ink/55">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ background: "var(--color-inkstrong)" }}>
        <div className="mx-auto flex max-w-[900px] flex-col items-center gap-6 px-5 text-center md:px-10">
          <p className="font-serif text-2xl font-black md:text-3xl" style={{ color: "var(--color-paper)" }}>
            조직에 맞는 구성을 상담을 통해 안내해드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/consultation?test=기타" className="btn-primary rounded-sm px-7 text-sm font-bold">
              기업 상담 문의
            </Link>
            <Link
              href="/consultation?test=기타"
              className="inline-flex min-h-[48px] items-center border border-paper/25 px-7 text-sm font-bold text-paper"
            >
              맞춤 교재 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
