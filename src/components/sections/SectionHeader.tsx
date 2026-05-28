import type { CSSProperties } from "react";
import FadeReveal from "@/components/cinematic/FadeReveal";
import Divider from "@/components/common/Divider";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const center = align === "center";
  const accentStyle: CSSProperties = { color: "var(--color-accent, #c8a96e)" };

  return (
    <FadeReveal
      variant="fadeUp"
      className={`space-y-4 mb-8 xl:mb-12 ${center ? "text-center" : ""} ${className}`}
    >
      <p
        className="font-body text-[10px] tracking-[0.3em] uppercase"
        style={{ color: "var(--color-text-muted, #5a5a55)" }}
      >
        {eyebrow}
      </p>

      <h2
        className="font-display text-3xl md:text-4xl xl:text-5xl leading-tight"
        style={{ color: "var(--color-text-primary, #f5f5f0)" }}
      >
        {title}
      </h2>

      {subtitle && (
        <>
          <Divider
            width="w-12"
            className={center ? "mx-auto" : ""}
            style={accentStyle}
          />
          <p
            className="font-sub italic text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--color-text-secondary, #a0a09a)" }}
          >
            {subtitle}
          </p>
        </>
      )}
    </FadeReveal>
  );
}
