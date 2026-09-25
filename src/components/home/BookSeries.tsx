import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { tierMeta, tierOrder } from "@/lib/products";

export default function BookSeries() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader eyebrow="THE SERIES" />

        <div className="mt-10 grid border-y sm:mt-12 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
          {tierOrder.map((tier, i) => {
            const m = tierMeta[tier];
            return (
              <div
                key={tier}
                className={`p-6 min-[361px]:p-8 md:p-12 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="font-serif text-[56px] font-bold leading-none min-[430px]:text-[64px] md:text-[80px]" style={{ color: "var(--color-ink)" }}>
                  {m.pages}
                </span>
                <span className="mt-1 block text-xs font-medium tracking-[0.16em]" style={{ color: "var(--color-muted)" }}>
                  PAGES
                </span>
                <p className="mt-4 font-serif text-xl font-bold" style={{ color: "var(--color-bronze)" }}>
                  ₩{m.price.toLocaleString()}
                </p>

                <ul className="mt-6 space-y-2 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
                  {m.includes.map((item) => (
                    <li key={item} className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/pricing`}
                  className="mt-8 inline-flex min-h-[44px] items-center text-sm font-medium tracking-[0.02em] transition-colors hover:text-[var(--color-bronze)]"
                  style={{ color: "var(--color-ink)" }}
                >
                  Explore {m.label} <span className="arrow-slide ml-1.5">→</span>
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm" style={{ color: "var(--color-muted)" }}>
          페이지 수에 따라 구성이 달라집니다. 구성이 정해지면 파일로 드립니다.
        </p>
      </Container>
    </section>
  );
}
