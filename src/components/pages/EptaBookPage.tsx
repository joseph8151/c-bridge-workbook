import Link from "next/link";
import Container from "@/components/Container";
import AddOnSection from "@/components/AddOnSection";

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

const listeningExamples = [
  {
    label: "ATC LISTENING · ALTITUDE (자체 제작 예시)",
    quote: "“Speedbird three four two, descend and maintain flight level one one zero, QNH one zero one three.”",
    question: "질문: 조종사가 유지해야 할 고도(Flight Level)는?",
    options: [
      { key: "A", text: "FL110", correct: true },
      { key: "B", text: "FL130", correct: false },
      { key: "C", text: "FL190", correct: false },
    ],
    why: "WHY — “flight level one one zero”는 FL110을 의미합니다. QNH 수치(기압 설정값)와 고도 수치를 혼동하지 않고, 지시문에서 요구하는 항목만 정확히 분리해 듣는 것이 핵심입니다.",
  },
  {
    label: "ATC LISTENING · RUNWAY CLEARANCE (자체 제작 예시)",
    quote: "“Turn left heading zero eight zero, cleared to land runway two seven left.”",
    question: "질문: 착륙이 허가된 활주로는?",
    options: [
      { key: "A", text: "Runway 27L", correct: true },
      { key: "B", text: "Runway 08", correct: false },
      { key: "C", text: "Runway 09R", correct: false },
    ],
    why: "WHY — 지시문 앞부분의 heading(방향 전환)과 뒷부분의 활주로 착륙 허가를 구분해야 합니다. “cleared to land runway two seven left”가 착륙 허가 활주로를 나타내며, heading 수치와 섞어 읽지 않는 것이 핵심입니다.",
  },
];

const speakingExample = {
  prompt:
    "관제사 지시: “Climb and maintain flight level two three zero, contact Seoul Control one two three decimal four.” 이 지시를 받은 대로 정확히 read-back 해보세요.",
  detail:
    "고득점 답변 구조 예시: 1) 받은 지시의 핵심 수치(고도·주파수)를 해석하거나 의역하지 않고 그대로 복창 → 2) 마지막에 자신의 콜사인을 붙여 마무리. 표준 phraseology에서는 완곡한 표현보다 정확한 수치 재진술(read-back)이 채점의 핵심입니다.",
};

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

      {/* Look Inside — ATC Listening 2개 + Speaking Read-back 1개 */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--color-border)" }}>
        <Container>
          <p className="eyebrow">LOOK INSIDE</p>
          <div className="mt-8 max-w-2xl border p-6 min-[430px]:p-8" style={{ borderColor: "var(--color-border)" }}>
            {listeningExamples.map((ex, i) => (
              <div key={ex.label} className={i > 0 ? "mt-6 border-t pt-6" : ""} style={i > 0 ? { borderColor: "var(--color-border)" } : undefined}>
                <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                  {ex.label}
                </p>
                <p className="mt-4 break-keep font-serif text-base italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
                  {ex.quote}
                </p>

                <p className="mt-6 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  {ex.question}
                </p>

                <div className="mt-4 space-y-2.5">
                  {ex.options.map((o) => (
                    <div
                      key={o.key}
                      className="flex items-start gap-3 border p-3 text-sm"
                      style={{
                        borderColor: o.correct ? "var(--color-bronze)" : "var(--color-border)",
                        color: "var(--color-ink)",
                      }}
                    >
                      <span className="shrink-0 font-semibold">{o.key}.</span>
                      <span className="flex-1">{o.text}</span>
                      {o.correct && (
                        <span className="shrink-0 text-xs font-bold tracking-[0.06em]" style={{ color: "var(--color-bronze)" }}>
                          정답
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                <p className="mt-5 break-keep text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {ex.why}
                </p>
              </div>
            ))}

            <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
              <p className="text-xs font-bold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
                SPEAKING · READ-BACK (자체 제작 예시)
              </p>
              <p className="mt-4 break-keep font-serif text-base italic leading-relaxed" style={{ color: "var(--color-ink)" }}>
                {speakingExample.prompt}
              </p>
              <p className="mt-5 text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                고득점 답변 구조 예시
              </p>
              <p className="mt-3 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {speakingExample.detail}
              </p>
            </div>

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

      <AddOnSection testSlug="epta" />
    </>
  );
}
