import type { Metadata } from "next";
import Link from "next/link";
import BookCover from "@/components/BookCover";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { testMeta } from "@/lib/testMeta";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "C-BRIDGE JUNIOR | 국제학교·TOEFL Junior 영어 문제집",
  description:
    "TOEFL Junior, TOEFL Primary, 국제학교 영어 커리큘럼을 위한 기초 학술 영어 문제집. C-BRIDGE JUNIOR에서 만나보세요.",
};

export default function JuniorPage() {
  const meta = testMeta.JUNIOR;
  const juniorProducts = products.filter((p) => p.test === "JUNIOR");

  return (
    <>
      <section className="border-b border-purple/10 bg-cream py-14 md:py-18">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 px-5 text-center md:px-10">
          <p className="text-xs font-bold tracking-[0.24em] text-purple">For Younger Learners</p>
          <h1 className="font-serif text-4xl font-black text-ink md:text-5xl">C-BRIDGE JUNIOR</h1>
          <p className="max-w-xl text-base leading-relaxed text-ink/65">{meta.description}</p>
          <div className="flex -space-x-6">
            <BookCover test="JUNIOR" skill="Academic Reading" tag="Foundation Series" color={meta.color} size="sm" tilt={-6} />
            <BookCover test="PRIMARY" skill="Academic Vocabulary" tag="Foundation Series" color={meta.color} size="sm" tilt={0} />
            <BookCover test="SCHOOL" skill="International English" tag="Foundation Series" color={meta.color} size="sm" tilt={6} />
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <SectionHeading eyebrow="Junior Product Line" title="FOUNDATION FOR FUTURE SCORES." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {juniorProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lavender/20 py-14 md:py-16">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 text-center md:px-10">
          <p className="max-w-lg text-sm text-ink/60">
            준비 중인 시험을 정하지 못했다면, 상담을 통해 자녀에게 맞는 교재를 추천받아 보세요.
          </p>
          <Link
            href="/consultation"
            className="rounded-sm bg-purple px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-ivory transition-colors hover:bg-plum"
          >
            REQUEST CONSULTATION
          </Link>
        </div>
      </section>
    </>
  );
}
