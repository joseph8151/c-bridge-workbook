import type { Metadata } from "next";
import CategoryPageTemplate from "@/components/CategoryPageTemplate";

export const metadata: Metadata = {
  title: "전문대학원 · 전문직 시험 | C-BRIDGE",
  description:
    "LSAT, GRE, GMAT, MCAT, DAT, OAT, UCAT 등 전문대학원·전문직 진학을 위한 입학시험 교재를 만나보세요.",
  alternates: { canonical: "/professional-grad" },
};

export default function ProfessionalGradPage() {
  return <CategoryPageTemplate group="PROFESSIONAL_GRAD" />;
}
