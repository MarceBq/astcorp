import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  /** Duración del ciclo. Más alto = más lento. */
  speed?: string;
  className?: string;
}

/**
 * Cinta infinita en CSS puro: el contenido se duplica y se traslada -50%.
 * Se detiene con `prefers-reduced-motion` (regla global en globals.css) y
 * al pasar el cursor por encima.
 */
export function Marquee({ children, speed = "46s", className }: MarqueeProps) {
  return (
    /* `data-marquee` permite que, con movimiento reducido, la cinta se vuelva
       desplazable a mano en lugar de quedar congelada (regla en globals.css). */
    <div data-marquee className={cn("group relative overflow-hidden mask-fade-x", className)}>
      <div
        className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]"
        style={{ animationDuration: speed }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
