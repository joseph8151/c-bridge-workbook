const fits = [
  "직군·국가에 맞는 시험을 정확히 준비하고 싶을 때",
  "약한 영역만 골라 집중하고 싶을 때",
  "목표 점수·비자 기준이 정해져 있을 때",
];

const notFits = [
  "아직 시험을 정하지 못했을 때",
  "전 영역을 얕게 훑어보고 싶을 때",
  "무료 체험판만 원할 때",
];

export default function FitCheck() {
  return (
    <section className="bg-paper py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <div className="grid gap-10 border-t pt-10 sm:grid-cols-2" style={{ borderColor: "rgba(28,23,18,0.15)" }}>
          <div>
            <p className="font-serif text-lg font-black" style={{ color: "var(--color-rust)" }}>
              이런 때 맞습니다
            </p>
            <ul className="mt-4 space-y-2">
              {fits.map((line) => (
                <li key={line} className="text-sm leading-relaxed text-ink/70">
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-serif text-lg font-black text-ink/40">이런 때는 아닙니다</p>
            <ul className="mt-4 space-y-2">
              {notFits.map((line) => (
                <li key={line} className="text-sm leading-relaxed text-ink/50">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
