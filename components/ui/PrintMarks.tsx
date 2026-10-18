import { cn } from "@/lib/utils";

/**
 * Barra de registro CMYK.
 *
 * Es la tira de control de color que llevan los pliegos de imprenta, reducida
 * a un detalle de cuatro segmentos. Acompaña a cada etiqueta de sección y da
 * el guiño al oficio sin ocupar espacio.
 */
export function CmykRule({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const last = tone === "dark" ? "bg-white" : "bg-night";

  return (
    <span className={cn("inline-flex h-[3px] overflow-hidden rounded-full", className)} aria-hidden="true">
      <span className="block h-full w-3 bg-cyan" />
      <span className="block h-full w-3 bg-magenta" />
      <span className="block h-full w-3 bg-brand-lime" />
      <span className={cn("block h-full w-3", last)} />
    </span>
  );
}

/**
 * Marcas de corte en las cuatro esquinas de un bloque.
 *
 * El contenedor debe ser `relative`. Son puramente decorativas: enmarcan la
 * sección como si fuera un pliego por guillotinar.
 */
export function CropMarks({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark" | "lime";
  className?: string;
}) {
  const color = {
    light: "border-line-strong",
    dark: "border-white/25",
    lime: "border-night/25",
  }[tone];

  const corner = cn("absolute size-4", color);

  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      <span className={cn(corner, "left-0 top-0 border-l-2 border-t-2")} />
      <span className={cn(corner, "right-0 top-0 border-r-2 border-t-2")} />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2")} />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2")} />
    </div>
  );
}
