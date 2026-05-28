import type { Metadata } from "next";
import type { CSSProperties } from "react";
import FadeReveal from "@/components/cinematic/FadeReveal";
import FilmGrain from "@/components/cinematic/FilmGrain";
import SectionShell from "@/components/sections/SectionShell";
import SectionHeader from "@/components/sections/SectionHeader";
import DestinationCard from "@/components/sections/DestinationCard";
import TravelGuide from "@/components/sections/TravelGuide";
import type { GuideTip } from "@/components/sections/TravelGuide";
import Divider from "@/components/common/Divider";

export const metadata: Metadata = {
  title: "Modern City — China Compass",
  description:
    "Shanghai, Shenzhen, Chongqing, and Guangzhou: where China's future is being written in glass, light, and relentless ambition.",
};

const HERO_GRADIENT = [
  "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(18,58,118,0.68) 0%, transparent 50%)",
  "radial-gradient(ellipse 40% 28% at 76% 33%, rgba(58,178,222,0.13) 0%, transparent 50%)",
  "radial-gradient(ellipse 30% 22% at 18% 55%, rgba(38,138,200,0.09) 0%, transparent 42%)",
  "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(10,30,80,0.30) 0%, transparent 60%)",
  "linear-gradient(180deg, #030810 0%, #060d1e 28%, #091630 54%, #050c1a 75%, #020609 100%)",
].join(",");

const DESTINATIONS = [
  {
    name: "Shanghai",
    location: "Shanghai Municipality",
    tagline: "The city that never made up its mind between East and West — and became extraordinary because of it",
    href: "#shanghai",
    gradient: [
      "radial-gradient(ellipse 75% 55% at 50% 100%, rgba(20,80,160,0.65) 0%, transparent 50%)",
      "radial-gradient(ellipse 40% 30% at 80% 25%, rgba(60,200,230,0.18) 0%, transparent 45%)",
      "radial-gradient(ellipse 30% 25% at 15% 60%, rgba(40,100,180,0.12) 0%, transparent 40%)",
      "linear-gradient(180deg, #020712 0%, #040d20 30%, #071530 55%, #050e1e 78%, #020610 100%)",
    ].join(","),
  },
  {
    name: "Shenzhen",
    location: "Guangdong Province",
    tagline: "From fishing village to global tech capital in 40 years — the world's fastest city",
    href: "#shenzhen",
    gradient: [
      "radial-gradient(ellipse 70% 50% at 45% 95%, rgba(15,65,140,0.60) 0%, transparent 50%)",
      "radial-gradient(ellipse 50% 35% at 85% 15%, rgba(40,180,220,0.20) 0%, transparent 45%)",
      "radial-gradient(ellipse 35% 25% at 20% 40%, rgba(20,90,160,0.12) 0%, transparent 42%)",
      "linear-gradient(185deg, #020810 0%, #040e22 28%, #071628 50%, #05111c 72%, #020710 100%)",
    ].join(","),
  },
  {
    name: "Chongqing",
    location: "Chongqing Municipality",
    tagline: "A mountain city of eight dimensions — where the metro passes through a skyscraper and fog clings to the cliffs",
    href: "#chongqing",
    gradient: [
      "radial-gradient(ellipse 80% 55% at 40% 90%, rgba(25,70,150,0.55) 0%, transparent 50%)",
      "radial-gradient(ellipse 45% 30% at 78% 25%, rgba(200,100,30,0.12) 0%, transparent 40%)",
      "radial-gradient(ellipse 35% 22% at 15% 50%, rgba(30,80,140,0.10) 0%, transparent 42%)",
      "linear-gradient(175deg, #030810 0%, #060f20 28%, #0a1835 52%, #070f24 75%, #030810 100%)",
    ].join(","),
  },
  {
    name: "Guangzhou",
    location: "Guangdong Province",
    tagline: "The ancient Canton trading port reborn as a subtropical megalopolis of food, commerce, and creative energy",
    href: "#guangzhou",
    gradient: [
      "radial-gradient(ellipse 75% 55% at 55% 100%, rgba(20,90,140,0.60) 0%, transparent 50%)",
      "radial-gradient(ellipse 45% 30% at 75% 20%, rgba(30,160,140,0.15) 0%, transparent 45%)",
      "radial-gradient(ellipse 30% 22% at 18% 55%, rgba(20,80,120,0.10) 0%, transparent 40%)",
      "linear-gradient(180deg, #020a0c 0%, #040f18 28%, #071828 52%, #05121e 75%, #020810 100%)",
    ].join(","),
  },
];

const EXPERIENCES = [
  {
    title: "Shanghai Bund Night Cruise",
    description:
      "Board a boat at dusk from the Bund and watch the Pudong skyline ignite — a wall of towers in amber, cyan, and white that rewrites the horizon every minute.",
  },
  {
    title: "Chongqing Metro Through a Skyscraper",
    description:
      "Line 2 passes directly through Liziba station, embedded inside a residential tower. Window seats reveal kitchens and living rooms at 50 km/h — urbanism at its most surreal.",
  },
  {
    title: "Shenzhen OCT Bay Tech Walk",
    description:
      "Explore Shenzhen's innovation district: maker spaces, drone shows, and rooftop terraces overlooking the city that built the world's smartphones.",
  },
  {
    title: "Guangzhou Cantonese Dim Sum Master Class",
    description:
      "Join a morning yum cha session at a century-old teahouse, then attend a hands-on class learning to fold har gow and crimp cheung fun from a Cantonese chef.",
  },
];

const GUIDE_TIPS: GuideTip[] = [
  {
    iconName: "Clock",
    title: "Best Season",
    points: [
      "Spring (March–May) and autumn (September–November) offer mild weather",
      "Avoid Chinese Golden Week (October 1–7) and Spring Festival for lower prices",
      "Shanghai summer (June–August) is hot and humid; bring light layers",
      "Chongqing is fog-shrouded in winter — atmospheric but overcast",
    ],
  },
  {
    iconName: "Train",
    title: "Getting Around",
    points: [
      "All four cities have extensive, affordable metro networks with English signage",
      "Didi app (international version) works like Uber; download before arrival",
      "High-speed rail connects Shanghai ↔ Guangzhou in about 8 hours",
      "Shenzhen ↔ Hong Kong border crossings are open; carry passport",
    ],
  },
  {
    iconName: "Globe",
    title: "Visa & Entry",
    points: [
      "Shanghai and Shenzhen offer 144-hour transit visa exemption for 53 nationalities",
      "Apply at port-of-entry; register at hotel within 24 hours",
      "Standard L-class tourist visa takes 4–7 business days at Chinese consulate",
      "Keep printed hotel confirmation and return ticket for immigration officials",
    ],
  },
  {
    iconName: "CreditCard",
    title: "Cashless Payments",
    points: [
      "WeChat Pay and Alipay dominate — most vendors do not accept cash",
      "Link an international Visa/Mastercard to Alipay's tourist mode before arriving",
      "Bank of China ATMs reliably accept foreign cards for RMB withdrawal",
      "Small vendors and older teahouses may still prefer cash; keep ¥200–500 on hand",
    ],
  },
  {
    iconName: "Wifi",
    title: "Connectivity",
    points: [
      "Purchase a local SIM at the airport (China Unicom or China Telecom)",
      "VPN required for Google, WhatsApp, Instagram — install before entering China",
      "Most hotels and cafés offer free Wi-Fi; speeds are generally fast in cities",
      "eSIM services like Airalo work for data-only plans without hardware swap",
    ],
  },
  {
    iconName: "Moon",
    title: "Nightlife",
    points: [
      "Shanghai's Xintiandi and Jing'an bars open until 3–4am; Bund roof bars close at midnight",
      "Chongqing's cable car over the Yangtze runs until 10pm — best city views at night",
      "Guangzhou's Liwan night market peaks 8–11pm with street food and lanterns",
      "Shenzhen's OCT district has independent music venues and rooftop events",
    ],
  },
];

const accent = "#4db8c9";
const accentStyle: CSSProperties = { color: accent };

export default function ModernCityPage() {
  return (
    <>
      {/* ── Cinematic Hero ─────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: "100svh", maxHeight: "100svh", overflow: "hidden" }}>
        <div className="absolute inset-0" style={{ background: HERO_GRADIENT }} />

        {/* Letterbox bars */}
        <div className="absolute top-0 inset-x-0 h-[clamp(3px,2.2vw,32px)] bg-black z-20 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-[clamp(3px,2.2vw,32px)] bg-black z-20 pointer-events-none" />

        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "30%",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.70) 0%, transparent 100%)",
            zIndex: 8,
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "55%",
            background: "linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
            zIndex: 8,
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.62) 100%)",
            zIndex: 8,
          }}
        />
        <FilmGrain opacity={0.032} />

        <div
          className="absolute inset-0 flex flex-col justify-end pb-10 md:pb-14 lg:pb-16 px-8 md:px-14 lg:px-20"
          style={{ zIndex: 10 }}
        >
          <FadeReveal variant="fadeUp" delay={0.15} className="space-y-5 max-w-2xl">
            <p
              className="font-body text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Chapter II &nbsp;·&nbsp; Shanghai · Shenzhen · Chongqing · Guangzhou
            </p>

            <h1
              className="font-display leading-none"
              style={{
                fontSize: "clamp(2.6rem, 7vw, 6.5rem)",
                color: "#e4ecf5",
                textShadow: "0 4px 48px rgba(0,0,0,0.55)",
              }}
            >
              Modern City
            </h1>

            <div className="flex items-center gap-4">
              <Divider width="w-10" style={accentStyle} />
              <span
                className="font-sub italic text-base md:text-lg"
                style={{ color: "rgba(255,255,255,0.48)" }}
              >
                未来都市
              </span>
            </div>

            <p
              className="font-sub italic text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.56)" }}
            >
              &ldquo;Glass towers reaching through tomorrow&apos;s sky — four cities rewriting
              what a metropolis can be.&rdquo;
            </p>
          </FadeReveal>
        </div>
      </div>

      {/* ── Destinations ───────────────────────────────────────────────── */}
      <SectionShell>
        <SectionHeader
          eyebrow="Destinations · 目的地"
          title="Four Cities, One Future"
          subtitle="Each a different experiment in what the city of tomorrow looks like — built with different ambitions, different aesthetics, and different souls."
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
          title="The City at Its Most Alive"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {EXPERIENCES.map((exp, i) => (
            <FadeReveal key={exp.title} variant="fadeUp" delay={i * 0.1}>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-px" style={{ background: accent, opacity: 0.6 }} />
                  <h3
                    className="font-display text-sm tracking-widest uppercase"
                    style={{ color: "var(--color-text-primary, #e4ecf5)" }}
                  >
                    {exp.title}
                  </h3>
                </div>
                <p
                  className="font-body text-sm leading-relaxed pl-8"
                  style={{ color: "var(--color-text-secondary, #8cb0c8)" }}
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
          subtitle="Practical intelligence for navigating China's urban frontier."
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
              style={{ color: "var(--color-text-secondary, #8cb0c8)" }}
            >
              &ldquo;No other country on earth is building the future this fast, this visibly, and with this much conviction.&rdquo;
            </p>
          </div>
        </FadeReveal>
      </SectionShell>
    </>
  );
}
