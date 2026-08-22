import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import BookCover from "@/components/BookCover";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/lib/products";
import { testMeta } from "@/lib/testMeta";

export const metadata: Metadata = {
  title: "Full Mock Tests | C-BRIDGE TEST PREP",
  description:
    "TOEFL, IELTS, PTE, Duolingo English Test Full Mock Test 시리즈. 실제 시험과 동일한 구성과 시간으로 훈련하는 C-BRIDGE 실전 모의고사.",
};

const mocks = ["TOEFL", "IELTS", "PTE", "DET"] as const;

export default function MockTestsPage() {
  const mockProducts = products.filter((p) => p.skill === "Mock Test" && p.type === "Mock Test");

  return (
    <>
      <section className="relative overflow-hidden bg-plum py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple/30 blur-3xl" />
        <div className="relative mx-auto max-w-[1440px] px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.28em] text-gold">Full Mock Tests</p>
          <h1 className="mt-4 font-serif text-5xl font-black leading-[1.02] text-ivory sm:text-6xl md:text-7xl">
            PRACTICE LIKE
            <br />
            IT&apos;S TEST DAY.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-lavender/85 md:text-lg">
            시험 전에 가장 필요한 것은 새로운 이론이 아니라 실제 시험과 같은 연습입니다.
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-6">
            {mocks.map((id, i) => {
              const meta = testMeta[id];
              return (
                <BookCover
                  key={id}
                  test={meta.name.split(" ")[0]}
                  skill="Full Mock Test"
                  tag="Practice Series"
                  color={meta.color}
                  size="lg"
                  tilt={i % 2 === 0 ? -4 : 4}
                  className={i % 2 === 1 ? "mt-8" : ""}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="Mock Test Series" title="FULL-LENGTH. FULLY TIMED." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {mockProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
