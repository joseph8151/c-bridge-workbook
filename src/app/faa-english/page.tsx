import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviation English (FAA 교신) | C-BRIDGE",
  description: "미국 FAA 라디오 텔레포니 영어평가 Aviation English를 준비하세요.",
};

export default function FaaEnglishPage() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 text-center md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          Aviation English (FAA 교신)
        </p>
        <h1
          className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          미국 FAA 라디오 텔레포니 영어입니다.
        </h1>
        <p className="mt-6 text-sm text-ink/50">EPTA · ICAO English와 목적이 다른 시험입니다.</p>
        <Link
          href={`/consultation?test=${encodeURIComponent("Aviation English FAA")}`}
          className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
        >
          상담
        </Link>
      </div>
    </section>
  );
}
