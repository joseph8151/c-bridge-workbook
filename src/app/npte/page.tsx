import type { Metadata } from "next";
import Link from "next/link";

const title = "NPTE | C-BRIDGE";
const description = "미국 물리치료사(PT) 면허 국가시험 NPTE 문항 유형 연습서를 준비하세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/npte" },
  openGraph: { title, description, url: "/npte" },
  twitter: { card: "summary", title, description },
  keywords: ["NPTE", "NPTE 문제집", "NPTE 교재", "물리치료사 면허시험"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
    { "@type": "ListItem", position: 2, name: "NPTE (미국 물리치료사 면허)", item: "https://www.c-bridge.uk/npte" },
  ],
};

export default function NptePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-paper py-20 md:py-32">
        <div className="mx-auto max-w-[1040px] px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            NPTE (미국 물리치료사 면허)
          </p>
          <h1
            className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            영어시험이 아닙니다. 물리치료사 면허 국가시험입니다.
          </h1>
          <p className="mt-6 text-sm text-ink/50">
            미국 물리치료사(PT) 면허를 위한 FSBPT 주관 국가시험 문항 유형 연습서입니다. 캐나다의
            CPTE와는 다른 시험입니다.
          </p>
          <Link
            href={`/consultation?test=${encodeURIComponent("NPTE")}`}
            className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
