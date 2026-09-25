import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SPA (기업 영어 면접) | C-BRIDGE",
  description: "현대차 등 기업이 쓰는 말하기 평가 SPA를 준비하세요.",
};

export default function SpaPage() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          SPA (기업 영어 면접)
        </p>
        <h1
          className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-black leading-[1.25] md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          현대차 등 기업이 쓰는 말하기 평가입니다.
        </h1>
        <p className="mt-6 text-sm text-ink/50">비즈니스 상황 · 의견 제시 · 설명형 문제를 실전 인터뷰 방식으로 연습합니다.</p>
        <Link
          href={`/consultation?test=${encodeURIComponent("SPA")}`}
          className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
        >
          상담
        </Link>
      </div>
    </section>
  );
}
