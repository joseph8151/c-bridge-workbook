import Link from "next/link";
import Container from "@/components/Container";

const includes = [
  "문제집 100P",
  "상세 해설",
  "Listening 음원",
  "Speaking 실전 자료",
  "시험 직전 요약자료",
  "학습 플랜",
  "추가 연습자료",
];

const recommendedFor = [
  "EPTA를 처음 준비하는 경우",
  "항공영어 구술 평가를 준비하는 경우",
  "Listening과 Speaking을 집중적으로 연습하려는 경우",
  "시험일까지 준비 기간이 길지 않은 경우",
];

export default function EptaBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">PROFESSIONAL · EPTA 100P</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-bold leading-tight tracking-[-0.01em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            관제 영어는 유창함이 아니라 표준 구문입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            항공영어 Listening과 Speaking 과제를 중심으로 준비하는 직무 특화 100페이지
            구성입니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            시험 특성에 맞춰 필요한 범위를 100페이지에 집중 구성합니다. 특정 평가 영역의 비중이
            높은 시험은 분량을 늘리기보다 실제 과제를 반복하는 방식이 더 적합합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                EPTA · 100P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                129,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/pricing?test=EPTA&price=129000&label=EPTA%20%C2%B7%20100P#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                129,000원 바로 구매
              </Link>
              <Link href="/consultation?test=EPTA&tier=100P" className="btn-secondary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 구성 안내 한 줄 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="max-w-2xl break-keep border-t pt-8 text-base leading-relaxed md:text-lg" style={{ borderColor: "var(--color-border)", color: "var(--color-ink)" }}>
            ICAO LPR, FCL.055, ELPAC 대비는 이 구성 안에서 맞춘다. 시험 이름을 따로 팔지 않는다.
          </p>
        </Container>
      </section>

      {/* 포함 구성 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">WHAT&apos;S INCLUDED</p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-ink)" }}>
            필요한 유형을 충분히 반복할 수 있도록 집중형으로 구성합니다.
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {includes.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 이런 분께 추천 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">RECOMMENDED FOR</p>
          <h2 className="mt-3 font-serif text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            이런 분께 추천합니다
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-3 border-t pt-6 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
            {recommendedFor.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm" style={{ color: "var(--color-muted)" }}>
                <span className="mt-1.5 h-1 w-1 shrink-0" style={{ background: "var(--color-bronze)" }} />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 가격 + CTA */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">PACKAGE & PRICE</p>
          <p className="mt-3 font-serif text-xl font-bold" style={{ color: "var(--color-ink)" }}>
            EPTA · 100P
          </p>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                PRICE
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                129,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/pricing?test=EPTA&price=129000&label=EPTA%20%C2%B7%20100P#direct-purchase"
                className="btn-primary px-7 text-sm font-medium"
              >
                129,000원 바로 구매
              </Link>
              <Link href="/consultation?test=EPTA&tier=100P" className="btn-secondary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
