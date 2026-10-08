import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function HomeHero() {
  return (
    <section className="w-full" style={{ background: "var(--color-paper)" }}>
      <Container className="grid items-center gap-10 py-12 min-[361px]:py-14 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow text-[11px] min-[361px]:text-xs">PROFESSIONAL LANGUAGE EXAM SERIES</p>
          <h1
            className="hero-fade-up mt-5 break-keep font-medium leading-[1.15] tracking-[-0.03em]"
            style={{ color: "var(--color-ink)", fontSize: "clamp(40px, 5vw, 64px)" }}
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
            className="hero-fade-up mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium md:mt-10"
            style={{ animationDelay: "140ms" }}
          >
            {[
              { name: "PTE Academic", href: "/books/pte-academic" },
              { name: "CELPIP", href: "/books/celpip" },
              { name: "OET", href: "/oet" },
              { name: "EPTA", href: "/books/epta" },
            ].map((t) => (
              <li key={t.name}>
                <Link
                  href={t.href}
                  className="underline decoration-[var(--color-border)] underline-offset-4 transition-colors hover:text-[var(--color-bronze)] hover:decoration-[var(--color-bronze)]"
                  style={{ color: "var(--color-ink)" }}
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-fade-up img-fade order-last min-w-0" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2px] lg:max-w-none">
            <Image
              src="/images/hero-desk.jpg"
              alt="책상에서 문제집을 풀며 필기하는 모습"
              fill
              sizes="(max-width: 1024px) 100vw, 480px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
