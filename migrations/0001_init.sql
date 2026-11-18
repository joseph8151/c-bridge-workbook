-- Mock Test Centre: accounts, sessions, and saved attempt results.

CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  name TEXT NOT NULL,
  created_at INTEGER NOT NULL DEFAULT (unixepoch())
);

CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at INTEGER NOT NULL DEFAULT (unixepoch()),
  expires_at INTEGER NOT NULL
);

CREATE INDEX idx_sessions_user_id ON sessions(user_id);

CREATE TABLE mock_test_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  test_slug TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'in_progress',
  answers_json TEXT NOT NULL DEFAULT '{}',
  result_json TEXT,
  started_at INTEGER NOT NULL DEFAULT (unixepoch()),
  submitted_at INTEGER
);

CREATE INDEX idx_attempts_user_id ON mock_test_attempts(user_id);
