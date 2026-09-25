import Link from "next/link";

interface PreviewItem {
  no: string;
  label: string;
  desc: string;
  lines: number[];
}

const previewItems: PreviewItem[] = [
  { no: "01", label: "실제 문제", desc: "실전과 동일한 난이도·형식의 문제", lines: [92, 100, 64] },
  { no: "02", label: "정답", desc: "정확한 정답과 근거", lines: [40, 88] },
  { no: "03", label: "상세 해설", desc: "문제 접근 방법과 풀이 과정", lines: [100, 92, 76, 84] },
  { no: "04", label: "오답 분석", desc: "자주 틀리는 이유와 함정 포인트", lines: [88, 100, 60] },
  { no: "05", label: "Final Review", desc: "시험 직전 핵심만 다시 확인", lines: [70, 96, 88] },
  { no: "06", label: "Study Plan", desc: "분량 기준 학습 일정 관리", lines: [100, 60, 76, 88] },
];

// 실제 PDF 스캔본이 준비되면 PreviewItem에 `image?: string`을 추가해
// 아래 스켈레톤 대신 <Image src={item.image} .../>로 교체할 수 있도록 구조를 맞춰둠.
export default function BookPreview({ testName }: { testName: string }) {
  return (
    <section className="bg-ivory py-16 md:py-20" data-reveal>
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">
        <p className="text-xs font-bold tracking-[0.24em]" style={{ color: "var(--color-rust)" }}>
          교재 미리보기
        </p>
        <h2
          className="mt-4 break-keep font-serif text-2xl font-black leading-snug md:text-3xl"
          style={{ color: "var(--color-inkstrong)" }}
        >
          실제 C-BRIDGE 교재가 어떻게 구성되는지 확인해보세요.
        </h2>

        <div
          className="mt-8 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {previewItems.map((item) => (
            <div
              key={item.no}
              className="shrink-0"
              style={{ scrollSnapAlign: "start", width: "240px" }}
            >
              <div
                className="relative flex aspect-[3/4] w-full flex-col justify-between border p-5"
                style={{ borderColor: "var(--color-line)", background: "var(--color-paper)" }}
              >
                <span
                  className="font-serif text-4xl font-black leading-none"
                  style={{ color: "var(--color-pistachio)" }}
                >
                  {item.no}
                </span>
                <div className="space-y-2.5">
                  {item.lines.map((w, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full"
                      style={{ width: `${w}%`, background: "rgba(42,46,36,0.1)" }}
                    />
                  ))}
                </div>
                <span className="pointer-events-none absolute bottom-3 right-4 text-[10px] font-bold tracking-[0.1em] text-ink/15">
                  C-BRIDGE
                </span>
              </div>
              <p className="mt-3 font-serif text-base font-black" style={{ color: "var(--color-inkstrong)" }}>
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink/55">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={`/consultation?test=${encodeURIComponent(testName)}`}
            className="btn-primary rounded-sm px-7 text-sm font-bold"
          >
            교재 구성 상담하기
          </Link>
          <Link
            href="/exams"
            className="inline-flex min-h-[48px] items-center border px-7 text-sm font-bold"
            style={{ borderColor: "var(--color-line)", color: "var(--color-inkstrong)" }}
          >
            내 시험 교재 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
