import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { getCurrentUser } from "@/lib/auth/sessions";
import LogoutButton from "@/components/mockTestCentre/LogoutButton";
import StartTestButton from "@/components/mockTestCentre/StartTestButton";
import ExamPreviewGraphic from "@/components/mockTestCentre/ExamPreviewGraphic";
import { listAttemptsForUser } from "@/lib/mockTestData/attempts";
import { listEntitlementsForUser } from "@/lib/mockTestData/entitlements";
import { mockTests } from "@/lib/mockTestData/registry";
import type { MockTestAttempt } from "@/lib/mockTestData/attempts";

export const metadata: Metadata = {
  title: "Mock Test Centre | C-BRIDGE",
  description: "C-BRIDGE Mock Test Centre. 로그인 후 모의고사에 응시하고 결과를 저장할 수 있습니다.",
  alternates: { canonical: "/mock-test-centre" },
};

const steps = [
  { no: "01", title: "로그인 · 회원가입", desc: "계정을 만들면 응시 결과가 저장됩니다" },
  { no: "02", title: "이용권 구매 상담", desc: "원하는 시험을 골라 상담 신청, 결제 확인 후 이용권 부여" },
  { no: "03", title: "온라인 응시", desc: "문항 플래그·검토 화면·자동 저장이 포함된 실전형 환경" },
  { no: "04", title: "결과 확인", desc: "자동 채점 점수와 영역별 점수를 계정에서 언제든 다시 확인" },
];

const features = [
  { icon: <ClockIcon />, label: "실전처럼 시간 제한", desc: "전체 응시 시간이 카운트다운되고, 시간이 끝나면 자동 제출됩니다." },
  { icon: <CheckListIcon />, label: "객관식 자동 채점", desc: "객관식·빈칸·순서 배열 문항은 제출 즉시 자동으로 채점됩니다." },
  { icon: <FlagIcon />, label: "문항 플래그 · 검토", desc: "애매한 문항은 표시해두고, 제출 전 전체 검토 화면에서 한 번에 확인합니다." },
  { icon: <SaveIcon />, label: "자동 저장 · 이어하기", desc: "응시 중 자동 저장되어 창을 닫아도 이어서 응시할 수 있습니다." },
];

const faqs = [
  {
    q: "실제 기출문제인가요?",
    a: "아닙니다. 현재 모든 문항은 C-BRIDGE가 자체 제작한 데모 샘플입니다. 공식 출제기관의 기출문항이 아니며, 공식 채점 알고리즘과도 무관합니다.",
  },
  {
    q: "채점은 어떻게 되나요?",
    a: "객관식·빈칸채우기·문단순서 배열 문항은 제출 즉시 자동 채점됩니다. 에세이(서술형) 문항은 자동 채점되지 않고, 작성한 답안이 자가 검토용으로 저장됩니다.",
  },
  {
    q: "다시 응시할 수 있나요?",
    a: "네. 구매한 이용권 횟수(1회/5회/10회) 내에서 다시 응시할 수 있습니다. 응시할 때마다 문제은행에서 문항이 무작위로 바뀌어 출제됩니다. 횟수가 남아있다면 결과 페이지의 '다시 응시하기' 버튼을 이용하세요.",
  },
  {
    q: "응시할 때마다 같은 문제가 나오나요?",
    a: "아닙니다. 각 시험은 20문항의 문제은행을 가지고 있으며, 응시할 때마다 그중 5문항이 무작위로 출제됩니다.",
  },
  {
    q: "응시 중간에 나가면 기록이 사라지나요?",
    a: "아닙니다. 답변은 자동 저장되며, 같은 시험을 다시 시작하면 이어서 응시할 수 있습니다.",
  },
];

export default async function MockTestCentrePage() {
  const user = await getCurrentUser();
  const remainingBySlug = user ? await listEntitlementsForUser(user.id) : {};

  const lastAttemptBySlug = new Map<string, MockTestAttempt>();
  if (user) {
    const attempts = await listAttemptsForUser(user.id);
    for (const a of attempts) {
      if (!lastAttemptBySlug.has(a.testSlug)) lastAttemptBySlug.set(a.testSlug, a);
    }
  }

  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="eyebrow">MOCK TEST CENTRE</p>
              <h1 className="mt-4 break-keep font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
                모의고사 센터
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-ink/60">
                실제 시험과 비슷한 환경에서 온라인으로 응시하고, 결과를 계정에 저장해 언제든
                다시 확인할 수 있습니다.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-ink/50">
                <span className="border border-ink/15 bg-white px-3 py-1.5">{mockTests.length}개 시험</span>
                <span className="border border-ink/15 bg-white px-3 py-1.5">자동 채점</span>
                <span className="border border-ink/15 bg-white px-3 py-1.5">결과 영구 저장</span>
                <span className="border border-ink/15 bg-white px-3 py-1.5">자동 저장 · 이어하기</span>
              </div>
            </div>

            {user && (
              <div className="flex flex-col items-end gap-2 text-sm text-ink/70">
                <span>
                  <span className="font-semibold text-ink">{user.name}</span>님, 환영합니다.
                </span>
                <div className="flex items-center gap-4">
                  <Link href="/mock-test-centre/results" className="btn-text text-sm">
                    내 응시 기록
                  </Link>
                  <LogoutButton />
                </div>
              </div>
            )}
          </div>

          <ExamPreviewGraphic />
        </div>

        {!user && (
          <div
            className="mt-8 flex flex-wrap items-center justify-between gap-4 border-l-2 bg-white px-5 py-4"
            style={{ borderColor: "var(--color-bronze)" }}
          >
            <p className="text-sm leading-relaxed text-ink/70">
              응시 결과를 저장하려면 로그인이 필요합니다.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/mock-test-centre/login" className="btn-text text-sm">
                로그인
              </Link>
              <Link href="/mock-test-centre/signup" className="btn-primary rounded-sm px-5 py-2.5 text-sm font-bold">
                회원가입
              </Link>
            </div>
          </div>
        )}

        {/* 진행 순서 */}
        <div className="mt-14">
          <p className="eyebrow">진행 순서</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.no} className="border-l-2 pl-4" style={{ borderColor: "var(--color-bronze)" }}>
                <span className="font-serif text-sm font-bold text-bronze">{s.no}</span>
                <p className="mt-1 text-sm font-semibold text-ink">{s.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink/50">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 기능 소개 */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.label} className="border border-ink/15 bg-white p-5">
              <div className="text-bronze">{f.icon}</div>
              <p className="mt-3 text-sm font-bold text-ink">{f.label}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-ink/50">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* 이용권 카드 */}
        <div className="mt-14 border-l-2 pl-4" style={{ borderColor: "var(--color-bronze)" }}>
          <p className="eyebrow">모의고사 이용권 (횟수제)</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/60">
            1회·5회·10회권 중 선택해 구매할 수 있습니다. 응시할 때마다 각 시험의 20문항
            문제은행에서 5문항이 무작위로 출제됩니다. 상담 신청 후 결제가 확인되면 이용권이
            부여되어 바로 응시할 수 있습니다.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((test) => {
            const remaining = remainingBySlug[test.slug] ?? 0;
            const lastAttempt = lastAttemptBySlug.get(test.slug);
            const autoScored = test.questions.filter((q) => q.type !== "essay").length;
            return (
              <div
                key={test.slug}
                className="flex flex-col border border-ink/15 bg-white p-6 transition-shadow hover:shadow-[0_4px_20px_rgba(30,36,28,0.08)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/15 text-bronze">
                  <MonitorCheckIcon />
                </div>

                <h2 className="mt-4 font-serif text-xl font-bold text-ink">{test.title}</h2>
                <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] font-bold text-ink/45">
                  <span className="border border-ink/15 px-2 py-0.5">문제은행 {test.questions.length}문항</span>
                  <span className="border border-ink/15 px-2 py-0.5">회당 {test.questionsPerAttempt}문항</span>
                  <span className="border border-ink/15 px-2 py-0.5">{test.totalTimeMinutes}분</span>
                  <span className="border border-ink/15 px-2 py-0.5">자동채점 {autoScored}개 유형</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink/60">{test.description}</p>

                {lastAttempt?.status === "submitted" && lastAttempt.result && (
                  <p className="mt-3 text-xs font-bold text-ink/50">
                    최근 응시 결과: {lastAttempt.result.totalScore} / {lastAttempt.result.maxScore}
                  </p>
                )}
                {lastAttempt?.status === "in_progress" && (
                  <p className="mt-3 text-xs font-bold text-bronze">이어서 응시할 수 있는 기록이 있습니다</p>
                )}

                <p className="mt-3 text-xs leading-relaxed text-ink/45">{test.disclaimer}</p>

                {user && remaining > 0 && (
                  <p className="mt-4 text-sm font-bold text-bronze">남은 응시 횟수: {remaining}회</p>
                )}

                <div className="mt-4">
                  {!user ? (
                    <Link
                      href="/mock-test-centre/login"
                      className="btn-primary inline-block rounded-sm px-6 py-3 text-sm font-bold tracking-[0.04em]"
                    >
                      로그인 후 응시하기
                    </Link>
                  ) : remaining > 0 ? (
                    <StartTestButton slug={test.slug} label={lastAttempt?.status === "in_progress" ? "이어서 응시하기" : "응시 시작"} />
                  ) : null}

                  {(!user || remaining === 0) && (
                    <div className={user ? "" : "mt-3"}>
                      {user && <p className="mb-2 text-xs font-bold text-ink/45">이용권 구매</p>}
                      <div className="flex flex-wrap gap-2">
                        {test.pricingTiers.map((tier) => (
                          <Link
                            key={tier.count}
                            href={`/consultation?goal=${encodeURIComponent(
                              `모의고사 ${tier.label} 구매 신청 (${test.title})`
                            )}`}
                            className="border border-ink/20 px-3 py-2 text-xs font-bold text-ink/70 transition-colors hover:border-[var(--color-rust)] hover:text-ink"
                          >
                            {tier.label} {tier.price.toLocaleString("ko-KR")}원
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {user && remaining > 0 && (
                    <Link
                      href={`/consultation?goal=${encodeURIComponent(`모의고사 이용권 추가 구매 (${test.title})`)}`}
                      className="btn-text mt-3 block text-xs"
                    >
                      이용권 추가 구매
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-ink/45">
          다른 시험의 모의고사도 순차적으로 추가될 예정입니다.
        </p>

        {/* FAQ */}
        <div className="mt-16">
          <p className="eyebrow">자주 묻는 질문</p>
          <div className="mt-5 divide-y divide-ink/10 border border-ink/15 bg-white">
            {faqs.map((f) => (
              <div key={f.q} className="p-5">
                <p className="text-sm font-bold text-ink">Q. {f.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

function CheckListIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6.5h2l1.3 1.3L9.5 5.5" />
      <path d="M12 6.5h8" />
      <path d="M4 12.5h2l1.3 1.3 2.2-2.3" />
      <path d="M12 12.5h8" />
      <path d="M4 18.5h2l1.3 1.3 2.2-2.3" />
      <path d="M12 18.5h8" />
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

function SaveIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4.5h11l3 3v12H5Z" />
      <path d="M8 4.5v5h7v-5" />
      <path d="M8 14h8v5.5H8Z" />
    </svg>
  );
}

function MonitorCheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="12" rx="1.5" />
      <path d="M9 20h6M12 16.5V20" />
      <path d="M8.5 10.5l2 2 4-4.5" />
    </svg>
  );
}
