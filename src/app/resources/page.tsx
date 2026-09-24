import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "무료자료 | C-BRIDGE",
  description: "PTE, CELPIP, OET, EPTA 샘플 문항을 미리 확인하세요.",
};

const samples = [
  {
    exam: "PTE",
    items: [
      { label: "Repeat Sentence", text: "The research team collected data from over five hundred participants across three countries." },
      { label: "Dictation", text: "Please submit your application before the end of business on Friday." },
    ],
  },
  {
    exam: "CELPIP",
    items: [
      { label: "이메일 쓰기", text: "동네 소음 문제로 관리사무소에 항의 이메일을 작성하세요." },
      { label: "스피킹 프롬프트", text: "최근에 경험한 즐거운 여행에 대해 이야기해 보세요." },
    ],
  },
  {
    exam: "OET",
    items: [
      { label: "레터 첫 문장 (Nursing)", text: "I am writing to refer Mr. Smith, a 68-year-old patient, for continued wound care management." },
    ],
  },
  {
    exam: "EPTA",
    items: [{ label: "복창", text: "Cleared to land runway two seven, wind two five zero at one two knots." }],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
            무료자료
          </p>
          <h1
            className="mt-5 break-keep font-serif text-3xl font-black leading-[1.35] md:text-4xl"
            style={{ color: "var(--color-inkstrong)" }}
          >
            샘플로 호흡을 보고, 본량은 상담에서 정합니다.
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-5 md:px-10">
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {samples.map((s) => (
              <div key={s.exam} className="border-t pt-6" style={{ borderColor: "rgba(28,23,18,0.15)" }}>
                <p className="font-serif text-xl font-black" style={{ color: "var(--color-inkstrong)" }}>
                  {s.exam}
                </p>
                <div className="mt-4 space-y-4">
                  {s.items.map((item) => (
                    <div key={item.label}>
                      <p className="text-xs font-bold tracking-[0.06em] text-ink/45">{item.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/70">&ldquo;{item.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/consultation"
              className="inline-block rounded-sm px-7 py-3.5 text-sm font-bold tracking-[0.08em] text-paper transition-all hover:brightness-90"
              style={{ background: "var(--color-rust)" }}
            >
              상담
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
