import { qualityMetrics } from "@/lib/qualityContent";

export default function QualityMetrics() {
  return (
    <section className="bg-ivory py-20 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {qualityMetrics.map((m, i) => (
            <div
              key={m.word}
              className={`text-center lg:border-purple/10 ${
                i > 0 ? "lg:border-l lg:pl-6" : ""
              }`}
            >
              <p className="font-serif text-4xl font-black tracking-[0.02em] text-purple md:text-5xl">
                {m.word}
              </p>
              <p className="mt-3 break-keep text-sm leading-relaxed text-ink/60">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
