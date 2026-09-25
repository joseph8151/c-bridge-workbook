import Image from "next/image";
import { siteConfig } from "@/lib/config";

const steps = [
  {
    no: "01",
    title: "확인",
    desc: "관심 있는 시험을 정합니다.",
    desc2: "직군과 목표를 함께 확인합니다.",
  },
  {
    no: "02",
    title: "상담",
    desc: "목표와 약한 영역을 전달합니다.",
    desc2: "필요한 분량과 구성을 정합니다.",
  },
  {
    no: "03",
    title: "전달",
    desc: "결제 확인 후 문제집을 전달합니다.",
    desc2: "PDF로 바로 받아보실 수 있습니다.",
  },
];

export default function Process() {
  return (
    <section
      className="relative overflow-hidden border-t py-20 md:py-24"
      style={{ borderColor: "var(--color-line)" }}
      data-reveal
    >
      <Image
        src="/images/process-cards.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0" style={{ background: "var(--color-paper)", opacity: 0.82 }} />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-10">
        <div
          className="grid border-y sm:grid-cols-3"
          style={{ borderColor: "var(--color-line)" }}
        >
          {steps.map((s, i) => (
            <div
              key={s.no}
              className={`p-10 ${i > 0 ? "border-t sm:border-t-0 sm:border-l" : ""}`}
              style={{ borderColor: "var(--color-line)" }}
            >
              <span className="font-serif text-6xl font-black leading-none md:text-7xl" style={{ color: "var(--color-rust)" }}>
                {s.no}
              </span>
              <p className="mt-4 font-serif text-lg font-black" style={{ color: "var(--color-inkstrong)" }}>
                {s.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/60">{s.desc}</p>
              <p className="text-sm leading-relaxed text-ink/60">{s.desc2}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink/45">{siteConfig.weekendNotice}</p>
      </div>
    </section>
  );
}
