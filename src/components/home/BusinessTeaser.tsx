import Link from "next/link";
import Container from "@/components/Container";

export default function BusinessTeaser() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--color-paper)" }} data-reveal>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow" style={{ color: "var(--color-bronze)" }}>
              FOR BUSINESS
            </p>
            <p
              className="mt-4 max-w-xl break-keep font-serif text-2xl font-bold leading-snug md:text-[32px]"
              style={{ color: "var(--color-ink)" }}
            >
              임직원 평가, 승진 시험, 해외 파견까지 — 조직의 목적에 맞는 시험 대비 자료를
              구성합니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/business" className="btn-primary px-7 text-sm font-medium">
              기업 문의하기
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
