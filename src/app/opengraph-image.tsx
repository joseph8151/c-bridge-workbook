import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "C-BRIDGE — Professional Language Exam Series";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f7f6f2",
          color: "#222222",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: 6, color: "#2a2e24" }}>
          C—BRIDGE
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 68, fontWeight: 600, lineHeight: 1.15 }}>
          Professional Language
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 600, lineHeight: 1.15 }}>Exam Series</div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "#5a574c" }}>
          PTE · CELPIP · OET · EPTA · IELTS · TOEFL
        </div>
      </div>
    ),
    { ...size },
  );
}
