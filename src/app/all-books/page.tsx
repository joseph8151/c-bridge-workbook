import type { Metadata } from "next";
import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import AllBooksClient from "@/components/AllBooksClient";

export const metadata: Metadata = {
  title: "전체 시험 · 교재 보기 | C-BRIDGE",
  description:
    "취업·승진, 일본어, 중국어, FLEX·SNULT, 유학·이민, 전문직까지 C-BRIDGE의 모든 시험 교재를 검색하고 필터링하세요.",
};

export default function AllBooksPage() {
  return (
    <section className="bg-ivory py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading eyebrow="전체 시험" title="내 교재 찾기" />
        <div className="mt-12">
          <Suspense fallback={null}>
            <AllBooksClient />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
