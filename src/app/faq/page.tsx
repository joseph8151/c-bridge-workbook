import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | C-BRIDGE TEST PREP",
  description: "C-BRIDGE 문제집 구매, 배송, 상담에 대한 자주 묻는 질문을 확인하세요.",
};

export default function FaqPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <SectionHeading eyebrow="Support" title="FREQUENTLY ASKED QUESTIONS." />
        <div className="mt-12">
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
}
