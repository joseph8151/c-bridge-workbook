import { getDb } from "./db";
import { hashPassword, verifyPassword } from "./password";
import { generateId } from "./session";

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: number;
}

interface UserRow {
  id: string;
  email: string;
  password_hash: string;
  name: string;
  created_at: number;
}

function toUser(row: UserRow): User {
  return { id: row.id, email: row.email, name: row.name, createdAt: row.created_at };
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT id, email, password_hash, name, created_at FROM users WHERE email = ?")
    .bind(email)
    .first<UserRow>();
  return row ? toUser(row) : null;
}

export async function getUserById(id: string): Promise<User | null> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT id, email, password_hash, name, created_at FROM users WHERE id = ?")
    .bind(id)
    .first<UserRow>();
  return row ? toUser(row) : null;
}

export class EmailAlreadyRegisteredError extends Error {
  constructor() {
    super("이미 가입된 이메일입니다.");
  }
}

export async function createUser(email: string, password: string, name: string): Promise<User> {
  const db = await getDb();
  const existing = await db.prepare("SELECT id FROM users WHERE email = ?").bind(email).first();
  if (existing) throw new EmailAlreadyRegisteredError();

  const id = generateId();
  const passwordHash = await hashPassword(password);
  await db
    .prepare("INSERT INTO users (id, email, password_hash, name) VALUES (?, ?, ?, ?)")
    .bind(id, email, passwordHash, name)
    .run();

  return { id, email, name, createdAt: Math.floor(Date.now() / 1000) };
}

export async function verifyUserCredentials(email: string, password: string): Promise<User | null> {
  const db = await getDb();
  const row = await db
    .prepare("SELECT id, email, password_hash, name, created_at FROM users WHERE email = ?")
    .bind(email)
    .first<UserRow>();
  if (!row) return null;

  const valid = await verifyPassword(password, row.password_hash);
  return valid ? toUser(row) : null;
}
