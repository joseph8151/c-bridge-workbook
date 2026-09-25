import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ELPAC (항공 관제 영어) | C-BRIDGE",
  description: "유럽 관제 · 항공 교신 영어평가 ELPAC을 준비하세요.",
};

export default function ElpacPage() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          ELPAC (항공 관제 영어)
        </p>
        <h1
          className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          유럽 관제 · 항공 교신 영어입니다.
        </h1>
        <p className="mt-6 text-sm text-ink/50">EPTA · Aviation English(FAA)와는 별개의 시험입니다.</p>
        <Link
          href={`/consultation?test=${encodeURIComponent("ELPAC")}`}
          className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
        >
          상담
        </Link>
      </div>
    </section>
  );
}
