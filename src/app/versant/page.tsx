import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Versant | C-BRIDGE",
  description: "기업이 전화 · 컴퓨터로 보는 말하기 평가 Versant를 준비하세요.",
};

export default function VersantPage() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          Versant
        </p>
        <h1
          className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          기업이 전화 · 컴퓨터로 보는 말하기 평가입니다.
        </h1>
        <p className="mt-6 text-sm text-ink/50">짧은 시간 안에 정확하게 답하는 훈련을 중심으로 대비합니다.</p>
        <Link
          href={`/consultation?test=${encodeURIComponent("Versant")}`}
          className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
        >
          상담
        </Link>
      </div>
    </section>
  );
}
