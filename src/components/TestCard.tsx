import Link from "next/link";
import { Test } from "@/lib/tests";

// 텍스트 리스트 행 — 아이콘·표지 이미지 없이 시험명·설명만 (가격은 상담 시 안내).
export default function TestCard({ test }: { test: Test }) {
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

      <span className="shrink-0 text-xs font-semibold tracking-[0.08em]" style={{ color: "var(--color-rust)" }}>
        자세히 보기 →
      </span>
    </Link>
  );
}
