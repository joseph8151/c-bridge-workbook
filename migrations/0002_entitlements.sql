-- Mock Test Centre: manual purchase entitlements (상담 + 계좌이체 확인 후 관리자가 수동 부여).

CREATE TABLE mock_test_entitlements (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  test_slug TEXT NOT NULL,
  granted_at INTEGER NOT NULL DEFAULT (unixepoch()),
  granted_by TEXT,
  UNIQUE (user_id, test_slug)
);

CREATE INDEX idx_entitlements_user_id ON mock_test_entitlements(user_id);
