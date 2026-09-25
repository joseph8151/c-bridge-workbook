import { Test } from "@/lib/tests";
import { getWhoTakesTestInfo } from "@/lib/whoTakesTest";

export default function WhoTakesTest({ test }: { test: Test }) {
  const info = getWhoTakesTestInfo(test);

  const rows = [
    { label: "시험 목적", value: info.purpose },
    { label: "주요 응시자", value: info.audience },
    { label: "시험 활용 국가 또는 기관", value: info.usedIn },
    { label: "비슷한 시험과의 차이", value: info.differenceFromSimilar },
  ];

  return (
    <section className="border-t bg-ivory py-16 md:py-20" style={{ borderColor: "var(--color-line)" }} data-reveal>
      <div className="mx-auto max-w-[900px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          이 시험은 누가 준비하나요?
        </p>

        <div className="mt-8 border-t" style={{ borderColor: "var(--color-line)" }}>
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid gap-1 border-b py-6 sm:grid-cols-[220px_1fr] sm:gap-6"
              style={{ borderColor: "var(--color-line)" }}
            >
              <p className="text-sm font-bold" style={{ color: "var(--color-inkstrong)" }}>
                {r.label}
              </p>
              <p className="break-keep text-sm leading-relaxed text-ink/70">{r.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
