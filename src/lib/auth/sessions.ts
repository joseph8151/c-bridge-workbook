import { cookies } from "next/headers";
import { getDb } from "./db";
import { generateSessionToken, SESSION_COOKIE_NAME, SESSION_DURATION_MS } from "./session";
import { getUserById, type User } from "./users";

export async function createSession(userId: string): Promise<string> {
  const db = await getDb();
  const token = generateSessionToken();
  const expiresAt = Math.floor((Date.now() + SESSION_DURATION_MS) / 1000);

  await db
    .prepare("INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)")
    .bind(token, userId, expiresAt)
    .run();

  return token;
}

export async function deleteSession(token: string): Promise<void> {
  const db = await getDb();
  await db.prepare("DELETE FROM sessions WHERE id = ?").bind(token).run();
}

export async function getUserBySessionToken(token: string): Promise<User | null> {
  const db = await getDb();
  const nowSeconds = Math.floor(Date.now() / 1000);
  const row = await db
    .prepare("SELECT user_id FROM sessions WHERE id = ? AND expires_at > ?")
    .bind(token, nowSeconds)
    .first<{ user_id: string }>();
  if (!row) return null;

  return getUserById(row.user_id);
}

export async function setSessionCookie(token: string): Promise<void> {
  const store = await cookies();
  store.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: Math.floor(SESSION_DURATION_MS / 1000),
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE_NAME);
}

export async function getCurrentUser(): Promise<User | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;
  return getUserBySessionToken(token);
}

export async function getCurrentSessionToken(): Promise<string | null> {
  const store = await cookies();
  return store.get(SESSION_COOKIE_NAME)?.value ?? null;
}
