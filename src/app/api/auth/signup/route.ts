import { NextResponse } from "next/server";
import { createSession, setSessionCookie } from "@/lib/auth/sessions";
import { createUser, EmailAlreadyRegisteredError } from "@/lib/auth/users";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "요청 형식이 올바르지 않습니다." }, { status: 400 });
  }

  const { email, password, name } = (body ?? {}) as Record<string, unknown>;

  if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "올바른 이메일을 입력해주세요." }, { status: 400 });
  }
  if (typeof password !== "string" || password.length < 8) {
    return NextResponse.json({ error: "비밀번호는 8자 이상이어야 합니다." }, { status: 400 });
  }
  if (typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "이름을 입력해주세요." }, { status: 400 });
  }

  try {
    const user = await createUser(email.trim().toLowerCase(), password, name.trim());
    const token = await createSession(user.id);
    await setSessionCookie(token);
    return NextResponse.json({ user });
  } catch (error) {
    if (error instanceof EmailAlreadyRegisteredError) {
      return NextResponse.json({ error: error.message }, { status: 409 });
    }
    console.error("signup error", error);
    return NextResponse.json({ error: "가입 중 오류가 발생했습니다." }, { status: 500 });
  }
}
