import Link from "next/link";
import { THEME_LABELS, THEME_ROUTES, ThemeId } from "@/lib/theme-config";

const THEMES: ThemeId[] = ["silkroad", "modern-city", "history-culture", "nature-landscape"];

export default function Footer() {
  return (
    <footer
      className="border-t py-12 px-6 md:px-10"
      style={{
        borderColor: "var(--color-border, rgba(255,255,255,0.08))",
        background: "var(--color-surface, #111)",
      }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="space-y-3">
          <p className="font-display text-sm tracking-[0.2em] uppercase text-white/80">
            China Compass
          </p>
          <p className="font-body text-xs text-white/30 leading-relaxed max-w-xs">
            A cinematic guide to the People&apos;s Republic of China — crafted for the discerning global traveller.
          </p>
        </div>

        {/* Destinations */}
        <div className="space-y-3">
          <p className="font-body text-xs tracking-widest uppercase text-white/30">
            Destinations
          </p>
          <ul className="space-y-2">
            {THEMES.map((id) => (
              <li key={id}>
                <Link
                  href={THEME_ROUTES[id]}
                  className="font-body text-xs text-white/50 hover:text-white/80 transition-colors uppercase tracking-wider"
                >
                  {THEME_LABELS[id]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-3">
          <p className="font-body text-xs tracking-widest uppercase text-white/30">
            Legal
          </p>
          <ul className="space-y-2">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <li key={item}>
                <span className="font-body text-xs text-white/30 cursor-default uppercase tracking-wider">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div
        className="max-w-screen-xl mx-auto mt-10 pt-6 border-t flex justify-between items-center"
        style={{ borderColor: "var(--color-border, rgba(255,255,255,0.06))" }}
      >
        <p className="font-body text-xs text-white/20">
          © {new Date().getFullYear()} China Compass. All rights reserved.
        </p>
        <p className="font-body text-xs text-white/15 tracking-wider uppercase">
          Cinematic Edition
        </p>
      </div>
    </footer>
  );
}
