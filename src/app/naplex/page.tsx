import type { Metadata } from "next";
import Link from "next/link";

const title = "NAPLEX | C-BRIDGE";
const description = "미국 약사 면허 국가시험 NAPLEX 문항 유형 연습서를 준비하세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/naplex" },
  openGraph: { title, description, url: "/naplex" },
  twitter: { card: "summary", title, description },
  keywords: ["NAPLEX", "NAPLEX 문제집", "NAPLEX 교재", "미국 약사 면허시험"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "시험 찾기", item: "https://www.c-bridge.uk/exams" },
    { "@type": "ListItem", position: 2, name: "NAPLEX (미국 약사 면허)", item: "https://www.c-bridge.uk/naplex" },
  ],
};

export default function NaplexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section className="bg-paper py-20 md:py-32">
        <div className="mx-auto max-w-[1040px] px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            NAPLEX (미국 약사 면허)
          </p>
          <h1
            className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            영어시험이 아닙니다. 미국 약사 면허 국가시험입니다.
          </h1>
          <p className="mt-6 text-sm text-ink/50">
            미국 약사(Pharmacist) 면허를 위한 NABP 주관 국가시험 문항 유형 연습서입니다. 캐나다의
            PEBC 시험과는 다른 시험입니다.
          </p>
          <Link
            href={`/consultation?test=${encodeURIComponent("NAPLEX")}`}
            className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
          >
            상담
          </Link>
        </div>
      </section>
    </>
  );
}
