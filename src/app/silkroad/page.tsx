import type { Metadata } from "next";
import SectionShell from "@/components/sections/SectionShell";
import ChapterHeader from "@/components/sections/ChapterHeader";
import DestinationCard from "@/components/sections/DestinationCard";

export const metadata: Metadata = {
  title: "Silk Road · Destinations — China Compass",
  description:
    "Follow the ancient trade routes across Dunhuang, Zhangye, Jiayuguan, and Turpan. Desert dunes, cave frescoes, and rainbow mountains await.",
};

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

export default function SilkRoadPage() {
  return (
    <div className="relative paper-grain min-h-screen">
      <SectionShell className="pt-28 md:pt-32">
        <ChapterHeader
          en="The Silk Road"
          cn="千年文脉"
          places="Dunhuang · Zhangye · Jiayuguan · Turpan"
          poemEn="“Lone smoke rises straight from the vast desert; over the long river, the sun sets round.”"
          author="— Wang Wei, Tang dynasty"
          seal="丝路"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={dest.name} {...dest} index={i} />
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
