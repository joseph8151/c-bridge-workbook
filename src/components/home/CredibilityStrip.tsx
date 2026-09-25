import Container from "@/components/Container";

const exams = ["PTE", "IELTS", "CELPIP", "OET", "TOEFL", "EPTA", "TOEIC", "OPIc"];

// 정적 목록 — 자동 marquee는 넣지 않음(과도한 animation 회피).
export default function CredibilityStrip() {
  return (
    <div className="border-y" style={{ borderColor: "var(--color-border)" }}>
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-6 md:justify-between">
          {exams.map((name) => (
            <span
              key={name}
              className="text-xs font-medium tracking-[0.16em]"
              style={{ color: "var(--color-muted)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
