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
  title: "Nature & Landscape — China Compass",
  description:
    "Zhangjiajie's floating mountains, Guilin's karst rivers, Tibet's plateau monasteries, and Xinjiang's endless steppe — China's wild earth in four chapters.",
};

const HERO_GRADIENT = [
  "radial-gradient(ellipse 80% 58% at 28% 66%, rgba(50,128,75,0.65) 0%, transparent 55%)",
  "radial-gradient(ellipse 60% 40% at 72% 20%, rgba(75,160,110,0.35) 0%, transparent 50%)",
  "radial-gradient(ellipse 40% 30% at 85% 75%, rgba(40,105,65,0.28) 0%, transparent 45%)",
  "linear-gradient(175deg, #071109 0%, #102815 25%, #1C4025 48%, #26502F 60%, #112616 78%, #060C07 100%)",
].join(",");

const DESTINATIONS = [
  {
    name: "Zhangjiajie",
    location: "Hunan Province",
    tagline: "The sandstone pillars that inspired Avatar's Hallelujah Mountains rise 800 metres from mist-filled valleys",
    href: "#zhangjiajie",
    gradient: [
      "radial-gradient(ellipse 80% 58% at 30% 68%, rgba(40,100,60,0.55) 0%, transparent 55%)",
      "radial-gradient(ellipse 60% 40% at 72% 18%, rgba(60,140,90,0.25) 0%, transparent 50%)",
      "linear-gradient(175deg, #040c07 0%, #091a0f 25%, #122818 48%, #1a3820 62%, #0d1e12 78%, #030b06 100%)",
    ].join(","),
  },
  {
    name: "Guilin",
    location: "Guangxi Province",
    tagline: "Li River karst mountains reflected in jade-green water — the landscape on China's 20-yuan note",
    href: "#guilin",
    gradient: [
      "radial-gradient(ellipse 75% 55% at 40% 70%, rgba(35,90,65,0.50) 0%, transparent 55%)",
      "radial-gradient(ellipse 55% 38% at 76% 22%, rgba(45,110,80,0.22) 0%, transparent 48%)",
      "linear-gradient(178deg, #030a07 0%, #071510 25%, #0f2218 48%, #152d1e 62%, #0c1c12 78%, #030a07 100%)",
    ].join(","),
  },
  {
    name: "Tibet",
    location: "Tibet Autonomous Region",
    tagline: "The Roof of the World: Lhasa's golden temples, Namtso Lake at 4,718 metres, and a sky unlike any other on earth",
    href: "#tibet",
    gradient: [
      "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(45,60,120,0.45) 0%, transparent 55%)",
      "radial-gradient(ellipse 55% 35% at 75% 20%, rgba(80,100,160,0.22) 0%, transparent 48%)",
      "radial-gradient(ellipse 40% 28% at 18% 55%, rgba(35,50,100,0.15) 0%, transparent 44%)",
      "linear-gradient(175deg, #050710 0%, #0a0f1e 25%, #121a30 48%, #0e1526 62%, #080f1c 78%, #040710 100%)",
    ].join(","),
  },
  {
    name: "Xinjiang",
    location: "Xinjiang Uyghur Autonomous Region",
    tagline: "Grasslands, glaciers, and the second deepest lake on earth — Central Asia's last great wilderness",
    href: "#xinjiang",
    gradient: [
      "radial-gradient(ellipse 85% 55% at 45% 85%, rgba(40,90,55,0.40) 0%, transparent 55%)",
      "radial-gradient(ellipse 60% 35% at 78% 18%, rgba(30,70,120,0.25) 0%, transparent 48%)",
      "linear-gradient(180deg, #040907 0%, #080f0e 25%, #0f1c15 48%, #141f18 62%, #0a1410 78%, #040907 100%)",
    ].join(","),
  },
];

const EXPERIENCES = [
  {
    title: "Zhangjiajie Glass Bridge & Avatar Trail",
    description:
      "Cross the world's longest and highest glass-bottomed bridge (430 metres, 300 metres above the valley), then take the Bailong Elevator — the world's tallest outdoor lift — to the plateau trail above the pillars.",
  },
  {
    title: "Guilin Li River Bamboo Raft at Dawn",
    description:
      "Depart Yangshuo before 6am on a bamboo raft. As mist lifts off the water and the karst silhouettes emerge, you float through a landscape that has been called the most beautiful river valley on earth.",
  },
  {
    title: "Tibet: Namtso Lake Sunrise",
    description:
      "Spend the night at a guesthouse on the shore of Namtso (4,718m). At first light, the Nyenchen Tanglha peaks glow pink across 70 kilometres of glacial water. No photograph prepares you.",
  },
  {
    title: "Xinjiang Nalati Grassland Horse Trek",
    description:
      "Ride Kazakh horses across the Nalati grasslands in the Tianshan Mountains. Your guide — a third-generation nomadic herder — points out summer pastures his family has used for a hundred years.",
  },
];

const GUIDE_TIPS: GuideTip[] = [
  {
    iconName: "Mountain",
    title: "Best Season",
    points: [
      "Zhangjiajie: spring mist (April–May) and autumn colour (October–November) are magical",
      "Guilin: September–October for lowest rainfall and clearest Li River reflections",
      "Tibet: May–October only — road and air access closes in winter snowstorms",
      "Xinjiang: June–September for grasslands and Tianshan lakes; July for wildflower peaks",
    ],
  },
  {
    iconName: "Heart",
    title: "Altitude Safety",
    points: [
      "Tibet sits at 3,650m (Lhasa) to 5,000m+ — altitude sickness is a real risk",
      "Spend 2–3 days at lower altitude (Chengdu or Kunming) before flying to Tibet",
      "Avoid alcohol and strenuous exertion for the first 48 hours at altitude",
      "Acetazolamide (Diamox) helps; consult your doctor 2 weeks before departure",
    ],
  },
  {
    iconName: "Map",
    title: "Permits Required",
    points: [
      "Tibet requires a Tibet Travel Permit (TTB) — arranged through a licensed tour operator",
      "Additional Alien Travel Permit needed for areas outside Lhasa (Namtso, Everest Base Camp)",
      "Apply at least 3 weeks before travel; individual travellers cannot enter Tibet independently",
      "Xinjiang: no special permit for most areas, but registration at hotels is strictly enforced",
    ],
  },
  {
    iconName: "Footprints",
    title: "Physical Preparation",
    points: [
      "Zhangjiajie: main trails involve 3–6 hours walking; glass bridge requires good head for heights",
      "Guilin: Li River rafts are gentle; Longji Rice Terraces involve 2 hours of steep steps",
      "Tibet: even flat walking at altitude is harder than it seems — pace yourself",
      "Xinjiang horse treks suit beginner riders; no experience required for Nalati day rides",
    ],
  },
  {
    iconName: "CloudRain",
    title: "Weather & Gear",
    points: [
      "Mountain weather changes rapidly — pack waterproof jacket year-round",
      "Zhangjiajie: rain gear essential even in summer; mist makes wooden boardwalks slippery",
      "Tibet: UV index is extreme at altitude — SPF 50+ and UV-blocking sunglasses mandatory",
      "Xinjiang: temperature drops sharply at night even in summer; always bring a fleece",
    ],
  },
  {
    iconName: "Wind",
    title: "Practical Tips",
    points: [
      "Buy China National Park pass online to save at multiple scenic area gates",
      "Book Zhangjiajie accommodation in the park itself — morning trails before tour groups arrive",
      "Tibet tours must be booked through an authorised agency; solo travel is not permitted",
      "Guilin: take the Li River cruise from Guilin to Yangshuo (4 hours) rather than the reverse",
    ],
  },
];

const accent = "#68a888";
const accentStyle: CSSProperties = { color: accent };

export default function NatureLandscapePage() {
  return (
    <>
      {/* ── Cinematic Hero ─────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "100svh", maxHeight: "100svh", overflow: "hidden" }}>

        {/* Zhangjiajie — contrast +5%, breathing brightness */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ animation: "nature-breathe 12s ease-in-out infinite", zIndex: 1 }}
        >
          <Image
            src="/zhangjiajie-nature.png"
            alt=""
            fill
            priority
            quality={100}
            className="object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>

        <div className="absolute top-0 inset-x-0 h-[clamp(3px,2.2vw,32px)] bg-black z-20 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[clamp(3px,2.2vw,32px)] bg-black z-20 pointer-events-none" />

        {/* Directional gradient overlay — top 0.45 → mid 0.20 → bottom 0.55 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.20) 50%, rgba(0,0,0,0.55) 100%)",
            zIndex: 8,
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.31) 100%)",
            zIndex: 8,
          }}
        />
        <FilmGrain opacity={0.038} />

        <div
          className="absolute inset-0 flex flex-col items-center justify-end pb-[clamp(3rem,8vh,6rem)] px-6 md:px-10"
          style={{ zIndex: 10 }}
        >
          <FadeReveal variant="fadeUp" delay={0.15} className="space-y-5 max-w-3xl w-full text-center">
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Chapter IV &nbsp;·&nbsp; Zhangjiajie · Guilin · Tibet · Xinjiang
            </p>

            <h1
              className="font-display leading-none"
              style={{
                fontSize: "clamp(2rem, 5vw, 5rem)",
                color: "#e6f0ea",
                textShadow: "0 2px 4px rgba(0,0,0,0.3), 0 4px 48px rgba(0,0,0,0.55)",
              }}
            >
              Nature &amp; Landscape
            </h1>

            <div className="flex items-center justify-center gap-4">
              <Divider width="w-10" style={accentStyle} />
              <span
                className="font-sub italic text-base md:text-lg"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                山河秘境
              </span>
            </div>

            <p
              className="font-sub italic text-lg md:text-xl leading-relaxed max-w-lg mx-auto"
              style={{ color: "rgba(255,255,255,0.56)" }}
            >
              &ldquo;Where the earth sculpted cathedrals from mist and stone — landscapes so vast
              they make silence feel inhabited.&rdquo;
            </p>
          </FadeReveal>
        </div>
      </div>

      {/* ── Destinations ───────────────────────────────────────────────── */}
      <SectionShell>
        <SectionHeader
          eyebrow="Destinations · 目的地"
          title="The Earth at Its Most Dramatic"
          subtitle="Four landscapes that challenge every previous idea you had about what nature looks like."
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
          title="In the Heart of Wild China"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {EXPERIENCES.map((exp, i) => (
            <FadeReveal key={exp.title} variant="fadeUp" delay={i * 0.1}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-px" style={{ background: accent, opacity: 0.6 }} />
                  <h3
                    className="font-display text-sm tracking-widest uppercase"
                    style={{ color: "var(--color-text-primary, #e6f0ea)" }}
                  >
                    {exp.title}
                  </h3>
                </div>
                <p
                  className="font-body text-sm leading-relaxed pl-8"
                  style={{ color: "var(--color-text-secondary, #90b8a8)" }}
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
          subtitle="Wilderness demands respect and preparation. These notes could save your trip."
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
              style={{ color: "var(--color-text-secondary, #90b8a8)" }}
            >
              &ldquo;The mountains here do not care for your plans. They have been sculpting themselves for two hundred million years. You are simply a guest.&rdquo;
            </p>
          </div>
        </FadeReveal>
      </SectionShell>
    </>
  );
}
