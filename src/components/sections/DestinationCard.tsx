"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CinematicPhoto from "@/components/cinematic/CinematicPhoto";

export interface DestinationCardData {
  name: string;
  location: string;
  tagline: string;
  gradient: string;
  href?: string;
}

interface DestinationCardProps extends DestinationCardData {
  index?: number;
}

/**
 * A destination shown as a small "mounted painting" on rice paper:
 * an ink-wash tile in a paper frame, with an English caption beneath
 * (museum-label style) — legible for inbound travellers.
 */
export default function DestinationCard({
  name,
  location,
  tagline,
  gradient,
  href = "#",
  index = 0,
}: DestinationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link href={href} className="block group">
        {/* paper mount */}
        <div
          className="transition-transform duration-500 group-hover:-translate-y-1.5"
          style={{
            padding: "8px",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            boxShadow: "0 8px 26px -14px rgba(43,38,34,0.45)",
          }}
        >
          {/* ink-wash painting */}
          <CinematicPhoto
            gradient={gradient}
            className="aspect-[5/4] w-full"
            grain
            grainOpacity={0.05}
            vignette
            overlayDark={0}
          />

          {/* caption — ink on paper */}
          <div className="pt-3 pb-1 px-1">
            <p
              className="font-body text-[9px] tracking-[0.28em] uppercase mb-1"
              style={{ color: "var(--color-text-muted)" }}
            >
              {location}
            </p>
            <div className="flex items-center justify-between gap-2">
              <h3
                className="font-display text-base md:text-lg leading-tight"
                style={{ color: "var(--color-text-primary)" }}
              >
                {name}
              </h3>
              <ArrowUpRight
                size={14}
                strokeWidth={1.75}
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "var(--color-accent)" }}
              />
            </div>
            <p
              className="font-sub text-[12px] leading-snug mt-1.5"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {tagline}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
