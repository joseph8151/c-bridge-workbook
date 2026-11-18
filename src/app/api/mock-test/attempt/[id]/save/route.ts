import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/sessions";
import { getOwnedAttempt, saveProgress } from "@/lib/mockTestData/attempts";
import { getMockTest } from "@/lib/mockTestData/registry";
import { sanitizeAnswers } from "@/lib/mockTestData/scoring";

// Silent autosave of in-progress answers (does not score or submit).
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const attempt = await getOwnedAttempt(id, user.id);
  if (!attempt || attempt.status !== "in_progress") {
    return NextResponse.json({ error: "저장할 수 없는 응시입니다." }, { status: 409 });
  }

  const test = getMockTest(attempt.testSlug);
  if (!test) {
    return NextResponse.json({ error: "존재하지 않는 모의고사입니다." }, { status: 404 });
  }

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

  await saveProgress(attempt.id, answers);
  return NextResponse.json({ ok: true });
}
