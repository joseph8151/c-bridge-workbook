import SectionHeading from "../SectionHeading";

const points = [
  "Skill-specific practice",
  "Structured difficulty",
  "Large practice volume",
  "Detailed explanations",
  "Mock-test training",
];

export default function TrustSection() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <SectionHeading
            eyebrow="Designed With Purpose"
            title="DESIGNED FOR SERIOUS TEST TAKERS."
          />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-sm border border-purple/10 bg-lavender/20 px-5 py-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple text-xs font-bold text-ivory">
                  ✓
                </span>
                <span className="text-sm font-semibold text-ink">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
