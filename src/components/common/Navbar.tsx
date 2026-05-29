"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { THEME_LABELS, THEME_ROUTES, ThemeId } from "@/lib/theme-config";
import { useTheme } from "@/lib/theme-context";

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

  /* Homepage uses the centred 4-card grid as primary navigation,
     so the inline theme links are hidden there. */
  const isHome = pathname === "/";

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "transparent" }}
      >
        <div>
          <div className="relative w-full px-5 md:px-10 h-[60px] md:h-20 flex items-center justify-between gap-6">

            {/* Wordmark */}
            <Link
              href="/"
              className="font-display text-base md:text-sm tracking-[0.2em] uppercase transition-colors duration-500 flex-shrink-0"
              style={{ color: "var(--color-text-primary, #f5f5f0)" }}
            >
              China Compass
            </Link>

            {/* Desktop Nav — hidden on the homepage (cards are the nav there) */}
            <nav className={`${isHome ? "hidden" : "hidden md:flex"} items-center gap-6 flex-1 justify-center`}>
              {NAV_THEMES.map((id) => {
                const route = THEME_ROUTES[id];
                const active = pathname === route || theme === id;
                return (
                  <Link
                    key={id}
                    href={route}
                    className="font-body text-sm tracking-[0.5px] uppercase transition-all duration-300 whitespace-nowrap"
                    style={{
                      color: active
                        ? "var(--color-accent)"
                        : "var(--color-text-muted)",
                      opacity: active ? 1 : undefined,
                    }}
                    onMouseEnter={(e) =>
                      !active &&
                      ((e.target as HTMLElement).style.color =
                        "var(--color-text-primary)")
                    }
                    onMouseLeave={(e) =>
                      !active &&
                      ((e.target as HTMLElement).style.color =
                        "var(--color-text-muted)")
                    }
                  >
                    {THEME_LABELS[id]}
                  </Link>
                );
              })}
            </nav>

            {/* Right side: mobile toggle */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Mobile Toggle — 48×48 touch target */}
              <button
                className="md:hidden transition-colors duration-300 flex items-center justify-center min-h-[48px] min-w-[48px] -mr-3"
                style={{ color: "var(--color-text-primary)" }}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
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
