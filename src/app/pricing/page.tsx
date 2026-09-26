import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import { tierMeta, tierOrder } from "@/lib/products";
import { siteFaqItems } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "가격 안내 | C-BRIDGE",
  description: "C-BRIDGE 시험 대비 패키지 200P(COMPLETE)·300P(INTENSIVE) 구성과 가격을 확인하세요.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <section className="py-14 min-[361px]:py-16 md:py-28" style={{ background: "var(--color-paper)" }}>
      <Container className="max-w-[760px] text-center">
        <p className="eyebrow">PACKAGE &amp; PRICE</p>
        <h1
          className="mx-auto mt-4 break-keep font-serif text-[28px] font-bold leading-[1.3] min-[361px]:mt-5 min-[361px]:text-4xl md:text-5xl md:leading-[1.35]"
          style={{ color: "var(--color-ink)" }}
        >
          준비 기간에 맞춰 선택하세요.
        </h1>
        <p className="mx-auto mt-4 max-w-[520px] break-keep text-sm leading-relaxed md:text-base" style={{ color: "var(--color-muted)" }}>
          가격은 페이지 수가 아니라 문제집·해설집·모의고사·학습 플랜을 포함한 전체 구성을 기준으로
          책정됩니다.
        </p>

        <div className="mt-8 border-t min-[361px]:mt-10" style={{ borderColor: "var(--color-border)" }} />

        <div className="mx-auto mt-10 grid max-w-2xl border sm:grid-cols-2 md:mt-12" style={{ borderColor: "var(--color-border)" }}>
          {tierOrder.map((t, i) => {
            const meta = tierMeta[t];
            return (
              <div
                key={t}
                className={`flex flex-col p-6 text-left min-[361px]:p-8 md:p-10 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
                style={{ borderColor: "var(--color-border)" }}
              >
                <p className="text-xs font-bold tracking-[0.16em]" style={{ color: "var(--color-bronze)" }}>
                  {meta.name} · {meta.label}
                </p>
                <p className="mt-3 font-serif text-[28px] font-bold min-[361px]:text-[32px]" style={{ color: "var(--color-ink)" }}>
                  ₩{meta.price.toLocaleString()}
                </p>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {meta.shortDesc}
                </p>

                <div className="mt-5 border-t pt-5" style={{ borderColor: "var(--color-border)" }}>
                  <p className="text-xs font-semibold tracking-[0.06em]" style={{ color: "var(--color-ink)" }}>
                    추천 대상
                  </p>
                  <ul className="mt-2 space-y-1">
                    {meta.recommendedFor.map((r) => (
                      <li key={r} className="text-sm" style={{ color: "var(--color-muted)" }}>
                        · {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t pt-5" style={{ borderColor: "var(--color-border)" }}>
                  <p className="text-xs font-semibold tracking-[0.06em]" style={{ color: "var(--color-ink)" }}>
                    포함 구성
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {meta.includes.map((item) => (
                      <li key={item} className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                        · {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/consultation?tier=${encodeURIComponent(meta.label)}`}
                  className="btn-primary mt-7 justify-center px-7 text-sm font-medium"
                >
                  {meta.label} 구성 상담하기
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-xl border p-6 text-left min-[361px]:p-8 md:mt-12" style={{ borderColor: "var(--color-border)" }}>
          <p className="font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
            어떤 구성을 골라야 할지 몰라도 괜찮습니다.
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            시험명, 현재 수준, 목표, 시험 예정일, 취약 영역을 상담에서 알려주시면 필요한 구성을
            안내해드립니다. 결제 전 상담을 통해 구성을 먼저 조정하며, 결제 후에도 1회에 한해 구성
            수정이 가능합니다.
          </p>
          <Link href="/consultation" className="btn-secondary mt-6 px-7 text-sm font-medium">
            구성 상담하기
          </Link>
        </div>

        <div className="mx-auto mt-12 max-w-xl text-left md:mt-14">
          <FAQ items={siteFaqItems} />
        </div>
      </Container>
    </section>
  );
}
