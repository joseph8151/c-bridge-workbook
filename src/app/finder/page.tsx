import type { Metadata } from "next";
import FinderWizard from "@/components/FinderWizard";

export const metadata: Metadata = {
  title: "무료 교재 추천 | C-BRIDGE",
  description:
    "시험 종류, 현재 수준, 목표, 남은 기간을 선택하면 30초 안에 적합한 C-BRIDGE 교재를 추천해드립니다.",
};

export default function FinderPage() {
  return (
    <section className="bg-ivory py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.14em] text-purple">30초 교재 추천</p>
          <h1 className="mt-3 font-serif text-3xl font-black text-ink md:text-4xl">
            어떤 교재를 선택해야 할지 모르겠나요?
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            시험 종류, 현재 수준, 목표, 남은 기간을 선택하면 30초 안에 적합한 C-BRIDGE 교재를
            추천해드립니다. 로그인도, 결제도 필요 없습니다.
          </p>
        </div>

        <div className="mt-12">
          <FinderWizard />
        </div>
      </div>
    </section>
  );
}
