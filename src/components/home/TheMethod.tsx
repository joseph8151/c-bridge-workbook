import SectionHeading from "../SectionHeading";

const steps = [
  { no: "01", title: "DIAGNOSE", desc: "약한 영역 확인" },
  { no: "02", title: "PRACTICE", desc: "유형별 집중 문제풀이" },
  { no: "03", title: "ADVANCE", desc: "고난도 문제 풀이" },
  { no: "04", title: "SIMULATE", desc: "실전 Mock Test" },
  { no: "05", title: "CROSS THE BRIDGE", desc: "목표 점수 도달", gold: true },
];

export default function TheMethod() {
  return (
    <section className="bg-lavender/40 py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading eyebrow="Learning System" title="THE C-BRIDGE METHOD" align="center" className="mx-auto" />

        <div className="mt-16 flex flex-col items-stretch gap-3 md:flex-row md:items-center md:gap-2">
          {steps.map((step, i) => (
            <div key={step.no} className="flex flex-col items-center md:flex-1">
              <div
                className={`flex flex-1 flex-col items-center gap-2 rounded-sm border p-6 text-center md:w-full ${
                  step.gold
                    ? "border-gold/40 bg-plum text-ivory"
                    : "border-purple/15 bg-ivory text-ink"
                }`}
              >
                <span
                  className={`font-serif text-2xl font-black ${step.gold ? "text-gold" : "text-purple/40"}`}
                >
                  {step.no}
                </span>
                <p
                  className={`font-serif text-base font-bold tracking-wide md:text-lg ${step.gold ? "text-gold" : ""}`}
                >
                  {step.title}
                </p>
                <p className={`text-xs ${step.gold ? "text-lavender/80" : "text-ink/55"}`}>
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span className="font-serif text-2xl text-purple/30 md:mx-2">
                  <span className="md:hidden">↓</span>
                  <span className="hidden md:inline">→</span>
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
