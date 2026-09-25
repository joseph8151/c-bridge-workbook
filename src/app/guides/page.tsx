import type { Metadata } from "next";
import Link from "next/link";
import { guidePosts } from "@/lib/guides";

export const metadata: Metadata = {
  title: "시험 정보 | C-BRIDGE",
  description: "PTE, CELPIP, OET, EPTA, TOLES, TOPEC 등 시험별 준비 정보를 확인하세요.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[680px] px-4 min-[361px]:px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          시험 정보
        </p>
        <p className="mt-4 text-sm text-ink/50">한 글에 한 지점만 적습니다.</p>
        <div className="mt-8 border-t" style={{ borderColor: "var(--color-line)" }} />

        <div className="border-x border-b" style={{ borderColor: "var(--color-line)" }}>
          {guidePosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/guides/${post.slug}`}
              className={`group flex items-start gap-5 px-6 py-6 ${i > 0 ? "border-t" : ""}`}
              style={{ borderColor: "var(--color-line)" }}
            >
              <span
                className="font-serif text-lg font-bold leading-none"
                style={{ color: "var(--color-rust)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span
                  className="break-keep font-serif text-xl font-bold leading-snug underline decoration-2 decoration-transparent underline-offset-8 transition-colors duration-300 group-hover:decoration-[var(--color-pistachio)] md:text-2xl"
                  style={{ color: "var(--color-inkstrong)" }}
                >
                  {post.title}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
