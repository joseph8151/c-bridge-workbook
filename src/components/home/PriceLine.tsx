import Link from "next/link";
import { tierMeta, tierOrder } from "@/lib/products";

export default function PriceLine() {
  return (
    <section className="border-t bg-paper py-20 md:py-24" style={{ borderColor: "var(--color-line)" }} data-reveal>
      <div className="mx-auto max-w-[900px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          가격
        </p>

        <div
          className="mx-auto mt-8 grid max-w-lg border sm:grid-cols-2"
          style={{ borderColor: "var(--color-line)" }}
        >
          {tierOrder.map((tier, i) => {
            const m = tierMeta[tier];
            return (
              <div
                key={tier}
                className={`p-10 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
                style={{ borderColor: "var(--color-line)" }}
              >
                <p
                  className="font-serif text-[56px] font-black leading-none"
                  style={{ color: "var(--color-inkstrong)" }}
                >
                  {m.label}
                </p>
                <p className="mt-3 text-base font-bold" style={{ color: "var(--color-inkstrong)" }}>
                  {m.price.toLocaleString()}원
                </p>
                {tier === "PREMIUM" && (
                  <p className="mt-2 break-keep text-xs leading-relaxed text-ink/50">
                    전 영역 + 전 영역 모의 1회 + 시험 직전 16쪽 + 구성 상담 1회 수정.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-sm text-ink/50">페이지 수에 따라 구성이 달라집니다.</p>
        <p className="mt-1 text-sm text-ink/50">구성이 정해지면 파일로 드립니다.</p>

        <div className="mt-10 border-t" style={{ borderColor: "var(--color-line)" }} />

        <div className="mx-auto max-w-lg border-x border-b p-8" style={{ borderColor: "var(--color-line)" }}>
          <p className="font-serif text-lg font-black" style={{ color: "var(--color-inkstrong)" }}>
            상담
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink/60">
            목표와 현재 수준에 맞춰 필요한 구성을 안내해드립니다.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/finder" className="btn-primary rounded-sm px-7 text-sm font-bold">
              내 시험 교재 찾기
            </Link>
            <Link
              href="/consultation"
              className="inline-flex min-h-[48px] items-center border px-7 text-sm font-bold"
              style={{ borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }}
            >
              교재 상담하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
