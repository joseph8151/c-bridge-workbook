import Link from "next/link";
import Container from "@/components/Container";
import AddOnSection from "@/components/AddOnSection";

const includes = [
  "문제집 100P",
  "상세 해설",
  "Speaking 실전 자료",
  "시험 직전 요약자료",
  "학습 플랜",
  "추가 연습자료",
];

const recommendedFor = [
  "SPA를 처음 준비하는 경우",
  "Speaking 중심 훈련이 필요한 경우",
  "취업·승진·사내평가를 준비하는 경우",
  "짧은 기간 동안 핵심 유형을 집중적으로 연습하려는 경우",
];

const lookInsideExamples = [
  {
    label: "SPEAKING · OPINION QUESTION (자체 제작 예시)",
    prompt: "회사가 재택근무 일수를 줄이기로 했습니다. 이 결정에 대한 본인의 의견을 말해 보세요.",
    detail:
      "1) 입장을 한 문장으로 명확히 제시 → 2) 업무 효율·협업 등 구체적 근거 1~2가지 제시 → 3) 현실적인 절충안이나 조건을 덧붙여 마무리. 짧은 준비 시간 안에서도 구조를 미리 정해두면 답변이 끊기지 않습니다.",
  },
  {
    label: "SPEAKING · SELF INTRODUCTION (자체 제작 예시)",
    prompt: "최근 담당했던 업무 중 하나를 선택해, 본인의 역할과 강점을 연결해 설명해 보세요.",
    detail:
      "1) 업무의 배경을 한 문장으로 소개 → 2) 본인이 맡은 역할과 구체적으로 한 일 제시 → 3) 그 과정에서 드러난 본인의 강점으로 마무리. 추상적인 장점 나열보다 실제 업무 사례와 연결하면 답변이 설득력 있게 들립니다.",
  },
  {
    label: "SPEAKING · SITUATIONAL RESPONSE (자체 제작 예시)",
    prompt:
      "마감 기한이 촉박한 상황에서 동료와의 협업이 필요합니다. 이런 상황에 어떻게 대응할지 설명해 보세요.",
    detail:
      "1) 상황을 한 문장으로 정리 → 2) 우선순위를 어떻게 정할지 구체적으로 제시 → 3) 동료와 소통할 방식을 덧붙여 마무리. 혼자 해결하는 방식보다 협업 과정을 구체적으로 설명하는 것이 고득점 포인트입니다.",
  },
];

export default function SpaBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">EMPLOYMENT · SPA 100P</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            SPA는 Speaking 한 영역을 집중적으로 준비하는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            SPA의 Speaking 평가를 중심으로 필요한 질문 유형과 답변 연습을 100페이지에 집중
            구성합니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            시험 특성에 맞춰 필요한 범위를 100페이지에 집중 구성합니다. 짧은 시험이거나 특정 평가
            영역의 비중이 높은 시험은 분량을 늘리기보다 실제 과제를 반복하는 방식이 더 적합합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                SPA · 100P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                129,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=SPA&tier=100P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link
                href="/pricing?test=SPA&price=129000&label=SPA%20%C2%B7%20100P#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                129,000원 바로 구매
              </Link>
            </div>
          </div>
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

      {/* Look Inside — 자체 제작 예시 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            {lookInsideExamples.map((ex, i) => (
              <div key={ex.label} className={i > 0 ? "mt-6 border-t pt-6" : ""} style={i > 0 ? { borderColor: "var(--color-border)" } : undefined}>
                <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                  {ex.label}
                </p>
                <p className="mt-4 break-keep font-serif text-base italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
                  &ldquo;{ex.prompt}&rdquo;
                </p>
                <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  고득점 답변 구조 예시
                </p>
                <p className="mt-3 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {ex.detail}
                </p>
              </div>
            ))}
            <p className="mt-6 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              고지: 공식 기출 복원이 아닙니다. C-BRIDGE가 자체 제작한 오리지널 예시입니다.
            </p>
          </div>
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
          <p className="mt-3 font-serif text-xl font-semibold tracking-[-0.01em]" style={{ color: "var(--color-ink)" }}>
            SPA · 100P
          </p>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                PRICE
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                129,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=SPA&tier=100P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link
                href="/pricing?test=SPA&price=129000&label=SPA%20%C2%B7%20100P#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                129,000원 바로 구매
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <AddOnSection testSlug="spa" />
    </>
  );
}
