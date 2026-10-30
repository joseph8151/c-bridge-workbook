import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getTestsByGroup } from "@/lib/tests";

// 네이버 SEO — 이 카테고리에 속한 모든 과목의 "OO 문제집"·"OO 교재" 키워드를 모아서 등록.
const categoryKeywords = Array.from(
  new Set(getTestsByGroup("STUDY_ABROAD").flatMap((t) => [t.name, `${t.name} 문제집`, `${t.name} 교재`]))
);

export const metadata: Metadata = {
  title: "유학 · 이민 시험 | C-BRIDGE",
  description: "TOEFL, IELTS, PTE, Duolingo, CELPIP, TestDaF 등 유학과 이민을 위한 시험 교재를 만나보세요.",
  alternates: { canonical: "/study-abroad" },
  openGraph: { title: "유학 · 이민 시험 | C-BRIDGE", description: "TOEFL, IELTS, PTE, Duolingo, CELPIP, TestDaF 등 유학과 이민을 위한 시험 교재를 만나보세요.", url: "/study-abroad" },
  twitter: { card: "summary", title: "유학 · 이민 시험 | C-BRIDGE", description: "TOEFL, IELTS, PTE, Duolingo, CELPIP, TestDaF 등 유학과 이민을 위한 시험 교재를 만나보세요." },
  keywords: categoryKeywords,
};

export default function StudyAbroadPage() {
  return <CategoryPageTemplate group="STUDY_ABROAD" />;
}
