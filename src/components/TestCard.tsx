import Link from "next/link";
import Image from "next/image";
import BookCover from "./BookCover";
import GroupIcon from "./icons/GroupIcons";
import { Test, groupMeta } from "@/lib/tests";
import { priceSummaryCompact } from "@/lib/products";

const PHOTO_THUMBNAILS: Record<string, { src: string; alt: string }> = {
  "flex-english": { src: "/images/flex.jpg", alt: "FLEX C-BRIDGE 문제집 www.c-bridge.uk" },
  "pte-academic": { src: "/images/pte-academic.jpg", alt: "PTE Academic C-BRIDGE 문제집 www.c-bridge.uk" },
  celpip: { src: "/images/celpip.jpg", alt: "CELPIP C-BRIDGE 문제집 www.c-bridge.uk" },
};

export default function TestCard({ test }: { test: Test }) {
  const group = groupMeta[test.group];
  const photo = PHOTO_THUMBNAILS[test.slug];

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
        {photo ? (
          <div className="relative h-52 w-36 overflow-hidden rounded-[12px] shadow-[0_10px_24px_-14px_rgba(36,35,41,0.4)] transition-transform duration-300 group-hover:-translate-y-1 md:h-56 md:w-40">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 144px, 160px"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        ) : (
          <BookCover
            test={test.name}
            skill={test.tagline}
            tag="패키지 시리즈"
            color={group.color}
            size="md"
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        )}
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
        <span className="text-xs font-semibold tracking-[0.06em] text-ink/45">200P · 300P</span>
        <span className="font-serif text-sm font-bold text-ink">{priceSummaryCompact}</span>
      </div>

      <span className="mt-4 flex items-center justify-center gap-1.5 rounded-[14px] border border-purple/20 py-2.5 text-xs font-bold tracking-[0.06em] text-purple transition-colors group-hover:bg-purple group-hover:text-ivory">
        자세히 보기
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
