import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import WorkbookPreviewModal from "@/components/WorkbookPreviewModal";

export const metadata: Metadata = {
  title: "상담 | C-BRIDGE",
  description: "현재 준비 상황과 목표를 알려주시면 C-BRIDGE가 시험에 맞는 교재를 안내해드립니다.",
};

const steps = [
  { no: "01", title: "교재 확인", desc: "관심있는 시험과 교재를 확인합니다" },
  { no: "02", title: "상담 신청", desc: "상담 폼을 작성합니다" },
  { no: "03", title: "상담", desc: "담당자가 맞춤 추천을 드립니다" },
  { no: "04", title: "결제 안내", desc: "결제 방법을 안내해드립니다" },
  { no: "05", title: "교재 전달", desc: "결제 확인 후 전달해드립니다" },
];

export default function ConsultationPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          상담
        </p>
        <h1
          className="mt-4 break-keep font-serif text-3xl font-black leading-tight md:text-4xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          나에게 맞는 교재를 찾아드립니다.
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/65">
          현재는 자동결제를 제공하지 않습니다. 상담 후 담당자가 결제 방법을 안내해드리며,
          결제 확인 후 문제집을 전달해드립니다.
        </p>

        <div className="mt-10 border-t" style={{ borderColor: "var(--color-line)" }} />

        <div
          className="grid border-x border-b lg:grid-cols-[1fr_1.4fr]"
          style={{ borderColor: "var(--color-line)" }}
        >
          <div className="border-b p-8 lg:border-b-0 lg:border-r" style={{ borderColor: "var(--color-line)" }}>
            <div className="img-fade relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/book-desk.jpg"
                alt="C-BRIDGE 문제집이 놓인 책상"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>

            <div className="mt-8 space-y-5">
              {steps.map((s) => (
                <div key={s.no} className="flex items-baseline gap-4">
                  <span className="w-6 shrink-0 font-serif text-sm font-bold" style={{ color: "var(--color-rust)" }}>
                    {s.no}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink">{s.title}</p>
                    <p className="text-xs text-ink/50">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-ink/50">구성이 정해지면 파일로 드립니다.</p>

            <div className="mt-6">
              <WorkbookPreviewModal />
            </div>
          </div>

          <div className="p-8 md:p-10">
            <p className="mb-6 text-sm text-ink/60">
              남겨 주시면 확인 후 회신합니다. 주말·공휴일에도 받습니다.
            </p>
            <Suspense fallback={null}>
              <ConsultationForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
