import Link from "next/link";
import BookCover from "./BookCover";
import LevelBadge from "./LevelBadge";
import { Product } from "@/lib/products";
import { testMeta } from "@/lib/testMeta";

export default function ProductCard({ product }: { product: Product }) {
  const meta = testMeta[product.test];

  return (
    <div className="group flex flex-col rounded-sm border border-purple/10 bg-white/60 p-5 transition-colors hover:border-purple/25 hover:bg-white">
      <div className="relative flex justify-center pb-6 pt-2">
        {product.badge && (
          <span className="absolute -top-1 left-1/2 z-10 -translate-x-1/2 rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-plum shadow-sm">
            {product.badge}
          </span>
        )}
        <BookCover
          test={meta.name.split(" ")[0]}
          skill={product.skill}
          number={product.type === "Package" ? undefined : product.questions}
          tag={product.type === "Package" ? "COMPLETE PACKAGE" : "PRACTICE QUESTIONS"}
          color={meta.color}
          size="md"
          className="transition-transform duration-300 group-hover:-translate-y-1.5"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <p className="text-[11px] font-bold tracking-[0.16em] text-purple">{meta.name}</p>
        <h3 className="font-serif text-lg font-bold leading-snug text-ink">{product.title}</h3>
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={product.level} />
          <span className="text-xs text-ink/50">{product.questions.toLocaleString()} Qs</span>
          <span className="text-xs text-ink/50">·</span>
          <span className="text-xs text-ink/50">{product.pages}p</span>
        </div>
        <p className="text-sm leading-relaxed text-ink/60">{product.description}</p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-purple/10 pt-4">
        <p className="font-serif text-xl font-bold text-ink">
          ₩{product.price.toLocaleString()}
        </p>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <Link
          href={`/books/${product.slug}`}
          className="rounded-sm border border-purple/25 py-2.5 text-center text-xs font-bold tracking-[0.08em] text-purple transition-colors hover:bg-purple hover:text-ivory"
        >
          VIEW DETAILS
        </Link>
        <Link
          href={`/consultation?product=${product.slug}`}
          className="rounded-sm bg-plum py-2.5 text-center text-xs font-bold tracking-[0.08em] text-ivory transition-colors hover:bg-purple"
        >
          PURCHASE INQUIRY
        </Link>
      </div>
    </div>
  );
}
