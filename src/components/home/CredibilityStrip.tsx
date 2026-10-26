import Container from "@/components/Container";

const exams = ["PTE", "IELTS", "CELPIP", "OET", "TOEFL", "EPTA"];

// 정적 목록 — 자동 marquee는 넣지 않음(과도한 animation 회피).
export default function CredibilityStrip() {
  return (
    <div className="border-y" style={{ borderColor: "var(--color-border)" }}>
      <Container>
        <div className="flex justify-center pt-5 md:pt-6">
          <p
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-1.5 gap-y-1 rounded-full border px-4 py-2 text-center text-xs leading-relaxed min-[361px]:px-5 md:px-6 md:py-2.5 md:text-sm"
            style={{ borderColor: "var(--color-bronze)", background: "var(--color-paper-dark)", color: "var(--color-ink)" }}
          >
            <span aria-hidden="true" style={{ color: "var(--color-bronze)" }}>
              ✓
            </span>
            <span className="font-semibold">각 과목 전문 강사진</span>
            <span>이 직접 제작하고 검수 · 과목당</span>
            <span className="font-bold" style={{ color: "var(--color-bronze)" }}>
              5명 이상
            </span>
            <span>이 협업해 만든 액기스 교재</span>
          </p>
        </div>
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
