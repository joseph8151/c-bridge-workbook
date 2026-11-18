import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/sessions";
import { createAttempt, getInProgressAttempt } from "@/lib/mockTestData/attempts";
import { consumeAttempt } from "@/lib/mockTestData/entitlements";
import { getMockTest } from "@/lib/mockTestData/registry";
import { pickRandomQuestionIds } from "@/lib/mockTestData/selection";

export async function POST(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const test = getMockTest(slug);
  if (!test) {
    return NextResponse.json({ error: "존재하지 않는 모의고사입니다." }, { status: 404 });
  }

  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ error: "로그인이 필요합니다." }, { status: 401 });
  }

  const existing = await getInProgressAttempt(user.id, slug);
  if (existing) {
    return NextResponse.json({ attemptId: existing.id, resumed: true });
  }

  const consumed = await consumeAttempt(user.id, slug);
  if (!consumed) {
    return NextResponse.json(
      { error: "응시 가능 횟수가 없습니다. 이용권을 구매해주세요.", requiresPurchase: true },
      { status: 403 }
    );
  }

  const questionIds = pickRandomQuestionIds(test, test.questionsPerAttempt);
  const attempt = await createAttempt(user.id, slug, questionIds);
  return NextResponse.json({ attemptId: attempt.id, resumed: false });
}
