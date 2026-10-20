import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import { tierMeta, tierOrder } from "@/lib/products";

export default function BookSeries() {
  return (
    <section className="border-t py-24 md:py-32" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader
          eyebrow="PACKAGE & PRICE"
          title="준비 기간에 맞춰 선택하세요."
          description="200P는 핵심 영역 또는 취약 영역 집중, 300P는 전 영역 + 고득점 + 충분한 반복으로 구성됩니다."
        />

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
                <p className="mt-3 text-4xl font-medium tracking-[-0.02em] md:text-5xl" style={{ color: "var(--color-ink)" }}>
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

                <div className="mt-8 flex flex-wrap gap-2.5">
                  <Link
                    href={`/consultation?tier=${encodeURIComponent(m.label)}`}
                    className="btn-primary justify-center px-7 text-sm font-medium"
                  >
                    {m.label} 구성 상담하기
                  </Link>
                  <Link
                    href={`/pricing?tier=${encodeURIComponent(m.label)}#direct-purchase`}
                    className="btn-secondary justify-center px-7 text-sm font-medium"
                  >
                    바로 구매
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm" style={{ color: "var(--color-muted)" }}>
          가격은 페이지 수가 아니라 포함된 구성 전체를 기준으로 책정됩니다. 구성이 정해지면 PDF
          파일로 드리며, 원하실 경우 실물 교재로 제작해 국내·해외 모두 발송해드립니다.
        </p>
      </Container>
    </section>
  );
}
