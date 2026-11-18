import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/sessions";
import { createAttempt, getInProgressAttempt } from "@/lib/mockTestData/attempts";
import { hasEntitlement } from "@/lib/mockTestData/entitlements";
import { getMockTest } from "@/lib/mockTestData/registry";

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

  const entitled = await hasEntitlement(user.id, slug);
  if (!entitled) {
    return NextResponse.json(
      { error: "이용권 구매가 필요합니다. 상담을 신청해주세요.", requiresPurchase: true },
      { status: 403 }
    );
  }

  const existing = await getInProgressAttempt(user.id, slug);
  if (existing) {
    return NextResponse.json({ attemptId: existing.id, resumed: true });
  }

  const attempt = await createAttempt(user.id, slug);
  return NextResponse.json({ attemptId: attempt.id, resumed: false });
}
