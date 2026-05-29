import type { Metadata } from "next";
import type { CSSProperties } from "react";
import CinematicPhoto from "@/components/cinematic/CinematicPhoto";
import FadeReveal from "@/components/cinematic/FadeReveal";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import DestinationCard from "@/components/sections/DestinationCard";
import TravelGuide from "@/components/sections/TravelGuide";
import type { GuideTip } from "@/components/sections/TravelGuide";
import Divider from "@/components/common/Divider";
import FilmGrain from "@/components/cinematic/FilmGrain";

export const metadata: Metadata = {
  title: "Silk Road — China Compass",
  description:
    "Follow the ancient trade routes across Dunhuang, Zhangye, Jiayuguan, and Turpan. Desert dunes, cave frescoes, and rainbow mountains await.",
};

const HERO_GRADIENT = [
  "radial-gradient(ellipse 90% 65% at 42% 78%, rgba(220,140,55,0.72) 0%, transparent 55%)",
  "radial-gradient(ellipse 55% 45% at 88% 22%, rgba(160,80,28,0.50) 0%, transparent 50%)",
  "radial-gradient(ellipse 35% 28% at 12% 35%, rgba(110,55,15,0.32) 0%, transparent 45%)",
  "linear-gradient(165deg, #1C0E00 0%, #3D1C07 18%, #7A370B 38%, #A6551F 55%, #60270A 75%, #140700 100%)",
].join(",");

const DESTINATIONS = [
  {
    name: "Dunhuang",
    location: "Gansu Province",
    tagline: "Singing sand dunes and a thousand years of cave frescoes",
    href: "#dunhuang",
    gradient: [
      "radial-gradient(ellipse 75% 55% at 50% 90%, rgba(220,130,40,0.65) 0%, transparent 55%)",
      "radial-gradient(ellipse 50% 35% at 80% 10%, rgba(180,60,30,0.35) 0%, transparent 50%)",
      "linear-gradient(168deg, #0f0500 0%, #2d1002 30%, #5c2804 55%, #8a4012 72%, #3d1a04 88%, #0c0400 100%)",
    ].join(","),
  },
  {
    name: "Zhangye",
    location: "Gansu Province",
    tagline: "Rainbow geological formations carved by 24 million years of erosion",
    href: "#zhangye",
    gradient: [
      "radial-gradient(ellipse 80% 50% at 40% 80%, rgba(200,80,40,0.55) 0%, transparent 50%)",
      "radial-gradient(ellipse 60% 40% at 75% 30%, rgba(220,160,30,0.40) 0%, transparent 45%)",
      "linear-gradient(160deg, #0a0300 0%, #2a0d05 25%, #5a1e0a 45%, #8a3018 60%, #b05020 75%, #4a1506 88%, #0a0200 100%)",
    ].join(","),
  },
  {
    name: "Jiayuguan",
    location: "Gansu Province",
    tagline: "Where the Great Wall ends and the desert begins — the last fortress of the empire",
    href: "#jiayuguan",
    gradient: [
      "radial-gradient(ellipse 70% 50% at 35% 75%, rgba(160,100,50,0.50) 0%, transparent 55%)",
      "radial-gradient(ellipse 45% 35% at 85% 20%, rgba(80,30,10,0.30) 0%, transparent 50%)",
      "linear-gradient(175deg, #0a0604 0%, #1c0f07 28%, #38200e 50%, #542e14 65%, #2a1608 80%, #090503 100%)",
    ].join(","),
  },
  {
    name: "Turpan",
    location: "Xinjiang Province",
    tagline: "Ancient Uyghur oasis city with vineyards, flaming mountains, and subterranean canals",
    href: "#turpan",
    gradient: [
      "radial-gradient(ellipse 80% 60% at 50% 85%, rgba(180,130,20,0.50) 0%, transparent 55%)",
      "radial-gradient(ellipse 50% 35% at 70% 20%, rgba(60,120,40,0.20) 0%, transparent 45%)",
      "linear-gradient(170deg, #080600 0%, #1a1205 25%, #352510 45%, #503810 60%, #38270a 80%, #080600 100%)",
    ].join(","),
  },
];

const EXPERIENCES = [
  {
    title: "Camel Trek at Singing Sand Dunes",
    description:
      "Ride into Mingsha Mountain at dusk as the setting sun turns the dunes molten copper. The sound of wind across the ridgeline gives the mountain its name.",
  },
  {
    title: "Private Mogao Cave Viewing",
    description:
      "Book a specialist guide for an intimate tour of the Mogao Grottoes. Over 45,000 square metres of Buddhist murals spanning a thousand years of artistry.",
  },
  {
    title: "Rainbow Mountains Sunrise Hike",
    description:
      "Arrive before 7am at Zhangye Danxia to witness the striped geological formations shift through ten shades of ochre, crimson, and violet.",
  },
  {
    title: "Jiayuguan Fort at Twilight",
    description:
      "Walk the ramparts of the last fort before the desert wastes. Stand where exiled poets once wrote their final verses before the unknown west.",
  },
];

const GUIDE_TIPS: GuideTip[] = [
  {
    iconName: "Thermometer",
    title: "Best Season",
    points: [
      "Optimal: mid-September to early November (mild desert temperatures, clear skies)",
      "Spring (April–May) offers wildflowers and lower crowds",
      "Avoid July–August: Dunhuang hits 40°C+ and Turpan regularly exceeds 45°C",
      "The Dunhuang Silk Road Festival runs in late July for cultural events",
    ],
  },
  {
    iconName: "Car",
    title: "Getting Around",
    points: [
      "High-speed rail links Xi'an → Lanzhou → Jiayuguan → Dunhuang",
      "Private driver hire recommended for the full corridor — public buses are sparse",
      "Dunhuang airport (DNH) has flights from Xi'an, Chengdu, and Urumqi",
      "Book drivers 48+ hours ahead in peak season; fix price before departure",
    ],
  },
  {
    iconName: "Camera",
    title: "Photography",
    points: [
      "Drone permits required inside Dunhuang scenic area — obtain from park office",
      "No photography inside the painted cave chambers at Mogao Grottoes",
      "Golden hour at Singing Sand Dunes: arrive 90 minutes before sunset",
      "Zhangye Rainbow Mountains: midday light (10am–2pm) shows most vivid colours",
    ],
  },
  {
    iconName: "Shirt",
    title: "What to Wear",
    points: [
      "Modest dress when visiting Buddhist grottoes and mosques",
      "Lightweight long sleeves protect against sunburn and sandstorms",
      "Bring a scarf or neck gaiter for dust when desert wind picks up",
      "Temperature swings 20°C between day and night — always pack a warm layer",
    ],
  },
  {
    iconName: "Utensils",
    title: "What to Eat",
    points: [
      "Dunhuang: camel hot pot (骆驼火锅), apricot jam pancakes, yellow rice wine",
      "Zhangye: beef noodles (牛肉面), braised pork with flatbread",
      "Turpan: hand-pulled lagman noodles, Hami melon, fresh grape desserts",
      "Jiayuguan: lamb skewers from night market stalls near the fort entrance",
    ],
  },
  {
    iconName: "Compass",
    title: "Practical Tips",
    points: [
      "Book Mogao Grottoes tickets online 7–14 days ahead; daily visitor quota enforced",
      "Download offline maps — mobile data is intermittent in remote desert sections",
      "Carry cash for small stalls and rural guesthouses; cards not always accepted",
      "Respect local Uyghur and Hui Muslim customs; avoid alcohol at religious sites",
    ],
  },
];

const accent = "#c9a050";
const accentStyle: CSSProperties = { color: accent };

export default function SilkRoadPage() {
  return (
    <>
      {/* ── Cinematic Hero ─────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "100svh", maxHeight: "100svh", overflow: "hidden" }}>
        {/* Dark amber base — shows through transparent parts of fresco */}
        <div className="absolute inset-0" style={{ background: HERO_GRADIENT }} />

        {/* Dunhuang fresco — 30% desaturated, -15% brightness, 40s L→R pan */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/dunhuang-fresco.png')",
            backgroundSize: "130% auto",
            backgroundRepeat: "no-repeat",
            filter: "saturate(55%) brightness(62%)",
            animation: "silkroad-pan 40s ease-in-out infinite alternate",
            zIndex: 1,
          }}
        />

        {/* Letterbox bars */}
        <div className="absolute top-0 inset-x-0 h-[clamp(3px,2.2vw,32px)] bg-black z-20 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[clamp(3px,2.2vw,32px)] bg-black z-20 pointer-events-none" />

        {/* Directional gradient overlay — top 0.45 → mid 0.20 → bottom 0.45 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.45) 100%)",
            zIndex: 8,
          }}
        />
        {/* Vignette — 50% reduced */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.31) 100%)",
            zIndex: 8,
          }}
        />
        <FilmGrain opacity={0.038} />

        {/* Desert sand grain — anisotropic high-frequency fractal noise */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75 0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundSize: "300px 300px",
            opacity: 0.07,
            zIndex: 6,
            mixBlendMode: "overlay",
          }}
        />

        {/* Text */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-end pb-[clamp(3rem,8vh,6rem)] px-6 md:px-10"
          style={{ zIndex: 10 }}
        >
          <FadeReveal variant="fadeUp" delay={0.15} className="space-y-5 max-w-3xl w-full text-center">
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Chapter I &nbsp;·&nbsp; Dunhuang · Zhangye · Jiayuguan · Turpan
            </p>

            <h1
              className="font-display leading-none"
              style={{
                fontSize: "clamp(2rem, 5vw, 5rem)",
                color: "#f0e6d3",
                textShadow: "0 4px 48px rgba(0,0,0,0.55)",
              }}
            >
              Silk Road
            </h1>

            <div className="flex items-center justify-center gap-4">
              <Divider width="w-10" style={accentStyle} />
              <span
                className="font-sub italic text-base md:text-lg"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                丝路敦煌
              </span>
            </div>

            <p
              className="font-sub italic text-lg md:text-xl leading-relaxed max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.56)" }}
            >
              &ldquo;Where ancient caravans traded silk for salvation — a corridor of empires,
              faiths, and forgotten tongues.&rdquo;
            </p>
          </FadeReveal>
        </div>
      </div>

      {/* ── Destinations ───────────────────────────────────────────────── */}
      <SectionShell>
        <SectionHeader
          eyebrow="Destinations · 目的地"
          title="Along the Ancient Routes"
          subtitle="Four oasis cities that once connected Rome to Chang'an, each preserving a distinct fragment of the Silk Road story."
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
          title="Moments You Will Remember"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {EXPERIENCES.map((exp, i) => (
            <FadeReveal key={exp.title} variant="fadeUp" delay={i * 0.1}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span
                    className="w-5 h-px"
                    style={{ background: accent, opacity: 0.6 }}
                  />
                  <h3
                    className="font-display text-sm tracking-widest uppercase"
                    style={{ color: "var(--color-text-primary, #f0e6d3)" }}
                  >
                    {exp.title}
                  </h3>
                </div>
                <p
                  className="font-body text-sm leading-relaxed pl-8"
                  style={{ color: "var(--color-text-secondary, #b8a08a)" }}
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
          subtitle="Practical knowledge from those who have walked the desert routes."
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
              style={{ color: "var(--color-text-secondary, #b8a08a)" }}
            >
              &ldquo;The desert does not mourn the caravans that have passed. It simply waits for the next one.&rdquo;
            </p>
          </div>
        </FadeReveal>
      </SectionShell>
    </>
  );
}
