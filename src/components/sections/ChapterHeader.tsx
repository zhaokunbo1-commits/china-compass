interface ChapterHeaderProps {
  en: string;
  cn: string;
  places: string;
  poemEn: string;
  author: string;
  seal: string;
}

/**
 * Chapter frontispiece — English-led title with a Chinese name, vermillion
 * seal, and a translated classical couplet. Sets the painterly mood while
 * staying fully legible for inbound travellers.
 */
export default function ChapterHeader({
  en,
  cn,
  places,
  poemEn,
  author,
  seal,
}: ChapterHeaderProps) {
  return (
    <header
      className="ink-spread text-center max-w-2xl mx-auto mb-16 md:mb-20"
      style={{ paddingTop: "clamp(6rem, 11vh, 8.5rem)" }}
    >
      <p
        className="font-body text-[10px] tracking-[0.35em] uppercase mb-5"
        style={{ color: "var(--color-text-muted)" }}
      >
        {places}
      </p>

      <h1
        className="font-display leading-[1.1]"
        style={{
          fontSize: "clamp(2.4rem, 5vw, 4rem)",
          color: "var(--color-text-primary)",
        }}
      >
        {en}
      </h1>

      <div className="flex items-center justify-center gap-3 mt-4">
        <span className="block w-7 h-px" style={{ background: "var(--color-border-strong)" }} />
        <span className="font-song text-lg tracking-[0.28em]" style={{ color: "var(--color-text-secondary)" }}>
          {cn}
        </span>
        <span
          className="seal"
          style={{ width: 30, height: 30, fontSize: "0.72rem", writingMode: "vertical-rl", padding: "2px 0" }}
        >
          {seal}
        </span>
        <span className="block w-7 h-px" style={{ background: "var(--color-border-strong)" }} />
      </div>

      <p
        className="font-sub italic leading-relaxed mt-7 max-w-xl mx-auto"
        style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "var(--color-text-secondary)" }}
      >
        {poemEn}
      </p>
      <p
        className="font-body text-[10px] tracking-[0.2em] mt-2"
        style={{ color: "var(--color-text-muted)" }}
      >
        {author}
      </p>
    </header>
  );
}
