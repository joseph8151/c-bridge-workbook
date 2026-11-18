import type { MockQuestion, MockTest } from "./types";

// Fisher-Yates partial shuffle — picks `count` question ids at random,
// without replacement, from the test's full question pool.
export function pickRandomQuestionIds(test: MockTest, count: number): string[] {
  const ids = test.questions.map((q) => q.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids.slice(0, Math.min(count, ids.length));
}

// Builds a MockTest-shaped view scoped to just the questions an attempt
// actually drew, in that attempt's order — everything downstream (the
// TestRunner, scoring, results) can keep treating it like a normal MockTest.
export function selectQuestions(test: MockTest, questionIds: string[]): MockTest {
  const byId = new Map<string, MockQuestion>(test.questions.map((q) => [q.id, q]));
  const questions = questionIds.map((id) => byId.get(id)).filter((q): q is MockQuestion => !!q);
  return { ...test, questions };
}
