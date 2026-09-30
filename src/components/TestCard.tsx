import Link from "next/link";
import { Test } from "@/lib/tests";
import { priceSummaryCompact } from "@/lib/products";

// 텍스트 리스트 행 — 아이콘·표지 이미지 없이 시험명·설명·가격만.
export default function TestCard({ test }: { test: Test }) {
  return (
    <Link
      href={`/books/${test.slug}`}
      className="card-hover group flex items-baseline justify-between gap-4 border-t py-5"
      style={{ borderColor: "var(--color-line)" }}
    >
      <span className="min-w-0">
        <span className="block font-serif text-lg font-bold leading-snug" style={{ color: "var(--color-inkstrong)" }}>
          {test.name}
        </span>
        <span className="mt-0.5 block text-sm leading-relaxed text-ink/60">{test.tagline}</span>
      </span>

      <span className="flex shrink-0 flex-col items-end gap-1">
        <span className="font-serif text-sm font-bold" style={{ color: "var(--color-inkstrong)" }}>
          {priceSummaryCompact}
        </span>
        <span className="text-xs font-bold tracking-[0.08em]" style={{ color: "var(--color-rust)" }}>
          자세히 보기 →
        </span>
      </span>
    </Link>
  );
}
