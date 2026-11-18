import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/sessions";
import { getOwnedAttempt, submitAttempt } from "@/lib/mockTestData/attempts";
import { getMockTest } from "@/lib/mockTestData/registry";
import { sanitizeAnswers, scoreAttempt } from "@/lib/mockTestData/scoring";
import { selectQuestions } from "@/lib/mockTestData/selection";

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const attempt = await getOwnedAttempt(id, user.id);
  if (!attempt) {
    return NextResponse.json({ error: "응시 기록을 찾을 수 없습니다." }, { status: 404 });
  }
  if (attempt.status === "submitted") {
    return NextResponse.json({ error: "이미 제출된 응시입니다." }, { status: 409 });
  }

  const fullTest = getMockTest(attempt.testSlug);
  if (!fullTest) {
    return NextResponse.json({ error: "존재하지 않는 모의고사입니다." }, { status: 404 });
  }
  const test = selectQuestions(fullTest, attempt.questionIds);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const rawAnswers = (body as { answers?: unknown } | null)?.answers;
  const answers = sanitizeAnswers(
    rawAnswers,
    test.questions.map((q) => q.id)
  );

  const result = scoreAttempt(test, answers);
  await submitAttempt(attempt.id, answers, result);

  return NextResponse.json({ result });
}
