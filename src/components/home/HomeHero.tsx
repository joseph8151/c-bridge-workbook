import Link from "next/link";
import Container from "@/components/Container";
import BookMockup from "@/components/BookMockup";

export default function HomeHero() {
  return (
    <section className="w-full" style={{ background: "var(--color-paper)" }}>
      <Container className="grid items-center gap-10 py-12 min-[361px]:py-14 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow text-[11px] min-[361px]:text-xs">PROFESSIONAL LANGUAGE EXAM SERIES</p>
          <h1
            className="hero-fade-up mt-5 break-keep font-serif text-[36px] font-bold leading-[1.15] tracking-[-0.01em] md:mt-6 md:text-[64px] md:leading-[1.15] md:tracking-[-0.02em] lg:text-[76px]"
            style={{ color: "var(--color-ink)" }}
          >
            내 시험, 내 목표,
            <br />
            내가 필요한 문제부터.
          </h1>
          <p className="mt-4 max-w-md break-keep text-[15px] leading-[1.6] md:mt-6 md:text-[17px] md:leading-relaxed" style={{ color: "var(--color-muted)" }}>
            PTE · CELPIP · OET · EPTA 등 시험 구조와 목표 점수를 기준으로 문제집·해설·실전
            모의고사·Final Review를 하나의 구성으로 제공합니다.
          </p>
          <div className="hero-fade-up mt-8 flex flex-col gap-2.5 min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:gap-4 md:mt-10" style={{ animationDelay: "80ms" }}>
            <Link href="/finder" className="btn-primary px-7 text-sm font-medium">
              내 시험 교재 찾기
            </Link>
            <Link
              href="/consultation"
              className="inline-flex min-h-[48px] items-center justify-center text-sm font-medium tracking-[0.02em] transition-colors hover:text-[var(--color-bronze)] md:min-h-[52px] md:justify-start"
              style={{ color: "var(--color-ink)" }}
            >
              구성 상담하기 <span className="arrow-slide ml-1.5">→</span>
            </Link>
          </div>
          <ul
            className="hero-fade-up mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium tracking-[0.02em] md:mt-10"
            style={{ color: "var(--color-muted)", animationDelay: "140ms" }}
          >
            {["시험별 구성", "목표별 난이도", "취약 영역 집중", "PDF 형태 전달"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span className="h-1 w-1 shrink-0 rounded-full" style={{ background: "var(--color-bronze)" }} />
                {t}
              </li>
            ))}
          </ul>
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
