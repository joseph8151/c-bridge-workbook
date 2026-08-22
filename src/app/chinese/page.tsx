import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "중국어 시험 | C-BRIDGE",
  description: "HSK, HSKK, TSC, BCT, TOCFL 등 중국 관련 업무와 중국어 자격을 위한 시험 교재를 만나보세요.",
};

export default function ChinesePage() {
  return <CategoryPageTemplate group="CHINESE" />;
}
