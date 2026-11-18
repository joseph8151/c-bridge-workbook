import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/sessions";
import { createAttempt } from "@/lib/mockTestData/attempts";
import { getMockTest } from "@/lib/mockTestData/pteAcademic";

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

  const attempt = await createAttempt(user.id, slug);
  return NextResponse.json({ attemptId: attempt.id });
}
