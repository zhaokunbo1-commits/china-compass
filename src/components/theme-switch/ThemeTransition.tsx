"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ThemeTransitionProps {
  isTransitioning: boolean;
  fadeInMs?: number;
}

/**
 * Full-screen dissolve overlay.
 * Fades IN when isTransitioning=true (covering the theme change),
 * then fades OUT when isTransitioning=false.
 *
 * Uses a radial gradient so the centre "opens" first — giving the
 * cinematic 光影蒙版溶解 (light-shadow mask dissolve) feel.
 */
export default function ThemeTransition({
  isTransitioning,
  fadeInMs = 320,
}: ThemeTransitionProps) {
  const fadeSecs = fadeInMs / 1000;

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="theme-overlay"
          aria-hidden="true"
          className="fixed inset-0 pointer-events-none"
          style={{
            zIndex: 9998,
            background:
              "radial-gradient(ellipse at 50% 45%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.96) 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: fadeSecs, ease: "easeIn" },
          }}
          exit={{
            opacity: 0,
            transition: { duration: fadeSecs + 0.1, ease: "easeOut" },
          }}
        />
      )}
    </AnimatePresence>
  );
}
