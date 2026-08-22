import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "취업 · 승진 시험 | C-BRIDGE",
  description: "TOEIC, TOEIC Speaking, OPIc, Versant, SPA, G-TELP, TEPS 등 취업과 승진을 위한 영어시험 교재를 만나보세요.",
};

export default function EmploymentPage() {
  return <CategoryPageTemplate group="EMPLOYMENT" />;
}
