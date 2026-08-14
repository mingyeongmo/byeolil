import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import { getSharedResult } from "@/lib/sharedResults";
import type { SharedResult } from "@/schema/generate";

export const alt = "별일있음 과장 결과";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type ResultTheme = {
  label: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  secondaryText: string;
  mark: string;
};

const RESULT_THEMES = {
  legend: {
    label: "전설",
    accent: "#a77822",
    background: "#f6edcf",
    surface: "#fffaf0",
    text: "#3e2e1b",
    secondaryText: "#705a38",
    mark: "♛",
  },
  "breaking-news": {
    label: "긴급 뉴스",
    accent: "#d72f35",
    background: "#fcebec",
    surface: "#ffffff",
    text: "#17243a",
    secondaryText: "#536074",
    mark: "속보",
  },
  sports: {
    label: "스포츠 중계",
    accent: "#0b825a",
    background: "#e7f6ef",
    surface: "#102940",
    text: "#ffffff",
    secondaryText: "#b9cbd4",
    mark: "LIVE",
  },
  achievement: {
    label: "업적 달성",
    accent: "#7653cf",
    background: "#f0ebff",
    surface: "#fbf9ff",
    text: "#38245f",
    secondaryText: "#69558e",
    mark: "★",
  },
} satisfies Record<SharedResult["style"], ResultTheme>;

type ResultOpenGraphImageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResultOpenGraphImage({
  params,
}: ResultOpenGraphImageProps) {
  const { id } = await params;
  const sharedResult = await getSharedResult(id);

  if (!sharedResult) {
    notFound();
  }

  const theme = RESULT_THEMES[sharedResult.style];

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "48px",
        background: theme.background,
        fontFamily: "Noto Sans",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "48px",
          border: `5px solid ${theme.accent}`,
          borderRadius: "28px",
          background: theme.surface,
          color: theme.text,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: "999px",
              background: theme.accent,
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            {theme.label}
          </div>

          <div style={{ display: "flex", fontSize: "28px", fontWeight: 800 }}>
            별일있음 ✦
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              marginRight: "32px",
              color: theme.accent,
              fontSize: "64px",
              fontWeight: 900,
            }}
          >
            {theme.mark}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "54px",
              fontWeight: 800,
              lineHeight: 1.25,
            }}
          >
            {sharedResult.result.title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: theme.secondaryText,
            fontSize: "25px",
            fontWeight: 600,
          }}
        >
          <div style={{ display: "flex" }}>{sharedResult.name}님의 하루</div>
          <div style={{ display: "flex" }}>
            오늘의 칭호 · {sharedResult.result.todayTitle}
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
