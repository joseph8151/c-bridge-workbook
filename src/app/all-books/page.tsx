import type { Metadata } from "next";
import { Suspense } from "react";
import SectionHeading from "@/components/SectionHeading";
import AllBooksClient from "@/components/AllBooksClient";

export const metadata: Metadata = {
  title: "All Books | C-BRIDGE TEST PREP",
  description:
    "TOEFL, IELTS, PTE, Duolingo English Test, Junior 전 시리즈 문제집을 시험·영역·레벨·유형별로 검색하고 필터링하세요.",
};

export default function AllBooksPage() {
  return (
    <section className="bg-ivory py-14 md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading eyebrow="Full Catalog" title="ALL BOOKS." />
        <div className="mt-12">
          <Suspense fallback={null}>
            <AllBooksClient />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
