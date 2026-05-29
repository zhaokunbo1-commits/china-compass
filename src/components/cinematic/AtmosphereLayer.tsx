"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme-context";

/* ─── Particle / atmosphere data ──────────────────────────────────────────── */

/* Silkroad: sparse sand-grain particles drifting upward */
const SAND = [
  { id: 1, x: 8,  y: 18, s: 1, dur: 22, del: 0   },
  { id: 2, x: 23, y: 58, s: 2, dur: 26, del: 5   },
  { id: 3, x: 47, y: 33, s: 1, dur: 19, del: 9   },
  { id: 4, x: 65, y: 72, s: 2, dur: 24, del: 2   },
  { id: 5, x: 81, y: 22, s: 1, dur: 28, del: 12  },
  { id: 6, x: 38, y: 88, s: 1, dur: 20, del: 6   },
  { id: 7, x: 91, y: 47, s: 2, dur: 25, del: 14  },
  { id: 8, x: 16, y: 82, s: 1, dur: 21, del: 3   },
  { id: 9, x: 57, y: 10, s: 1, dur: 23, del: 7   },
];

/* Modern City: small tech-cyan pulse dots */
const TECH_DOTS = [
  { id: 1, x: 18, y: 28, dur: 5,  del: 0  },
  { id: 2, x: 54, y: 16, dur: 7,  del: 2  },
  { id: 3, x: 76, y: 62, dur: 6,  del: 4  },
  { id: 4, x: 33, y: 77, dur: 8,  del: 1  },
  { id: 5, x: 89, y: 38, dur: 5,  del: 6  },
  { id: 6, x: 12, y: 54, dur: 7,  del: 3  },
  { id: 7, x: 42, y: 44, dur: 9,  del: 5  },
];

/* Modern City: blurred bokeh circles simulating distant city lights */
const BOKEH = [
  { id: 1,  x: 12, y: 22, size: 80,  color: "rgba(77,184,201,0.09)",   blur: 28, dur: 20, del: 0  },
  { id: 2,  x: 48, y: 38, size: 55,  color: "rgba(100,155,255,0.07)",  blur: 20, dur: 24, del: 4  },
  { id: 3,  x: 80, y: 14, size: 110, color: "rgba(77,184,201,0.055)",  blur: 40, dur: 28, del: 8  },
  { id: 4,  x: 26, y: 68, size: 65,  color: "rgba(140,195,255,0.08)",  blur: 24, dur: 22, del: 2  },
  { id: 5,  x: 67, y: 78, size: 90,  color: "rgba(77,184,201,0.065)",  blur: 32, dur: 30, del: 6  },
  { id: 6,  x: 90, y: 52, size: 45,  color: "rgba(200,230,255,0.06)",  blur: 16, dur: 16, del: 3  },
  { id: 7,  x: 36, y: 48, size: 72,  color: "rgba(77,184,201,0.075)",  blur: 27, dur: 25, del: 9  },
  { id: 8,  x: 57, y: 75, size: 58,  color: "rgba(90,140,220,0.07)",   blur: 22, dur: 19, del: 5  },
  { id: 9,  x:  6, y: 84, size: 95,  color: "rgba(77,184,201,0.05)",   blur: 36, dur: 27, del: 1  },
  { id: 10, x: 93, y: 30, size: 62,  color: "rgba(150,210,240,0.08)",  blur: 26, dur: 23, del: 7  },
  { id: 11, x: 22, y: 10, size: 40,  color: "rgba(77,184,201,0.06)",   blur: 14, dur: 18, del: 11 },
  { id: 12, x: 74, y: 44, size: 85,  color: "rgba(60,120,200,0.055)",  blur: 30, dur: 26, del: 13 },
];

/* History Culture: large blurry ink-cloud blobs */
const INK_CLOUDS = [
  { id: 1, x:  8, y: 15, w: 320, h: 180, dur: 30, del: 0  },
  { id: 2, x: 55, y: 50, w: 260, h: 160, dur: 26, del: 10 },
  { id: 3, x: 25, y: 68, w: 280, h: 200, dur: 34, del: 5  },
  { id: 4, x: 72, y: 10, w: 220, h: 140, dur: 28, del: 15 },
];

/* Nature Landscape: translucent mist bands drifting horizontally */
const MIST_BANDS = [
  { id: 1, top: "22%", dur: 20, del: 0  },
  { id: 2, top: "52%", dur: 25, del: 7  },
  { id: 3, top: "74%", dur: 18, del: 12 },
];

/* ─── Sub-atmospheres ─────────────────────────────────────────────────────── */

function SilkroadAtmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Warm amber glow – lower left corner */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 20% 75%, rgba(201,160,80,0.055) 0%, transparent 70%)",
        }}
      />
      {/* Sand particles */}
      {SAND.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.s,
            height: p.s,
            background: "#c9a050",
            opacity: 0,
            animation: `atm-sand-float ${p.dur}s ${p.del}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

function ModernCityAtmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* ── Deep blue city nightscape base gradient ── */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            /* Deep midnight sky — top */
            "linear-gradient(180deg, #020610 0%, #040c1e 30%, #060f28 60%, #050c1c 80%, #030810 100%)",
          ].join(","),
        }}
      />

      {/* ── City horizon glow — warm amber light from below (reflected city lights) ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 28% at 50% 100%, rgba(30,60,130,0.35) 0%, transparent 70%)",
        }}
      />

      {/* ── Distant skyline silhouette glow — lower third ── */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 20% at 25% 88%, rgba(20,50,110,0.28) 0%, transparent 60%)",
            "radial-gradient(ellipse 60% 18% at 75% 92%, rgba(18,45,100,0.22) 0%, transparent 58%)",
          ].join(","),
        }}
      />

      {/* ── Cyan tech glow — upper right ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 35% at 88% 12%, rgba(77,184,201,0.07) 0%, transparent 65%)",
        }}
      />

      {/* ── Subtle tech grid ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,184,201,0.018) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(77,184,201,0.018) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      {/* ── Bokeh city light particles ── */}
      {BOKEH.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            width: b.size,
            height: b.size,
            background: b.color,
            filter: `blur(${b.blur}px)`,
            opacity: 0,
            animation: `atm-city-bokeh ${b.dur}s ${b.del}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* ── Sonar pulse dots ── */}
      {TECH_DOTS.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: 2,
            height: 2,
            background: "#4db8c9",
            animation: `atm-tech-pulse ${p.dur}s ${p.del}s ease-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

function HistoryAtmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Warm center haze */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(184,149,48,0.04) 0%, transparent 75%)",
        }}
      />
      {/* Ink cloud blobs */}
      {INK_CLOUDS.map((c) => (
        <div
          key={c.id}
          className="absolute rounded-full"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: c.w,
            height: c.h,
            background: "rgba(184,149,48,0.045)",
            filter: "blur(50px)",
            opacity: 0,
            animation: `atm-ink-cloud ${c.dur}s ${c.del}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

function NatureAtmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Forest green glow – lower left */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 15% 80%, rgba(104,168,136,0.05) 0%, transparent 65%)",
        }}
      />
      {/* Mist bands */}
      {MIST_BANDS.map((b) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            top: b.top,
            left: "-15%",
            width: "130%",
            height: "40px",
            background:
              "linear-gradient(90deg, transparent, rgba(104,168,136,0.055) 25%, rgba(104,168,136,0.055) 75%, transparent)",
            filter: "blur(18px)",
            opacity: 0,
            animation: `atm-mist-drift ${b.dur}s ${b.del}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main export ─────────────────────────────────────────────────────────── */

export default function AtmosphereLayer() {
  const { theme } = useTheme();

  if (theme === "base") return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {theme === "silkroad"          && <SilkroadAtmosphere />}
          {theme === "modern-city"       && <ModernCityAtmosphere />}
          {theme === "history-culture"   && <HistoryAtmosphere />}
          {theme === "nature-landscape"  && <NatureAtmosphere />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
