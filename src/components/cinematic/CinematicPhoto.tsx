import { ReactNode, CSSProperties } from "react";
import FilmGrain from "./FilmGrain";

interface CinematicPhotoProps {
  /** Multi-layer CSS gradient string simulating photographic depth */
  gradient: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  grain?: boolean;
  grainOpacity?: number;
  vignette?: boolean;
  /** Extra overlay opacity — increase for text-heavy slides */
  overlayDark?: number;
}

/**
 * Renders a rich CSS-gradient "photograph" with optional:
 *  - film grain (SVG feTurbulence)
 *  - cinematic vignette (radial gradient darkening)
 *  - additional dark overlay for text legibility
 */
export default function CinematicPhoto({
  gradient,
  className = "",
  style,
  children,
  grain = true,
  grainOpacity = 0.04,
  vignette = true,
  overlayDark = 0,
}: CinematicPhotoProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {/* Base gradient "photo" */}
      <div className="absolute inset-0" style={{ background: gradient }} />

      {/* Cinematic vignette */}
      {vignette && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.72) 100%)",
            zIndex: 2,
          }}
        />
      )}

      {/* Extra dark overlay for text areas */}
      {overlayDark > 0 && (
        <div
          className="absolute inset-0"
          style={{ background: `rgba(0,0,0,${overlayDark})`, zIndex: 2 }}
        />
      )}

      {/* Film grain */}
      {grain && <FilmGrain opacity={grainOpacity} />}

      {/* Child content sits above all overlays */}
      {children && (
        <div className="relative h-full" style={{ zIndex: 6 }}>
          {children}
        </div>
      )}
    </div>
  );
}
