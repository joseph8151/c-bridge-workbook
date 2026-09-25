import Link from "next/link";
import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

interface PreviewPage {
  no: string;
  label: string;
  lines: number[];
}

const pages: PreviewPage[] = [
  { no: "01", label: "Practice Question", lines: [92, 100, 64] },
  { no: "02", label: "Answer", lines: [40, 88] },
  { no: "03", label: "Explanation", lines: [100, 92, 76, 84] },
  { no: "04", label: "Final Review", lines: [70, 96, 88] },
  { no: "05", label: "Study Plan", lines: [100, 60, 76, 88] },
];

// sample 상태 표시: 실제 PDF 스캔본이 준비되면 PreviewPage에 `image?: string`을 추가해
// 아래 스켈레톤 대신 <Image src={page.image} .../>로 교체합니다. 현재는 전부 placeholder입니다.
export default function BookPreview({ testName }: { testName?: string }) {
  const consultHref = testName ? `/consultation?test=${encodeURIComponent(testName)}` : "/consultation";
  return (
    <section className="border-t py-20 md:py-28" style={{ borderColor: "var(--color-border)" }} data-reveal>
      <Container>
        <SectionHeader eyebrow="LOOK INSIDE" title="교재를 직접 확인해보세요." />
        <p className="mt-3 text-xs" style={{ color: "var(--color-muted)" }}>
          Sample layout — actual page scans will replace these placeholders.
        </p>

        <div
          className="mt-10 flex gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {pages.map((page) => (
            <div key={page.no} className="shrink-0" style={{ scrollSnapAlign: "start", width: "240px" }}>
              <div
                className="relative flex aspect-[3/4] w-full flex-col justify-between border p-5"
                style={{ borderColor: "var(--color-border)", background: "var(--color-paper-dark)" }}
              >
                <span className="font-serif text-4xl font-bold leading-none" style={{ color: "var(--color-bronze)" }}>
                  {page.no}
                </span>
                <div className="space-y-2.5">
                  {page.lines.map((w, i) => (
                    <div key={i} className="h-2" style={{ width: `${w}%`, background: "rgba(17,24,32,0.1)" }} />
                  ))}
                </div>
                <span
                  className="pointer-events-none absolute bottom-3 right-4 text-[10px] font-medium tracking-[0.1em]"
                  style={{ color: "var(--color-ink)", opacity: 0.15 }}
                >
                  C-BRIDGE
                </span>
              </div>
              <p className="mt-3 text-sm font-medium tracking-[0.02em]" style={{ color: "var(--color-muted)" }}>
                Page {page.no}
              </p>
              <p className="font-serif text-base font-bold" style={{ color: "var(--color-ink)" }}>
                {page.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2.5 min-[430px]:flex-row min-[430px]:flex-wrap min-[430px]:gap-4">
          <Link href={consultHref} className="btn-primary justify-center px-7 text-sm font-medium">
            교재 구성 상담하기
          </Link>
          <Link href="/exams" className="btn-secondary justify-center px-7 text-sm font-medium">
            내 시험 교재 보기
          </Link>
        </div>
      </Container>
    </section>
  );
}
