import type { Metadata } from "next";
import SectionShell from "@/components/sections/SectionShell";
import ChapterHeader from "@/components/sections/ChapterHeader";
import DestinationCard from "@/components/sections/DestinationCard";

export const metadata: Metadata = {
  title: "History & Culture · Destinations — China Compass",
  description:
    "Five thousand years in Beijing, Xi'an, Pingyao, and Datong: imperial palaces, terracotta warriors, ancient walled towns, and Buddhist cave art.",
};

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

export default function HistoryCulturePage() {
  return (
    <div className="relative paper-grain min-h-screen">
      <SectionShell className="pt-28 md:pt-32">
        <ChapterHeader
          en="Living Heritage"
          cn="烟火人间"
          places="Beijing · Xi’an · Pingyao · Datong"
          poemEn="“The swallows that once skimmed the halls of lords now nest in the homes of common folk.”"
          author="— Liu Yuxi, Tang dynasty"
          seal="人间"
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
