import type { Metadata, Viewport } from "next";
import { Cinzel, Playfair_Display, Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/theme/tokens.css";
import "@/styles/theme/silkroad.css";
import "@/styles/theme/modern-city.css";
import "@/styles/theme/history-culture.css";
import "@/styles/theme/nature-landscape.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import ThemeProvider from "@/components/theme-switch/ThemeProvider";
import AtmosphereLayer from "@/components/cinematic/AtmosphereLayer";

/* ─── Fonts ──────────────────────────────────────────────────────────────── */

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

/* ─── Metadata ───────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: {
    default: "China Compass — Cinematic Travel Guide",
    template: "%s | China Compass",
  },
  description:
    "A cinematic travel guide to China's Silk Road, ancient capitals, modern cities, and breathtaking landscapes — crafted for the discerning global traveller.",
  keywords: ["China travel", "Silk Road", "ancient China", "travel guide", "luxury travel"],
  openGraph: {
    title: "China Compass",
    description: "Experience China through a cinematic lens.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="base"
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body
        className="antialiased font-body"
        style={{
          background: "var(--color-bg, #0a0a0a)",
          color: "var(--color-text-primary, #f5f5f0)",
        }}
      >
        <ThemeProvider>
          {/* Fixed atmosphere layer — renders behind all content via DOM order */}
          <AtmosphereLayer />
          <Navbar />
          <main className="relative min-h-screen" style={{ zIndex: 1 }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
