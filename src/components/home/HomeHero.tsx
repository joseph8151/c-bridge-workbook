import Link from "next/link";
import Container from "@/components/Container";
import BookMockup from "@/components/BookMockup";

export default function HomeHero() {
  return (
    <section className="w-full" style={{ background: "var(--color-paper)" }}>
      <Container className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow">C—BRIDGE · PROFESSIONAL LANGUAGE EXAM SERIES</p>
          <h1
            className="hero-fade-up mt-6 break-keep font-serif text-[44px] font-bold leading-[1.15] tracking-[-0.02em] md:text-[64px] lg:text-[76px]"
            style={{ color: "var(--color-ink)" }}
          >
            직군과 나라가 다르면
            <br />
            같은 영어가 아닙니다.
          </h1>
          <p className="mt-6 max-w-md break-keep text-base leading-relaxed md:text-[17px]" style={{ color: "var(--color-muted)" }}>
            PTE · CELPIP · OET · EPTA · IELTS · TOEFL — 시험에 필요한 문제, 해설, 모의고사, Final
            Review까지.
          </p>
          <div className="hero-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "80ms" }}>
            <Link href="/finder" className="btn-primary px-7 text-sm font-medium">
              시험 선택하기
            </Link>
            <Link
              href="/consultation"
              className="inline-flex min-h-[52px] items-center text-sm font-medium tracking-[0.02em] transition-colors hover:text-[var(--color-bronze)]"
              style={{ color: "var(--color-ink)" }}
            >
              교재 상담 <span className="arrow-slide ml-1.5">→</span>
            </Link>
          </div>
        </div>

        <div className="hero-fade-up order-last" style={{ animationDelay: "120ms" }}>
          <BookMockup
            books={[
              { title: "PTE Academic", subtitle: "Complete Workbook" },
              { title: "OET", subtitle: "Healthcare English" },
              { title: "CELPIP", subtitle: "Canadian English" },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
