import Link from "next/link";
import { Test } from "@/lib/tests";
import { tierMeta, tierOrder } from "@/lib/products";

// 텍스트 리스트 행 — 아이콘·표지 이미지 없이 시험명·설명·가격만.
export default function TestCard({ test }: { test: Test }) {
  const availableTiers = test.availableTiers ?? tierOrder;
  // 이 시험이 실제로 파는 분량의 가격만 "·"로 이어붙입니다 (전체 시험 공용
  // priceSummaryCompact는 항상 100P·200P·300P 전체를 가리켜, 분량이 제한된
  // 시험에서는 팔지 않는 분량의 가격까지 보여주는 문제가 있었습니다).
  const priceText =
    test.priceOverride ?? availableTiers.map((t) => `${tierMeta[t].price.toLocaleString()}원`).join(" · ");

  return (
    <Link
      href={`/books/${test.slug}`}
      className="card-hover group flex items-baseline justify-between gap-4 border-t py-5"
      style={{ borderColor: "var(--color-line)" }}
    >
      <span className="min-w-0">
        <span className="block font-serif text-lg font-semibold leading-snug tracking-[-0.01em]" style={{ color: "var(--color-inkstrong)" }}>
          {test.name}
        </span>
        <span className="mt-0.5 block text-sm leading-relaxed text-ink/60">{test.tagline}</span>
      </span>

      <span className="flex shrink-0 flex-col items-end gap-1">
        <span className="font-serif text-sm font-semibold" style={{ color: "var(--color-inkstrong)" }}>
          {priceText}
        </span>
        <span className="text-xs font-semibold tracking-[0.08em]" style={{ color: "var(--color-rust)" }}>
          자세히 보기 →
        </span>
      </span>
    </Link>
  );
}
