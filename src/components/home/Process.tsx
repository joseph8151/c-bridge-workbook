import { siteConfig } from "@/lib/config";

const steps = [
  { no: "01", title: "확인", desc: "관심 있는 시험을 정합니다" },
  { no: "02", title: "상담", desc: "목표와 약한 영역을 전달합니다" },
  { no: "03", title: "전달", desc: "결제 확인 후 문제집을 전달합니다" },
];

export default function Process() {
  return (
    <section className="bg-ivory py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid gap-8 border-t pt-10 sm:grid-cols-3" style={{ borderColor: "rgba(28,23,18,0.15)" }}>
          {steps.map((s) => (
            <div key={s.no}>
              <span className="font-serif text-sm font-bold" style={{ color: "var(--color-rust)" }}>
                {s.no}
              </span>
              <p className="mt-1 font-serif text-lg font-black" style={{ color: "var(--color-inkstrong)" }}>
                {s.title}
              </p>
              <p className="mt-1 text-sm text-ink/60">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink/45">{siteConfig.weekendNotice}</p>
      </div>
    </section>
  );
}
