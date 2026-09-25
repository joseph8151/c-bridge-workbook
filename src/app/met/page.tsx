import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MET (미시간영어) | C-BRIDGE",
  description: "미시간 영어시험 MET(Michigan English Test)를 준비하세요. 호주 비자 목록에 오르는 경우가 있습니다.",
};

export default function MetPage() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div
        className="mx-auto max-w-[900px] border p-10 text-center md:p-16"
        style={{ borderColor: "var(--color-line)" }}
      >
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          MET (미시간영어)
        </p>
        <h1
          className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-black leading-[1.25] md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          미시간 영어시험입니다.
        </h1>
        <p className="mt-6 text-sm text-ink/50">
          호주 비자 목록에 오르는 경우가 있습니다.
        </p>

        <div className="mx-auto mt-10 max-w-md border-t pt-8 text-left" style={{ borderColor: "var(--color-line)" }}>
          <ul className="space-y-2 text-sm leading-relaxed text-ink/65">
            <li>듣기 · 읽기 · 말하기 · 쓰기</li>
            <li>학술 · 이주 목적. PTE · 아이엘츠와 과제가 다름</li>
            <li>인정 나라는 비자 · 학교마다 다릅니다</li>
          </ul>
        </div>

        <Link
          href={`/consultation?test=${encodeURIComponent("MET (미시간영어)")}`}
          className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
        >
          상담
        </Link>
      </div>
    </section>
  );
}
