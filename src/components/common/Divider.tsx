import { CSSProperties } from "react";

interface DividerProps {
  className?: string;
  width?: string;
  style?: CSSProperties;
}

export default function Divider({ className = "", width = "w-16", style }: DividerProps) {
  return (
    <span
      className={`divider-cinematic inline-block ${width} ${className}`}
      style={{ background: "currentColor", ...style }}
    />
  );
}
