"use client";

import { createContext, useContext } from "react";
import type { ThemeId } from "./theme-config";

export type { ThemeId };
export {
  THEME_ROUTES,
  THEME_LABELS,
  THEME_COLORS,
  THEME_TAGLINES,
  ROUTE_THEME_MAP,
  MOOD_THEMES,
} from "./theme-config";

export interface ThemeContextValue {
  theme: ThemeId;
  /** Triggers 0.8 s dissolve transition then applies the new theme */
  setTheme: (theme: ThemeId) => void;
  isTransitioning: boolean;
}

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "base",
  setTheme: () => {},
  isTransitioning: false,
});

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}
