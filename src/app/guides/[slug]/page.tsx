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

  const index = guidePosts.findIndex((p) => p.slug === slug);
  const next = guidePosts[(index + 1) % guidePosts.length];

  return (
    <article className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[680px] px-5 md:px-10">
        <Link href="/guides" className="text-xs font-bold tracking-[0.06em]" style={{ color: "var(--color-rust)" }}>
          ← 시험 정보
        </Link>

        <h1
          className="mt-6 break-keep font-serif text-4xl font-black leading-tight md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          {post.title}
        </h1>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-ink/40">{post.category}</p>

        <div className="mt-6 border-t" style={{ borderColor: "var(--color-line)" }} />

        <div className="mt-8 space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink/75">
              {paragraph}
            </p>
          ))}
        </div>

        <blockquote
          className="mt-8 border-l-2 pl-5 font-serif text-base italic leading-relaxed text-ink/70"
          style={{ borderColor: "var(--color-pistachio)" }}
        >
          {post.quote}
        </blockquote>

        <div className="mt-14 border-t pt-8" style={{ borderColor: "var(--color-line)" }}>
          {post.closing && (
            <>
              <p className="text-sm text-ink/60">{post.closing}</p>
              <Link
                href={`/consultation?test=${encodeURIComponent(post.category)}`}
                className="btn-primary mt-5 inline-block rounded-sm px-6 py-3 text-xs font-bold tracking-[0.08em]"
              >
                상담
              </Link>
              <div className="mt-8" />
            </>
          )}
          <Link
            href={`/guides/${next.slug}`}
            className="text-sm font-bold text-ink/70 underline decoration-ink/25 underline-offset-4 hover:text-ink"
          >
            다음 글: {next.title} →
          </Link>
        </div>
      </div>
    </article>
  );
}
