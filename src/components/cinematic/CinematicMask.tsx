"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import { maskReveal } from "@/lib/cinematic-hooks";

interface CinematicMaskProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function CinematicMask({
  children,
  className = "",
  delay = 0,
}: CinematicMaskProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={maskReveal}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
