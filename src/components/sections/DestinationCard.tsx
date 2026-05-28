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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={href} className="block group">
        <CinematicPhoto
          gradient={gradient}
          className="aspect-[3/4] w-full rounded-xl"
          grain
          grainOpacity={0.05}
          vignette
          overlayDark={0.15}
        >
          {/* Bottom text layer */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-5"
            style={{ zIndex: 6 }}
          >
            {/* Gradient text bg */}
            <div
              className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)",
              }}
            />

            <div className="relative">
              <p
                className="font-body text-[9px] tracking-[0.3em] uppercase mb-1.5"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                {location}
              </p>

              <h3
                className="font-display text-lg md:text-xl leading-tight"
                style={{ color: "#f2ece2" }}
              >
                {name}
              </h3>

              {/* Hover reveal */}
              <p
                className="font-body text-[11px] leading-relaxed mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{ color: "rgba(255,255,255,0.55)" }}
              >
                {tagline}
              </p>

              <div
                className="flex items-center gap-1.5 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ color: "var(--color-accent, #c8a96e)" }}
              >
                <span className="font-body text-[9px] tracking-[0.25em] uppercase">
                  Discover
                </span>
                <ArrowUpRight size={11} strokeWidth={2} />
              </div>
            </div>
          </div>
        </CinematicPhoto>
      </Link>
    </motion.div>
  );
}
