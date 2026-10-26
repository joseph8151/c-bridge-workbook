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
  "ESPT를 처음 준비하는 경우",
  "Speaking 중심 훈련이 필요한 경우",
  "취업·채용 평가를 준비하는 경우",
  "짧은 기간 동안 핵심 유형을 집중적으로 연습하려는 경우",
];

const lookInsideExamples = [
  {
    label: "SPEAKING · SITUATION DESCRIPTION (자체 제작 예시)",
    prompt: "최근 참여했던 팀 프로젝트 중 하나를 선택해, 본인의 역할과 결과를 설명해 보세요.",
    detail:
      "1) 프로젝트 배경을 한 문장으로 소개 → 2) 본인이 맡은 역할과 구체적으로 한 일 제시 → 3) 결과나 배운 점으로 마무리. 추상적인 설명보다 구체적인 행동과 수치를 넣으면 답변이 또렷해집니다.",
  },
  {
    label: "SPEAKING · OPINION QUESTION (자체 제작 예시)",
    prompt: "회사 내 재택근무 확대에 대한 본인의 의견을 이유와 함께 말해 보세요.",
    detail:
      "1) 입장을 한 문장으로 먼저 밝히고 → 2) 업무 효율이나 협업 측면의 구체적 근거를 제시 → 3) 현실적인 조건이나 단서를 덧붙여 마무리. 찬반을 애매하게 흐리지 않는 것이 핵심입니다.",
  },
  {
    label: "SPEAKING · SITUATIONAL RESPONSE (자체 제작 예시)",
    prompt: "고객이 서비스 지연에 대해 불만을 제기한 상황을 가정하고, 어떻게 대응할지 설명해 보세요.",
    detail:
      "1) 상황을 인지했음을 짧게 전달 → 2) 원인이나 현재 조치를 구체적으로 설명 → 3) 앞으로의 대응 방안을 제시하며 마무리. 변명처럼 들리지 않도록 사실과 해결책 중심으로 답하는 것이 핵심입니다.",
  },
];

export default function EsptBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">EMPLOYMENT · ESPT 60P</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            ESPT는 Speaking 한 영역을 집중적으로 준비하는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            ESPT의 Speaking 평가를 중심으로 필요한 질문 유형과 답변 연습을 60페이지에 집중
            구성합니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            시험 특성에 맞춰 필요한 범위를 60페이지에 집중 구성합니다. 말하기 중심의 짧은 시험은
            분량을 늘리기보다 실제 과제를 반복하는 방식이 더 적합합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                ESPT · 60P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                80,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=ESPT&tier=60P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
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
            ESPT · 60P
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
              <Link href="/consultation?test=ESPT&tier=60P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
