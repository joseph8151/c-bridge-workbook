import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getTestsByGroup } from "@/lib/tests";

// 네이버 SEO — 이 카테고리에 속한 모든 과목의 "OO 문제집"·"OO 교재" 키워드를 모아서 등록.
const categoryKeywords = Array.from(
  new Set(getTestsByGroup("FLEX_SNULT").flatMap((t) => [t.name, `${t.name} 문제집`, `${t.name} 교재`]))
);

const title = "FLEX · SNULT | C-BRIDGE";
const description = "FLEX 영어·일본어·중국어·프랑스어·독일어·스페인어·러시아어와 SNULT 언어별 시험 교재를 만나보세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/flex-snult" },
  openGraph: { title, description, url: "/flex-snult" },
  twitter: { card: "summary", title, description },
  keywords: categoryKeywords,
};

export default function FlexSnultPage() {
  return <CategoryPageTemplate group="FLEX_SNULT" />;
}
