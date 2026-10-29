import type { Metadata } from "next";
import { tierMeta, tierOrder } from "@/lib/products";
import { tests } from "@/lib/tests";

// 내부/영업용 가격표 — 사이트 내비게이션·사이트맵 어디에도 링크되지 않습니다.
// 공개 페이지에서는 가격을 노출하지 않고 상담으로 안내하되, 이 페이지는 직접
// 링크로만 접근해 실제 가격을 한눈에 확인하기 위한 용도입니다.
export const metadata: Metadata = {
  title: "Price Sheet (Internal)",
  robots: { index: false, follow: false },
};

const fixedPriceTests = tests
  .filter((t): t is typeof t & { priceOverride: string } => Boolean(t.priceOverride))
  .sort((a, b) => parseInt(a.priceOverride) - parseInt(b.priceOverride));

const entryLevelTests = tests.filter(
  (t) => t.availableTiers && t.availableTiers.length < tierOrder.length && !t.priceOverride
);

const bespokeTests = [
  { name: "Marlins + TOSE", prices: ["100P ₩129,000", "200P ₩199,000", "300P ₩279,000"] },
  { name: "TELC B1·B2 Pflege", prices: ["100P ₩129,000", "200P ₩199,000", "300P ₩279,000"] },
  { name: "TOLES Higher", prices: ["100P ₩129,000", "200P ₩199,000", "300P ₩279,000"] },
  { name: "무역영어 (L/C·클레임)", prices: ["100P ₩129,000", "200P ₩199,000", "300P ₩279,000"] },
];

const satPrices = [
  { label: "100P", price: "₩190,000" },
  { label: "200P", price: "₩290,000" },
  { label: "Special", price: "₩390,000" },
];

export default function PriceSheetPage() {
  return (
    <div style={{ background: "#f6f1e8", color: "#1e241c", minHeight: "100vh" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "48px 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", color: "#5f7f52" }}>
          INTERNAL — NOT LINKED FROM NAVIGATION
        </p>
        <h1 style={{ marginTop: 10, fontSize: 32, fontWeight: 700 }}>C-BRIDGE 가격표</h1>
        <p style={{ marginTop: 8, color: "#5e6558", fontSize: 14, lineHeight: 1.6 }}>
          공개 사이트에서는 가격을 노출하지 않고 상담으로 안내합니다. 이 페이지는 내부/영업 참고용이며
          직접 링크로만 접근 가능합니다.
        </p>

        {/* 표준 3단계 구성 */}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>표준 3단계 구성 (대부분의 시험)</h2>
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {tierOrder.map((t) => {
              const m = tierMeta[t];
              return (
                <div key={t} style={{ border: "1px solid #e4ddd0", borderRadius: 6, padding: 20, background: "#fff" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "#5f7f52" }}>
                    {m.name} · {m.label}
                  </p>
                  <p style={{ marginTop: 6, fontSize: 28, fontWeight: 700 }}>₩{m.price.toLocaleString()}</p>
                  <p style={{ marginTop: 6, fontSize: 13, color: "#5e6558" }}>
                    {m.pages}페이지 · 모의고사 {m.mockTestsLabel}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 입문형 제한 시험 (100P/200P만) */}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>100P · 200P만 판매 (300P 비노출)</h2>
          <p style={{ marginTop: 4, fontSize: 13, color: "#5e6558" }}>
            위 표준 가격 중 100P/200P만 적용되며, 300P는 판매하지 않습니다.
          </p>
          <ul style={{ marginTop: 10, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 6 }}>
            {entryLevelTests.map((t) => (
              <li key={t.id} style={{ fontSize: 14, padding: "6px 0", borderBottom: "1px solid #e4ddd0" }}>
                {t.name}
              </li>
            ))}
          </ul>
        </section>

        {/* 고정가 단일 상품 */}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>고정가 단일 구성 시험</h2>
          <div style={{ marginTop: 12, border: "1px solid #e4ddd0", borderRadius: 6, overflow: "hidden", background: "#fff" }}>
            {fixedPriceTests.map((t, i) => (
              <div
                key={t.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 16px",
                  borderTop: i > 0 ? "1px solid #e4ddd0" : undefined,
                  fontSize: 14,
                }}
              >
                <span>{t.name}</span>
                <span style={{ fontWeight: 700 }}>{t.priceOverride}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 자체 3단계 구성 (일반 템플릿 미사용 페이지) */}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>자체 구성 시험 (표준과 동일 가격)</h2>
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {bespokeTests.map((b) => (
              <div key={b.name} style={{ border: "1px solid #e4ddd0", borderRadius: 6, padding: 16, background: "#fff" }}>
                <p style={{ fontWeight: 700, fontSize: 14 }}>{b.name}</p>
                <ul style={{ marginTop: 6 }}>
                  {b.prices.map((p) => (
                    <li key={p} style={{ fontSize: 13, color: "#5e6558" }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SAT 전용 */}
        <section style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700 }}>SAT (과목별 개별 주문)</h2>
          <p style={{ marginTop: 4, fontSize: 13, color: "#5e6558" }}>
            영어(Reading and Writing) · 수학(Math) 각각 아래 단가. 두 과목 함께 주문 시 단가 × 2.
          </p>
          <div style={{ marginTop: 10, display: "flex", gap: 16, flexWrap: "wrap" }}>
            {satPrices.map((p) => (
              <div key={p.label} style={{ border: "1px solid #e4ddd0", borderRadius: 6, padding: "12px 20px", background: "#fff" }}>
                <p style={{ fontSize: 12, color: "#5e6558" }}>{p.label}</p>
                <p style={{ fontSize: 18, fontWeight: 700 }}>{p.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
