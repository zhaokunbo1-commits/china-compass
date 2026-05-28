"use client";

import { useId } from "react";

interface FilmGrainProps {
  opacity?: number;
  className?: string;
}

/**
 * SVG feTurbulence grain overlay.
 * Each instance gets a unique filter ID via useId() to avoid DOM conflicts.
 * Uses mixBlendMode "overlay" so it reads correctly on both light and dark bg.
 */
export default function FilmGrain({ opacity = 0.04, className = "" }: FilmGrainProps) {
  const rawId = useId();
  const filterId = `fg-${rawId.replace(/[^a-zA-Z0-9]/g, "x")}`;

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ zIndex: 5, opacity, mixBlendMode: "overlay" }}
    >
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.78 0.68"
            numOctaves="3"
            stitchTiles="stitch"
            result="n"
          />
          <feColorMatrix type="saturate" values="0" in="n" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>
    </div>
  );
}
