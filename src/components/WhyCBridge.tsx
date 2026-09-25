import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

const cards = [
  { no: "01", title: "시험별 맞춤 구성", desc: "시험 유형과 목표 점수에 맞춰 필요한 영역을 중심으로 구성합니다." },
  { no: "02", title: "실전 문제 훈련", desc: "실제 시험 구조와 출제 유형을 기준으로 반복 훈련할 수 있습니다." },
  { no: "03", title: "상세 해설", desc: "정답뿐 아니라 문제 접근 방법과 오답 이유까지 확인할 수 있습니다." },
  { no: "04", title: "Final Review", desc: "시험 직전 핵심 문제와 개념을 빠르게 다시 확인할 수 있습니다." },
  { no: "05", title: "Study Plan", desc: "교재 분량을 기준으로 학습 일정을 체계적으로 관리할 수 있습니다." },
];

export default function WhyCBridge() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader
          eyebrow="WHY C-BRIDGE"
          title="MORE THAN A WORKBOOK."
          description="문제를 더 많이 푸는 것이 아니라, 시험에 맞는 문제를 풀어야 합니다."
        />

        <div className="mt-12 grid border-y sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
          {cards.map((c, i) => (
            <div
              key={c.no}
              className={`p-8 md:p-10 ${i > 0 ? "border-t" : ""} ${i < 2 ? "sm:border-t-0" : ""} ${
                i % 2 === 1 ? "sm:border-l" : ""
              }`}
              style={{ borderColor: "var(--color-border)" }}
            >
              <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                {c.no}
              </span>
              <p className="mt-3 font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
                {c.title}
              </p>
              <p className="mt-2 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
