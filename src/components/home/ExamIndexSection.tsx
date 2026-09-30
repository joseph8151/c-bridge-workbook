import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ExamIndex, { ExamIndexItem } from "@/components/ExamIndex";

const items: ExamIndexItem[] = [
  { name: "PTE ACADEMIC", subtitle: "Academic English", context: "Australia · UK · Global", href: "/books/pte-academic" },
  { name: "CELPIP", subtitle: "Canadian English Proficiency", context: "Canada", href: "/books/celpip" },
  { name: "OET", subtitle: "English for Healthcare Professionals", context: "Healthcare Professionals", href: "/oet" },
  { name: "EPTA", subtitle: "Aviation English", context: "ICAO LPR · Level 4 / 5", href: "/books/epta" },
  { name: "IELTS", subtitle: "International English", context: "Study Abroad · Immigration", href: "/books/ielts" },
  { name: "TOEFL", subtitle: "Academic English", context: "US · Global Universities", href: "/books/toefl" },
  { name: "TOLES", subtitle: "Legal English", context: "Contracts · Firms", href: "/books/toles" },
  { name: "MARLINS", subtitle: "Maritime English", context: "Seafarers · Cruise", href: "/books/marlins" },
  { name: "TELC PFLEGE", subtitle: "German for Nurses", context: "B1–B2 · Germany", href: "/books/telc-pflege" },
  { name: "TRADE ENGLISH", subtitle: "무역영어 1급", context: "L/C · Claims", href: "/books/trade-english" },
];

export default function ExamIndexSection() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-paper)" }} data-reveal>
      <Container>
        <SectionHeader eyebrow="EXAM INDEX" />
        <div className="mt-8">
          <ExamIndex items={items} />
        </div>
        <p className="mt-10 text-sm" style={{ color: "var(--color-muted)" }}>
          <Link href="/exams" className="underline decoration-[var(--color-border)] underline-offset-4 hover:text-[var(--color-bronze)]">
            View all exams in the index
          </Link>
        </p>
      </Container>
    </section>
  );
}
