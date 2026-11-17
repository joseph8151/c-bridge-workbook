import type { Metadata } from "next";
import Link from "next/link";

const title = "ISEB Pretest | C-BRIDGE";
const description = "영국 사립학교 11+·13+ 입학 사전시험 ISEB Pretest 문항 유형 연습서를 준비하세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/iseb-pretest" },
  openGraph: { title, description, url: "/iseb-pretest" },
  twitter: { card: "summary", title, description },
  keywords: ["ISEB Pretest", "ISEB 프리테스트", "영국 사립학교 입학시험", "11+ 시험", "13+ 시험"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
    { "@type": "ListItem", position: 2, name: "ISEB Pretest", item: "https://www.c-bridge.uk/iseb-pretest" },
  ],
};

export default function IsebPretestPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-paper py-20 md:py-32">
        <div className="mx-auto max-w-[1040px] px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            ISEB Pretest
          </p>
          <h1
            className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            영국 사립학교 11+·13+ 입학 사전시험입니다.
          </h1>
          <p className="mt-6 text-sm text-ink/50">
            English · Maths · Verbal Reasoning · Non-Verbal Reasoning 영역별 문항 유형
            연습서입니다. 국공립 그래머스쿨의 11+ 시험과는 주관 기관이 다릅니다.
          </p>
          <Link
            href={`/consultation?test=${encodeURIComponent("ISEB Pretest")}`}
            className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
