const items = [
  { label: "유형", desc: "유형이 보이면 점수가 움직입니다." },
  { label: "호흡", desc: "실전과 같은 호흡으로 모의고사를 풉니다." },
  { label: "해설", desc: "해설에 왜 틀렸는지가 남습니다." },
];

export default function Approach() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          한 권에 들어가는 것
        </p>
        <div className="mt-6 grid gap-12 border-t pt-12 sm:grid-cols-3" style={{ borderColor: "var(--color-line)" }}>
          {items.map((item) => (
            <div key={item.label}>
              <p className="font-serif text-2xl font-black md:text-3xl" style={{ color: "var(--color-rust)" }}>
                {item.label}
              </p>
              <p className="mt-3 break-keep text-base leading-relaxed" style={{ color: "var(--color-inkstrong)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
