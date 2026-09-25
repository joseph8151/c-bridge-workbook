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
    <section className="border-t bg-paper py-20 md:py-24" style={{ borderColor: "var(--color-line)" }} data-reveal>
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div
          className="grid border-y sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderColor: "var(--color-line)" }}
        >
          {exams.map((t, i) => (
            <Link
              key={t.id}
              href={hrefFor(t)}
              className={`group flex min-h-[220px] flex-col justify-between p-10 ${i > 0 ? "border-l" : ""} ${i > 1 ? "border-t sm:border-t-0" : ""}`}
              style={{ borderColor: "var(--color-line)" }}
            >
              <div>
                <p
                  className="underline decoration-2 decoration-transparent underline-offset-[24px] transition-colors duration-300 font-serif text-2xl font-black leading-none group-hover:decoration-[var(--color-pistachio)]"
                  style={{ color: "var(--color-inkstrong)" }}
                >
                  {t.name}
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--color-inkstrong)", opacity: 0.65 }}>
                  {t.tagline}
                </p>
                {t.slug === "oet" && (
                  <p className="mt-1 whitespace-nowrap text-[11px] tracking-tight text-ink/45">
                    간호사·의사·약사·물리치료·치과·방사선·작업치료
                  </p>
                )}
              </div>
              <span
                className="mt-8 block text-xs font-bold tracking-[0.08em]"
                style={{ color: "var(--color-rust)" }}
              >
                상담 →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm" style={{ color: "var(--color-inkstrong)", opacity: 0.5 }}>
          <Link href="/exams" className="underline decoration-ink/25 underline-offset-4 hover:opacity-100">
            시험 찾기에서 나머지 과목
          </Link>
        </p>
      </div>
    </section>
  );
}
