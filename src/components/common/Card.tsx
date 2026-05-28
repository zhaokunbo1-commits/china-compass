"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <motion.div
      className={`card-base ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
