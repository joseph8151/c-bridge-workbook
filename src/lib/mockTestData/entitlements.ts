import { getDb } from "@/lib/auth/db";
import { generateId } from "@/lib/auth/session";

export interface EntitlementRecord {
  userId: string;
  userEmail: string;
  userName: string;
  testSlug: string;
  remainingAttempts: number;
  grantedAt: number;
  grantedBy: string | null;
}

export async function getRemainingAttempts(userId: string, testSlug: string): Promise<number> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT remaining_attempts FROM mock_test_entitlements WHERE user_id = ? AND test_slug = ?")
    .bind(userId, testSlug)
    .first<{ remaining_attempts: number }>();
  return row?.remaining_attempts ?? 0;
}

export async function listEntitlementsForUser(userId: string): Promise<Record<string, number>> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT test_slug, remaining_attempts FROM mock_test_entitlements WHERE user_id = ?")
    .bind(userId)
    .all<{ test_slug: string; remaining_attempts: number }>();
  return Object.fromEntries(results.map((r) => [r.test_slug, r.remaining_attempts]));
}

// Adds `count` attempts on top of whatever the user already has (top-up).
export async function grantAttempts(userId: string, testSlug: string, count: number, grantedBy: string): Promise<void> {
  const db = await getDb();
  await db
    .prepare(
      `INSERT INTO mock_test_entitlements (id, user_id, test_slug, remaining_attempts, granted_by, granted_at)
       VALUES (?, ?, ?, ?, ?, unixepoch())
       ON CONFLICT(user_id, test_slug) DO UPDATE SET
         remaining_attempts = remaining_attempts + excluded.remaining_attempts,
         granted_by = excluded.granted_by,
         granted_at = unixepoch()`
    )
    .bind(generateId(), userId, testSlug, count, grantedBy)
    .run();
}

// Atomically spends one attempt. Returns false if none were left (or none
// were ever granted), so the caller can refuse to start a test.
export async function consumeAttempt(userId: string, testSlug: string): Promise<boolean> {
  const db = await getDb();
  const result = await db
    .prepare(
      "UPDATE mock_test_entitlements SET remaining_attempts = remaining_attempts - 1 WHERE user_id = ? AND test_slug = ? AND remaining_attempts > 0"
    )
    .bind(userId, testSlug)
    .run();
  return (result.meta.changes ?? 0) > 0;
}

export async function revokeAllAttempts(userId: string, testSlug: string): Promise<void> {
  const db = await getDb();
  await db
    .prepare("UPDATE mock_test_entitlements SET remaining_attempts = 0 WHERE user_id = ? AND test_slug = ?")
    .bind(userId, testSlug)
    .run();
}

export async function listAllEntitlements(): Promise<EntitlementRecord[]> {
  const db = await getDb();
  const { results } = await db
    .prepare(
      `SELECT u.id as user_id, u.email as user_email, u.name as user_name, e.test_slug, e.remaining_attempts, e.granted_at, e.granted_by
       FROM mock_test_entitlements e
       JOIN users u ON u.id = e.user_id
       ORDER BY e.granted_at DESC`
    )
    .all<{
      user_id: string;
      user_email: string;
      user_name: string;
      test_slug: string;
      remaining_attempts: number;
      granted_at: number;
      granted_by: string | null;
    }>();

  return results.map((r) => ({
    userId: r.user_id,
    userEmail: r.user_email,
    userName: r.user_name,
    testSlug: r.test_slug,
    remainingAttempts: r.remaining_attempts,
    grantedAt: r.granted_at,
    grantedBy: r.granted_by,
  }));
}
