/* Static theme configuration — no "use client", safe in server components */

export type ThemeId =
  | "base"
  | "silkroad"
  | "modern-city"
  | "history-culture"
  | "nature-landscape";

export const THEME_ROUTES: Record<ThemeId, string> = {
  base:                "/",
  silkroad:            "/silkroad",
  "modern-city":       "/modern-city",
  "history-culture":   "/history-culture",
  "nature-landscape":  "/nature-landscape",
};

export const THEME_LABELS: Record<ThemeId, string> = {
  base:                "Home",
  silkroad:            "Silk Road",
  "modern-city":       "Modern City",
  "history-culture":   "History & Culture",
  "nature-landscape":  "Nature & Landscape",
};

export const ROUTE_THEME_MAP: Record<string, ThemeId> = {
  "/silkroad":          "silkroad",
  "/modern-city":       "modern-city",
  "/history-culture":   "history-culture",
  "/nature-landscape":  "nature-landscape",
};

/** Primary accent color per theme — used for swatches, active indicators */
export const THEME_COLORS: Record<ThemeId, string> = {
  base:                "#c8a96e",
  silkroad:            "#c9a050",
  "modern-city":       "#4db8c9",
  "history-culture":   "#b89530",
  "nature-landscape":  "#68a888",
};

/** Chinese subtitle per theme — shown in ChinaMoodSelector */
export const THEME_TAGLINES: Record<ThemeId, string> = {
  base:                "",
  silkroad:            "丝路敦煌",
  "modern-city":       "未来都市",
  "history-culture":   "千年文脉",
  "nature-landscape":  "山河秘境",
};

/** Ordered list of selectable moods (excludes "base") */
export const MOOD_THEMES: ThemeId[] = [
  "silkroad",
  "modern-city",
  "history-culture",
  "nature-landscape",
];
