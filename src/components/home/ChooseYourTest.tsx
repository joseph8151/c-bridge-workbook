import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { testMeta } from "@/lib/testMeta";

const tests = ["TOEFL", "IELTS", "PTE", "DET"] as const;

export default function ChooseYourTest() {
  return (
    <section id="choose-your-test" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading eyebrow="Global English Test Prep" title="CHOOSE YOUR TEST." />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {tests.map((id) => {
            const meta = testMeta[id];
            return (
              <Link
                key={id}
                href={`/${meta.slug}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-sm p-7 min-h-[320px] transition-transform duration-300 hover:-translate-y-1.5"
                style={{ background: `linear-gradient(160deg, ${meta.color}, var(--color-plum))` }}
              >
                <span className="absolute -right-6 -top-6 font-serif text-[110px] font-black leading-none text-ivory/10 select-none">
                  {meta.name.slice(0, 2)}
                </span>
                <div className="relative">
                  <p className="text-[11px] font-bold tracking-[0.22em] text-gold">
                    {meta.eyebrow}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl font-black text-ivory">{meta.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-lavender/90">{meta.tagline}</p>
                </div>

                <div className="relative">
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-lavender/80">
                    {meta.skills.slice(0, 6).map((skill) => (
                      <li key={skill} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-gold" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-ivory">
                    Explore {meta.name.split(" ")[0]}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
