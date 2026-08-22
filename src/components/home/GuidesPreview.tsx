import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { guidePosts } from "@/lib/guides";

export default function GuidesPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="시험 준비 가이드" title="먼저 알아두면 좋은 정보." />
          <Link
            href="/guides"
            className="shrink-0 text-sm font-bold tracking-[0.04em] text-purple hover:underline"
          >
            가이드 전체 보기 →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guidePosts.slice(0, 6).map((post) => (
            <Link
              key={post.slug}
              href={`/guides/${post.slug}`}
              className="group flex flex-col justify-between rounded-[20px] border border-purple/10 bg-lavender/10 p-6 transition-colors hover:border-purple/25 hover:bg-lavender/25"
            >
              <div>
                <p className="text-[10px] font-bold tracking-[0.14em] text-purple">
                  {post.category}
                </p>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs font-bold text-purple">
                {post.readTime}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
