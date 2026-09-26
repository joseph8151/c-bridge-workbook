// A fanned stack of labeled sheets — the "premium bundle" visual for the
// Value Stack section. Distinct from BookMockup (which renders individual
// exam-cover mockups elsewhere): this renders one bundle's internal parts.
const SHEETS = ["MAIN WORKBOOK", "ANSWER GUIDE", "MOCK TEST", "FINAL REVIEW", "STUDY PLAN"];

export default function PackageStack() {
  return (
    <div
      className="relative mx-auto w-full"
      style={{ height: "clamp(260px, 60vw, 340px)", maxWidth: "clamp(240px, 78vw, 300px)" }}
      aria-hidden
    >
      {SHEETS.map((label, i) => {
        const offset = `calc(${i} * clamp(16px, 5vw, 22px))`;
        return (
          <div
            key={label}
            className="absolute flex items-start border p-4"
            style={{
              width: "100%",
              height: "clamp(120px, 32vw, 160px)",
              left: 0,
              top: offset,
              background: "var(--color-paper)",
              borderColor: "var(--color-border)",
              boxShadow: i === SHEETS.length - 1 ? "0 20px 40px -28px rgba(17,24,32,0.4)" : "none",
              zIndex: i,
            }}
          >
            <span
              className="text-[10px] font-bold tracking-[0.12em]"
              style={{ color: i === SHEETS.length - 1 ? "var(--color-bronze)" : "var(--color-muted)" }}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
