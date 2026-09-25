import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  { no: "01", title: "FORMAT", desc: "시험 유형을 먼저 이해합니다." },
  { no: "02", title: "PACE", desc: "실제 시험의 문제 흐름과 시간 구조를 반영합니다." },
  { no: "03", title: "EXPLANATION", desc: "정답뿐 아니라 접근 방식과 오답 이유까지 제공합니다." },
];

export default function Method() {
  return (
    <section id="method" className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader eyebrow="THE METHOD" title="THE C-BRIDGE METHOD" />

        <div className="mt-12 grid border-y sm:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
          {steps.map((s, i) => (
            <div
              key={s.no}
              className={`p-8 md:p-10 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
              style={{ borderColor: "var(--color-border)" }}
            >
              <span className="font-serif text-5xl font-bold" style={{ color: "var(--color-bronze)" }}>
                {s.no}
              </span>
              <p className="mt-5 text-sm font-semibold tracking-[0.1em]" style={{ color: "var(--color-ink)" }}>
                {s.title}
              </p>
              <p className="mt-3 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
