import { getDb } from "@/lib/auth/db";
import { generateId } from "@/lib/auth/session";

export interface EntitlementRecord {
  userId: string;
  userEmail: string;
  userName: string;
  testSlug: string;
  grantedAt: number;
  grantedBy: string | null;
}

export async function hasEntitlement(userId: string, testSlug: string): Promise<boolean> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT 1 FROM mock_test_entitlements WHERE user_id = ? AND test_slug = ?")
    .bind(userId, testSlug)
    .first();
  return row !== null;
}

export async function listEntitlementsForUser(userId: string): Promise<string[]> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT test_slug FROM mock_test_entitlements WHERE user_id = ?")
    .bind(userId)
    .all<{ test_slug: string }>();
  return results.map((r) => r.test_slug);
}

export async function grantEntitlement(userId: string, testSlug: string, grantedBy: string): Promise<void> {
  const db = await getDb();
  await db
    .prepare(
      "INSERT INTO mock_test_entitlements (id, user_id, test_slug, granted_by) VALUES (?, ?, ?, ?) ON CONFLICT(user_id, test_slug) DO UPDATE SET granted_by = excluded.granted_by"
    )
    .bind(generateId(), userId, testSlug, grantedBy)
    .run();
}

export async function revokeEntitlement(userId: string, testSlug: string): Promise<void> {
  const db = await getDb();
  await db
    .prepare("DELETE FROM mock_test_entitlements WHERE user_id = ? AND test_slug = ?")
    .bind(userId, testSlug)
    .run();
}

export async function listAllEntitlements(): Promise<EntitlementRecord[]> {
  const db = await getDb();
  const { results } = await db
    .prepare(
      `SELECT u.id as user_id, u.email as user_email, u.name as user_name, e.test_slug, e.granted_at, e.granted_by
       FROM mock_test_entitlements e
       JOIN users u ON u.id = e.user_id
       ORDER BY e.granted_at DESC`
    )
    .all<{
      user_id: string;
      user_email: string;
      user_name: string;
      test_slug: string;
      granted_at: number;
      granted_by: string | null;
    }>();

  return results.map((r) => ({
    userId: r.user_id,
    userEmail: r.user_email,
    userName: r.user_name,
    testSlug: r.test_slug,
    grantedAt: r.granted_at,
    grantedBy: r.granted_by,
  }));
}
