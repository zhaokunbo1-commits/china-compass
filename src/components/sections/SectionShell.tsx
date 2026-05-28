import { ReactNode, CSSProperties } from "react";

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  id?: string;
  narrow?: boolean;
  style?: CSSProperties;
}

export default function SectionShell({
  children,
  className = "",
  id,
  narrow = false,
  style,
}: SectionShellProps) {
  return (
    <section id={id} className={`relative w-full ${className}`} style={style}>
      <div
        className={[
          "mx-auto px-6 md:px-10 py-20 md:py-28",
          narrow ? "max-w-3xl" : "max-w-screen-xl",
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
}
