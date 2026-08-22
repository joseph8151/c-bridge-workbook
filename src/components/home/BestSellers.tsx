import Link from "next/link";
import SectionHeading from "../SectionHeading";
import ProductCard from "../ProductCard";
import { bestSellers } from "@/lib/products";

export default function BestSellers() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Best Sellers"
            title="BUILT FOR PRACTICE."
            subtitle="이해하는 것에서 끝나지 않고, 실제 시험에서 빠르게 답할 수 있을 때까지."
          />
          <Link
            href="/all-books"
            className="shrink-0 text-sm font-bold tracking-[0.08em] text-purple hover:underline"
          >
            VIEW ALL BOOKS →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
