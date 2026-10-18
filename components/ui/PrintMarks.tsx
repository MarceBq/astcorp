import { cn } from "@/lib/utils";

/* ==========================================================================
   Recursos de imprenta reutilizables.
   Todos son decorativos: van con `aria-hidden` salvo que se indique lo
   contrario, porque no aportan información al lector de pantalla.
   ========================================================================== */

/**
 * Tira de control de color.
 *
 * Es la barra de parches CMYK que acompaña a todo pliego impreso. Se usa como
 * separador de sección, en el header, en el footer y en el borde de tarjetas.
 */
export function CmykBar({
  orientation = "horizontal",
  size = "sm",
  className,
  repeat = 1,
}: {
  orientation?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  className?: string;
  /** Cuántas veces se repite la secuencia C-M-Y-K. */
  repeat?: number;
}) {
  const thickness = { sm: 3, md: 6, lg: 10 }[size];
  const length = { sm: 12, md: 18, lg: 26 }[size];
  const vertical = orientation === "vertical";

  const inks = ["bg-ink-cyan", "bg-ink-magenta", "bg-ink-yellow", "bg-ink-key"];
  const parches = Array.from({ length: repeat }).flatMap((_, r) =>
    inks.map((ink, i) => (
      <span
        key={`${r}-${i}`}
        className={cn("block", ink)}
        style={
          vertical
            ? { width: thickness, height: length }
            : { width: length, height: thickness }
        }
      />
    )),
  );

  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex overflow-hidden", vertical && "flex-col", className)}
    >
      {parches}
    </span>
  );
}

/**
 * Tira de control a sangre, de borde a borde.
 * Separa secciones como la banda de registro entre dos pliegos.
 */
export function CmykRule({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("flex h-[6px] w-full", className)}>
      <span className="h-full flex-1 bg-ink-cyan" />
      <span className="h-full flex-1 bg-ink-magenta" />
      <span className="h-full flex-1 bg-ink-yellow" />
      <span className="h-full flex-1 bg-ink-key" />
    </div>
  );
}

/**
 * Marca de registro: la cruz dentro de un círculo que sirve para alinear las
 * cuatro planchas. Aquí se dibuja con las propias tintas en sobreimpresión.
 */
export function RegistrationMark({
  size = 34,
  className,
  tone = "ink",
}: {
  size?: number;
  className?: string;
  /** `ink` sobre fondo claro, `light` sobre fondo oscuro o de color. */
  tone?: "ink" | "light";
}) {
  const stroke = tone === "light" ? "rgba(255,255,255,0.85)" : "var(--ink-key)";

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={cn("shrink-0", className)}
      fill="none"
    >
      {/* Cuadrantes en tintas: el guiño a las cuatro planchas */}
      <path d="M20 20 L20 4 A16 16 0 0 1 36 20 Z" fill="var(--ink-cyan)" opacity="0.9" />
      <path d="M20 20 L36 20 A16 16 0 0 1 20 36 Z" fill="var(--ink-magenta)" opacity="0.9" />
      <path d="M20 20 L20 36 A16 16 0 0 1 4 20 Z" fill="var(--ink-yellow)" opacity="0.9" />
      <circle cx="20" cy="20" r="16" stroke={stroke} strokeWidth="1.5" />
      <circle cx="20" cy="20" r="7" stroke={stroke} strokeWidth="1.5" fill="none" />
      <line x1="20" y1="0" x2="20" y2="40" stroke={stroke} strokeWidth="1.5" />
      <line x1="0" y1="20" x2="40" y2="20" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Marcas de corte en las cuatro esquinas.
 * El contenedor debe ser `relative`. Enmarcan el bloque como un pliego por
 * guillotinar.
 */
export function CropMarks({
  tone = "ink",
  inset = 0,
  className,
}: {
  tone?: "ink" | "light" | "cyan";
  /** Separación en px respecto al borde del contenedor. */
  inset?: number;
  className?: string;
}) {
  const color = {
    ink: "border-ink-key/45",
    light: "border-white/45",
    cyan: "border-ink-cyan",
  }[tone];

  const corner = cn("absolute size-4", color);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      style={{ inset: -inset }}
    >
      <span className={cn(corner, "left-0 top-0 border-l-2 border-t-2")} />
      <span className={cn(corner, "right-0 top-0 border-r-2 border-t-2")} />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2")} />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2")} />
    </div>
  );
}

/**
 * Anotación al margen del pliego: "ASTCORP — PLIEGO 01", "C M Y K", folios.
 * Se lee como la información técnica que se imprime fuera del área de corte.
 */
export function SheetNote({
  children,
  tone = "ink",
  withInks = false,
  className,
}: {
  children: React.ReactNode;
  tone?: "ink" | "light";
  /** Antepone los cuatro puntos de tinta. */
  withInks?: boolean;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "sheet-note inline-flex items-center gap-2",
        tone === "light" ? "text-white/55" : "text-ink-key/45",
        className,
      )}
    >
      {withInks && (
        <span className="inline-flex gap-1">
          <span className="size-1.5 rounded-full bg-ink-cyan" />
          <span className="size-1.5 rounded-full bg-ink-magenta" />
          <span className="size-1.5 rounded-full bg-ink-yellow" />
          <span className="size-1.5 rounded-full bg-ink-key" />
        </span>
      )}
      {children}
    </span>
  );
}

/**
 * Círculos CMYK grandes en sobreimpresión.
 *
 * Con `mix-blend-mode: multiply` las zonas de cruce generan los colores
 * mezclados reales (azul, rojo, verde), igual que al superponer tintas.
 * Va detrás del contenido: el contenedor padre necesita `relative`.
 */
export function OverprintShapes({
  className,
  size = 320,
  opacity = 0.85,
}: {
  className?: string;
  size?: number;
  opacity?: number;
}) {
  const common = "absolute rounded-full overprint";

  return (
    <div aria-hidden="true" className={cn("overprint-shapes", className)}>
      <span
        className={cn(common, "bg-ink-cyan")}
        style={{ width: size, height: size, left: 0, top: 0, opacity }}
      />
      <span
        className={cn(common, "bg-ink-magenta")}
        style={{ width: size, height: size, left: size * 0.46, top: 0, opacity }}
      />
      <span
        className={cn(common, "bg-ink-yellow")}
        style={{ width: size, height: size, left: size * 0.23, top: size * 0.42, opacity }}
      />
    </div>
  );
}
