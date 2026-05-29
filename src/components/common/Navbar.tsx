"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { THEME_LABELS, THEME_ROUTES, ThemeId } from "@/lib/theme-config";
import { useTheme } from "@/lib/theme-context";
import ChinaMoodSelector from "@/components/theme-switch/ChinaMoodSelector";

const NAV_THEMES: ThemeId[] = [
  "silkroad",
  "modern-city",
  "history-culture",
  "nature-landscape",
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  const { scrollY } = useScroll();
  /* Navbar background: fully transparent at top → theme-matched on scroll */
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: useTransform(
            bgOpacity,
            (v) => `rgba(0,0,0,${v * 0.88})`
          ),
        }}
      >
        <div
          className="border-b transition-colors duration-500"
          style={{ borderColor: "var(--color-border, rgba(255,255,255,0.08))" }}
        >
          {/* ── backdrop blur layer ── */}
          <motion.div
            className="absolute inset-0 backdrop-blur-md"
            style={{ opacity: bgOpacity }}
          />

          <div className="relative max-w-screen-xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between gap-6">

            {/* Wordmark */}
            <Link
              href="/"
              className="font-display text-sm tracking-[0.2em] uppercase transition-colors duration-500 flex-shrink-0"
              style={{ color: "var(--color-text-primary, #f5f5f0)" }}
            >
              China Compass
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
              {NAV_THEMES.map((id) => {
                const route = THEME_ROUTES[id];
                const active = pathname === route || theme === id;
                return (
                  <Link
                    key={id}
                    href={route}
                    className="font-body text-[10px] tracking-widest uppercase transition-all duration-300 whitespace-nowrap"
                    style={{
                      color: active
                        ? "var(--color-accent, #c8a96e)"
                        : "rgba(255,255,255,0.45)",
                      opacity: active ? 1 : undefined,
                    }}
                    onMouseEnter={(e) =>
                      !active &&
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.75)")
                    }
                    onMouseLeave={(e) =>
                      !active &&
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.45)")
                    }
                  >
                    {THEME_LABELS[id]}
                  </Link>
                );
              })}
            </nav>

            {/* Right side: ChinaMoodSelector + mobile toggle */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <ChinaMoodSelector />

              {/* Mobile Toggle */}
              <button
                className="md:hidden transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.7)" }}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* ── Mobile Menu ──────────────────────────────────────────────────── */}
      {menuOpen && (
        <motion.nav
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-xl"
          style={{ background: "rgba(0,0,0,0.94)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/"
            className="font-display text-xs tracking-[0.25em] uppercase transition-colors"
            style={{ color: "rgba(255,255,255,0.35)" }}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          {NAV_THEMES.map((id) => (
            <Link
              key={id}
              href={THEME_ROUTES[id]}
              className="font-display text-2xl tracking-widest uppercase transition-colors"
              style={{
                color:
                  theme === id
                    ? "var(--color-accent, #c8a96e)"
                    : "rgba(255,255,255,0.75)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {THEME_LABELS[id]}
            </Link>
          ))}
        </motion.nav>
      )}
    </>
  );
}
