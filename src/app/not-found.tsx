import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lost the Trail — China Compass",
  description: "The page you were looking for could not be found.",
};

export default function NotFound() {
  return (
    <main
      className="relative flex flex-col items-center justify-center text-center px-6"
      style={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(120,80,30,0.18) 0%, transparent 60%), linear-gradient(180deg, #0a0805 0%, #0e0a06 100%)",
      }}
    >
      <p
        className="font-body text-[10px] tracking-[0.4em] uppercase mb-6"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        Error 404 · 迷途
      </p>

      <h1
        className="font-display leading-none mb-4"
        style={{
          fontSize: "clamp(3rem, 10vw, 7rem)",
          color: "#f0e6d3",
          textShadow: "0 2px 4px rgba(0,0,0,0.4)",
        }}
      >
        Lost the Trail
      </h1>

      <p
        className="font-sub italic text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        &ldquo;Even the Silk Road had its forgotten paths. This one leads
        nowhere — let us guide you back.&rdquo;
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 btn-base px-7 py-3 text-xs transition-all"
        style={{
          borderColor: "rgba(200,169,110,0.45)",
          color: "#c8a96e",
          background: "rgba(200,169,110,0.08)",
        }}
      >
        Return Home
      </Link>
    </main>
  );
}
