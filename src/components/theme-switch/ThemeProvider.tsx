"use client";

import { ReactNode, useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { ThemeContext } from "@/lib/theme-context";
import { ROUTE_THEME_MAP, ThemeId } from "@/lib/theme-config";
import ThemeTransition from "./ThemeTransition";

/* Transition timing constants (ms) */
const FADE_IN_MS  = 320; // overlay fade-in duration
const MIDPOINT_MS = 380; // when theme actually flips (overlay fully opaque)
const FADE_OUT_MS = 800; // when overlay starts fading out (= total hold time)

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const [theme, setThemeState] = useState<ThemeId>("base");
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* Refs to avoid stale closures in timeouts */
  const themeRef        = useRef<ThemeId>("base");
  const transitioningRef = useRef(false);

  /** Apply theme to DOM without any transition */
  const applyTheme = useCallback((t: ThemeId) => {
    themeRef.current = t;
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);

  /** Dissolve-transition to a new theme */
  const switchTheme = useCallback((next: ThemeId) => {
    if (next === themeRef.current || transitioningRef.current) return;

    transitioningRef.current = true;
    setIsTransitioning(true);

    const midTimer = setTimeout(() => {
      applyTheme(next);
    }, MIDPOINT_MS);

    const endTimer = setTimeout(() => {
      setIsTransitioning(false);
      transitioningRef.current = false;
    }, FADE_OUT_MS);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(endTimer);
    };
  }, [applyTheme]);

  /* Auto-switch on route change */
  const isFirstRender = useRef(true);
  useEffect(() => {
    const resolved: ThemeId = ROUTE_THEME_MAP[pathname] ?? "base";
    if (isFirstRender.current) {
      isFirstRender.current = false;
      applyTheme(resolved);
      return;
    }
    switchTheme(resolved);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: switchTheme, isTransitioning }}>
      {children}
      <ThemeTransition isTransitioning={isTransitioning} fadeInMs={FADE_IN_MS} />
    </ThemeContext.Provider>
  );
}
