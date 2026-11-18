import { NextResponse } from "next/server";
import { clearSessionCookie, deleteSession, getCurrentSessionToken } from "@/lib/auth/sessions";

export async function POST() {
  const token = await getCurrentSessionToken();
  if (token) await deleteSession(token);
  await clearSessionCookie();
  return NextResponse.json({ ok: true });
}
