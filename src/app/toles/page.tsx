import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TOLES | C-BRIDGE",
  description: "국제 로펌 · 크로스보더 계약 업무를 위한 법률 영어시험 TOLES를 준비하세요.",
  alternates: { canonical: "/toles" },
  openGraph: { title: "TOLES | C-BRIDGE", description: "국제 로펌 · 크로스보더 계약 업무를 위한 법률 영어시험 TOLES를 준비하세요.", url: "/toles" },
  twitter: { card: "summary", title: "TOLES | C-BRIDGE", description: "국제 로펌 · 크로스보더 계약 업무를 위한 법률 영어시험 TOLES를 준비하세요." },
  keywords: ["TOLES", "TOLES 문제집", "TOLES 교재"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
    { "@type": "ListItem", position: 2, name: "TOLES", item: "https://www.c-bridge.uk/toles" },
  ],
};

export default function TolesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-paper py-20 md:py-32">
        <div className="mx-auto max-w-[1040px] px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            TOLES
          </p>
          <h1
            className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            계약문이 영어시험입니다.
          </h1>
          <p className="mt-6 text-base font-semibold text-ink/70">국제 로펌 · 크로스보더 계약</p>
          <Link
            href={`/consultation?test=${encodeURIComponent("TOLES")}`}
            className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
