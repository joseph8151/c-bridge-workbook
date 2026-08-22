import SectionHeading from "../SectionHeading";
import { comparisonRows } from "@/lib/qualityContent";

export default function ComparisonTable() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          title="일반적인 문제집과 C-BRIDGE의 차이"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-[24px] border border-purple/12 shadow-[0_20px_44px_-28px_rgba(69,53,101,0.35)]">
          <div className="grid grid-cols-2">
            <div className="bg-ivory p-5 text-center">
              <p className="text-xs font-bold tracking-[0.14em] text-ink/40">일반적인 문제집</p>
            </div>
            <div className="bg-plum p-5 text-center">
              <p className="text-xs font-bold tracking-[0.18em] text-gold">C-BRIDGE</p>
            </div>
          </div>
          {comparisonRows.map((row, i) => (
            <div key={row.general} className="grid grid-cols-2">
              <div
                className={`flex items-center justify-center p-5 text-center text-sm text-ink/55 ${
                  i % 2 === 0 ? "bg-ivory" : "bg-lavender/15"
                }`}
              >
                {row.general}
              </div>
              <div
                className={`flex items-center justify-center p-5 text-center text-sm font-bold text-ivory ${
                  i % 2 === 0 ? "bg-plum" : "bg-purple"
                }`}
              >
                {row.cbridge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
