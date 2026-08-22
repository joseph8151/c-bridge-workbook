import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { guidePosts } from "@/lib/guides";

export const metadata: Metadata = {
  title: "시험 준비 가이드 | C-BRIDGE",
  description:
    "OPIc, SJPT, TSC, FLEX, JLPT, HSK, TOEFL, IELTS, PTE 등 시험별 준비 방법과 학습 전략을 확인하세요.",
};

export default function GuidesPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading eyebrow="시험 정보" title="시험 준비 가이드" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guidePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/guides/${post.slug}`}
              className="group flex flex-col justify-between rounded-[20px] border border-purple/10 bg-lavender/10 p-7 transition-colors hover:border-purple/25 hover:bg-lavender/25"
            >
              <div>
                <p className="text-[11px] font-bold tracking-[0.1em] text-purple">{post.category}</p>
                <h2 className="mt-3 font-serif text-lg font-bold leading-snug text-ink">
                  {post.title}
                </h2>
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
