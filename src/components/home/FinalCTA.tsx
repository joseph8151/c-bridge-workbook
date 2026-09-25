import Link from "next/link";
import Container from "@/components/Container";

export default function FinalCTA() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)", background: "var(--color-paper)" }} data-reveal>
      <Container>
        <div className="flex flex-col items-start gap-8">
          <p
            className="break-keep font-serif text-4xl font-bold leading-[1.1] tracking-[-0.02em] md:text-[56px]"
            style={{ color: "var(--color-ink)" }}
          >
            YOUR EXAM.
            <br />
            YOUR SCORE.
            <br />
            YOUR BOOK.
          </p>
          <div className="flex w-full flex-col gap-2.5 min-[430px]:w-auto min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:gap-4">
            <Link href="/finder" className="btn-primary justify-center px-7 text-sm font-medium">
              내 시험 교재 찾기
            </Link>
            <Link href="/consultation" className="btn-secondary justify-center px-7 text-sm font-medium">
              상담하기 →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
