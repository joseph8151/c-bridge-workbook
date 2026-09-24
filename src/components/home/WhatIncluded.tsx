const items = [
  { label: "문제", desc: "유형이 보이면 점수가 움직입니다." },
  { label: "해설", desc: "해설에 왜 틀렸는지가 남습니다." },
  { label: "모의", desc: "약한 과제만 묶습니다. 200페이지, 300페이지." },
];

export default function WhatIncluded() {
  return (
    <section className="bg-ivory pb-16 md:pb-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid gap-10 border-t pt-10 sm:grid-cols-3" style={{ borderColor: "rgba(28,23,18,0.15)" }}>
          {items.map((item) => (
            <div key={item.label}>
              <p
                className="font-serif text-lg font-black"
                style={{ color: "var(--color-rust)" }}
              >
                {item.label}
              </p>
              <p className="mt-2 break-keep text-base leading-relaxed" style={{ color: "var(--color-inkstrong)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
