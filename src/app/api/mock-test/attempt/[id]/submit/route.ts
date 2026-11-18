import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/sessions";
import { getOwnedAttempt, submitAttempt } from "@/lib/mockTestData/attempts";
import { getMockTest } from "@/lib/mockTestData/registry";
import { scoreAttempt, type AnswersMap } from "@/lib/mockTestData/scoring";

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

  const result = scoreAttempt(test, answers);
  await submitAttempt(attempt.id, answers, result);

  return NextResponse.json({ result });
}

function sanitizeAnswers(raw: unknown, validQuestionIds: string[]): AnswersMap {
  const out: AnswersMap = {};
  if (!raw || typeof raw !== "object") return out;
  const rawObj = raw as Record<string, unknown>;

  for (const qId of validQuestionIds) {
    const entry = rawObj[qId];
    if (!entry || typeof entry !== "object") continue;
    const e = entry as Record<string, unknown>;
    const type = e.type;

    if (type === "mcq-single" && typeof e.optionId === "string") {
      out[qId] = { type: "mcq-single", optionId: e.optionId };
    } else if (type === "mcq-multi" && Array.isArray(e.optionIds)) {
      out[qId] = {
        type: "mcq-multi",
        optionIds: e.optionIds.filter((v): v is string => typeof v === "string"),
      };
    } else if (type === "reorder-paragraphs" && Array.isArray(e.order)) {
      out[qId] = {
        type: "reorder-paragraphs",
        order: e.order.filter((v): v is string => typeof v === "string"),
      };
    } else if (type === "fill-in-blanks" && e.answers && typeof e.answers === "object") {
      const cleaned: Record<string, string> = {};
      for (const [k, v] of Object.entries(e.answers as Record<string, unknown>)) {
        if (typeof v === "string") cleaned[k] = v;
      }
      out[qId] = { type: "fill-in-blanks", answers: cleaned };
    } else if (type === "essay" && typeof e.text === "string") {
      out[qId] = { type: "essay", text: e.text.slice(0, 5000) };
    }
  }

  return out;
}
