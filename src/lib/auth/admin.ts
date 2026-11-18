import { getCloudflareContext } from "@opennextjs/cloudflare";
import { checkRateLimit, clearAttempts, recordFailedAttempt } from "./rateLimit";

declare global {
  interface CloudflareEnv {
    ADMIN_SECRET?: string;
  }
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function unauthorizedResponse(message = "Authentication required."): Response {
  return new Response(message, {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="C-BRIDGE Admin"' },
  });
}

// Gates admin-only routes (e.g. /api/admin/entitlements) with HTTP Basic Auth
// against the ADMIN_SECRET secret, with IP-based lockout after repeated wrong
// attempts. Returns null when authorized, otherwise a Response to return.
export async function requireAdminAuth(request: Request): Promise<Response | null> {
  const { env } = await getCloudflareContext({ async: true });
  const expected = env.ADMIN_SECRET;
  if (!expected) {
    return new Response("ADMIN_SECRET가 설정되지 않았습니다. `wrangler secret put ADMIN_SECRET`으로 설정하세요.", {
      status: 500,
    });
  }

  const ip = request.headers.get("cf-connecting-ip") ?? "unknown";
  const rateLimitKey = `admin:${ip}`;

  const status = await checkRateLimit(rateLimitKey);
  if (status.locked) {
    const minutes = Math.ceil(status.retryAfterSeconds / 60);
    return new Response(`너무 많이 틀렸습니다. ${minutes}분 후 다시 시도해주세요.`, { status: 429 });
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = atob(authHeader.slice(6));
    const password = decoded.slice(decoded.indexOf(":") + 1);
    if (timingSafeEqual(password, expected)) {
      await clearAttempts(rateLimitKey);
      return null;
    }
    // A password was actually supplied and was wrong — this is a real guess,
    // unlike the browser's first credential-less request that just triggers
    // the native login prompt, so only this path counts toward lockout.
    await recordFailedAttempt(rateLimitKey);
  }

  return unauthorizedResponse();
}
