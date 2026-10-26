import type { Metadata } from "next";

// [BRITISH GREEN REDESIGN — Step 1] 디자인 토큰 미리보기 전용 내부 페이지.
// 사이트 어디에서도 링크되지 않으며, 검색엔진에도 노출되지 않습니다.
// Step 2(공통 컴포넌트 리팩터)를 시작하기 전 토큰 자체를 검토하기 위한 용도.
export const metadata: Metadata = {
  title: "Design Tokens Preview",
  robots: { index: false, follow: false },
};

const swatches: { name: string; varName: string; hex: string; role: string }[] = [
  { name: "Ink", varName: "--bg-ink", hex: "#12312A", role: "다크 섹션 배경 · 기본 CTA" },
  { name: "Ink Soft", varName: "--bg-ink-soft", hex: "#1E4339", role: "다크 섹션 보조 면" },
  { name: "Ink Deep", varName: "--bg-ink-deep", hex: "#0B221D", role: "표지 목업 배경 · 가장 어두운 강조" },
  { name: "Paper", varName: "--bg-paper", hex: "#F6F4EE", role: "기본 페이지 배경" },
  { name: "Surface", varName: "--bg-surface", hex: "#FFFFFF", role: "카드 · 입력 필드 면" },
  { name: "Line", varName: "--bg-line", hex: "#E2DED3", role: "구분선 · 보더" },
  { name: "Text", varName: "--bg-text", hex: "#1C1C1A", role: "본문 글자" },
  { name: "Muted", varName: "--bg-muted", hex: "#6A6A64", role: "보조 글자" },
  { name: "Accent (Gold)", varName: "--bg-accent", hex: "#C29A4B", role: "포인트 — 화면당 2~3곳만" },
  { name: "Accent Soft", varName: "--bg-accent-soft", hex: "#F2EAD8", role: "선택된 카드 배경" },
  { name: "Signal (Blue)", varName: "--bg-signal", hex: "#2F5D8A", role: "링크·정보 전용, CTA 색으로 쓰지 않음" },
];

export default function DesignPreviewPage() {
  return (
    <div style={{ background: "var(--bg-paper)", color: "var(--bg-text)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "var(--bg-grid-max-width)", margin: "0 auto", padding: "48px 24px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bg-accent)" }}>
          STEP 1 · DESIGN TOKENS
        </p>
        <h1
          style={{
            marginTop: 12,
            fontFamily: "var(--bg-font-display)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 600,
            color: "var(--bg-ink)",
          }}
        >
          British Green Design Tokens
        </h1>
        <p style={{ marginTop: 10, maxWidth: 640, color: "var(--bg-muted)", lineHeight: 1.7 }}>
          아직 어떤 페이지에도 적용되지 않았습니다. 이 페이지만 새 토큰으로 렌더링됩니다 — 나머지
          사이트는 지금 그대로입니다. 색상·타이포그래피·간격·반경을 확인해 주세요.
        </p>

        {/* Color swatches */}
        <section style={{ marginTop: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bg-accent)" }}>
            COLOR
          </p>
          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 16,
            }}
          >
            {swatches.map((s) => (
              <div
                key={s.varName}
                style={{
                  border: "1px solid var(--bg-line)",
                  borderRadius: "var(--bg-radius)",
                  overflow: "hidden",
                  background: "var(--bg-surface)",
                }}
              >
                <div style={{ height: 72, background: `var(${s.varName})`, borderBottom: "1px solid var(--bg-line)" }} />
                <div style={{ padding: 12 }}>
                  <p style={{ fontWeight: 600, fontSize: 14 }}>{s.name}</p>
                  <p style={{ marginTop: 2, fontSize: 12, color: "var(--bg-muted)" }}>
                    {s.hex} · <code>{s.varName}</code>
                  </p>
                  <p style={{ marginTop: 6, fontSize: 12, color: "var(--bg-muted)", lineHeight: 1.5 }}>{s.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section style={{ marginTop: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bg-accent)" }}>
            TYPOGRAPHY
          </p>
          <div
            style={{
              marginTop: 16,
              border: "1px solid var(--bg-line)",
              borderRadius: "var(--bg-radius)",
              background: "var(--bg-surface)",
              padding: 32,
            }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--bg-muted)" }}>
              FRAUNCES — DISPLAY / HERO / PRICE (영문 전용)
            </p>
            <p
              style={{
                marginTop: 10,
                fontFamily: "var(--bg-font-display)",
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 600,
                lineHeight: 1.15,
                color: "var(--bg-ink)",
              }}
            >
              BUILD THE SCORE.
              <br />
              CROSS THE BRIDGE.
            </p>
            <p
              style={{
                marginTop: 16,
                fontFamily: "var(--bg-font-display)",
                fontSize: 40,
                fontWeight: 700,
                color: "var(--bg-accent)",
              }}
            >
              ₩129,000
            </p>

            <div style={{ marginTop: 28, paddingTop: 28, borderTop: "1px solid var(--bg-line)" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "var(--bg-muted)" }}>
                PRETENDARD — 한글 본문 (기존 그대로)
              </p>
              <p style={{ marginTop: 10, fontSize: 17, lineHeight: 1.7, color: "var(--bg-text)" }}>
                직군과 나라가 다르면 같은 영어가 아닙니다. 각 과목 전문 강사진이 직접 제작하고
                검수한 교재로, 필요한 문제를 충분한 분량으로 준비합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Spacing / grid */}
        <section style={{ marginTop: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bg-accent)" }}>
            SPACING &amp; GRID
          </p>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 16 }}>
            <div
              style={{
                border: "1px solid var(--bg-line)",
                borderRadius: "var(--bg-radius)",
                background: "var(--bg-surface)",
                padding: 16,
              }}
            >
              <p style={{ fontSize: 13, color: "var(--bg-muted)" }}>Section padding — desktop</p>
              <div style={{ marginTop: 8, height: "var(--bg-section-pad-desktop)", width: 24, background: "var(--bg-accent-soft)" }} />
              <p style={{ marginTop: 6, fontSize: 12, color: "var(--bg-muted)" }}>120px</p>
            </div>
            <div
              style={{
                border: "1px solid var(--bg-line)",
                borderRadius: "var(--bg-radius)",
                background: "var(--bg-surface)",
                padding: 16,
              }}
            >
              <p style={{ fontSize: 13, color: "var(--bg-muted)" }}>Section padding — mobile</p>
              <div style={{ marginTop: 8, height: "var(--bg-section-pad-mobile)", width: 24, background: "var(--bg-accent-soft)" }} />
              <p style={{ marginTop: 6, fontSize: 12, color: "var(--bg-muted)" }}>72px</p>
            </div>
            <div
              style={{
                border: "1px solid var(--bg-line)",
                borderRadius: "var(--bg-radius)",
                background: "var(--bg-surface)",
                padding: 16,
                flex: "1 1 280px",
              }}
            >
              <p style={{ fontSize: 13, color: "var(--bg-muted)" }}>Max-width / 12-col grid</p>
              <div
                style={{
                  marginTop: 8,
                  display: "grid",
                  gridTemplateColumns: "repeat(12, 1fr)",
                  gap: 4,
                  height: 40,
                }}
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} style={{ background: "var(--bg-accent-soft)", borderRadius: 2 }} />
                ))}
              </div>
              <p style={{ marginTop: 6, fontSize: 12, color: "var(--bg-muted)" }}>max-width 1200px · 12 columns</p>
            </div>
          </div>
        </section>

        {/* Radius / shadow */}
        <section style={{ marginTop: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bg-accent)" }}>
            RADIUS &amp; SHADOW
          </p>
          <div
            style={{
              marginTop: 16,
              display: "inline-block",
              border: "1px solid var(--bg-line)",
              borderRadius: "var(--bg-radius)",
              boxShadow: "var(--bg-shadow)",
              background: "var(--bg-surface)",
              padding: "20px 28px",
            }}
          >
            <p style={{ fontSize: 14 }}>4px radius · minimal shadow</p>
          </div>
        </section>

        {/* Dark section rhythm preview */}
        <section style={{ marginTop: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bg-accent)" }}>
            ALTERNATING SECTION RHYTHM
          </p>
          <div
            style={{
              marginTop: 16,
              borderRadius: "var(--bg-radius)",
              overflow: "hidden",
              border: "1px solid var(--bg-line)",
            }}
          >
            <div style={{ background: "var(--bg-paper)", padding: 32 }}>
              <p style={{ fontSize: 13, color: "var(--bg-muted)" }}>Light section</p>
              <button
                style={{
                  marginTop: 12,
                  height: 48,
                  padding: "0 28px",
                  borderRadius: "var(--bg-radius)",
                  background: "var(--bg-ink)",
                  color: "var(--bg-paper)",
                  fontWeight: 600,
                  fontSize: 14,
                  border: "none",
                }}
              >
                구성 상담하기
              </button>
            </div>
            <div style={{ background: "var(--bg-ink)", padding: 32 }}>
              <p style={{ fontSize: 13, color: "var(--bg-accent-soft)" }}>Dark section</p>
              <button
                style={{
                  marginTop: 12,
                  height: 48,
                  padding: "0 28px",
                  borderRadius: "var(--bg-radius)",
                  background: "var(--bg-accent)",
                  color: "var(--bg-ink-deep)",
                  fontWeight: 600,
                  fontSize: 14,
                  border: "none",
                }}
              >
                구성 상담하기
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
