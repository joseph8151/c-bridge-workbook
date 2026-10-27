import Container from "@/components/Container";

const exams = ["PTE", "IELTS", "CELPIP", "OET", "TOEFL", "EPTA"];

// 정적 목록 — 자동 marquee는 넣지 않음(과도한 animation 회피).
export default function CredibilityStrip() {
  return (
    <div className="border-y" style={{ borderColor: "var(--bg-line)" }}>
      <Container>
        <div className="flex flex-col items-center gap-2.5 pb-6 pt-7 text-center md:gap-3 md:pt-8">
          <p className="eyebrow">MADE BY EXPERTS</p>
          <p
            className="max-w-md break-keep text-sm leading-relaxed md:max-w-lg md:text-base"
            style={{ color: "var(--bg-ink)" }}
          >
            각 과목 전문 강사진이 직접 제작하고 검수합니다. 과목당{" "}
            <span
              className="whitespace-nowrap font-serif text-base font-bold md:text-lg"
              style={{ color: "var(--bg-accent)" }}
            >
              5명 이상
            </span>
            이 협업해 만든 액기스 교재.
          </p>
        </div>
        <div
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t py-6 md:justify-between"
          style={{ borderColor: "var(--bg-line)" }}
        >
          {exams.map((name) => (
            <span
              key={name}
              className="text-xs font-medium tracking-[0.16em]"
              style={{ color: "var(--bg-muted)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
