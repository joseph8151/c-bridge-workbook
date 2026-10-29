import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getTestsByGroup } from "@/lib/tests";

// 네이버 SEO — 이 카테고리에 속한 모든 과목의 "OO 문제집"·"OO 교재" 키워드를 모아서 등록.
const categoryKeywords = Array.from(
  new Set(getTestsByGroup("EMPLOYMENT").flatMap((t) => [t.name, `${t.name} 문제집`, `${t.name} 교재`]))
);

export const metadata: Metadata = {
  title: "취업 · 승진 시험 | C-BRIDGE",
  description: "Versant, SPA 등 취업과 승진을 위한 영어시험 교재를 만나보세요.",
  alternates: { canonical: "/employment" },
  keywords: categoryKeywords,
};

export default function EmploymentPage() {
  return <CategoryPageTemplate group="EMPLOYMENT" />;
}
