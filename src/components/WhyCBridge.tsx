import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

const items = [
  { no: "01", title: "EXAM STRUCTURE", desc: "시험 구조를 기준으로 문제를 구성합니다." },
  { no: "02", title: "TARGET", desc: "목표 수준에 맞춘 난이도로 훈련합니다." },
  { no: "03", title: "FOCUS", desc: "Reading · Writing · Speaking 등 취약 영역에 집중합니다." },
  { no: "04", title: "FINAL", desc: "실전 모의와 시험 직전 Review로 마무리합니다." },
];

const BORDER_CLASSES = [
  "",
  "border-t sm:border-t-0 sm:border-l",
  "border-t lg:border-t-0 lg:border-l",
  "border-t sm:border-l lg:border-t-0",
];

export default function WhyCBridge() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader
          eyebrow="WHY C-BRIDGE"
          title="문제를 많이 주는 것이 목적이 아닙니다."
          description="같은 시험을 준비해도 현재 수준, 목표 점수, 시험일까지 남은 기간, 취약 영역에 따라 필요한 문제는 달라집니다. C-BRIDGE는 시험별 구조를 기준으로 필요한 영역을 선택하고 반복해서 훈련할 수 있도록 구성합니다."
        />

        <div className="mt-12 grid border-y sm:grid-cols-2 lg:grid-cols-4" style={{ borderColor: "var(--color-border)" }}>
          {items.map((item, i) => (
            <div
              key={item.no}
              className={`p-6 min-[361px]:p-8 ${BORDER_CLASSES[i]}`}
              style={{ borderColor: "var(--color-border)" }}
            >
              <span className="font-serif text-2xl font-bold" style={{ color: "var(--color-bronze)" }}>
                {item.no}
              </span>
              <p className="mt-3 font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
                {item.title}
              </p>
              <p className="mt-2 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
