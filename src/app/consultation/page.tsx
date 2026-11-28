import type { Metadata } from "next";
import { Suspense } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import ConsultationIntro from "@/components/ConsultationIntro";
import { orderFaqItems } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "상담 신청 | C-BRIDGE",
  description: "현재 준비 상황과 목표를 알려주시면 C-BRIDGE가 교재 구성 또는 화상과외를 안내해드립니다.",
  alternates: { canonical: "/consultation" },
  openGraph: { title: "상담 신청 | C-BRIDGE", description: "현재 준비 상황과 목표를 알려주시면 C-BRIDGE가 교재 구성 또는 화상과외를 안내해드립니다.", url: "/consultation" },
  twitter: { card: "summary", title: "상담 신청 | C-BRIDGE", description: "현재 준비 상황과 목표를 알려주시면 C-BRIDGE가 교재 구성 또는 화상과외를 안내해드립니다." },
};

export default function ConsultationPage() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container>
        <Suspense fallback={null}>
          <ConsultationIntro />
        </Suspense>

        <div className="mx-auto mt-16 max-w-[680px] border-t pt-10" style={{ borderColor: "var(--color-border)" }}>
          <SectionHeader eyebrow="FAQ" />
          <div className="mt-6">
            <FAQ items={orderFaqItems} />
          </div>
        </div>
      </Container>
    </section>
  );
}
