import Link from "next/link";
import Container from "@/components/Container";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-navy)" }} data-reveal>
      <Container>
        <div className="flex flex-col items-start gap-8">
          <p
            className="break-keep font-serif text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-[56px]"
            style={{ color: "var(--color-navy-text)" }}
          >
            YOUR EXAM.
            <br />
            YOUR SCORE.
            <br />
            YOUR BOOK.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/finder" className="btn-primary-inverse px-7 text-sm font-medium">
              내 시험 교재 찾기
            </Link>
            <Link href="/consultation" className="btn-secondary-inverse px-7 text-sm font-medium">
              상담하기 →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
