import { getDb } from "./db";

const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 15 * 60;

export interface RateLimitStatus {
  locked: boolean;
  retryAfterSeconds: number;
}

export async function checkRateLimit(key: string): Promise<RateLimitStatus> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT locked_until FROM login_attempts WHERE key = ?")
    .bind(key)
    .first<{ locked_until: number | null }>();
  if (!row || !row.locked_until) return { locked: false, retryAfterSeconds: 0 };

  const now = Math.floor(Date.now() / 1000);
  if (row.locked_until > now) {
    return { locked: true, retryAfterSeconds: row.locked_until - now };
  }
  return { locked: false, retryAfterSeconds: 0 };
}

export async function recordFailedAttempt(key: string): Promise<void> {
  const db = await getDb();
  const now = Math.floor(Date.now() / 1000);
  const row = await db
    .prepare("SELECT failed_count FROM login_attempts WHERE key = ?")
    .bind(key)
    .first<{ failed_count: number }>();
  const nextCount = (row?.failed_count ?? 0) + 1;
  const lockedUntil = nextCount >= MAX_ATTEMPTS ? now + LOCKOUT_SECONDS : null;

  await db
    .prepare(
      `INSERT INTO login_attempts (key, failed_count, locked_until, updated_at) VALUES (?, ?, ?, ?)
       ON CONFLICT(key) DO UPDATE SET failed_count = excluded.failed_count, locked_until = excluded.locked_until, updated_at = excluded.updated_at`
    )
    .bind(key, nextCount, lockedUntil, now)
    .run();
}

export async function clearAttempts(key: string): Promise<void> {
  const db = await getDb();
  await db.prepare("DELETE FROM login_attempts WHERE key = ?").bind(key).run();
}
