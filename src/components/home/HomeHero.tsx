import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export default function HomeHero() {
  return (
    <section className="w-full" style={{ background: "var(--bg-paper)" }}>
      <Container className="grid items-center gap-10 py-12 min-[361px]:py-14 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16 lg:py-28">
        <div>
          <p className="eyebrow text-[11px] min-[361px]:text-xs">PROFESSIONAL LANGUAGE EXAM SERIES</p>
          <h1
            className="hero-fade-up mt-5 break-keep font-medium leading-[1.15] tracking-[-0.03em]"
            style={{ color: "var(--bg-ink)", fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            필요한 문제를,
            <br />
            충분한 분량으로.
          </h1>
          <p className="mt-4 max-w-md break-keep text-[15px] leading-[1.6] md:mt-6 md:text-[17px] md:leading-relaxed" style={{ color: "var(--bg-muted)" }}>
            시험 구조에 맞춘 방대한 문제와 자료로 목표 점수를 준비합니다.
          </p>
          <p className="mt-3 max-w-md break-keep text-[15px] leading-[1.6] md:text-[17px] md:leading-relaxed" style={{ color: "var(--bg-muted)" }}>
            충분한 문제 경험은 실전에서의 속도와 정확도를 만드는 중요한 과정입니다. C-BRIDGE는
            다양한 유형과 방대한 문제량을 통해 실제 시험에 충분히 대비할 수 있도록 구성합니다.
          </p>
          <div className="hero-fade-up mt-8 flex flex-col gap-2.5 min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:items-center min-[430px]:gap-4 md:mt-10" style={{ animationDelay: "80ms" }}>
            <Link href="/finder" className="btn-primary px-7 text-sm font-medium">
              내 시험 교재 찾기
            </Link>
            <Link
              href="/consultation"
              className="inline-flex min-h-[48px] items-center justify-center text-sm font-medium tracking-[0.02em] transition-colors hover:text-[var(--bg-accent)] md:min-h-[52px] md:justify-start"
              style={{ color: "var(--bg-ink)" }}
            >
              ⚡ 빠른 상담하기 <span className="arrow-slide ml-1.5">→</span>
            </Link>
          </div>
          <p
            className="hero-fade-up mt-3 text-xs font-medium"
            style={{ animationDelay: "100ms", color: "var(--bg-muted)" }}
          >
            상담 신청 후 30분 이내 문자 또는 전화로 연락드립니다.
          </p>
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
                  className="underline decoration-[var(--bg-line)] underline-offset-4 transition-colors hover:text-[var(--bg-accent)] hover:decoration-[var(--bg-accent)]"
                  style={{ color: "var(--bg-ink)" }}
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
