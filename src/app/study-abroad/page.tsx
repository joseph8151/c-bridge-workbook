import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "유학 · 이민 시험 | C-BRIDGE",
  description: "TOEFL, IELTS, PTE, Duolingo, CELPIP, TestDaF 등 유학과 이민을 위한 시험 교재를 만나보세요.",
};

export default function StudyAbroadPage() {
  return <CategoryPageTemplate group="STUDY_ABROAD" />;
}
