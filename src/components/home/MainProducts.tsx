import Link from "next/link";
import Container from "@/components/Container";

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5.5c0-.8.7-1.5 1.5-1.5H11v15H5.5A1.5 1.5 0 0 1 4 17.5v-12Z" />
      <path d="M20 5.5c0-.8-.7-1.5-1.5-1.5H13v15h5.5c.8 0 1.5-.7 1.5-1.5v-12Z" />
    </svg>
  );
}

function MonitorCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M9 20h6M12 16.5V20" />
      <path d="M8.5 10.5l2 2 4-4.5" />
    </svg>
  );
}

const products = [
  {
    eyebrow: "BOOKS",
    title: "문제집 구매",
    desc: "레벨·난이도·취약 영역까지 맞춤 제작되는 PDF 문제집. 상담 후 나에게 맞는 구성으로 받아보세요.",
    cta: "문제집 보러가기",
    href: "/all-books",
    icon: <BookIcon />,
  },
  {
    eyebrow: "MOCK TEST",
    title: "모의고사 센터",
    desc: "로그인하고 바로 온라인으로 응시하세요. 결과는 계정에 저장되어 언제든 다시 확인할 수 있습니다.",
    cta: "모의고사 센터 가기",
    href: "/mock-test-centre",
    icon: <MonitorCheckIcon />,
  },
];

export default function MainProducts() {
  return (
    <section className="py-14 md:py-20" style={{ background: "var(--bg-surface)" }} data-reveal>
      <Container>
        <p className="eyebrow" style={{ color: "var(--bg-accent)" }}>
          두 가지 방법으로 준비하세요
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
          {products.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col justify-between border p-7 transition-colors hover:border-[var(--bg-accent)] md:p-9"
              style={{ borderColor: "var(--bg-line)", background: "var(--bg-paper)" }}
            >
              <div>
                <div style={{ color: "var(--bg-accent)" }}>{p.icon}</div>
                <p className="mt-4 eyebrow" style={{ color: "var(--bg-muted)" }}>
                  {p.eyebrow}
                </p>
                <p
                  className="mt-2 text-2xl font-medium tracking-[-0.02em] md:text-[28px]"
                  style={{ color: "var(--bg-ink)", fontFamily: "var(--bg-font-display)" }}
                >
                  {p.title}
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "var(--bg-muted)" }}>
                  {p.desc}
                </p>
              </div>
              <p className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--bg-ink)" }}>
                {p.cta} <span className="arrow-slide">→</span>
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
