import { getCloudflareContext } from "@opennextjs/cloudflare";

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

function unauthorizedResponse(): Response {
  return new Response("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="C-BRIDGE Admin"' },
  });
}

// Gates admin-only routes (e.g. /api/admin/entitlements) with HTTP Basic Auth
// against the ADMIN_SECRET secret. Returns null when authorized, otherwise a
// Response the caller should return immediately.
export async function requireAdminAuth(request: Request): Promise<Response | null> {
  const { env } = await getCloudflareContext({ async: true });
  const expected = env.ADMIN_SECRET;
  if (!expected) {
    return new Response("ADMIN_SECRET가 설정되지 않았습니다. `wrangler secret put ADMIN_SECRET`으로 설정하세요.", {
      status: 500,
    });
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = atob(authHeader.slice(6));
    const password = decoded.slice(decoded.indexOf(":") + 1);
    if (timingSafeEqual(password, expected)) return null;
  }

  return unauthorizedResponse();
}
