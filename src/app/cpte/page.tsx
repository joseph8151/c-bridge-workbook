import type { Metadata } from "next";
import Link from "next/link";

const title = "CPTE | C-BRIDGE";
const description = "캐나다 물리치료사 면허 국가시험 CPTE 문항 유형 연습서를 준비하세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cpte" },
  openGraph: { title, description, url: "/cpte" },
  twitter: { card: "summary", title, description },
  keywords: ["CPTE", "CPTE 문제집", "CPTE 교재", "캐나다 물리치료사 면허시험"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
    { "@type": "ListItem", position: 2, name: "CPTE (캐나다 물리치료사 면허)", item: "https://www.c-bridge.uk/cpte" },
  ],
};

export default function CptePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-paper py-20 md:py-32">
        <div className="mx-auto max-w-[1040px] px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            CPTE (캐나다 물리치료사 면허)
          </p>
          <h1
            className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            영어시험이 아닙니다. 캐나다 물리치료사 면허 국가시험입니다.
          </h1>
          <p className="mt-6 text-sm text-ink/50">
            객관식 Written Section과 구술·시나리오 기반 Oral Section으로 구성된 국가통합시험
            연습서입니다. 미국의 NPTE와는 다른 시험입니다.
          </p>
          <Link
            href={`/consultation?test=${encodeURIComponent("CPTE")}`}
            className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
