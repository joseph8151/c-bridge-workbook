import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { journalPosts } from "@/lib/journal";

export const metadata: Metadata = {
  title: "The Score Journal | C-BRIDGE TEST PREP",
  description:
    "TOEFL, IELTS, PTE, Duolingo English Test 준비를 위한 실전 학습 전략과 인사이트. C-BRIDGE의 Score Journal.",
};

export default function ScoreJournalPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading eyebrow="The Score Journal" title="INSIGHTS FOR SERIOUS PREP." />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {journalPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/score-journal/${post.slug}`}
              className="group flex flex-col justify-between rounded-sm border border-purple/10 bg-lavender/10 p-8 transition-colors hover:border-purple/25 hover:bg-lavender/25"
            >
              <div>
                <p className="text-[11px] font-bold tracking-[0.18em] text-purple">{post.test}</p>
                <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-ink">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
              </div>
              <p className="mt-6 flex items-center gap-2 text-xs font-bold tracking-[0.06em] text-purple">
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
