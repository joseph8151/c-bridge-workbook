import Link from "next/link";
import Image from "next/image";
import BookCover from "./BookCover";
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
      className="card-hover group flex flex-col border-t pt-6"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="flex justify-center pb-5">
        {photo ? (
          <div className="img-fade relative h-48 w-32 overflow-hidden md:h-52 md:w-36">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 128px, 144px"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        ) : (
          <BookCover test={test.name} skill={test.tagline} tag="패키지 시리즈" color={group.color} size="md" />
        )}
      </div>

      <p className="text-[11px] font-bold tracking-[0.14em]" style={{ color: "var(--color-rust)" }}>
        {group.navLabel}
      </p>
      <h3 className="mt-1.5 font-serif text-lg font-black leading-snug" style={{ color: "var(--color-inkstrong)" }}>
        {test.name}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-ink/60">{test.tagline}</p>

      <div
        className="mt-4 flex items-center justify-between border-t pt-4"
        style={{ borderColor: "var(--color-line)" }}
      >
        <span className="text-xs font-semibold tracking-[0.06em] text-ink/45">200P · 300P</span>
        <span className="font-serif text-sm font-bold" style={{ color: "var(--color-inkstrong)" }}>
          {priceSummaryCompact}
        </span>
      </div>

      <span
        className="mt-4 text-xs font-bold tracking-[0.08em] transition-colors"
        style={{ color: "var(--color-rust)" }}
      >
        자세히 보기 →
      </span>
    </Link>
  );
}
