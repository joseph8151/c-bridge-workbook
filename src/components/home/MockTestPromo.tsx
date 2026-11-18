import Link from "next/link";
import Container from "@/components/Container";
import { mockTests } from "@/lib/mockTestData/registry";

function TimerIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2.5 1.5" />
      <path d="M9.5 2.5h5" />
    </svg>
  );
}

function SaveIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4.5h11l3 3v12H5Z" />
      <path d="M8 4.5v5h7v-5" />
    </svg>
  );
}

function FlagIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4v16" />
      <path d="M6 5h12l-3 3.5L18 12H6" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10M11 20V4M18 20v-7" />
    </svg>
  );
}

const points = [
  { icon: <TimerIcon />, label: "실전과 같은 시간 제한", desc: "카운트다운이 끝나면 자동 제출됩니다." },
  { icon: <SaveIcon />, label: "자동 저장 · 이어하기", desc: "중간에 나가도 다음에 이어서 응시할 수 있습니다." },
  { icon: <FlagIcon />, label: "문항 플래그 · 전체 검토", desc: "애매한 문항을 표시해두고 제출 전 한 번에 확인합니다." },
  { icon: <ChartIcon />, label: "결과 저장 · 영역별 점수", desc: "계정에 결과가 쌓이고, 언제든 다시 확인할 수 있습니다." },
];

export default function MockTestPromo() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--bg-ink)" }} data-reveal>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow" style={{ color: "var(--bg-accent)" }}>
              MOCK TEST CENTRE
            </p>
            <p
              className="mt-4 max-w-lg break-keep text-2xl font-medium leading-snug tracking-[-0.03em] md:text-[32px]"
              style={{ color: "var(--bg-paper)" }}
            >
              문제집으로 끝내지 말고, 실전처럼 온라인으로 응시해보세요.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "var(--bg-paper)", opacity: 0.7 }}>
              {mockTests.length}개 시험을 온라인으로 바로 응시할 수 있습니다. 로그인 한 번이면
              결과가 계정에 저장되고, 1회·5회·10회권 중 선택해 구매할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/mock-test-centre" className="btn-primary-on-dark px-7 text-sm font-medium">
                모의고사 센터 가기
              </Link>
              <Link
                href="/mock-test-centre"
                className="inline-flex min-h-[48px] items-center justify-center text-sm font-medium tracking-[0.02em] transition-colors"
                style={{ color: "var(--bg-paper)", opacity: 0.8 }}
              >
                1회 45,000원부터 보기 <span className="arrow-slide ml-1.5">→</span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.label} className="border p-5" style={{ borderColor: "rgba(246,244,238,0.15)" }}>
                <div style={{ color: "var(--bg-accent)" }}>{p.icon}</div>
                <p className="mt-3 text-sm font-semibold" style={{ color: "var(--bg-paper)" }}>
                  {p.label}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--bg-paper)", opacity: 0.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
