import Link from "next/link";
import { getTestBySlug, Test } from "@/lib/tests";

const slugs = ["pte-academic", "celpip", "oet", "epta"];

function hrefFor(t: Test) {
  return t.slug === "oet" ? "/oet" : `/books/${t.slug}`;
}

export default function ExamCards() {
  const exams = slugs
    .map((slug) => getTestBySlug(slug))
    .filter((t): t is Test => t !== undefined);

  return (
    <section className="bg-paper py-14 md:py-20" data-reveal>
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div
          className="grid border-y sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--color-line)" }}
        >
          {exams.map((t, i) => (
            <Link
              key={t.id}
              href={hrefFor(t)}
              className={`card-hover group flex flex-col justify-between p-8 ${i > 0 ? "border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""}`}
              style={{ borderColor: "var(--color-line)" }}
            >
              <div>
                <p
                  className="underline decoration-2 decoration-transparent underline-offset-8 transition-colors duration-300 font-serif text-2xl font-black leading-none group-hover:decoration-[var(--color-pistachio)]"
                  style={{ color: "var(--color-inkstrong)" }}
                >
                  {t.name}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{t.tagline}</p>
                {t.slug === "oet" && (
                  <p className="mt-1 whitespace-nowrap text-[11px] tracking-tight text-ink/45">
                    간호사·의사·약사·물리치료·치과·방사선·작업치료
                  </p>
                )}
              </div>
              <div>
                <div
                  className="mt-8 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
                  style={{ background: "var(--color-pistachio)" }}
                />
                <span
                  className="mt-3 block text-xs font-bold tracking-[0.08em]"
                  style={{ color: "var(--color-rust)" }}
                >
                  상담 →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-ink/45">
          <Link href="/exams" className="underline decoration-ink/25 underline-offset-4 hover:text-ink/70">
            시험 찾기에서 나머지 과목
          </Link>
        </p>
      </div>
    </section>
  );
}
