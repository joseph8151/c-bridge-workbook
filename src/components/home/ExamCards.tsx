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
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exams.map((t) => (
            <Link
              key={t.id}
              href={hrefFor(t)}
              className="group flex aspect-[3/4] flex-col justify-between border border-ink/10 bg-paper p-7 transition-colors hover:border-ink/25"
            >
              <p
                className="font-serif text-3xl font-black leading-none"
                style={{ color: "var(--color-inkstrong)" }}
              >
                {t.name}
              </p>
              <div>
                <p className="text-sm leading-relaxed text-ink/60">{t.tagline}</p>
                <span
                  className="mt-6 block text-xs font-bold tracking-[0.08em]"
                  style={{ color: "var(--color-rust)" }}
                >
                  상담 →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink/45">
          <Link href="/toles" className="underline decoration-ink/20 underline-offset-4 hover:text-ink/70">
            TOLES
          </Link>
          {" · "}
          <Link href="/topec" className="underline decoration-ink/20 underline-offset-4 hover:text-ink/70">
            TOPEC
          </Link>
          {" · "}
          <Link href="/consultation" className="underline decoration-ink/20 underline-offset-4 hover:text-ink/70">
            다른 시험은 상담
          </Link>
        </p>
      </div>
    </section>
  );
}
