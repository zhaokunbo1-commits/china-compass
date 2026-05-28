"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FilmGrain from "./FilmGrain";
import Divider from "@/components/common/Divider";
import type { CSSProperties } from "react";

/* ─── Slide data ──────────────────────────────────────────────────────────── */

const SLIDES = [
  {
    id: "silkroad",
    chapter: "Chapter I",
    title: "Silk Road",
    subtitle: "丝路敦煌",
    location: "Dunhuang · Zhangye · Jiayuguan",
    tagline: "Where ancient caravans traded silk for salvation",
    gradient: [
      "radial-gradient(ellipse 90% 65% at 42% 78%, rgba(200,118,38,0.58) 0%, transparent 55%)",
      "radial-gradient(ellipse 55% 45% at 88% 22%, rgba(135,58,14,0.38) 0%, transparent 50%)",
      "linear-gradient(165deg, #120900 0%, #2e1405 18%, #5c2808 38%, #884018 55%, #481d07 75%, #0e0500 100%)",
    ].join(","),
    accent: "#c9a050",
    href: "/silkroad",
  },
  {
    id: "modern-city",
    chapter: "Chapter II",
    title: "Modern City",
    subtitle: "未来都市",
    location: "Shanghai · Shenzhen · Chongqing",
    tagline: "Glass towers reaching through tomorrow's sky",
    gradient: [
      "radial-gradient(ellipse 80% 55% at 50% 100%, rgba(18,58,118,0.68) 0%, transparent 50%)",
      "radial-gradient(ellipse 40% 28% at 76% 33%, rgba(58,178,222,0.13) 0%, transparent 50%)",
      "radial-gradient(ellipse 30% 22% at 18% 55%, rgba(38,138,200,0.09) 0%, transparent 42%)",
      "linear-gradient(180deg, #030810 0%, #060d1e 28%, #091630 54%, #050c1a 75%, #020609 100%)",
    ].join(","),
    accent: "#4db8c9",
    href: "/modern-city",
  },
  {
    id: "history-culture",
    chapter: "Chapter III",
    title: "History & Culture",
    subtitle: "千年文脉",
    location: "Beijing · Xi'an · Pingyao",
    tagline: "Five thousand years carved in stone and silence",
    gradient: [
      "radial-gradient(ellipse 72% 52% at 38% 63%, rgba(162,93,21,0.50) 0%, transparent 54%)",
      "radial-gradient(ellipse 50% 40% at 84% 29%, rgba(122,43,26,0.30) 0%, transparent 50%)",
      "linear-gradient(172deg, #0d0800 0%, #231308 22%, #462410 40%, #663a18 58%, #2d1609 78%, #0c0602 100%)",
    ].join(","),
    accent: "#b89530",
    href: "/history-culture",
  },
  {
    id: "nature-landscape",
    chapter: "Chapter IV",
    title: "Nature & Landscape",
    subtitle: "山河秘境",
    location: "Zhangjiajie · Guilin · Tibet · Xinjiang",
    tagline: "Where the earth sculpted cathedrals from mist and stone",
    gradient: [
      "radial-gradient(ellipse 80% 58% at 28% 66%, rgba(38,98,58,0.50) 0%, transparent 55%)",
      "radial-gradient(ellipse 60% 40% at 72% 20%, rgba(58,128,88,0.24) 0%, transparent 50%)",
      "linear-gradient(175deg, #050d07 0%, #0c1e11 25%, #15301c 48%, #1c3c24 60%, #0d1c11 78%, #040a06 100%)",
    ].join(","),
    accent: "#68a888",
    href: "/nature-landscape",
  },
] as const;

const INTERVAL = 5800;

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(
    () => setCurrent((c) => (c + 1) % SLIDES.length),
    []
  );

  useEffect(() => {
    if (paused) return;
    const t = setInterval(advance, INTERVAL);
    return () => clearInterval(t);
  }, [paused, advance]);

  const slide = SLIDES[current];
  const accentStyle: CSSProperties = { color: slide.accent };
  const accentBorderStyle: CSSProperties = {
    borderColor: `${slide.accent}45`,
    color: slide.accent,
    background: `${slide.accent}14`,
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Cinematic letterbox bars ─────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 h-[clamp(3px,2.2vw,32px)] bg-black z-20 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[clamp(3px,2.2vw,32px)] bg-black z-20 pointer-events-none" />

      {/* ── Sliding background ───────────────────────────────────── */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {/* Ken-Burns zoom */}
          <motion.div
            className="absolute inset-0"
            style={{ background: slide.gradient }}
            initial={{ scale: 1.0 }}
            animate={{ scale: 1.09 }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Static overlays ──────────────────────────────────────── */}
      {/* Top shadow (behind navbar) */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "28%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)",
          zIndex: 8,
        }}
      />
      {/* Bottom shadow (text legibility) */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "55%",
          background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
          zIndex: 8,
        }}
      />
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 42%, rgba(0,0,0,0.6) 100%)",
          zIndex: 8,
        }}
      />
      <FilmGrain opacity={0.038} />

      {/* ── Text overlay ─────────────────────────────────────────── */}
      <div
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20 px-8 md:px-14 lg:px-20"
        style={{ zIndex: 10 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`txt-${slide.id}`}
            className="space-y-4 max-w-2xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            {/* Eyebrow */}
            <motion.p
              className="font-body text-[10px] tracking-[0.35em] uppercase"
              style={{ color: "rgba(255,255,255,0.42)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {slide.chapter}&nbsp;&nbsp;·&nbsp;&nbsp;{slide.location}
            </motion.p>

            {/* Title */}
            <motion.h1
              className="font-display leading-none"
              style={{
                fontSize: "clamp(3.2rem, 9vw, 7.5rem)",
                color: "#f5f5f0",
                textShadow: "0 4px 48px rgba(0,0,0,0.55)",
              }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              {slide.title}
            </motion.h1>

            {/* Divider + Chinese subtitle */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52 }}
            >
              <Divider width="w-10" style={accentStyle} />
              <span
                className="font-sub italic text-sm md:text-base"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {slide.subtitle}
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="font-sub italic text-lg md:text-xl leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.58)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.65 }}
            >
              &ldquo;{slide.tagline}&rdquo;
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72 }}
            >
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 btn-base px-6 py-3 text-xs mt-2 transition-all hover:opacity-100"
                style={accentBorderStyle}
              >
                Explore
                <ChevronRight size={13} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* ── Progress dots ──────────────────────────────────────── */}
        <div
          className="absolute bottom-[clamp(28px,4vw,48px)] right-8 md:right-14 flex gap-2 items-center"
          style={{ zIndex: 10 }}
        >
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setCurrent(i);
                setPaused(true);
                setTimeout(() => setPaused(false), 12000);
              }}
              aria-label={`Go to slide: ${s.title}`}
              className="rounded-full transition-all duration-500 flex-shrink-0"
              style={{
                width: i === current ? 26 : 6,
                height: 6,
                background:
                  i === current ? slide.accent : "rgba(255,255,255,0.22)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
