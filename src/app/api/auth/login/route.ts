import { NextResponse } from "next/server";
import { checkRateLimit, clearAttempts, recordFailedAttempt } from "@/lib/auth/rateLimit";
import { createSession, setSessionCookie } from "@/lib/auth/sessions";
import { verifyUserCredentials } from "@/lib/auth/users";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const { email, password } = (body ?? {}) as Record<string, unknown>;
  if (typeof email !== "string" || typeof password !== "string") {
    return NextResponse.json({ error: "이메일과 비밀번호를 입력해주세요." }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const rateLimitKey = `login:${normalizedEmail}`;

  const status = await checkRateLimit(rateLimitKey);
  if (status.locked) {
    const minutes = Math.ceil(status.retryAfterSeconds / 60);
    return NextResponse.json(
      { error: `로그인 시도가 너무 많습니다. ${minutes}분 후 다시 시도해주세요.` },
      { status: 429 }
    );
  }

  const user = await verifyUserCredentials(normalizedEmail, password);
  if (!user) {
    await recordFailedAttempt(rateLimitKey);
    return NextResponse.json({ error: "이메일 또는 비밀번호가 올바르지 않습니다." }, { status: 401 });
  }

  await clearAttempts(rateLimitKey);
  const token = await createSession(user.id);
  await setSessionCookie(token);
  return NextResponse.json({ user });
}
