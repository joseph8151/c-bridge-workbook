import { bytesToBase64Url } from "./encoding";

export const SESSION_COOKIE_NAME = "cb_session";
export const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export function generateSessionToken(): string {
  return bytesToBase64Url(crypto.getRandomValues(new Uint8Array(32)));
}

export function generateId(): string {
  return crypto.randomUUID();
}
