import Link from "next/link";
import BookCover from "./BookCover";
import GroupIcon from "./icons/GroupIcons";
import { Test, groupMeta } from "@/lib/tests";
import { getTestPriceLabel } from "@/lib/products";

export default function TestCard({ test }: { test: Test }) {
  const group = groupMeta[test.group];

  return (
    <Link
      href={`/books/${test.slug}`}
      className="group flex flex-col rounded-[20px] border border-purple/10 bg-white/60 p-5 shadow-[0_1px_2px_rgba(36,35,41,0.04)] transition-all hover:-translate-y-0.5 hover:border-purple/25 hover:shadow-[0_12px_28px_-16px_rgba(36,35,41,0.25)]"
    >
      <div className="relative flex justify-center pb-5 pt-1">
        {test.featured && (
          <span className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-[0.1em] text-plum shadow-sm">
            대표 시험
          </span>
        )}
        <BookCover
          test={test.name}
          skill={test.tagline}
          tag="패키지 시리즈"
          color={group.color}
          size="md"
          className="transition-transform duration-300 group-hover:-translate-y-1"
        />
      </div>

      <div className="flex items-center gap-1.5">
        <GroupIcon group={test.group} className="shrink-0" style={{ color: group.color }} />
        <p className="text-[11px] font-bold tracking-[0.14em]" style={{ color: group.color }}>
          {group.navLabel}
        </p>
      </div>
      <h3 className="mt-1.5 font-serif text-lg font-bold leading-snug text-ink">{test.name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-ink/60">{test.tagline}</p>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {test.badges?.slice(0, 1).map((b) => (
          <span
            key={b}
            className="rounded-full bg-lavender px-2.5 py-1 text-[10px] font-bold text-purple"
          >
            {b}
          </span>
        ))}
        <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[10px] font-bold text-gold">
          맞춤 구성 가능
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-purple/10 pt-4">
        <span className="text-xs font-semibold tracking-[0.06em] text-ink/45">
          100P · 200P · 300P
        </span>
        <span className="font-serif text-base font-bold text-ink">{getTestPriceLabel(test.id)}</span>
      </div>

      <span className="mt-4 flex items-center justify-center gap-1.5 rounded-[14px] border border-purple/20 py-2.5 text-xs font-bold tracking-[0.06em] text-purple transition-colors group-hover:bg-purple group-hover:text-ivory">
        자세히 보기
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
