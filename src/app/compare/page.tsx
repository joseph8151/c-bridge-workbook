import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { compareEntries } from "@/lib/compareData";

export const metadata: Metadata = {
  title: "시험 비교 | C-BRIDGE",
  description: "PTE, IELTS, TOEFL, CELPIP, OET 등 주요 어학시험을 비교해 나에게 맞는 시험을 찾아보세요.",
  alternates: { canonical: "/compare" },
};

export default function ComparePage() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container className="max-w-[900px]">
        <p className="eyebrow">EXAM COMPARISON</p>
        <h1
          className="mt-5 break-keep font-serif text-3xl font-bold leading-[1.3] md:text-4xl"
          style={{ color: "var(--color-ink)" }}
        >
          어떤 시험이 나에게 맞을까요?
        </h1>

        <div className="mt-10 border-t" style={{ borderColor: "var(--color-border)" }}>
          {compareEntries.map((c) => (
            <Link
              key={c.slug}
              href={`/compare/${c.slug}`}
              className="card-hover group flex items-center justify-between gap-6 border-b py-6"
              style={{ borderColor: "var(--color-border)" }}
            >
              <span className="font-serif text-xl font-bold md:text-2xl" style={{ color: "var(--color-ink)" }}>
                {c.testA} <span style={{ color: "var(--color-bronze)" }}>vs</span> {c.testB}
              </span>
              <span className="shrink-0 text-xs font-medium tracking-[0.1em]" style={{ color: "var(--color-ink)" }}>
                Compare <span className="arrow-slide inline-block">→</span>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
