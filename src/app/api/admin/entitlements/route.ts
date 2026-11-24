import { requireAdminAuth } from "@/lib/auth/admin";
import { getUserByEmail } from "@/lib/auth/users";
import { grantAttempts, listAllEntitlements, revokeAllAttempts } from "@/lib/mockTestData/entitlements";
import { mockTests } from "@/lib/mockTestData/registry";

const GRANT_COUNT_OPTIONS = [1, 5, 10];

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function renderPage(message: string | null): Promise<string> {
  const entitlements = await listAllEntitlements();

  const optionsHtml = mockTests
    .map((t) => `<option value="${escapeHtml(t.slug)}">${escapeHtml(t.title)} (${escapeHtml(t.slug)})</option>`)
    .join("");

  const countOptionsHtml = GRANT_COUNT_OPTIONS.map((c) => `<option value="${c}">${c}회</option>`).join("");

  const rowsHtml = entitlements.length
    ? entitlements
        .map(
          (e) => `
        <tr>
          <td>${escapeHtml(e.userName)}</td>
          <td>${escapeHtml(e.userEmail)}</td>
          <td>${escapeHtml(e.testSlug)}</td>
          <td>${e.remainingAttempts}회 남음</td>
          <td>${new Date(e.grantedAt * 1000).toLocaleString("ko-KR")}</td>
          <td>
            <form method="POST" style="display:inline">
              <input type="hidden" name="email" value="${escapeHtml(e.userEmail)}" />
              <input type="hidden" name="testSlug" value="${escapeHtml(e.testSlug)}" />
              <button type="submit" name="action" value="revoke" class="secondary">전부 회수</button>
            </form>
          </td>
        </tr>`
        )
        .join("")
    : `<tr><td colspan="6">아직 부여된 이용권이 없습니다.</td></tr>`;

  return `<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Mock Test Centre Admin</title>
<style>
  body { font-family: -apple-system, system-ui, sans-serif; background:#e7f1de; color:#1e241c; margin:0; padding:40px 20px; }
  .wrap { max-width:820px; margin:0 auto; }
  h1 { font-size:22px; margin-bottom:4px; }
  p.sub { color:#5e6558; font-size:13px; margin-top:0; }
  .card { background:#fff; border:1px solid #cfe3c2; padding:24px; margin-top:24px; }
  label { display:block; font-size:12px; font-weight:700; letter-spacing:.05em; color:#5e6558; margin-bottom:6px; }
  input[type=email], select { width:100%; padding:10px; border:1px solid #c9c4b6; margin-bottom:16px; font-size:14px; box-sizing:border-box; }
  button { background:#03c75a; color:#fff; border:none; padding:10px 18px; font-size:13px; font-weight:700; cursor:pointer; }
  button.secondary { background:#9a958a; padding:6px 12px; }
  table { width:100%; border-collapse:collapse; margin-top:16px; font-size:13px; }
  th, td { text-align:left; padding:8px; border-bottom:1px solid #cfe3c2; }
  .msg { background:#dcefd6; border:1px solid #03c75a; padding:10px 14px; font-size:13px; margin-top:16px; }
  .row { display:flex; gap:16px; }
  .row > div { flex: 1; }
</style>
</head>
<body>
  <div class="wrap">
    <h1>Mock Test Centre — 이용권 관리</h1>
    <p class="sub">상담 + 결제(계좌이체) 확인 후, 이메일·시험·횟수를 선택해 이용권을 부여하세요. 이미 이용권이 있으면 횟수가 더해집니다 (추가 구매).</p>
    ${message ? `<div class="msg">${escapeHtml(message)}</div>` : ""}

    <div class="card">
      <form method="POST">
        <label>사용자 이메일 (회원가입한 이메일)</label>
        <input type="email" name="email" required placeholder="user@example.com" />
        <div class="row">
          <div>
            <label>시험</label>
            <select name="testSlug" required>${optionsHtml}</select>
          </div>
          <div>
            <label>횟수</label>
            <select name="count" required>${countOptionsHtml}</select>
          </div>
        </div>
        <button type="submit" name="action" value="grant">이용권 부여</button>
      </form>
    </div>

    <div class="card">
      <h2 style="font-size:15px;margin-top:0;">부여된 이용권 (${entitlements.length}건)</h2>
      <table>
        <thead><tr><th>이름</th><th>이메일</th><th>시험</th><th>남은 횟수</th><th>최근 부여일</th><th></th></tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    </div>
  </div>
</body>
</html>`;
}

export async function GET(request: Request) {
  const authResponse = await requireAdminAuth(request);
  if (authResponse) return authResponse;

  const url = new URL(request.url);
  const message = url.searchParams.get("msg");
  const html = await renderPage(message);
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}

export async function POST(request: Request) {
  const authResponse = await requireAdminAuth(request);
  if (authResponse) return authResponse;

  const url = new URL(request.url);
  const redirectWith = (msg: string) => Response.redirect(`${url.origin}${url.pathname}?msg=${encodeURIComponent(msg)}`, 303);

  const formData = await request.formData();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const testSlug = String(formData.get("testSlug") ?? "");
  const action = String(formData.get("action") ?? "");
  const count = Number(formData.get("count") ?? 0);

  if (!email || !testSlug || (action !== "grant" && action !== "revoke")) {
    return redirectWith("잘못된 요청입니다.");
  }
  if (!mockTests.some((t) => t.slug === testSlug)) {
    return redirectWith(`존재하지 않는 시험입니다: ${testSlug}`);
  }
  if (action === "grant" && !GRANT_COUNT_OPTIONS.includes(count)) {
    return redirectWith("횟수는 1, 5, 10 중에서 선택해주세요.");
  }

  const user = await getUserByEmail(email);
  if (!user) {
    return redirectWith(`해당 이메일의 사용자를 찾을 수 없습니다: ${email}`);
  }

  if (action === "grant") {
    await grantAttempts(user.id, testSlug, count, "admin");
    return redirectWith(`${email}에게 ${testSlug} ${count}회권을 부여했습니다.`);
  }

  await revokeAllAttempts(user.id, testSlug);
  return redirectWith(`${email}의 ${testSlug} 남은 응시 횟수를 모두 회수했습니다.`);
}
