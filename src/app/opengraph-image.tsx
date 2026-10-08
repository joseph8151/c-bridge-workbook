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
          background: "#f6f1e8",
          color: "#1e241c",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: 6, color: "#5f7f52" }}>
          C—BRIDGE
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 68, fontWeight: 500, lineHeight: 1.15 }}>
          Professional Language
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 500, lineHeight: 1.15 }}>Exam Series</div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 26, color: "#5e6558" }}>
          PTE · CELPIP · OET · EPTA · IELTS · TOEFL
        </div>
      </div>
    ),
    { ...size },
  );
}
