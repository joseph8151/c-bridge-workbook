import type { Metadata } from "next";
import Container from "@/components/Container";
import FinderWizard from "@/components/FinderWizard";

export const metadata: Metadata = {
  title: "FIND YOUR EXAM | C-BRIDGE",
  description: "준비하는 시험, 목표, 집중 영역, 분량을 선택하면 맞는 교재 페이지로 연결해드립니다.",
  alternates: { canonical: "/finder" },
};

export default function FinderPage() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container className="max-w-[680px]">
        <p className="eyebrow">FIND YOUR EXAM</p>
        <h1
          className="mt-5 break-keep font-serif text-3xl font-bold leading-[1.3] md:text-4xl"
          style={{ color: "var(--color-ink)" }}
        >
          내게 맞는 시험과 교재를 찾아보세요.
        </h1>

        <div className="mt-10">
          <FinderWizard />
        </div>
      </Container>
    </section>
  );
}
