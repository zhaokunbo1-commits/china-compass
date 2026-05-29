import type { Metadata } from "next";
import SectionShell from "@/components/sections/SectionShell";
import ChapterHeader from "@/components/sections/ChapterHeader";
import DestinationCard from "@/components/sections/DestinationCard";

export const metadata: Metadata = {
  title: "Nature & Landscape · Destinations — China Compass",
  description:
    "Zhangjiajie's floating mountains, Guilin's karst rivers, Tibet's plateau monasteries, and Xinjiang's endless steppe — China's wild earth in four chapters.",
};

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

export default function NatureLandscapePage() {
  return (
    <div className="relative paper-grain min-h-screen">
      <SectionShell className="pt-28 md:pt-32">
        <ChapterHeader
          en="Splendid Landscapes"
          cn="锦绣山河"
          places="Zhangjiajie · Guilin · Tibet · Xinjiang"
          poemEn="“Rivers like ribbons of blue silk, hills like hairpins of jade.”"
          author="— Han Yu, Tang dynasty"
          seal="山河"
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
