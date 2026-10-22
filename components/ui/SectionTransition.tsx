import { cn } from "@/lib/utils";

const surfaces = {
  white: { bg: "bg-white", fill: "fill-white" },
  tint: { bg: "bg-neutral-50", fill: "fill-neutral-50" },
  blue: { bg: "bg-brand-blue", fill: "fill-brand-blue" },
  blueDeep: { bg: "bg-brand-blue-900", fill: "fill-brand-blue-900" },
};

/**
 * Transición curva entre dos secciones de fondo distinto.
 *
 * Es el recurso con el que la página evita los cantos rectos: el color de la
 * sección siguiente entra con una curva que arranca desde la anterior, en vez
 * de empezar de golpe.
 *
 * `from` es la superficie de arriba y `to` la de abajo; la curva se dibuja
 * con el color de `to`.
 */
export function SectionTransition({
  from = "white",
  to = "blue",
  className,
}: {
  from?: keyof typeof surfaces;
  to?: keyof typeof surfaces;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative -mb-px w-full overflow-hidden", surfaces[from].bg, className)}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={cn("block h-[52px] w-full sm:h-[76px]", surfaces[to].fill)}
      >
        <path d="M0,90 C360,10 1080,10 1440,90 Z" />
      </svg>
    </div>
  );
}
