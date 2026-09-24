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
        <Link href="/guides" className="text-xs font-bold tracking-[0.06em]" style={{ color: "var(--color-rust)" }}>
          ← 시험 정보
        </Link>
        <p className="mt-6 text-[11px] font-bold tracking-[0.1em]" style={{ color: "var(--color-rust)" }}>
          {post.category}
        </p>
        <h1
          className="mt-3 break-keep font-serif text-3xl font-black leading-tight md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
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

        <div className="mt-14 border-t pt-8 text-center" style={{ borderColor: "var(--color-line)" }}>
          <p className="text-sm text-ink/60">같은 시험이라도 목표와 약한 영역에 따라 구성이 달라집니다.</p>
          <Link
            href="/consultation"
            className="mt-5 inline-block rounded-sm px-7 py-3 text-xs font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
        </div>
      </div>
    </article>
  );
}
