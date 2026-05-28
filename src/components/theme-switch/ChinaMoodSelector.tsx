"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-context";
import {
  ThemeId,
  THEME_LABELS,
  THEME_COLORS,
  THEME_TAGLINES,
  MOOD_THEMES,
} from "@/lib/theme-config";

export default function ChinaMoodSelector() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme, isTransitioning } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  /* Close on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (id: ThemeId) => {
    if (!isTransitioning) setTheme(id);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative hidden md:block">

      {/* ── Trigger ───────────────────────────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={isTransitioning}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="China Mood — theme selector"
        className="flex items-center gap-2 px-3 py-1.5 rounded-md border transition-all duration-300 disabled:opacity-40"
        style={{
          borderColor: open
            ? "rgba(255,255,255,0.18)"
            : "rgba(255,255,255,0.08)",
          background: open ? "rgba(255,255,255,0.05)" : "transparent",
        }}
      >
        {/* 2×2 colour swatch icon */}
        <span className="grid grid-cols-2 gap-[1.5px] w-[14px] h-[14px]">
          {MOOD_THEMES.map((id) => (
            <span
              key={id}
              className="rounded-[1px]"
              style={{
                background: THEME_COLORS[id],
                opacity: theme === id ? 1 : 0.45,
              }}
            />
          ))}
        </span>
        <span
          className="font-body text-[9px] tracking-[0.22em] uppercase"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          Mood
        </span>
      </button>

      {/* ── Dropdown panel ────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="listbox"
            aria-label="Select China Mood"
            className="absolute right-0 top-full mt-2 w-52 rounded-xl overflow-hidden border"
            style={{
              background: "rgba(8,8,8,0.96)",
              borderColor: "rgba(255,255,255,0.09)",
              backdropFilter: "blur(24px)",
              zIndex: 200,
            }}
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div
              className="px-4 pt-3 pb-2 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <p
                className="font-display text-[9px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                China Mood
              </p>
            </div>

            {/* Options */}
            <div className="p-1.5 space-y-0.5">
              {MOOD_THEMES.map((id) => {
                const active = theme === id;
                return (
                  <button
                    key={id}
                    role="option"
                    aria-selected={active}
                    onClick={() => handleSelect(id)}
                    className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200"
                    style={{
                      background: active
                        ? `rgba(${hexToRgb(THEME_COLORS[id])}, 0.08)`
                        : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active)
                        (e.currentTarget as HTMLElement).style.background =
                          "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      if (!active)
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                    }}
                  >
                    {/* Accent dot */}
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-opacity duration-300"
                      style={{
                        background: THEME_COLORS[id],
                        opacity: active ? 1 : 0.4,
                        boxShadow: active
                          ? `0 0 6px ${THEME_COLORS[id]}60`
                          : "none",
                      }}
                    />

                    {/* Labels */}
                    <div className="flex flex-col gap-[1px] min-w-0">
                      <span
                        className="font-body text-[10px] tracking-widest uppercase leading-none"
                        style={{
                          color: active
                            ? THEME_COLORS[id]
                            : "rgba(255,255,255,0.55)",
                        }}
                      >
                        {THEME_LABELS[id]}
                      </span>
                      <span
                        className="font-sub text-[10px] italic leading-none"
                        style={{ color: "rgba(255,255,255,0.22)" }}
                      >
                        {THEME_TAGLINES[id]}
                      </span>
                    </div>

                    {/* Active bar */}
                    {active && (
                      <span
                        className="ml-auto w-[2px] h-4 rounded-full flex-shrink-0"
                        style={{ background: THEME_COLORS[id] }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer hint */}
            <div
              className="px-4 py-2 border-t"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <p
                className="font-body text-[8px] tracking-wider"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                Switch atmosphere anytime
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Utility: convert #rrggbb to "r,g,b" for rgba() ─────────────────────── */
function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}
