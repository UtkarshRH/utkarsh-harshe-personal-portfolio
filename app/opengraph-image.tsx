import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/data/portfolio";

export const runtime = "edge";

export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#111318",
          color: "#F4F5F7",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px 72px",
          border: "1px solid #303540",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.14em",
            color: "#A3AAB6",
          }}
        >
          <span>{SITE_CONFIG.wordmark}.</span>
          <span style={{ color: "#6685FF" }}>{SITE_CONFIG.role}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 58,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#F4F5F7",
              maxWidth: 960,
            }}
          >
            {SITE_CONFIG.headline}
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#A3AAB6",
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            {SITE_CONFIG.supportingIntro}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #303540",
            paddingTop: 24,
            fontSize: 18,
            color: "#A3AAB6",
          }}
        >
          <span>{SITE_CONFIG.location}</span>
          <span>React · Next.js · TypeScript · Java · FastAPI</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
