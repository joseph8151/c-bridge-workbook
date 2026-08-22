import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "일본어 시험 | C-BRIDGE",
  description: "JLPT, JPT, SJPT, BJT 등 일본계 기업 취업과 일본어 자격을 위한 시험 교재를 만나보세요.",
};

export default function JapanesePage() {
  return <CategoryPageTemplate group="JAPANESE" />;
}
