import Link from "next/link";
import Container from "@/components/Container";

interface OpicBookPageProps {
  language: string;
  languageLabel: string;
}

const includes = [
  "문제집 60P",
  "상세 해설",
  "Speaking 실전 자료",
  "시험 직전 요약자료",
  "학습 플랜",
  "추가 연습자료",
];

export default function OpicBookPage({ language, languageLabel }: OpicBookPageProps) {
  const testName = `OPIc ${language}`;
  const priceLabel = `${testName} · 60P`;
  const buyHref = `/pricing?test=${encodeURIComponent(testName)}&price=80000&label=${encodeURIComponent(priceLabel)}#direct-purchase`;
  const consultHref = `/consultation?test=${encodeURIComponent(testName)}&tier=60P`;

  const recommendedFor = [
    `${testName}를 처음 준비하는 경우`,
    "Speaking 중심 훈련이 필요한 경우",
    "취업·인사평가 제출용 등급이 필요한 경우",
    "짧은 기간 동안 핵심 유형을 집중적으로 연습하려는 경우",
  ];

  const lookInsideExamples = [
    {
      label: "SPEAKING · DESCRIPTION QUESTION (자체 제작 예시)",
      prompt: "최근에 다녀온 여행지 한 곳을 선택해서, 그곳에서 있었던 일을 자세히 설명해 보세요.",
      detail:
        "1) 장소와 시점을 한 문장으로 소개 → 2) 그곳에서 겪은 일을 시간 순서대로 구체적으로 설명 → 3) 그 경험에서 느낀 점이나 기억에 남는 이유로 마무리. 배경 설문에서 고른 주제와 일치하는 소재를 미리 준비해두면 답변이 자연스럽게 이어집니다.",
    },
    {
      label: "SPEAKING · BACKGROUND SURVEY (자체 제작 예시)",
      prompt: "평소 즐기는 취미나 여가 활동 한 가지를 선택해서, 언제부터 왜 시작하게 됐는지 설명해 보세요.",
      detail:
        "1) 어떤 활동인지 한 문장으로 소개 → 2) 시작하게 된 계기를 구체적으로 설명 → 3) 그 활동을 통해 얻는 점으로 마무리. 배경 설문에서 선택한 항목과 실제 답변 내용이 일치해야 자연스럽게 들립니다.",
    },
    {
      label: "SPEAKING · ROLE-PLAY REQUEST (자체 제작 예시)",
      prompt: "예약해둔 약속을 다른 날짜로 변경해야 하는 상황을 가정하고, 상대방에게 상황을 설명하고 요청해 보세요.",
      detail:
        "1) 전화·방문 목적을 짧게 밝히고 → 2) 일정 변경이 필요한 이유를 간단히 설명 → 3) 원하는 대안 날짜나 시간을 구체적으로 제안하며 마무리. 상황극이라는 점을 의식해 실제 대화하듯 자연스러운 어투로 답하는 것이 핵심입니다.",
    },
  ];

  return (
    <>
      {/* Hero — 가격을 바로 노출 */}
      <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
        <Container>
          <p className="eyebrow">EMPLOYMENT · OPIc {languageLabel} 60P</p>
          <h1
            className="mt-3 max-w-3xl break-keep font-serif text-[36px] font-medium leading-[1.15] tracking-[-0.03em] md:text-[52px]"
            style={{ color: "var(--color-ink)" }}
          >
            {testName}는 Speaking 한 영역을 집중적으로 준비하는 시험입니다.
          </h1>
          <p className="mt-4 max-w-2xl break-keep text-base leading-relaxed md:text-lg" style={{ color: "var(--color-muted)" }}>
            {testName}의 Speaking 평가를 중심으로 필요한 질문 유형과 답변 연습을 60페이지에 집중
            구성합니다.
          </p>
          <p className="mt-3 max-w-2xl break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            시험 특성에 맞춰 필요한 범위를 60페이지에 집중 구성합니다. 말하기 중심의 짧은 시험은
            분량을 늘리기보다 실제 과제를 반복하는 방식이 더 적합합니다.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                {priceLabel}
              </p>
              <p className="mt-1 font-serif text-4xl font-bold" style={{ color: "var(--color-ink)" }}>
                80,000원
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link href={consultHref} className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link href={buyHref} className="btn-secondary px-7 text-sm font-medium">
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
            {priceLabel}
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
              <Link href={consultHref} className="btn-primary px-7 text-sm font-medium">
                구성 상담하기
              </Link>
              <Link href={buyHref} className="btn-secondary px-7 text-sm font-medium">
                80,000원 바로 구매
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
