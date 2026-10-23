import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import FAQ from "@/components/FAQ";
import ConsultationForm from "@/components/ConsultationForm";
import DirectPurchaseForm from "@/components/DirectPurchaseForm";
import { orderFaqItems } from "@/lib/faqData";
import { tierMeta, tierOrder } from "@/lib/products";
import { siteConfig } from "@/lib/config";

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
          아래에서 가격을 먼저 확인하신 후, 시험과 목표 점수를 알려주세요. 충분한 상담을 통해
          필요한 영역과 교재 구성을 안내합니다. 현재는 자동결제를 제공하지 않으며, 상담 후
          담당자가 결제 방법을 안내해드립니다.
        </p>

        <div className="mt-8 border p-4 min-[361px]:p-5" style={{ borderColor: "var(--color-border)", background: "var(--color-paper-dark)" }}>
          <p className="text-xs font-semibold tracking-[0.1em]" style={{ color: "var(--color-muted)" }}>
            가격을 먼저 확인하신 후 상담해 주세요
          </p>
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1">
            {tierOrder.map((tier) => {
              const m = tierMeta[tier];
              return (
                <p key={tier} className="text-sm" style={{ color: "var(--color-ink)" }}>
                  <span className="font-semibold">{m.label}</span> ₩{m.price.toLocaleString()}
                </p>
              );
            })}
          </div>
          <Link
            href="/pricing"
            className="mt-2 inline-flex text-xs font-medium underline decoration-[var(--color-border)] underline-offset-4 hover:text-[var(--color-bronze)]"
            style={{ color: "var(--color-ink)" }}
          >
            구성별 가격 자세히 보기 →
          </Link>
        </div>

        <div id="direct-purchase" className="mt-6 scroll-mt-24 border p-6 min-[361px]:p-8" style={{ borderColor: "var(--color-border)" }}>
          <p className="eyebrow">DIRECT PURCHASE</p>
          <p className="mt-3 font-serif text-lg font-bold" style={{ color: "var(--color-ink)" }}>
            상담 없이 바로 구매하실 수도 있습니다.
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
            아래 계좌로 입금 후 이메일 주소를 남겨주시면, {siteConfig.shippingTurnaround}됩니다.
          </p>

          <div className="mt-5 border-l-2 pl-4" style={{ borderColor: "var(--color-bronze)" }}>
            <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              신중하게 결정하신 분만 작성해 주세요.
            </p>
            <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
              입금 후 취소가 어려울 수 있습니다. 구성이 확실하지 않으시면 아래 상담을 먼저
              이용해 주세요.
            </p>
          </div>

          <div className="mt-5 border-t pt-5" style={{ borderColor: "var(--color-border)" }}>
            <p className="text-xs font-semibold tracking-[0.06em]" style={{ color: "var(--color-ink)" }}>
              입금 계좌
            </p>
            <p className="mt-2 text-lg font-bold" style={{ color: "var(--color-ink)" }}>
              {siteConfig.bankName} {siteConfig.bankAccountNumber}
            </p>
            <p className="text-sm" style={{ color: "var(--color-muted)" }}>
              예금주: {siteConfig.bankAccountHolder}
            </p>
          </div>

          <div className="mt-6 border-t pt-6" style={{ borderColor: "var(--color-border)" }}>
            <Suspense fallback={null}>
              <DirectPurchaseForm />
            </Suspense>
          </div>
        </div>

        <div className="mt-10 border-t" style={{ borderColor: "var(--color-border)" }} />

        <p className="eyebrow">상담이 필요하시면</p>
        <div className="mt-6 border-l-2 pl-4" style={{ borderColor: "var(--color-bronze)" }}>
          <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
            국내에서는 전화번호와 카카오톡 ID를 남겨주세요.
          </p>
          <p className="mt-1 text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            아래 양식에 전화번호(필수)와 카카오톡 ID(선택)를 남겨주시면 빠르게 연락드립니다.
            해외에서 연락 주시는 경우에는 이메일로도 상담 가능합니다.
          </p>
        </div>

        <div className="mt-10 border-t" style={{ borderColor: "var(--color-border)" }} />

        <div className="grid border-x border-b lg:grid-cols-[1fr_1.4fr]" style={{ borderColor: "var(--color-border)" }}>
          <div className="border-b p-6 min-[361px]:p-8 lg:p-10 lg:border-b-0 lg:border-r" style={{ borderColor: "var(--color-border)" }}>
            <p className="eyebrow">교재는 이렇게 진행됩니다</p>
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
              <Link href="/all-books" className="btn-text text-sm">
                교재 구성 미리보기 <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="p-6 min-[361px]:p-8 md:p-10">
            <p className="mb-6 text-sm" style={{ color: "var(--color-muted)" }}>
              전화번호와 카카오톡 ID를 남겨주시면 빠르게 연락드립니다. 해외에서는 이메일로도
              남기실 수 있습니다. 주말·공휴일에도 받습니다.
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
