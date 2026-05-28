import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import HeroSlideshow from "@/components/cinematic/HeroSlideshow";
import CinematicPhoto from "@/components/cinematic/CinematicPhoto";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import FadeReveal from "@/components/cinematic/FadeReveal";
import Divider from "@/components/common/Divider";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "China Compass — Four Faces of a Civilisation",
  description:
    "A cinematic travel guide to China's four great journeys: the Silk Road, modern cities, ancient history, and wild nature.",
};

const CHAPTERS = [
  {
    id: "silkroad",
    chapter: "Chapter I",
    title: "Silk Road",
    subtitle: "丝路敦煌",
    tagline: "Where ancient caravans traded silk for salvation",
    href: "/silkroad",
    accent: "#c9a050",
    gradient: [
      "radial-gradient(ellipse 90% 65% at 42% 78%, rgba(200,118,38,0.58) 0%, transparent 55%)",
      "radial-gradient(ellipse 55% 45% at 88% 22%, rgba(135,58,14,0.38) 0%, transparent 50%)",
      "linear-gradient(165deg, #120900 0%, #2e1405 18%, #5c2808 38%, #884018 55%, #481d07 75%, #0e0500 100%)",
    ].join(","),
  },
  {
    id: "modern-city",
    chapter: "Chapter II",
    title: "Modern City",
    subtitle: "未来都市",
    tagline: "Glass towers reaching through tomorrow's sky",
    href: "/modern-city",
    accent: "#4db8c9",
    gradient: [
      "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(18,58,118,0.68) 0%, transparent 50%)",
      "radial-gradient(ellipse 40% 28% at 76% 33%, rgba(58,178,222,0.13) 0%, transparent 50%)",
      "linear-gradient(180deg, #030810 0%, #060d1e 28%, #091630 54%, #050c1a 75%, #020609 100%)",
    ].join(","),
  },
  {
    id: "history-culture",
    chapter: "Chapter III",
    title: "History & Culture",
    subtitle: "千年文脉",
    tagline: "Five thousand years carved in stone and silence",
    href: "/history-culture",
    accent: "#b89530",
    gradient: [
      "radial-gradient(ellipse 72% 52% at 38% 63%, rgba(162,93,21,0.50) 0%, transparent 54%)",
      "radial-gradient(ellipse 50% 40% at 84% 29%, rgba(122,43,26,0.30) 0%, transparent 50%)",
      "linear-gradient(172deg, #0d0800 0%, #231308 22%, #462410 40%, #663a18 58%, #2d1609 78%, #0c0602 100%)",
    ].join(","),
  },
  {
    id: "nature-landscape",
    chapter: "Chapter IV",
    title: "Nature & Landscape",
    subtitle: "山河秘境",
    tagline: "Where the earth sculpted cathedrals from mist and stone",
    href: "/nature-landscape",
    accent: "#68a888",
    gradient: [
      "radial-gradient(ellipse 80% 58% at 28% 66%, rgba(38,98,58,0.50) 0%, transparent 55%)",
      "radial-gradient(ellipse 60% 40% at 72% 20%, rgba(58,128,88,0.24) 0%, transparent 50%)",
      "linear-gradient(175deg, #050d07 0%, #0c1e11 25%, #15301c 48%, #1c3c24 60%, #0d1c11 78%, #040a06 100%)",
    ].join(","),
  },
];

const STATS = [
  { value: "5,000", label: "Years of Written History" },
  { value: "56", label: "Ethnic Groups" },
  { value: "33", label: "UNESCO World Heritage Sites" },
  { value: "9.6M km²", label: "Of Diverse Terrain" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Slideshow ──────────────────────────────────────────────── */}
      <HeroSlideshow />

      {/* ── Four Chapters Grid ─────────────────────────────────────────── */}
      <SectionShell>
        <SectionHeader
          eyebrow="Four Journeys · 四大旅程"
          title="Choose Your China"
          subtitle="Every traveller finds a different China. Which story calls to you?"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {CHAPTERS.map((ch, i) => (
            <FadeReveal key={ch.id} variant="fadeUp" delay={i * 0.1}>
              <ChapterCard chapter={ch} />
            </FadeReveal>
          ))}
        </div>
      </SectionShell>

      {/* ── Stats Strip ────────────────────────────────────────────────── */}
      <div
        className="border-y"
        style={{
          borderColor: "rgba(200,169,110,0.12)",
          background: "rgba(200,169,110,0.03)",
        }}
      >
        <div className="mx-auto max-w-screen-xl px-6 md:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {STATS.map((s, i) => (
              <FadeReveal key={s.label} variant="fadeUp" delay={i * 0.08}>
                <p
                  className="font-display text-3xl md:text-4xl lg:text-5xl leading-none mb-2"
                  style={{ color: "var(--color-accent, #c8a96e)" }}
                >
                  {s.value}
                </p>
                <p
                  className="font-body text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: "var(--color-text-muted, #5a5a55)" }}
                >
                  {s.label}
                </p>
              </FadeReveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── Editorial Quote ─────────────────────────────────────────────── */}
      <SectionShell narrow>
        <FadeReveal variant="fadeIn" delay={0.1}>
          <div className="text-center space-y-8 py-8">
            <Divider
              className="mx-auto"
              width="w-8"
              style={{ color: "var(--color-accent, #c8a96e)" }}
            />
            <blockquote
              className="font-sub italic text-xl md:text-2xl lg:text-3xl leading-relaxed"
              style={{ color: "var(--color-text-secondary, #a0a09a)" }}
            >
              &ldquo;To travel in China is to read civilisation in three dimensions — where ancient
              ritual and electric tomorrow share the same street corner.&rdquo;
            </blockquote>
            <p
              className="font-body text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "var(--color-text-muted, #5a5a55)" }}
            >
              China Compass · Editorial
            </p>
            <Divider
              className="mx-auto"
              width="w-8"
              style={{ color: "var(--color-accent, #c8a96e)" }}
            />
          </div>
        </FadeReveal>
      </SectionShell>
    </>
  );
}

function ChapterCard({ chapter }: { chapter: (typeof CHAPTERS)[number] }) {
  const accentStyle: CSSProperties = { color: chapter.accent };

  return (
    <Link href={chapter.href} className="block group">
      <CinematicPhoto
        gradient={chapter.gradient}
        className="aspect-[16/10] w-full rounded-xl"
        grain
        grainOpacity={0.045}
        vignette
        overlayDark={0.1}
      >
        <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ zIndex: 6 }}>
          {/* Text legibility gradient */}
          <div
            className="absolute inset-x-0 bottom-0 h-3/4 pointer-events-none rounded-b-xl"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)",
            }}
          />

          <div className="relative space-y-2">
            <p
              className="font-body text-[9px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {chapter.chapter}
            </p>

            <div className="flex items-end justify-between gap-4">
              <div>
                <h3
                  className="font-display text-2xl md:text-3xl leading-tight"
                  style={{ color: "#f2ece2" }}
                >
                  {chapter.title}
                </h3>
                <span
                  className="font-sub italic text-sm"
                  style={{ color: "rgba(255,255,255,0.42)" }}
                >
                  {chapter.subtitle}
                </span>
              </div>

              <div
                className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                style={accentStyle}
              >
                <span className="font-body text-[9px] tracking-[0.25em] uppercase">Explore</span>
                <ArrowUpRight size={12} strokeWidth={2} />
              </div>
            </div>

            <p
              className="font-body text-xs leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-1"
              style={{ color: "rgba(255,255,255,0.52)" }}
            >
              {chapter.tagline}
            </p>
          </div>
        </div>
      </CinematicPhoto>
    </Link>
  );
}
