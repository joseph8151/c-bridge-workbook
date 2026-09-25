import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CELBAN (셀반) | C-BRIDGE",
  description: "캐나다 간호 등록용 영어시험 CELBAN(셀반)을 준비하세요. OET·CELPIP과 형식이 다릅니다.",
};

export default function CelbanPage() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div
        className="mx-auto max-w-[900px] border p-10 text-center md:p-16"
        style={{ borderColor: "var(--color-line)" }}
      >
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          CELBAN (셀반)
        </p>
        <h1
          className="mx-auto mt-5 max-w-2xl break-keep font-serif text-4xl font-bold leading-[1.25] md:text-5xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          캐나다 간호 등록용 영어입니다.
        </h1>
        <p className="mt-6 text-sm text-ink/50">
          OET · 셀핍과 형식이 다릅니다.
        </p>

        <div className="mx-auto mt-10 max-w-md border-t pt-8 text-left" style={{ borderColor: "var(--color-line)" }}>
          <ul className="space-y-2 text-sm leading-relaxed text-ink/65">
            <li>듣기 · 읽기 · 쓰기 · 말하기</li>
            <li>병동 인수인계, 기록, 환자 설명</li>
            <li>영주용 CELPIP과 다른 시험</li>
          </ul>
        </div>

        <Link
          href={`/consultation?test=${encodeURIComponent("CELBAN (셀반)")}`}
          className="btn-primary mt-9 inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em]"
        >
          상담
        </Link>
      </div>
    </section>
  );
}
