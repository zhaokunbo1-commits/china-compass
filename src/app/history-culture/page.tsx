import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import FadeReveal from "@/components/cinematic/FadeReveal";
import FilmGrain from "@/components/cinematic/FilmGrain";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import DestinationCard from "@/components/sections/DestinationCard";
import TravelGuide from "@/components/sections/TravelGuide";
import type { GuideTip } from "@/components/sections/TravelGuide";
import Divider from "@/components/common/Divider";

export const metadata: Metadata = {
  title: "History & Culture — China Compass",
  description:
    "Five thousand years in Beijing, Xi'an, Pingyao, and Datong: imperial palaces, terracotta warriors, ancient walled towns, and Buddhist cave art.",
};

const HERO_GRADIENT = [
  "radial-gradient(ellipse 72% 52% at 38% 63%, rgba(195,115,35,0.65) 0%, transparent 54%)",
  "radial-gradient(ellipse 50% 40% at 84% 29%, rgba(150,60,35,0.42) 0%, transparent 50%)",
  "radial-gradient(ellipse 30% 24% at 10% 40%, rgba(115,45,18,0.30) 0%, transparent 44%)",
  "linear-gradient(172deg, #150E00 0%, #2E1A0A 22%, #5C3015 40%, #82491E 58%, #3A1E0C 78%, #120804 100%)",
].join(",");

const DESTINATIONS = [
  {
    name: "Beijing",
    location: "Beijing Municipality",
    tagline: "Six hundred years inside the Forbidden City — the world's largest palace complex still speaks in imperial silence",
    href: "#beijing",
    gradient: [
      "radial-gradient(ellipse 80% 55% at 42% 75%, rgba(160,50,20,0.55) 0%, transparent 55%)",
      "radial-gradient(ellipse 55% 40% at 82% 22%, rgba(120,80,15,0.30) 0%, transparent 50%)",
      "linear-gradient(168deg, #0c0400 0%, #200a02 28%, #420f05 48%, #60200a 62%, #3a1006 78%, #0c0300 100%)",
    ].join(","),
  },
  {
    name: "Xi'an",
    location: "Shaanxi Province",
    tagline: "The first capital of a united China guards its greatest secret: 8,000 terracotta soldiers standing watch for eternity",
    href: "#xian",
    gradient: [
      "radial-gradient(ellipse 75% 52% at 45% 78%, rgba(150,80,30,0.50) 0%, transparent 54%)",
      "radial-gradient(ellipse 50% 35% at 80% 25%, rgba(110,50,15,0.28) 0%, transparent 48%)",
      "linear-gradient(172deg, #0b0600 0%, #1e0e03 25%, #3c1c08 45%, #582c10 60%, #361808 78%, #0b0500 100%)",
    ].join(","),
  },
  {
    name: "Pingyao",
    location: "Shanxi Province",
    tagline: "China's best-preserved ancient walled city — cobblestone lanes, Ming-dynasty courtyards, and no skyscrapers in sight",
    href: "#pingyao",
    gradient: [
      "radial-gradient(ellipse 70% 50% at 38% 72%, rgba(130,85,40,0.45) 0%, transparent 54%)",
      "radial-gradient(ellipse 45% 32% at 78% 22%, rgba(90,50,20,0.28) 0%, transparent 48%)",
      "linear-gradient(175deg, #0a0700 0%, #1a1006 28%, #331f0c 48%, #4a2c12 62%, #2c1a08 78%, #0a0600 100%)",
    ].join(","),
  },
  {
    name: "Datong",
    location: "Shanxi Province",
    tagline: "The Yungang Grottoes contain 51,000 carved Buddhas — China's greatest collection of Northern Wei cave sculpture",
    href: "#datong",
    gradient: [
      "radial-gradient(ellipse 75% 52% at 40% 70%, rgba(120,70,30,0.45) 0%, transparent 54%)",
      "radial-gradient(ellipse 50% 35% at 82% 28%, rgba(85,55,25,0.25) 0%, transparent 48%)",
      "linear-gradient(170deg, #090600 0%, #170e05 26%, #2e1c0a 46%, #451e0e 60%, #2a140a 78%, #090600 100%)",
    ].join(","),
  },
];

const EXPERIENCES = [
  {
    title: "Private Dawn at the Forbidden City",
    description:
      "Arrange an early-access slot before 8:30am when the courtyards are empty. The Hall of Supreme Harmony at sunrise, light slanting through the gate — this is history without crowd noise.",
  },
  {
    title: "Terracotta Warriors Excavation Tour",
    description:
      "Beyond the main pits, join an archaeologist-led tour of the ongoing excavation site. New soldiers surface every season; some still show traces of original colour.",
  },
  {
    title: "Pingyao by Lantern Light",
    description:
      "Rent a bicycle and ride the 6-kilometre city wall circuit at dusk. Below, the ancient streets fill with red lanterns and the smoke of incense from open-front temples.",
  },
  {
    title: "Yungang Grottoes at Dusk",
    description:
      "The last light of afternoon enters Cave 20 at a low angle and illuminates the 13-metre seated Buddha as though lit from within. Arrive 90 minutes before close.",
  },
];

const GUIDE_TIPS: GuideTip[] = [
  {
    iconName: "Sunrise",
    title: "Best Season",
    points: [
      "Spring (April–May): cherry blossoms in Beijing, mild temperatures, manageable crowds",
      "Autumn (September–October): golden light, clear skies, harvest festivals in rural Shanxi",
      "Avoid Chinese National Day (Oct 1–7): all major sites reach maximum capacity",
      "Winter visits reward patience — snow on the Forbidden City rooftops is extraordinary",
    ],
  },
  {
    iconName: "BookOpen",
    title: "Temple Etiquette",
    points: [
      "Remove hats when entering Buddhist halls and Confucian temples",
      "Photography is prohibited inside most cave chambers at Yungang and Mogao",
      "Dress modestly — cover shoulders and knees at active religious sites",
      "Never point your feet toward altar statues or sacred objects when seated",
    ],
  },
  {
    iconName: "Ticket",
    title: "Booking Ahead",
    points: [
      "Forbidden City: timed tickets sell out 7–14 days ahead — book via official website",
      "Terracotta Warriors: no quota system, but early arrival (8am) avoids coach groups",
      "Pingyao city wall ticket covers all major historic buildings inside the old town",
      "Yungang Grottoes: no advance booking needed, but afternoon visits are less crowded",
    ],
  },
  {
    iconName: "Users",
    title: "Guided Tours",
    points: [
      "English-speaking guides add crucial context at Terracotta Warriors and Forbidden City",
      "Negotiate guide fees before starting; agree on duration and sites covered",
      "Avoid touts near ticket gates — book certified guides through hotel concierge",
      "Pingyao: self-guided audio tour app (available in English) covers 22 historic sites",
    ],
  },
  {
    iconName: "Utensils",
    title: "What to Eat",
    points: [
      "Beijing: Peking duck (全聚德 or 大董), zhajiangmian noodles, jianbing street crepes",
      "Xi'an: Biangbiang noodles (宽面), mutton paomo soup, persimmon cakes from the Muslim Quarter",
      "Pingyao: cat-ear pasta (猫耳朵), aged aged aged aged aged aged aged aged beef shanks, walnut cake",
      "Datong: pull-apart knife-shaved noodles (刀削面) — watch the cook throw the dough",
    ],
  },
  {
    iconName: "ShieldAlert",
    title: "Stay Safe",
    points: [
      "Crowded tourist sites attract pickpockets — use inner zip pockets or money belts",
      "Beware 'art student' tea ceremony scams near major Beijing landmarks",
      "Tap water is not safe to drink in any of these cities; use bottled or filtered water",
      "Register with your country's embassy for stays over 30 days",
    ],
  },
];

const accent = "#b89530";
const accentStyle: CSSProperties = { color: accent };

export default function HistoryCulturePage() {
  return (
    <>
      {/* ── Cinematic Hero ─────────────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ width: "100vw", minHeight: "100vh", position: "relative" }}>

        {/* Pavilion landscape — sepia(0.15), breathing brightness, right-anchored */}
        <div
          aria-hidden="true"
          className="hero-bg absolute inset-0"
          style={{ animation: "history-breathe 12s ease-in-out infinite", zIndex: 1 }}
        >
          <Image
            src="/history-pavilion.png"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover"
            style={{ objectPosition: "center right" }}
          />
        </div>

        {/* Soft vignette — edges only, keeps centre bright */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.25) 100%)",
            zIndex: 8,
          }}
        />
        {/* Title legibility gradient — bottom only */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 60%)",
            zIndex: 8,
          }}
        />
        <FilmGrain opacity={0.038} />

        <div
          className="hero-stage absolute inset-0 flex flex-col items-center justify-end pb-[clamp(3rem,8vh,6rem)] px-6 md:px-10"
          style={{ zIndex: 10 }}
        >
          <FadeReveal variant="fadeUp" delay={0.15} className="hero-copy space-y-5 max-w-3xl w-full text-center">
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Chapter III &nbsp;·&nbsp; Beijing · Xi&apos;an · Pingyao · Datong
            </p>

            <h1
              className="hero-title font-display leading-none"
              style={{
                color: "#f4ece0",
                textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 4px 48px rgba(0,0,0,0.55)",
              }}
            >
              History &amp; Culture
            </h1>

            <div className="flex items-center justify-center gap-4">
              <Divider width="w-10" style={accentStyle} />
              <span
                className="hero-subtitle font-sub italic"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                千年文脉
              </span>
            </div>

            <p
              className="font-sub italic text-lg md:text-xl leading-relaxed max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.56)" }}
            >
              &ldquo;Five thousand years carved in stone and silence — the dynasties that shaped
              half the world still speak here.&rdquo;
            </p>
          </FadeReveal>
        </div>
      </div>

      {/* ── Destinations ───────────────────────────────────────────────── */}
      <SectionShell>
        <SectionHeader
          eyebrow="Destinations · 目的地"
          title="Where Dynasties Still Live"
          subtitle="Four cities where China's 5,000-year civilisation is not behind glass — it is underfoot, overhead, and in the air."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={dest.name} {...dest} index={i} />
          ))}
        </div>
      </SectionShell>

      {/* ── Signature Experiences ──────────────────────────────────────── */}
      <SectionShell
        className="border-t"
        style={{ borderColor: `${accent}18` } as CSSProperties}
      >
        <SectionHeader
          eyebrow="Experiences · 体验"
          title="Touch Five Thousand Years"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {EXPERIENCES.map((exp, i) => (
            <FadeReveal key={exp.title} variant="fadeUp" delay={i * 0.1}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-px" style={{ background: accent, opacity: 0.6 }} />
                  <h3
                    className="font-display text-sm tracking-widest uppercase"
                    style={{ color: "var(--color-text-primary, #f4ece0)" }}
                  >
                    {exp.title}
                  </h3>
                </div>
                <p
                  className="font-body text-sm leading-relaxed pl-8"
                  style={{ color: "var(--color-text-secondary, #c0a878)" }}
                >
                  {exp.description}
                </p>
              </div>
            </FadeReveal>
          ))}
        </div>
      </SectionShell>

      {/* ── Travel Guide ───────────────────────────────────────────────── */}
      <SectionShell
        className="border-t"
        style={{ borderColor: `${accent}18` } as CSSProperties}
      >
        <SectionHeader
          eyebrow="Travel Guide · 旅行指南"
          title="Before You Go"
          subtitle="The knowledge that turns sightseeing into understanding."
        />
        <TravelGuide tips={GUIDE_TIPS} columns={3} />
      </SectionShell>

      {/* ── Closing Quote ──────────────────────────────────────────────── */}
      <SectionShell narrow className="border-t" style={{ borderColor: `${accent}18` } as CSSProperties}>
        <FadeReveal variant="fadeIn">
          <div className="text-center space-y-6 py-6">
            <Divider className="mx-auto" width="w-8" style={accentStyle} />
            <p
              className="font-sub italic text-lg md:text-xl leading-relaxed"
              style={{ color: "var(--color-text-secondary, #c0a878)" }}
            >
              &ldquo;History is not a museum here. It is the street you walk on, the wall you touch, the air thick with the weight of every emperor who once breathed it.&rdquo;
            </p>
          </div>
        </FadeReveal>
      </SectionShell>
    </>
  );
}
