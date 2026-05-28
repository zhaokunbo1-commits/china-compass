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
      {/* Subtle tech grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(77,184,201,0.022) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(77,184,201,0.022) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />
      {/* Cyan edge glow – top right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 85% 15%, rgba(77,184,201,0.06) 0%, transparent 65%)",
        }}
      />
      {/* Pulse dots */}
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
