import { ImageResponse } from "next/og";

export const runtime = "edge";

const BRAND_500 = "#c9a96e";
const BRAND_600 = "#a07840";
const BRAND_RGB = "201,169,110";
const brand = (a: number) => `rgba(${BRAND_RGB},${a})`;

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#12100e",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage:
              `linear-gradient(${brand(0.07)} 1px, transparent 1px), linear-gradient(90deg, ${brand(0.07)} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Purple glow — top left */}
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -130,
            width: 580,
            height: 580,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${brand(0.45)} 0%, transparent 68%)`,
            display: "flex",
          }}
        />

        {/* Pink glow — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: -150,
            right: -110,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${brand(0.28)} 0%, transparent 68%)`,
            display: "flex",
          }}
        />

        {/* Faint center glow for depth */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 700,
            height: 300,
            borderRadius: "50%",
            background: `radial-gradient(ellipse, ${brand(0.08)} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />

        {/* Logo mark — gradient square with monogram */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 20,
            background: `linear-gradient(135deg, ${BRAND_600} 0%, ${BRAND_500} 100%)`,
            marginBottom: 28,
            boxShadow: `0 0 40px ${brand(0.5)}`,
          }}
        >
          <span
            style={{
              fontSize: 38,
              fontWeight: 900,
              color: "white",
              lineHeight: 1,
              letterSpacing: "-1px",
            }}
          >
            L
          </span>
        </div>

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginBottom: 18,
            gap: "0px",
          }}
        >
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Studio
          </span>
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: BRAND_500,
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            Lumina
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            fontSize: 25,
            color: "rgba(255,255,255,0.52)",
            fontWeight: 500,
            marginBottom: 52,
            textAlign: "center",
            maxWidth: 660,
            lineHeight: 1.45,
          }}
        >
          Premium digital templates for designers, freelancers and go-getters
        </div>

        {/* Stats strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: 9999,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "18px 48px",
              borderRight: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span style={{ fontSize: 23, fontWeight: 700, color: BRAND_500, lineHeight: 1 }}>
              5,200+
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", marginTop: 5 }}>
              Happy Customers
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "18px 48px",
              borderRight: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span style={{ fontSize: 23, fontWeight: 700, color: BRAND_500, lineHeight: 1 }}>
              18,000+
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", marginTop: 5 }}>
              Downloads
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "18px 48px",
            }}
          >
            <span style={{ fontSize: 23, fontWeight: 700, color: BRAND_500, lineHeight: 1 }}>
              4.9 / 5
            </span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", marginTop: 5 }}>
              Average Rating
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630, headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
  );
}
