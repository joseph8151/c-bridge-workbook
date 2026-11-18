-- Switch Mock Test Centre entitlements from "unlimited once granted" to
-- count-based passes (1/5/10회권), and record which random question subset
-- each attempt used so it can be resumed/re-scored consistently.

ALTER TABLE mock_test_entitlements ADD COLUMN remaining_attempts INTEGER NOT NULL DEFAULT 0;
ALTER TABLE mock_test_attempts ADD COLUMN question_ids_json TEXT NOT NULL DEFAULT '[]';
