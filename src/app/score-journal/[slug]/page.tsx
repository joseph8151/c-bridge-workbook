import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, journalPosts } from "@/lib/journal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} | C-BRIDGE TEST PREP`, description: post.excerpt };
}

export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <Link href="/score-journal" className="text-xs font-bold tracking-[0.08em] text-purple">
          ← THE SCORE JOURNAL
        </Link>
        <p className="mt-6 text-[11px] font-bold tracking-[0.18em] text-purple">{post.test}</p>
        <h1 className="mt-3 font-serif text-3xl font-black leading-tight text-ink md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-ink/50">{post.readTime}</p>

        <div className="mt-10 space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/75">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-14 rounded-sm border border-purple/15 bg-lavender/20 p-8 text-center">
          <p className="font-serif text-xl font-bold text-ink">목표 점수를 향한 다음 단계</p>
          <Link
            href="/consultation"
            className="mt-5 inline-block rounded-sm bg-purple px-7 py-3 text-xs font-bold tracking-[0.1em] text-ivory"
          >
            REQUEST CONSULTATION
          </Link>
        </div>
      </div>
    </article>
  );
}
