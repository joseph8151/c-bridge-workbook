-- Brute-force protection: shared by user login (keyed by email) and the
-- admin Basic Auth tool (keyed by IP). A generic key/counter table.

CREATE TABLE login_attempts (
  key TEXT PRIMARY KEY,
  failed_count INTEGER NOT NULL DEFAULT 0,
  locked_until INTEGER,
  updated_at INTEGER NOT NULL DEFAULT (unixepoch())
);
