import { getDb } from "@/lib/auth/db";
import { generateId } from "@/lib/auth/session";
import type { AnswersMap, ScoreSummary } from "./scoring";

export interface MockTestAttempt {
  id: string;
  userId: string;
  testSlug: string;
  status: "in_progress" | "submitted";
  answers: AnswersMap;
  result: ScoreSummary | null;
  questionIds: string[];
  startedAt: number;
  submittedAt: number | null;
}

interface AttemptRow {
  id: string;
  user_id: string;
  test_slug: string;
  status: string;
  answers_json: string;
  result_json: string | null;
  question_ids_json: string;
  started_at: number;
  submitted_at: number | null;
}

function toAttempt(row: AttemptRow): MockTestAttempt {
  return {
    id: row.id,
    userId: row.user_id,
    testSlug: row.test_slug,
    status: row.status as MockTestAttempt["status"],
    answers: JSON.parse(row.answers_json) as AnswersMap,
    result: row.result_json ? (JSON.parse(row.result_json) as ScoreSummary) : null,
    questionIds: row.question_ids_json ? (JSON.parse(row.question_ids_json) as string[]) : [],
    startedAt: row.started_at,
    submittedAt: row.submitted_at,
  };
}

export async function createAttempt(userId: string, testSlug: string, questionIds: string[]): Promise<MockTestAttempt> {
  const db = await getDb();
  const id = generateId();
  await db
    .prepare("INSERT INTO mock_test_attempts (id, user_id, test_slug, question_ids_json) VALUES (?, ?, ?, ?)")
    .bind(id, userId, testSlug, JSON.stringify(questionIds))
    .run();
  return {
    id,
    userId,
    testSlug,
    status: "in_progress",
    answers: {},
    result: null,
    questionIds,
    startedAt: Math.floor(Date.now() / 1000),
    submittedAt: null,
  };
}

export async function getAttemptById(id: string): Promise<MockTestAttempt | null> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT * FROM mock_test_attempts WHERE id = ?")
    .bind(id)
    .first<AttemptRow>();
  return row ? toAttempt(row) : null;
}

export async function getOwnedAttempt(id: string, userId: string): Promise<MockTestAttempt | null> {
  const attempt = await getAttemptById(id);
  if (!attempt || attempt.userId !== userId) return null;
  return attempt;
}

export async function getInProgressAttempt(userId: string, testSlug: string): Promise<MockTestAttempt | null> {
  const db = await getDb();
  const row = await db
    .prepare(
      "SELECT * FROM mock_test_attempts WHERE user_id = ? AND test_slug = ? AND status = 'in_progress' ORDER BY started_at DESC LIMIT 1"
    )
    .bind(userId, testSlug)
    .first<AttemptRow>();
  return row ? toAttempt(row) : null;
}

export async function saveProgress(id: string, answers: AnswersMap): Promise<void> {
  const db = await getDb();
  await db
    .prepare("UPDATE mock_test_attempts SET answers_json = ? WHERE id = ? AND status = 'in_progress'")
    .bind(JSON.stringify(answers), id)
    .run();
}

export async function submitAttempt(id: string, answers: AnswersMap, result: ScoreSummary): Promise<void> {
  const db = await getDb();
  await db
    .prepare(
      "UPDATE mock_test_attempts SET answers_json = ?, result_json = ?, status = 'submitted', submitted_at = unixepoch() WHERE id = ?"
    )
    .bind(JSON.stringify(answers), JSON.stringify(result), id)
    .run();
}

export async function listAttemptsForUser(userId: string): Promise<MockTestAttempt[]> {
  const db = await getDb();
  const { results } = await db
    .prepare("SELECT * FROM mock_test_attempts WHERE user_id = ? ORDER BY started_at DESC")
    .bind(userId)
    .all<AttemptRow>();
  return results.map(toAttempt);
}
