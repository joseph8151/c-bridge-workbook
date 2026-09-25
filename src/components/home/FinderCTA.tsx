import Link from "next/link";
import Container from "@/components/Container";

export default function FinderCTA() {
  return (
    <section className="border-t py-16 md:py-20" style={{ borderColor: "var(--color-border)", background: "var(--color-paper-dark)" }} data-reveal>
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow">FIND YOUR EXAM</p>
            <p className="mt-3 max-w-lg break-keep font-serif text-2xl font-bold leading-snug md:text-[28px]" style={{ color: "var(--color-ink)" }}>
              내게 맞는 시험과 교재를 4단계로 찾아보세요.
            </p>
          </div>
          <Link href="/finder" className="btn-primary shrink-0 px-7 text-sm font-medium">
            시험 찾기 시작
          </Link>
        </div>
      </Container>
    </section>
  );
}
