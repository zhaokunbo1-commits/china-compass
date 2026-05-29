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
          /* Responsive padding: tighter on standard 1080p, fuller on 1440p+ */
          "mx-auto px-6 md:px-10 xl:px-14",
          "py-12 md:py-16 xl:py-24",
          narrow ? "max-w-3xl" : "max-w-7xl",
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
}
