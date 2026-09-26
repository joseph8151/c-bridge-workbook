import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { tierMeta, tierOrder } from "@/lib/products";

export default function BookSeries() {
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader eyebrow="PACKAGE & PRICE" title="준비 기간에 맞춰 선택하세요." />

        <div className="mt-10 grid border-y sm:mt-12 sm:grid-cols-2" style={{ borderColor: "var(--color-border)" }}>
          {tierOrder.map((tier, i) => {
            const m = tierMeta[tier];
            return (
              <div
                key={tier}
                className={`flex flex-col p-6 min-[361px]:p-8 md:p-12 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
                style={{ borderColor: "var(--color-border)" }}
              >
                <p className="text-xs font-bold tracking-[0.16em]" style={{ color: "var(--color-bronze)" }}>
                  {m.name} · {m.label}
                </p>
                <p className="mt-3 font-serif text-3xl font-bold md:text-4xl" style={{ color: "var(--color-ink)" }}>
                  ₩{m.price.toLocaleString()}
                </p>
                <p className="mt-3 break-keep text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {m.shortDesc}
                </p>

                <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
                  <p className="text-xs font-semibold tracking-[0.06em]" style={{ color: "var(--color-ink)" }}>
                    추천 대상
                  </p>
                  <ul className="mt-2 space-y-1">
                    {m.recommendedFor.map((r) => (
                      <li key={r} className="text-sm" style={{ color: "var(--color-muted)" }}>
                        · {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
                  <p className="text-xs font-semibold tracking-[0.06em]" style={{ color: "var(--color-ink)" }}>
                    포함 구성
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {m.includes.map((item) => (
                      <li key={item} className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/consultation?tier=${encodeURIComponent(m.label)}`}
                  className="btn-primary mt-8 justify-center px-7 text-sm font-medium"
                >
                  {m.label} 구성 상담하기
                </Link>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm" style={{ color: "var(--color-muted)" }}>
          가격은 페이지 수가 아니라 포함된 구성 전체를 기준으로 책정됩니다. 구성이 정해지면 파일로
          드립니다.
        </p>
      </Container>
    </section>
  );
}
