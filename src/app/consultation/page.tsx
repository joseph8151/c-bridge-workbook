import type { Metadata } from "next";
import { Suspense } from "react";
import ConsultationForm from "@/components/ConsultationForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Consultation | C-BRIDGE TEST PREP",
  description:
    "현재 점수와 약점을 알려주시면 C-BRIDGE가 목표 시험에 맞는 문제집을 추천해드립니다. 지금 상담을 신청하세요.",
};

export default function ConsultationPage() {
  return (
    <section className="bg-ivory py-16 md:py-24">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-bold tracking-[0.24em] text-purple">Purchase Inquiry</p>
          <h1 className="mt-4 font-serif text-4xl font-black leading-tight text-ink md:text-5xl">
            FIND THE
            <br />
            RIGHT BOOK.
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-ink/65">
            현재는 자동결제를 제공하지 않습니다. 상담 신청 후 담당자가 결제 방법을 안내해드리며,
            결제 확인 후 문제집을 전달해드립니다.
          </p>

          <div className="mt-10 space-y-5 border-t border-purple/10 pt-8">
            <Step no="01" title="Product" desc="관심있는 문제집을 확인합니다" />
            <Step no="02" title="Purchase Inquiry" desc="상담 신청서를 작성합니다" />
            <Step no="03" title="상담" desc="담당자가 맞춤 추천을 드립니다" />
            <Step no="04" title="결제 안내" desc="결제 방법을 안내해드립니다" />
            <Step no="05" title="문제집 전달" desc="결제 확인 후 전달해드립니다" />
          </div>

          <div className="mt-10 rounded-sm border border-purple/15 bg-lavender/20 p-6 text-sm text-ink/70">
            <p className="font-bold text-ink">전화 상담</p>
            <a href={`tel:${siteConfig.phone}`} className="mt-1 block font-serif text-xl text-purple">
              {siteConfig.phone}
            </a>
            <p className="mt-1">{siteConfig.hours}</p>
          </div>
        </div>

        <div className="rounded-sm border border-purple/10 bg-lavender/10 p-6 md:p-10">
          <Suspense fallback={null}>
            <ConsultationForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function Step({ no, title, desc }: { no: string; title: string; desc: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="w-6 shrink-0 font-serif text-sm font-bold text-purple/50">{no}</span>
      <div>
        <p className="text-sm font-bold text-ink">{title}</p>
        <p className="text-xs text-ink/50">{desc}</p>
      </div>
    </div>
  );
}
