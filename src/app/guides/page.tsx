import type { Metadata } from "next";
import Link from "next/link";
import { guidePosts } from "@/lib/guides";

export const metadata: Metadata = {
  title: "시험 정보 | C-BRIDGE",
  description: "PTE, CELPIP, OET, EPTA, TOLES, TOPEC 등 시험별 준비 정보를 확인하세요.",
};

export default function GuidesPage() {
  const posts = guidePosts.filter((post) => post.category !== "FLEX");

  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          시험 정보
        </p>

        <div className="mt-10">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/guides/${post.slug}`}
              className="group block border-t py-6 transition-opacity hover:opacity-70"
              style={{ borderColor: "rgba(28,23,18,0.15)" }}
            >
              <p className="text-[11px] font-bold tracking-[0.1em] text-ink/45">{post.category}</p>
              <h2
                className="mt-2 break-keep font-serif text-lg font-bold leading-snug"
                style={{ color: "var(--color-inkstrong)" }}
              >
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/consultation"
            className="inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
            style={{ background: "var(--color-rust)" }}
          >
            상담
          </Link>
        </div>
      </div>
    </section>
  );
}
