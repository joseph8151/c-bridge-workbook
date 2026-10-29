import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getTestsByGroup } from "@/lib/tests";

// 네이버 SEO — 이 카테고리에 속한 모든 과목의 "OO 문제집"·"OO 교재" 키워드를 모아서 등록.
const categoryKeywords = Array.from(
  new Set(getTestsByGroup("PROFESSIONAL_GRAD").flatMap((t) => [t.name, `${t.name} 문제집`, `${t.name} 교재`]))
);

export const metadata: Metadata = {
  title: "전문대학원 · 전문직 시험 | C-BRIDGE",
  description:
    "LSAT, GRE, GMAT, MCAT, DAT, OAT, UCAT 등 전문대학원·전문직 진학을 위한 입학시험 교재를 만나보세요.",
  alternates: { canonical: "/professional-grad" },
  keywords: categoryKeywords,
};

export default function ProfessionalGradPage() {
  return <CategoryPageTemplate group="PROFESSIONAL_GRAD" />;
}
