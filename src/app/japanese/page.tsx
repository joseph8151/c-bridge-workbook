import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getTestsByGroup } from "@/lib/tests";

// 네이버 SEO — 이 카테고리에 속한 모든 과목의 "OO 문제집"·"OO 교재" 키워드를 모아서 등록.
const categoryKeywords = Array.from(
  new Set(getTestsByGroup("JAPANESE").flatMap((t) => [t.name, `${t.name} 문제집`, `${t.name} 교재`]))
);

export const metadata: Metadata = {
  title: "일본어 시험 | C-BRIDGE",
  description: "SJPT, BJT 등 일본계 기업 취업과 일본어 자격을 위한 시험 교재를 만나보세요.",
  alternates: { canonical: "/japanese" },
  openGraph: { title: "일본어 시험 | C-BRIDGE", description: "SJPT, BJT 등 일본계 기업 취업과 일본어 자격을 위한 시험 교재를 만나보세요.", url: "/japanese" },
  twitter: { card: "summary", title: "일본어 시험 | C-BRIDGE", description: "SJPT, BJT 등 일본계 기업 취업과 일본어 자격을 위한 시험 교재를 만나보세요." },
  keywords: categoryKeywords,
};

export default function JapanesePage() {
  return <CategoryPageTemplate group="JAPANESE" />;
}
