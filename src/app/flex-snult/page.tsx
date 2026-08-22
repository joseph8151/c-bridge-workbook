import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "FLEX · SNULT | C-BRIDGE",
  description: "FLEX 영어·일본어·중국어·프랑스어·독일어·스페인어·러시아어와 SNULT 언어별 시험 교재를 만나보세요.",
};

export default function FlexSnultPage() {
  return <CategoryPageTemplate group="FLEX_SNULT" />;
}
