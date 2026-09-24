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
    <section className="bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((t) => (
            <Link key={t.id} href={hrefFor(t)} className="group block">
              <div className="h-px w-10" style={{ background: "var(--color-line)" }} />
              <p
                className="mt-6 underline decoration-2 decoration-transparent underline-offset-8 transition-colors duration-300 font-serif text-3xl font-black leading-none group-hover:decoration-[var(--color-pistachio)]"
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
              <span
                className="mt-8 block text-xs font-bold tracking-[0.08em]"
                style={{ color: "var(--color-rust)" }}
              >
                상담 →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-14 text-sm text-ink/45">
          <Link href="/exams" className="underline decoration-ink/25 underline-offset-4 hover:text-ink/70">
            시험 찾기에서 나머지 과목
          </Link>
        </p>
      </div>
    </section>
  );
}
