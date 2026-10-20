import { cn } from "@/lib/utils";

/**
 * Transición curva entre dos secciones.
 *
 * Se usa donde el fondo cambia de claro a azul, que es el único corte fuerte
 * que queda en la página. En lugar de un canto recto, el color entra con una
 * curva suave que arranca desde la sección anterior.
 *
 * `from` es el color de la sección que queda arriba; la curva se dibuja con
 * el color de la sección de abajo.
 */
export function SectionTransition({
  variant = "toBlue",
  className,
}: {
  variant?: "toBlue" | "fromBlue";
  className?: string;
}) {
  const fill = variant === "toBlue" ? "fill-brand-blue" : "fill-white";
  const bg = variant === "toBlue" ? "bg-white" : "bg-brand-blue";

  return (
    <div aria-hidden="true" className={cn("relative -mb-px w-full overflow-hidden", bg, className)}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={cn("block h-[60px] w-full sm:h-[80px]", fill)}
      >
        <path d="M0,90 C360,10 1080,10 1440,90 Z" />
      </svg>
    </div>
  );
}
