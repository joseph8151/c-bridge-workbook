import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { journalPosts } from "@/lib/journal";

export default function ScoreJournalPreview() {
  return (
    <section className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="The Score Journal" title="INSIGHTS FOR SERIOUS PREP." />
          <Link
            href="/score-journal"
            className="shrink-0 text-sm font-bold tracking-[0.08em] text-purple hover:underline"
          >
            READ THE JOURNAL →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {journalPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/score-journal/${post.slug}`}
              className="group flex flex-col justify-between rounded-sm border border-purple/10 bg-lavender/10 p-6 transition-colors hover:border-purple/25 hover:bg-lavender/25"
            >
              <div>
                <p className="text-[10px] font-bold tracking-[0.18em] text-purple">{post.test}</p>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
              </div>
              <p className="mt-5 flex items-center gap-2 text-xs font-bold tracking-[0.06em] text-purple">
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
