import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { getCurrentUser } from "@/lib/auth/sessions";
import LogoutButton from "@/components/mockTestCentre/LogoutButton";
import StartTestButton from "@/components/mockTestCentre/StartTestButton";
import { pteAcademicDemo } from "@/lib/mockTestData/pteAcademic";

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

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="border border-ink/15 bg-white p-6 min-[361px]:p-8">
            <p className="eyebrow">AVAILABLE NOW</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-ink">{pteAcademicDemo.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">{pteAcademicDemo.description}</p>
            <p className="mt-3 text-xs leading-relaxed text-ink/45">{pteAcademicDemo.disclaimer}</p>

            <div className="mt-6">
              {user ? (
                <StartTestButton slug={pteAcademicDemo.slug} />
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

          <div className="border border-dashed border-ink/20 bg-white/60 p-6 min-[361px]:p-8">
            <p className="eyebrow">준비 중</p>
            <h2 className="mt-3 font-serif text-2xl font-bold text-ink/50">다른 시험 모의고사</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/50">
              IELTS, OET 등 다른 시험의 모의고사도 순차적으로 추가될 예정입니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
