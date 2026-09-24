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
    <section className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((t) => (
            <Link
              key={t.id}
              href={hrefFor(t)}
              className="group block border-t pt-6"
              style={{ borderColor: "var(--color-line)" }}
            >
              <p
                className="underline decoration-2 decoration-transparent underline-offset-8 transition-colors duration-300 font-serif text-3xl font-black leading-none group-hover:decoration-[var(--color-pistachio)]"
                style={{ color: "var(--color-inkstrong)" }}
              >
                {t.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{t.tagline}</p>
              {t.slug === "oet" && (
                <p className="mt-1 text-xs text-ink/45">간호사 · 의사 · 약사 · 물리치료 · 치과 · 방사선 · 작업치료</p>
              )}
              <span
                className="mt-6 block text-xs font-bold tracking-[0.08em]"
                style={{ color: "var(--color-rust)" }}
              >
                상담 →
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-14 text-sm text-ink/45">
          <Link href="/toles" className="underline decoration-ink/25 underline-offset-4 hover:text-ink/70">
            TOLES
          </Link>
          {" · "}
          <Link href="/topec" className="underline decoration-ink/25 underline-offset-4 hover:text-ink/70">
            TOPEC
          </Link>
          {" · "}
          <Link href="/consultation" className="underline decoration-ink/25 underline-offset-4 hover:text-ink/70">
            다른 시험은 상담
          </Link>
        </p>
      </div>
    </section>
  );
}
