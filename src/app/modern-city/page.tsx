import type { Metadata } from "next";
import SectionShell from "@/components/sections/SectionShell";
import ChapterHeader from "@/components/sections/ChapterHeader";
import DestinationCard from "@/components/sections/DestinationCard";

export const metadata: Metadata = {
  title: "Modern City · Destinations — China Compass",
  description:
    "Shanghai, Shenzhen, Chongqing, and Guangzhou: where China's future is being written in glass, light, and relentless ambition.",
};

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

export default function ModernCityPage() {
  return (
    <div className="relative paper-grain min-h-screen">
      <SectionShell className="pt-28 md:pt-32">
        <ChapterHeader
          en="Modern Cities"
          cn="都市万象"
          places="Shanghai · Shenzhen · Chongqing · Guangzhou"
          poemEn="“Towers rise a hundred feet — one could pluck the stars by hand.”"
          author="— Li Bai, Tang dynasty"
          seal="都市"
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
