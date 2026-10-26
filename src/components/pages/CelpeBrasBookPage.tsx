import Link from "next/link";
import Container from "@/components/Container";

const includes = [
  "문제집 100P",
  "상세 해설",
  "필기·구술 실전 자료",
  "시험 직전 요약자료",
  "학습 플랜",
  "추가 연습자료",
];

const recommendedFor = [
  "CELPE-Bras를 처음 준비하는 경우",
  "브라질 대학 진학·이민·자격 인정을 준비하는 경우",
  "필기와 구술을 함께 대비해야 하는 경우",
  "짧은 기간 동안 핵심 유형을 집중적으로 연습하려는 경우",
];

const lookInsideExamples = [
  {
    label: "WRITING · TEXTUAL PRODUCTION (자체 제작 예시)",
    prompt: "최근 읽은 기사를 바탕으로, 브라질 생활에 적응하며 느낀 점을 담은 편지를 작성해 보세요.",
    detail:
      "1) 편지의 목적을 첫 문장에서 명확히 제시 → 2) 겪은 경험이나 상황을 구체적으로 서술 → 3) 상대방에게 전달하고 싶은 요청이나 결론으로 마무리. 과제 지시문이 요구하는 글의 형식(편지·보고서 등)을 정확히 지키는 것이 고득점의 핵심입니다.",
  },
  {
    label: "WRITING · OPINION REPORT (자체 제작 예시)",
    prompt: "주어진 자료를 바탕으로, 원격근무 확산에 대한 본인의 의견을 담은 짧은 보고서를 작성해 보세요.",
    detail:
      "1) 자료의 핵심 내용을 한 문장으로 요약 → 2) 본인의 입장을 명확히 제시하고 근거를 덧붙임 → 3) 제언이나 결론으로 마무리. 자료를 그대로 옮기기보다 자신의 언어로 재구성하는 것이 핵심입니다.",
  },
  {
    label: "SPEAKING · INTERVIEW QUESTION (자체 제작 예시)",
    prompt: "브라질에서의 일상생활 중 한 가지 주제를 선택해, 평가자와 대화하듯 자유롭게 설명해 보세요.",
    detail:
      "1) 주제를 짧게 소개 → 2) 구체적인 경험이나 사례를 덧붙여 설명 → 3) 평가자의 추가 질문에 자연스럽게 이어 답변. 암기한 문장을 그대로 말하기보다 실제 대화처럼 자연스럽게 반응하는 것이 핵심입니다.",
  },
];

export default function CelpeBrasBookPage() {
  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">BRAZIL PORTUGUESE · CELPE-BRAS 100P</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            CELPE-Bras는 포르투갈어 실력을 통합적으로 평가하는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            CELPE-Bras의 필기(텍스트 생산 과제)와 구술(인터뷰) 영역을 중심으로 필요한 유형과 답변
            연습을 100페이지에 집중 구성합니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            시험 특성에 맞춰 필요한 범위를 100페이지에 집중 구성합니다. 필기와 구술을 함께 평가하는
            시험은 분량을 늘리기보다 실전 과제를 반복하는 방식이 더 적합합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                CELPE-Bras · 100P
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                129,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/consultation?test=CELPE-Bras&tier=100P" className="btn-primary px-7 text-sm font-medium">
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
            CELPE-Bras · 100P
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
              <Link href="/consultation?test=CELPE-Bras&tier=100P" className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
