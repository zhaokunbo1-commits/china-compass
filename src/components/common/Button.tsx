"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const sizeMap: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-xs",
  lg: "px-8 py-4 text-sm",
};

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const variantClass =
    variant === "ghost"
      ? "bg-transparent border-transparent opacity-70 hover:opacity-100"
      : variant === "outline"
      ? "bg-transparent border-current"
      : "bg-white/10 border-white/20 backdrop-blur-sm";

  return (
    <motion.button
      type={type}
      className={`btn-base ${sizeMap[size]} ${variantClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ y: -2, opacity: 0.9 }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.button>
  );
}
