"use client";

import { motion } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useParallax } from "@/lib/cinematic-hooks";

interface ParallaxContainerProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export default function ParallaxContainer({
  children,
  className = "",
  strength = 50,
}: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useParallax(ref, strength);

  return (
    <div ref={ref} className={`parallax-container ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
