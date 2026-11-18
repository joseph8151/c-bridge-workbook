import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import { getCurrentUser } from "@/lib/auth/sessions";
import { getOwnedAttempt } from "@/lib/mockTestData/attempts";
import { getMockTest } from "@/lib/mockTestData/pteAcademic";

export const metadata: Metadata = {
  title: "응시 결과 | Mock Test Centre | C-BRIDGE",
};

export default async function ResultDetailPage({ params }: { params: Promise<{ attemptId: string }> }) {
  const { attemptId } = await params;

  const user = await getCurrentUser();
  if (!user) redirect("/mock-test-centre/login");

  const attempt = await getOwnedAttempt(attemptId, user.id);
  if (!attempt) redirect("/mock-test-centre/results");
  if (attempt.status !== "submitted" || !attempt.result) {
    redirect(`/mock-test-centre/${attempt.testSlug}/attempt/${attempt.id}`);
  }

  const test = getMockTest(attempt.testSlug);
  const result = attempt.result;

  return (
    <section className="py-16 md:py-24" style={{ background: "var(--color-paper)" }}>
      <Container className="max-w-[720px]">
        <p className="eyebrow">RESULT</p>
        <h1 className="mt-4 font-serif text-3xl font-bold text-ink md:text-4xl">{test?.title ?? attempt.testSlug}</h1>
        <p className="mt-2 text-sm text-ink/60">
          제출 시각: {attempt.submittedAt ? new Date(attempt.submittedAt * 1000).toLocaleString("ko-KR") : "-"}
        </p>

        <div className="mt-6 border border-ink/15 bg-white p-6 min-[361px]:p-8">
          <p className="eyebrow">자동 채점 점수</p>
          <p className="mt-2 font-serif text-4xl font-bold text-ink">
            {result.totalScore} <span className="text-xl text-ink/40">/ {result.maxScore}</span>
          </p>
          <p className="mt-1 text-xs text-ink/50">
            작문(Writing) 서술형 문항은 자동 채점되지 않으며, 자가 검토용으로 저장됩니다.
          </p>
        </div>

        <div className="mt-6 divide-y divide-ink/10 border border-ink/15 bg-white">
          {result.results.map((r) => (
            <div key={r.questionId} className="flex items-center justify-between gap-4 p-4">
              <p className="text-sm text-ink/80">{r.title}</p>
              {r.autoScored ? (
                <span className={`text-sm font-bold ${r.correct ? "text-bronze" : "text-ink/40"}`}>
                  {r.correct ? "정답" : "오답"}
                </span>
              ) : (
                <span className="text-xs text-ink/40">자가 검토</span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/mock-test-centre/results" className="btn-text text-sm">
            ← 전체 응시 기록 보기
          </Link>
        </div>
      </Container>
    </section>
  );
}
