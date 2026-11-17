import type { Metadata } from "next";
import Link from "next/link";

const title = "Selective School Test (NSW) | C-BRIDGE";
const description = "호주 뉴사우스웨일스(NSW) 셀렉티브 고등학교 배치시험 문항 유형 연습서를 준비하세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/selective-school-nsw" },
  openGraph: { title, description, url: "/selective-school-nsw" },
  twitter: { card: "summary", title, description },
  keywords: ["Selective School Test", "셀렉티브 스쿨 시험", "NSW 셀렉티브 고등학교", "호주 선발시험"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Selective School Test (NSW)",
      item: "https://www.c-bridge.uk/selective-school-nsw",
    },
  ],
};

export default function SelectiveSchoolNswPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-paper py-20 md:py-32">
        <div className="mx-auto max-w-[1040px] px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            Selective School Test (NSW)
          </p>
          <h1
            className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            호주 NSW 셀렉티브 고등학교 배치시험입니다.
          </h1>
          <p className="mt-6 text-sm text-ink/50">
            Reading · Mathematical Reasoning · Thinking Skills · Writing 4개 영역별 문항 유형
            연습서입니다. 호주의 다른 주(州)는 구성이 다른 별도 시험을 운영합니다.
          </p>
          <Link
            href={`/consultation?test=${encodeURIComponent("Selective School Test (NSW)")}`}
            className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
