"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import {
  Compass, Thermometer, Camera, Utensils, Car, Shirt,
  Wifi, CreditCard, Train, Clock, Globe, Moon,
  BookOpen, Users, Ticket, ShieldAlert, Sunrise,
  Mountain, Wind, Map, Heart, CloudRain, Footprints,
} from "lucide-react";
import Divider from "@/components/common/Divider";

const ICON_MAP = {
  Compass, Thermometer, Camera, Utensils, Car, Shirt,
  Wifi, CreditCard, Train, Clock, Globe, Moon,
  BookOpen, Users, Ticket, ShieldAlert, Sunrise,
  Mountain, Wind, Map, Heart, CloudRain, Footprints,
} as const;

export type IconName = keyof typeof ICON_MAP;

export interface GuideTip {
  iconName: IconName;
  title: string;
  points: string[];
}

interface TravelGuideProps {
  tips: GuideTip[];
  columns?: 2 | 3 | 4;
}

export default function TravelGuide({ tips, columns = 3 }: TravelGuideProps) {
  const gridClass =
    columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : "grid-cols-1 md:grid-cols-3";

  const accentStyle: CSSProperties = { color: "var(--color-accent, #c8a96e)" };
  const accentBg: CSSProperties = {
    background: "var(--color-accent-dim, rgba(200,169,110,0.12))",
  };

  return (
    <div className={`grid ${gridClass} gap-8`}>
      {tips.map((tip, i) => {
        const Icon = ICON_MAP[tip.iconName];
        return (
          <motion.div
            key={tip.title}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.1, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Icon badge */}
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
              style={accentBg}
            >
              <Icon size={17} style={accentStyle} strokeWidth={1.5} />
            </div>

            {/* Divider + heading */}
            <div className="space-y-2">
              <Divider width="w-6" style={accentStyle} />
              <h4
                className="font-display text-xs tracking-widest uppercase"
                style={{ color: "var(--color-text-primary, #f5f5f0)" }}
              >
                {tip.title}
              </h4>
            </div>

            {/* Bullet points */}
            <ul className="space-y-2.5">
              {tip.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2.5">
                  <span
                    className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "var(--color-accent, #c8a96e)", opacity: 0.7 }}
                  />
                  <span
                    className="font-body text-xs leading-relaxed"
                    style={{ color: "var(--color-text-secondary, #a0a09a)" }}
                  >
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        );
      })}
    </div>
  );
}
