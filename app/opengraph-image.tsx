import { ImageResponse } from "next/og";
import { getCreator } from "@/lib/data";

export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpengraphImage() {
  const creator = getCreator();

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
          background: "#0B0D0F",
          color: "#F4F0E6",
        }}
      >
        <span
          style={{
            fontFamily: "serif",
            fontSize: 20,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#B8945A",
          }}
        >
          TRAVEL · AVIATION · TECHNOLOGY · LIFESTYLE
        </span>

        <span
          style={{
            fontFamily: "serif",
            fontSize: 76,
            marginTop: 28,
            lineHeight: 1.05,
            maxWidth: 900,
          }}
        >
          {creator.name}
        </span>

        <span
          style={{
            fontFamily: "serif",
            fontSize: 30,
            marginTop: 20,
            color: "#D4AF6A",
            fontStyle: "italic",
          }}
        >
          {creator.titles.join(" · ")}
        </span>

        <span
          style={{
            fontFamily: "sans-serif",
            fontSize: 24,
            marginTop: 32,
            color: "rgba(244,240,230,0.55)",
            maxWidth: 820,
          }}
        >
          {creator.location}
        </span>
      </div>
    ),
    { ...size }
  );
}