import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getTestsByGroup } from "@/lib/tests";

// 네이버 SEO — 이 카테고리에 속한 모든 과목의 "OO 문제집"·"OO 교재" 키워드를 모아서 등록.
const categoryKeywords = Array.from(
  new Set(getTestsByGroup("CHINESE").flatMap((t) => [t.name, `${t.name} 문제집`, `${t.name} 교재`]))
);

export const metadata: Metadata = {
  title: "중국어 시험 | C-BRIDGE",
  description: "BCT, TOCFL 등 중국 관련 업무와 중국어 자격을 위한 시험 교재를 만나보세요.",
  alternates: { canonical: "/chinese" },
  openGraph: { title: "중국어 시험 | C-BRIDGE", description: "BCT, TOCFL 등 중국 관련 업무와 중국어 자격을 위한 시험 교재를 만나보세요.", url: "/chinese" },
  twitter: { card: "summary", title: "중국어 시험 | C-BRIDGE", description: "BCT, TOCFL 등 중국 관련 업무와 중국어 자격을 위한 시험 교재를 만나보세요." },
  keywords: categoryKeywords,
};

export default function ChinesePage() {
  return <CategoryPageTemplate group="CHINESE" />;
}
