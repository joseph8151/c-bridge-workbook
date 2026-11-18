import Link from "next/link";
import Container from "@/components/Container";

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5c0-.8.7-1.5 1.5-1.5H11v15H5.5A1.5 1.5 0 0 1 4 17.5v-12Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5c.8 0 1.5-.7 1.5-1.5v-12Z" />
    </svg>
  );
}

function MonitorCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M9 20h6M12 16.5V20" />
      <path d="M8.5 10.5l2 2 4-4.5" />
    </svg>
  );
}

export default function ChoiceGate() {
  return (
    <section
      className="flex min-h-[calc(100svh-64px)] items-center py-14 md:min-h-[calc(100svh-80px)]"
      style={{ background: "var(--bg-paper)" }}
    >
      <Container>
        <p className="eyebrow text-center" style={{ color: "var(--bg-accent)" }}>
          C-BRIDGE
        </p>
        <h1
          className="mx-auto mt-4 max-w-xl break-keep text-center font-medium leading-tight tracking-[-0.03em]"
          style={{ color: "var(--bg-ink)", fontSize: "clamp(28px, 4.2vw, 46px)" }}
        >
          무엇을 준비하시나요?
        </h1>
        <p className="mx-auto mt-3 max-w-md text-center text-sm md:text-base" style={{ color: "var(--bg-muted)" }}>
          필요한 방법을 선택하세요.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2 md:gap-8">
          <Link
            href="/all-books"
            className="group flex flex-col items-center border-2 p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--bg-accent)] hover:shadow-xl md:p-14"
            style={{ borderColor: "var(--bg-line)", background: "var(--bg-surface)" }}
          >
            <div style={{ color: "var(--bg-accent)" }}>
              <BookIcon />
            </div>
            <p className="mt-6 eyebrow text-sm" style={{ color: "var(--bg-muted)" }}>
              BOOKS
            </p>
            <p
              className="mt-3 text-3xl font-semibold md:text-4xl"
              style={{ color: "var(--bg-ink)", fontFamily: "var(--bg-font-display)" }}
            >
              문제집 구매
            </p>
            <p className="mt-4 max-w-[260px] text-sm leading-relaxed md:text-base" style={{ color: "var(--bg-muted)" }}>
              레벨·난이도·취약 영역까지 맞춤 제작되는 PDF 문제집
            </p>
            <p className="mt-7 inline-flex items-center gap-1.5 text-base font-bold" style={{ color: "var(--bg-ink)" }}>
              문제집 보러가기 <span className="arrow-slide">→</span>
            </p>
          </Link>

          <Link
            href="/mock-test-centre"
            className="group flex flex-col items-center border-2 p-10 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--bg-accent)] hover:shadow-xl md:p-14"
            style={{ borderColor: "var(--bg-line)", background: "var(--bg-surface)" }}
          >
            <div style={{ color: "var(--bg-accent)" }}>
              <MonitorCheckIcon />
            </div>
            <p className="mt-6 eyebrow text-sm" style={{ color: "var(--bg-muted)" }}>
              MOCK TEST
            </p>
            <p
              className="mt-3 text-3xl font-semibold md:text-4xl"
              style={{ color: "var(--bg-ink)", fontFamily: "var(--bg-font-display)" }}
            >
              모의고사 센터
            </p>
            <p className="mt-4 max-w-[260px] text-sm leading-relaxed md:text-base" style={{ color: "var(--bg-muted)" }}>
              로그인 후 바로 온라인 응시, 결과는 계정에 저장
            </p>
            <p className="mt-7 inline-flex items-center gap-1.5 text-base font-bold" style={{ color: "var(--bg-ink)" }}>
              모의고사 센터 가기 <span className="arrow-slide">→</span>
            </p>
          </Link>
        </div>
      </Container>
    </section>
  );
}
