import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "China Compass — A Traveller's Guide to China",
  description:
    "An inbound traveller's guide to China: splendid landscapes, the Silk Road, living heritage, and modern cities — told with a painter's eye.",
};

interface Chapter {
  en: string;
  cn: string;
  places: string;
  poemCn: [string, string];
  poemEn: string;
  author: string;
  seal: string;
  image: string;
  href: string;
}

const CHAPTERS: Chapter[] = [
  {
    en: "Splendid Landscapes",
    cn: "锦绣山河",
    places: "Guilin · Zhangjiajie · Tibet · Xinjiang",
    poemCn: ["江作青罗带", "山如碧玉簪"],
    poemEn: "“Rivers like ribbons of blue silk, hills like hairpins of jade.”",
    author: "— Han Yu, Tang dynasty",
    seal: "山河",
    image: "/card-guilin.jpg",
    href: "/nature-landscape",
  },
  {
    en: "The Silk Road",
    cn: "千年文脉",
    places: "Dunhuang · Zhangye · Jiayuguan · Turpan",
    poemCn: ["大漠孤烟直", "长河落日圆"],
    poemEn:
      "“Lone smoke rises straight from the vast desert; over the long river, the sun sets round.”",
    author: "— Wang Wei, Tang dynasty",
    seal: "丝路",
    image: "/card-dunhuang-mural.jpg",
    href: "/silkroad",
  },
  {
    en: "Living Heritage",
    cn: "烟火人间",
    places: "Beijing · Xi’an · Suzhou · Pingyao",
    poemCn: ["君到姑苏见", "人家尽枕河"],
    poemEn: "“Come to Suzhou, and find every house pillowed upon the water.”",
    author: "— Du Xunhe, Tang dynasty",
    seal: "人间",
    image: "/card-suzhou.jpg",
    href: "/history-culture",
  },
  {
    en: "Modern Cities",
    cn: "都市万象",
    places: "Shanghai · Shenzhen · Chongqing · Guangzhou",
    poemCn: ["危楼高百尺", "手可摘星辰"],
    poemEn: "“Towers rise a hundred feet — one could pluck the stars by hand.”",
    author: "— Li Bai, Tang dynasty",
    seal: "都市",
    image: "/card-lujiazui-night.jpg",
    href: "/modern-city",
  },
];

export default function HomePage() {
  return (
    <main className="relative paper-grain" style={{ background: "var(--color-bg)" }}>
      {/* ── Intro — English-led, with a Chinese seal & calligraphic accent ── */}
      <section className="relative z-[1] min-h-screen flex flex-col items-center justify-center text-center px-6">
        <p
          className="ink-spread font-body text-[11px] tracking-[0.5em] uppercase mb-8"
          style={{ color: "var(--color-text-muted)" }}
        >
          China Compass
        </p>

        <h1
          className="ink-spread font-display leading-[1.08]"
          style={{
            fontSize: "clamp(2.6rem, 6.5vw, 6rem)",
            color: "var(--color-text-primary)",
            animationDelay: "0.15s",
          }}
        >
          A Traveller’s China
        </h1>

        {/* Chinese accent + seal */}
        <div
          className="ink-spread mt-7 flex items-center justify-center gap-4"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="block w-8 h-px" style={{ background: "var(--color-border-strong)" }} />
          <span className="font-song text-lg tracking-[0.3em]" style={{ color: "var(--color-text-secondary)" }}>
            江山入画
          </span>
          <span
            className="seal"
            style={{ width: 34, height: 34, fontSize: "0.8rem", writingMode: "vertical-rl", padding: "3px 0" }}
          >
            卧游
          </span>
          <span className="block w-8 h-px" style={{ background: "var(--color-border-strong)" }} />
        </div>

        <p
          className="ink-spread font-sub italic mt-8 max-w-xl leading-relaxed"
          style={{ fontSize: "clamp(1rem,1.6vw,1.25rem)", color: "var(--color-text-secondary)", animationDelay: "0.5s" }}
        >
          A guide for travellers to the Middle Kingdom — its landscapes, ancient
          routes, living heritage and restless modern cities, told with a
          painter’s eye.
        </p>

        <p
          className="ink-spread font-body text-[10px] tracking-[0.4em] uppercase mt-12"
          style={{ color: "var(--color-text-muted)", animationDelay: "0.7s" }}
        >
          Scroll to explore ↓
        </p>
      </section>

      {/* ── Four journeys ──────────────────────────────────────────────── */}
      <div className="relative z-[1] mx-auto max-w-6xl px-6 md:px-10 pb-32 space-y-28 md:space-y-36">
        {CHAPTERS.map((c, i) => (
          <ChapterRow key={c.href} chapter={c} index={i} flip={i % 2 === 1} />
        ))}
      </div>

      {/* ── Closing colophon ───────────────────────────────────────────── */}
      <section className="relative z-[1] flex flex-col items-center gap-5 pb-28 px-6 text-center">
        <span className="block w-10 h-px" style={{ background: "var(--color-accent)" }} />
        <p
          className="font-sub italic text-base md:text-lg leading-relaxed max-w-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Four journeys, one civilisation. Choose where your China begins.
        </p>
      </section>
    </main>
  );
}

/* One journey: a mounted painting + an English-led caption with a Chinese
   calligraphic inscription and vermillion seal. */
function ChapterRow({ chapter, index, flip }: { chapter: Chapter; index: number; flip: boolean }) {
  return (
    <Link
      href={chapter.href}
      className="ink-spread group block"
      style={{ animationDelay: `${0.1 + index * 0.05}s` }}
    >
      <div
        className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
      >
        {/* Mounted painting */}
        <div className="w-full md:w-[56%] flex-shrink-0">
          <div
            className="relative transition-transform duration-700 group-hover:-translate-y-1"
            style={{
              padding: "10px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              boxShadow: "0 10px 34px -14px rgba(43,38,34,0.4)",
            }}
          >
            <div
              className="relative aspect-[3/2] w-full overflow-hidden"
              style={{
                backgroundImage: `url('${chapter.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.94)",
              }}
            />
          </div>
        </div>

        {/* Caption — English-led */}
        <div className="w-full md:w-[44%] flex items-start gap-6">
          {/* decorative vertical Chinese inscription (the "题画诗") */}
          <div className="hidden sm:flex items-start gap-2 pt-1" aria-hidden="true">
            <p className="vertical font-song text-sm leading-loose" style={{ color: "var(--color-text-muted)", letterSpacing: "0.22em" }}>
              {chapter.poemCn[0]}
            </p>
            <p className="vertical font-song text-sm leading-loose" style={{ color: "var(--color-text-muted)", letterSpacing: "0.22em" }}>
              {chapter.poemCn[1]}
            </p>
          </div>

          {/* English content */}
          <div className="flex flex-col gap-3">
            <p className="font-body text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--color-text-muted)" }}>
              {chapter.places}
            </p>

            <h2
              className="font-display leading-tight"
              style={{ fontSize: "clamp(1.9rem,3vw,2.6rem)", color: "var(--color-text-primary)" }}
            >
              {chapter.en}
            </h2>

            {/* Chinese name + seal */}
            <div className="flex items-center gap-3">
              <span className="font-song text-xl tracking-[0.2em]" style={{ color: "var(--color-text-secondary)" }}>
                {chapter.cn}
              </span>
              <span
                className="seal"
                style={{ width: 30, height: 30, fontSize: "0.72rem", writingMode: "vertical-rl", padding: "2px 0" }}
              >
                {chapter.seal}
              </span>
            </div>

            {/* Translated poem — the "意境", made legible */}
            <p
              className="font-sub italic leading-relaxed mt-1 max-w-sm"
              style={{ fontSize: "0.98rem", color: "var(--color-text-secondary)" }}
            >
              {chapter.poemEn}
            </p>
            <p className="font-body text-[10px] tracking-[0.15em]" style={{ color: "var(--color-text-muted)" }}>
              {chapter.author}
            </p>

            <p
              className="font-body text-[11px] tracking-[0.3em] uppercase mt-3 transition-colors duration-500 group-hover:text-[color:var(--color-accent)]"
              style={{ color: "var(--color-text-primary)" }}
            >
              Explore this journey ↗
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
