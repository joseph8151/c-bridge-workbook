import type { Metadata } from "next";
import FinderWizard from "@/components/FinderWizard";

export const metadata: Metadata = {
  title: "내 시험 교재 찾기 | C-BRIDGE",
  description: "준비하는 시험, 목표, 집중 영역, 분량을 선택하면 맞는 교재 페이지로 연결해드립니다.",
};

export default function FinderPage() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-[680px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          내 시험 교재 찾기
        </p>
        <h1
          className="mt-5 break-keep font-serif text-3xl font-black leading-[1.3] md:text-4xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          네 가지만 선택하면 맞는 교재로 연결해드립니다.
        </h1>

        <div className="mt-10">
          <FinderWizard />
        </div>
      </div>
    </section>
  );
}
