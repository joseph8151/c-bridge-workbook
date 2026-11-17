import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";
import { getTestsByGroup } from "@/lib/tests";

// 네이버 SEO — 이 카테고리에 속한 모든 과목의 "OO 문제집"·"OO 교재" 키워드를 모아서 등록.
const categoryKeywords = Array.from(
  new Set(getTestsByGroup("SCHOOL_ADMISSION").flatMap((t) => [t.name, `${t.name} 문제집`, `${t.name} 교재`]))
);

const title = "해외 입학시험 | C-BRIDGE";
const description = "ISEB Pretest, 호주 셀렉티브 고등학교 배치시험 등 영국·호주 해외 입학시험 교재를 만나보세요.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/school-admission" },
  openGraph: { title, description, url: "/school-admission" },
  twitter: { card: "summary", title, description },
  keywords: categoryKeywords,
};

export default function SchoolAdmissionPage() {
  return <CategoryPageTemplate group="SCHOOL_ADMISSION" />;
}
