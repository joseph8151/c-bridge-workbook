import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NCLEX | C-BRIDGE",
  description: "미국·캐나다 간호 면허 본시험 NCLEX 문항 유형 연습서를 준비하세요.",
};

export default function NclexPage() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          NCLEX (간호 면허)
        </p>
        <h1
          className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-black leading-[1.25] md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          영어시험이 아닙니다. 간호 면허 본시험입니다.
        </h1>
        <p className="mt-6 text-sm text-ink/50">
          미국 · 캐나다 간호 면허 본시험 문항 유형 연습서입니다. OET · TOPEC과는 다른 시험입니다.
        </p>
        <Link
          href={`/consultation?test=${encodeURIComponent("NCLEX")}`}
          className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
        >
          상담
        </Link>
      </div>
    </section>
  );
}
