import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import FAQ from "@/components/FAQ";
import { extendedFaqItems } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "FAQ | C-BRIDGE",
  description: "C-BRIDGE 구성, 가격, 전달 방식, 상담에 대한 자주 묻는 질문을 확인하세요.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 min-[361px]:px-5 md:px-10">
        <SectionHeading eyebrow="Support" title="FREQUENTLY ASKED QUESTIONS." />
        <div className="mt-12">
          <FAQ items={extendedFaqItems} />
        </div>
      </div>
    </section>
  );
}
