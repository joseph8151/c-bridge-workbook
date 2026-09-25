const cards = [
  {
    no: "01",
    title: "시험별 맞춤 구성",
    desc: "시험 유형과 목표 점수에 맞춰 필요한 영역을 중심으로 구성합니다.",
  },
  {
    no: "02",
    title: "실전 문제 훈련",
    desc: "실제 시험 구조와 출제 유형을 기준으로 반복 훈련할 수 있습니다.",
  },
  {
    no: "03",
    title: "상세 해설",
    desc: "정답뿐 아니라 문제 접근 방법과 오답 이유까지 확인할 수 있습니다.",
  },
  {
    no: "04",
    title: "Final Review",
    desc: "시험 직전 핵심 문제와 개념을 빠르게 다시 확인할 수 있습니다.",
  },
  {
    no: "05",
    title: "Study Plan",
    desc: "교재 분량을 기준으로 학습 일정을 체계적으로 관리할 수 있습니다.",
  },
];

export default function WhyCBridge() {
  return (
    <section className="border-t bg-paper py-20 md:py-24" style={{ borderColor: "var(--color-line)" }} data-reveal>
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          왜 C-BRIDGE인가요?
        </p>
        <p className="mt-5 max-w-2xl break-keep text-base leading-relaxed md:text-[17px]" style={{ color: "var(--color-inkstrong)", opacity: 0.75 }}>
          C-BRIDGE는 단순한 문제 모음 PDF가 아닙니다. 시험 유형과 목표 점수를 기준으로 문제를 구성하고,
          취약 영역을 집중적으로 훈련할 수 있도록 문제집, 상세 해설, 모의고사, Final Review, 학습
          플랜을 하나의 시험 대비 패키지로 제공합니다.
        </p>

        <div
          className="mt-10 grid border-y sm:grid-cols-2"
          style={{ borderColor: "var(--color-line)" }}
        >
          {cards.map((c, i) => (
            <div
              key={c.no}
              className={`p-8 ${i > 0 ? "border-t" : ""} ${i < 2 ? "sm:border-t-0" : ""} ${
                i % 2 === 1 ? "sm:border-l" : ""
              }`}
              style={{ borderColor: "var(--color-line)" }}
            >
              <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-rust)" }}>
                {c.no}
              </span>
              <p className="mt-3 font-serif text-lg font-bold" style={{ color: "var(--color-inkstrong)" }}>
                {c.title}
              </p>
              <p className="mt-2 break-keep text-sm leading-relaxed text-ink/65">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
