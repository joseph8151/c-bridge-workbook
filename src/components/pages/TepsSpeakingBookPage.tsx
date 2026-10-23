import Link from "next/link";
import Container from "@/components/Container";

const includes = [
  "문제집 60P",
  "상세 해설",
  "Speaking 실전 자료",
  "시험 직전 요약자료",
  "학습 플랜",
  "추가 연습자료",
];

const recommendedFor = [
  "TEPS Speaking을 처음 준비하는 경우",
  "Speaking 중심 훈련이 필요한 경우",
  "취업·진학 제출용 공인 점수가 필요한 경우",
  "짧은 기간 동안 핵심 유형을 집중적으로 연습하려는 경우",
];

const lookInsideExamples = [
  {
    label: "SPEAKING · OPINION QUESTION (자체 제작 예시)",
    prompt: "온라인 강의와 오프라인 강의 중 하나를 선택한다면 어느 쪽을 선택하겠습니까? 이유를 들어 설명해 보세요.",
    detail:
      "1) 입장을 한 문장으로 명확히 제시 → 2) 구체적인 이유 1~2가지 제시 → 3) 짧은 예시나 비교로 마무리. 짧은 준비 시간 안에서도 구조를 미리 정해두면 답변이 끊기지 않습니다.",
  },
  {
    label: "SPEAKING · SELF INTRODUCTION (자체 제작 예시)",
    prompt: "최근 가장 기억에 남는 경험 하나를 선택해, 그 경험과 느낀 점을 함께 설명해 보세요.",
    detail:
      "1) 경험의 배경을 한 문장으로 소개 → 2) 구체적으로 있었던 일을 순서대로 설명 → 3) 그 경험에서 느낀 점으로 마무리. 막연한 감상보다 구체적인 장면을 떠올리게 하는 설명이 고득점 포인트입니다.",
  },
  {
    label: "SPEAKING · SITUATIONAL RESPONSE (자체 제작 예시)",
    prompt: "친구와 약속한 일정이 겹쳐 조정이 필요한 상황이라면, 어떻게 설명하고 제안할지 말해 보세요.",
    detail:
      "1) 상황을 짧게 설명 → 2) 조정이 필요한 이유를 구체적으로 제시 → 3) 대안이 되는 제안으로 마무리. 일방적인 통보가 아니라 상대방을 배려한 표현을 사용하는 것이 핵심입니다.",
  },
];

export default function TepsSpeakingBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">EMPLOYMENT · TEPS SPEAKING 60P</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            TEPS Speaking은 Speaking 한 영역을 집중적으로 준비하는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            TEPS Speaking의 말하기 평가를 중심으로 필요한 질문 유형과 답변 연습을 60페이지에
            집중 구성합니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            시험 특성에 맞춰 필요한 범위를 60페이지에 집중 구성합니다. 말하기 중심의 짧은 시험은
            분량을 늘리기보다 실제 과제를 반복하는 방식이 더 적합합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                TEPS SPEAKING · 60P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                80,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=TEPS%20Speaking&tier=60P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link
                href="/pricing?test=TEPS%20Speaking&price=80000&label=TEPS%20Speaking%20%C2%B7%2060P#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                80,000원 바로 구매
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
            TEPS Speaking · 60P
          </p>

          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-t pt-8" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                PRICE
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                80,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=TEPS%20Speaking&tier=60P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link
                href="/pricing?test=TEPS%20Speaking&price=80000&label=TEPS%20Speaking%20%C2%B7%2060P#direct-purchase"
                className="btn-secondary px-7 text-sm font-medium"
              >
                80,000원 바로 구매
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
