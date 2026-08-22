import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "전문직 시험 | C-BRIDGE",
  description: "OET, EPTA, ICAO English 등 의료·항공 전문직을 위한 영어시험 교재를 만나보세요.",
};

export default function ProfessionalPage() {
  return <CategoryPageTemplate group="PROFESSIONAL" />;
}
