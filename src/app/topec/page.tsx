import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TOPEC | C-BRIDGE",
  description: "일본 병동에서 사용하는 간호 실무 영어시험 TOPEC을 준비하세요.",
  alternates: { canonical: "/topec" },
  openGraph: { title: "TOPEC | C-BRIDGE", description: "일본 병동에서 사용하는 간호 실무 영어시험 TOPEC을 준비하세요.", url: "/topec" },
  twitter: { card: "summary", title: "TOPEC | C-BRIDGE", description: "일본 병동에서 사용하는 간호 실무 영어시험 TOPEC을 준비하세요." },
  keywords: ["TOPEC", "TOPEC 문제집", "TOPEC 교재"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
    { "@type": "ListItem", position: 2, name: "TOPEC", item: "https://www.c-bridge.uk/topec" },
  ],
};

export default function TopecPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-paper py-20 md:py-32">
        <div className="mx-auto max-w-[1040px] px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            TOPEC
          </p>
          <h1
            className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            일본 병동에서 쓰는 간호 영어입니다.
          </h1>
          <p className="mt-6 text-sm text-ink/50">OET와는 다른 시험입니다.</p>
          <Link
            href={`/consultation?test=${encodeURIComponent("TOPEC")}`}
            className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
