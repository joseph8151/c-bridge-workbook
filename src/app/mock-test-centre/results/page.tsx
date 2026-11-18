import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import { getCurrentUser } from "@/lib/auth/sessions";
import { listAttemptsForUser } from "@/lib/mockTestData/attempts";
import { getMockTest } from "@/lib/mockTestData/registry";

export const metadata: Metadata = {
  title: "내 응시 기록 | Mock Test Centre | C-BRIDGE",
  alternates: { canonical: "/mock-test-centre/results" },
};

export default async function ResultsListPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/mock-test-centre/login");

  const attempts = await listAttemptsForUser(user.id);

  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container className="max-w-[720px]">
        <p className="eyebrow">MOCK TEST CENTRE</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-ink md:text-4xl">내 응시 기록</h1>

        {attempts.length === 0 ? (
          <p className="mt-6 text-sm text-ink/60">
            아직 응시한 모의고사가 없습니다.{" "}
            <Link href="/mock-test-centre" className="underline">
              모의고사 센터로 이동
            </Link>
          </p>
        ) : (
          <div className="mt-8 divide-y divide-ink/10 border border-ink/15 bg-white">
            {attempts.map((a) => {
              const test = getMockTest(a.testSlug);
              return (
                <div key={a.id} className="flex flex-wrap items-center justify-between gap-4 p-5">
                  <div>
                    <p className="text-sm font-semibold text-ink">{test?.title ?? a.testSlug}</p>
                    <p className="mt-1 text-xs text-ink/50">
                      {new Date(a.startedAt * 1000).toLocaleString("ko-KR")} ·{" "}
                      {a.status === "submitted" ? "제출 완료" : "진행 중"}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {a.status === "submitted" && a.result && (
                      <span className="text-sm font-bold text-ink">
                        {a.result.totalScore} / {a.result.maxScore}
                      </span>
                    )}
                    <Link
                      href={
                        a.status === "submitted"
                          ? `/mock-test-centre/results/${a.id}`
                          : `/mock-test-centre/${a.testSlug}/attempt/${a.id}`
                      }
                      className="btn-text text-sm"
                    >
                      {a.status === "submitted" ? "결과 보기" : "이어서 응시"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
}
