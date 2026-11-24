import Link from "next/link";
import Container from "@/components/Container";

export default function TutoringTeaser() {
  return (
    <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--bg-line)", background: "var(--bg-paper)" }} data-reveal>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow" style={{ color: "var(--bg-accent)" }}>
              LIVE TUTORING
            </p>
            <p
              className="mt-4 max-w-xl break-keep text-2xl font-medium leading-snug tracking-[-0.03em] md:text-[32px]"
              style={{ color: "var(--bg-ink)" }}
            >
              혼자 공부하기 어렵다면, 전문 튜터와 1:1 실시간 화상과외로 보완하세요.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/tutoring" className="btn-primary px-7 text-sm font-medium">
              화상과외 알아보기
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
