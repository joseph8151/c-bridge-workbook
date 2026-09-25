import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import ConsultationForm from "@/components/ConsultationForm";
import WorkbookPreviewModal from "@/components/WorkbookPreviewModal";
import { orderFaqItems } from "@/lib/faqData";

export const metadata: Metadata = {
  title: "BOOK CONSULTATION | C-BRIDGE",
  description: "현재 준비 상황과 목표를 알려주시면 C-BRIDGE가 시험에 맞는 교재를 안내해드립니다.",
  alternates: { canonical: "/consultation" },
};

const steps = [
  { no: "01", title: "시험 선택", desc: "준비하는 시험과 목표를 확인합니다" },
  { no: "02", title: "목표 및 집중 영역 선택", desc: "목표 점수와 집중적으로 공부하고 싶은 영역을 선택합니다" },
  { no: "03", title: "교재 구성 확인", desc: "200P 또는 300P 구성과 포함 자료를 확인합니다" },
  { no: "04", title: "결제", desc: "교재 구성 확인 후 결제를 진행합니다" },
  { no: "05", title: "교재 전달", desc: "완성된 PDF 교재를 전달받아 학습을 시작합니다" },
];

export default function ConsultationPage() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container>
        <p className="eyebrow">BOOK CONSULTATION</p>
        <h1
          className="mt-4 break-keep font-serif text-4xl font-bold leading-tight md:text-5xl"
          style={{ color: "var(--color-ink)" }}
        >
          교재 구성 상담
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
          시험과 목표 점수를 알려주세요. 필요한 영역과 교재 구성을 안내합니다. 현재는 자동결제를
          제공하지 않으며, 상담 후 담당자가 결제 방법을 안내해드립니다.
        </p>

        <div className="mt-10 border-t" style={{ borderColor: "var(--color-border)" }} />

        <div className="grid border-x border-b lg:grid-cols-[1fr_1.4fr]" style={{ borderColor: "var(--color-border)" }}>
          <div className="border-b p-6 min-[361px]:p-8 lg:p-10 lg:border-b-0 lg:border-r" style={{ borderColor: "var(--color-border)" }}>
            <div className="img-fade relative aspect-[4/3] w-full overflow-hidden">
              <Image src="/images/book-desk.jpg" alt="C-BRIDGE 문제집이 놓인 책상" fill sizes="(max-width: 1024px) 100vw, 500px" className="object-cover" />
            </div>

            <p className="mt-8 eyebrow">교재는 이렇게 진행됩니다</p>
            <div className="mt-5 space-y-5">
              {steps.map((s) => (
                <div key={s.no} className="flex items-baseline gap-4">
                  <span className="w-6 shrink-0 font-serif text-sm font-bold" style={{ color: "var(--color-bronze)" }}>
                    {s.no}
                  </span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                      {s.title}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm" style={{ color: "var(--color-muted)" }}>
              구성이 정해지면 파일로 드립니다.
            </p>

            <div className="mt-6">
              <WorkbookPreviewModal />
            </div>
          </div>

          <div className="p-6 min-[361px]:p-8 md:p-10">
            <p className="mb-6 text-sm" style={{ color: "var(--color-muted)" }}>
              남겨 주시면 확인 후 회신합니다. 주말·공휴일에도 받습니다.
            </p>
            <Suspense fallback={null}>
              <ConsultationForm />
            </Suspense>
          </div>
        </div>

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
