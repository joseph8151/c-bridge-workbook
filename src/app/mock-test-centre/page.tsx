import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { getCurrentUser } from "@/lib/auth/sessions";
import LogoutButton from "@/components/mockTestCentre/LogoutButton";
import StartTestButton from "@/components/mockTestCentre/StartTestButton";
import { mockTests } from "@/lib/mockTestData/registry";

export const metadata: Metadata = {
  title: "Mock Test Centre | C-BRIDGE",
  description: "C-BRIDGE Mock Test Centre. 로그인 후 모의고사에 응시하고 결과를 저장할 수 있습니다.",
  alternates: { canonical: "/mock-test-centre" },
};

export default async function MockTestCentrePage() {
  const user = await getCurrentUser();

  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container>
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

        <div className="mt-10 border-l-2 pl-4" style={{ borderColor: "var(--color-bronze)" }}>
          <p className="eyebrow">모의고사 이용권</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/60">
            시험당 45,000원 (4~5만원대)으로 온라인 모의고사에 응시할 수 있는 이용권입니다. 아직
            결제 연동 전이라 로그인 후 바로 체험 응시가 가능하며, 정식 결제는 순차 적용될
            예정입니다.
          </p>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockTests.map((test) => (
            <div key={test.slug} className="flex flex-col border border-ink/15 bg-white p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-serif text-xl font-bold text-ink">{test.title}</h2>
                <span className="shrink-0 whitespace-nowrap text-sm font-bold text-bronze">
                  {test.price.toLocaleString("ko-KR")}원
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{test.description}</p>
              <p className="mt-3 text-xs leading-relaxed text-ink/45">{test.disclaimer}</p>

              <div className="mt-6">
                {user ? (
                  <StartTestButton slug={test.slug} />
                ) : (
                  <Link
                    href="/mock-test-centre/login"
                    className="btn-primary inline-block rounded-sm px-6 py-3 text-sm font-bold tracking-[0.04em]"
                  >
                    로그인 후 응시하기
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs leading-relaxed text-ink/45">
          다른 시험의 모의고사도 순차적으로 추가될 예정입니다.
        </p>
      </Container>
    </section>
  );
}
