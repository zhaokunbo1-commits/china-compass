"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, RefObject } from "react";

/* ─── Shared Animation Variants ────────────────────────────────────────────── */

export const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const slideRight = {
  hidden:  { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const maskReveal = {
  hidden:  { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

/* ─── Parallax Hook ─────────────────────────────────────────────────────────── */

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  strength: number = 60
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return useTransform(scrollYProgress, [0, 1], [-strength, strength]);
}

/* ─── Viewport Entry Hook ───────────────────────────────────────────────────── */

export function useScrollRevealRef() {
  return useRef<HTMLDivElement>(null);
}

/* ─── Scale on Scroll Hook ──────────────────────────────────────────────────── */

export function useScrollScale(
  ref: RefObject<HTMLElement | null>,
  from: number = 1.08,
  to: number = 1
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  return useTransform(scrollYProgress, [0, 1], [from, to]);
}

/* ─── Opacity on Scroll Hook ────────────────────────────────────────────────── */

export function useScrollOpacity(
  ref: RefObject<HTMLElement | null>
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 30%"],
  });
  return useTransform(scrollYProgress, [0, 1], [0, 1]);
}

/* ─── Transition Presets ────────────────────────────────────────────────────── */

export const transitions = {
  fast:   { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  base:   { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  slow:   { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const },
  spring: { type: "spring" as const, stiffness: 280, damping: 30 },
} as const;
