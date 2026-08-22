import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, guidePosts } from "@/lib/guides";

export function generateStaticParams() {
  return guidePosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getGuideBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} | C-BRIDGE`, description: post.excerpt };
}

export default async function GuidePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getGuideBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-10">
        <Link href="/guides" className="text-xs font-bold tracking-[0.06em] text-purple">
          ← 시험 준비 가이드
        </Link>
        <p className="mt-6 text-[11px] font-bold tracking-[0.1em] text-purple">{post.category}</p>
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

        <div className="mt-14 rounded-[20px] border border-purple/15 bg-lavender/20 p-8 text-center">
          <p className="font-serif text-xl font-bold text-ink">나에게 맞는 교재가 궁금하다면</p>
          <Link
            href="/finder"
            className="mt-5 inline-block rounded-[14px] bg-purple px-7 py-3 text-xs font-bold tracking-[0.06em] text-ivory"
          >
            무료 교재 추천 받기
          </Link>
        </div>
      </div>
    </article>
  );
}
