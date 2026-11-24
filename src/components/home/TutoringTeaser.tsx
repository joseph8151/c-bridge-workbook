import Link from "next/link";
import Container from "@/components/Container";

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.2-4 4.2-6 7.5-6s6.3 2 7.5 6" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
      <path d="M12 17.5V21M9 21h6" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5.5" width="13" height="13" rx="1.5" />
      <path d="M16 10l5-3v10l-5-3Z" />
    </svg>
  );
}

const points = [
  { icon: <UserIcon />, label: "1:1 맞춤 커리큘럼", desc: "레벨과 목표 시험, 약점에 맞춰 수업을 설계합니다." },
  { icon: <TargetIcon />, label: "목표 시험 집중 대비", desc: "PTE·IELTS·TOEFL 등 준비 중인 시험에 맞춘 실전 연습." },
  { icon: <MicIcon />, label: "스피킹·라이팅 첨삭", desc: "혼자 교정하기 어려운 말하기·쓰기를 실시간으로 피드백합니다." },
  { icon: <VideoIcon />, label: "수업 녹화 제공", desc: "매 수업이 녹화되어 복습하거나 놓친 부분을 다시 볼 수 있습니다." },
];

export default function TutoringTeaser() {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--bg-ink)" }} data-reveal>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow" style={{ color: "var(--bg-accent)" }}>
              LIVE TUTORING
            </p>
            <p
              className="mt-4 max-w-lg break-keep text-2xl font-medium leading-snug tracking-[-0.03em] md:text-[32px]"
              style={{ color: "var(--bg-paper)" }}
            >
              문제집만으로 부족하다면, 전문 튜터와 1:1 실시간 화상과외로 보완하세요.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed" style={{ color: "var(--bg-paper)", opacity: 0.7 }}>
              목표 시험과 약점에 맞춰 커리큘럼을 구성하는 1:1 화상 수업입니다. 문제집과 함께
              병행하면 학습 효과를 높일 수 있습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/consultation?test=화상과외" className="btn-primary-on-dark px-7 text-sm font-medium">
                화상과외 상담하기
              </Link>
              <Link
                href="/tutoring"
                className="inline-flex min-h-[48px] items-center justify-center text-sm font-medium tracking-[0.02em] transition-colors"
                style={{ color: "var(--bg-paper)", opacity: 0.8 }}
              >
                자세히 보기 <span className="arrow-slide ml-1.5">→</span>
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
