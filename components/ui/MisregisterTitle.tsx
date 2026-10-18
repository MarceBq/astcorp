import { cn } from "@/lib/utils";

/**
 * Desplazamiento de cada plancha, en `em` para que escale con el cuerpo.
 * Lo bastante amplio para que el desregistro se lea como recurso gráfico y
 * no como un borde sucio; el texto legible va encima a color pleno.
 */
const planchas = [
  { ink: "text-ink-cyan", mx: "-0.058em", my: "0.034em" },
  { ink: "text-ink-magenta", mx: "0.062em", my: "-0.036em" },
  { ink: "text-ink-yellow", mx: "0.022em", my: "0.064em" },
];

/**
 * Titular fuera de registro.
 *
 * Reproduce una impresión mal registrada: tres copias del texto en cyan,
 * magenta y amarillo, desplazadas y en `mix-blend-mode: multiply`, detrás del
 * texto real. Donde las capas se cruzan aparecen los colores mezclados.
 *
 * El texto legible va siempre encima y a color pleno: las capas son
 * decorativas (`aria-hidden`) y nunca lo sustituyen.
 *
 * `animate` arranca las planchas en registro y las separa al cargar. Solo
 * tiene sentido sobre el pliegue; la regla global de `prefers-reduced-motion`
 * la neutraliza.
 */
export function MisregisterTitle({
  text,
  as: Tag = "h2",
  tone = "ink",
  blend,
  className,
  animate = false,
  children,
}: {
  /** Texto de las planchas. Debe coincidir con el contenido visible. */
  text: string;
  as?: "h1" | "h2" | "h3";
  /** Color del texto legible que va encima. */
  tone?: "ink" | "light";
  /** Por defecto multiplica sobre claro y suma sobre oscuro. */
  blend?: "multiply" | "screen";
  className?: string;
  animate?: boolean;
  /** Contenido visible. Si se omite, se usa `text`. */
  children?: React.ReactNode;
}) {
  const mezcla = (blend ?? (tone === "light" ? "screen" : "multiply")) === "screen"
    ? "overprint-screen"
    : "overprint";

  return (
    <Tag className={cn("misregister-title", className)}>
      {planchas.map((p) => (
        <span
          key={p.ink}
          aria-hidden="true"
          className={cn(
            "misregister-layer",
            mezcla,
            p.ink,
            animate && "animate-[misregister-in_1s_var(--ease-out-soft)_both]",
          )}
          style={
            {
              "--mx": p.mx,
              "--my": p.my,
              transform: `translate(${p.mx}, ${p.my})`,
            } as React.CSSProperties
          }
        >
          {text}
        </span>
      ))}

      <span className={cn("relative", tone === "light" ? "text-white" : "text-ink-key")}>
        {children ?? text}
      </span>
    </Tag>
  );
}

/**
 * Cifra con capas de tinta superpuestas.
 *
 * Misma técnica que el titular, aplicada a números y datos: las planchas CMY
 * quedan detrás y el valor legible encima. Pensada para estadísticas,
 * numeración de bloques y pasos del proceso.
 */
export function InkFigure({
  value,
  tone = "ink",
  blend,
  className,
}: {
  value: string;
  tone?: "ink" | "light" | "lime";
  blend?: "multiply" | "screen";
  className?: string;
}) {
  const mezcla =
    (blend ?? (tone === "ink" ? "multiply" : "screen")) === "screen"
      ? "overprint-screen"
      : "overprint";

  const color = {
    ink: "text-ink-key",
    light: "text-white",
    lime: "text-brand-lime",
  }[tone];

  return (
    <span className={cn("misregister-title stat-figure inline-block", className)}>
      {planchas.map((p) => (
        <span
          key={p.ink}
          aria-hidden="true"
          className={cn("misregister-layer", mezcla, p.ink)}
          style={{ transform: `translate(${p.mx}, ${p.my})` }}
        >
          {value}
        </span>
      ))}
      <span className={cn("relative", color)}>{value}</span>
    </span>
  );
}
