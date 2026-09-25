import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
import { tierMeta, tierOrder, Tier } from "@/lib/products";

const tierDescriptions: Record<Tier, string> = {
  COMPLETE: "약한 영역 집중. 문제·해설·영역 세트.",
  PREMIUM: "전 영역 + 전 영역 모의 1회 + 시험 직전 16쪽 + 구성 상담 1회 수정.",
};

const faqItems = [
  { q: "100페이지는 없나요", a: "200과 300만 있습니다." },
  { q: "샘플을 전부 받을 수 있나요", a: "미리보기만 있습니다. 본량은 상담 후입니다." },
  { q: "주말에도 되나요", a: "주말·공휴일에도 상담을 받습니다." },
];

export const metadata: Metadata = {
  title: "가격 안내 | C-BRIDGE",
  description: "C-BRIDGE 시험 대비 패키지 200P·300P 구성과 가격을 확인하세요.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <section className="py-14 min-[361px]:py-16 md:py-28" style={{ background: "var(--color-paper)" }}>
      <Container className="max-w-[640px] text-center">
        <p className="eyebrow">THE SERIES</p>
        <h1
          className="mx-auto mt-4 break-keep font-serif text-[28px] font-bold leading-[1.3] min-[361px]:mt-5 min-[361px]:text-4xl md:text-5xl md:leading-[1.35]"
          style={{ color: "var(--color-ink)" }}
        >
          직군이 달라도 페이지 가격은 같습니다.
        </h1>

        <div className="mt-8 border-t min-[361px]:mt-10" style={{ borderColor: "var(--color-border)" }} />

        <div className="mx-auto mt-10 grid max-w-xl border sm:grid-cols-2 md:mt-12" style={{ borderColor: "var(--color-border)" }}>
          {tierOrder.map((t, i) => {
            const meta = tierMeta[t];
            return (
              <div key={t} className={`p-6 text-left min-[361px]:p-8 md:p-10 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`} style={{ borderColor: "var(--color-border)" }}>
                <span className="whitespace-nowrap font-serif text-[32px] font-bold min-[361px]:text-[40px]" style={{ color: "var(--color-ink)" }}>
                  {meta.pages}페이지
                </span>
                <span className="mt-1 block font-serif text-[26px] font-bold min-[361px]:text-[32px]" style={{ color: "var(--color-bronze)" }}>
                  ₩{meta.price.toLocaleString()}
                </span>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {tierDescriptions[t]}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm" style={{ color: "var(--color-muted)" }}>
          포함: 문제, 해설, 모의.
        </p>
        <p className="mt-1 text-sm" style={{ color: "var(--color-muted)" }}>
          구성이 정해지면 파일로 드립니다.
        </p>

        <div className="mx-auto mt-12 max-w-xl text-left md:mt-14">
          <FAQ items={faqItems} />
        </div>

        <div className="mx-auto mt-8 max-w-sm border p-6 min-[361px]:p-8 md:mt-10" style={{ borderColor: "var(--color-border)" }}>
          <p className="font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
            상담
          </p>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            목표와 현재 수준에 맞춰 필요한 구성을 안내해드립니다.
          </p>
          <Link href="/consultation" className="btn-primary mt-6 px-7 text-sm font-medium">
            상담
          </Link>
        </div>
      </Container>
    </section>
  );
}
