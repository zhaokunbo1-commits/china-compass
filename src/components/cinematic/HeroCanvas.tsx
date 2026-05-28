"use client";

import { ReactNode } from "react";

interface HeroCanvasProps {
  children: ReactNode;
  className?: string;
  letterbox?: boolean;
  vignette?: boolean;
  ratio?: "21/9" | "16/9" | "full";
}

export default function HeroCanvas({
  children,
  className = "",
  letterbox = true,
  vignette = true,
  ratio = "21/9",
}: HeroCanvasProps) {
  const ratioClass =
    ratio === "full"
      ? "min-h-screen"
      : ratio === "16/9"
      ? "aspect-video"
      : "cinema-21-9";

  return (
    <div
      className={[
        "relative w-full overflow-hidden",
        ratioClass,
        letterbox ? "cinema-letterbox" : "",
        vignette ? "cinema-vignette" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
