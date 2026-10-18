import { cn } from "@/lib/utils";

export type HighlightVariant = "underline" | "marker" | "outline" | "blue";

/**
 * Titular con un fragmento resaltado.
 *
 * Variantes:
 *  - `underline`: barra lime gruesa bajo el fragmento. El texto queda en su
 *    color oscuro, así que es la opción segura sobre fondo claro.
 *  - `marker`: bloque lime detrás del fragmento, con un giro mínimo para que
 *    se lea como trazo de marcador. Texto casi negro encima (14.6:1).
 *  - `outline`: fragmento calado, solo contorno.
 *  - `blue`: bloque azul sólido con texto blanco; pensado para fondos lime,
 *    donde un resaltado lime no se vería.
 *
 * El lime nunca se usa como color de texto sobre fondo claro: su contraste
 * contra blanco es 1.3:1.
 */
export function AccentTitle({
  text,
  accent,
  as: Tag = "h1",
  className,
  highlight = "underline",
  baseColor = "text-heading",
  id,
}: {
  text: string;
  accent?: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
  highlight?: HighlightVariant;
  /** Color del texto no resaltado. Va aparte para no chocar con `className`. */
  baseColor?: string;
  id?: string;
}) {
  const index = accent ? text.indexOf(accent) : -1;

  if (!accent || index === -1) {
    return (
      <Tag id={id} className={cn(baseColor, className)}>
        {text}
      </Tag>
    );
  }

  const before = text.slice(0, index);
  const after = text.slice(index + accent.length);

  return (
    <Tag id={id} className={cn(baseColor, className)}>
      {before}
      <Highlight variant={highlight}>{accent}</Highlight>
      {after}
    </Tag>
  );
}

/** Resaltado reutilizable, también fuera de los titulares. */
export function Highlight({
  variant = "underline",
  children,
}: {
  variant?: HighlightVariant;
  children: React.ReactNode;
}) {
  if (variant === "outline") {
    return <span className="text-stroke-ink">{children}</span>;
  }

  if (variant === "marker") {
    return (
      <span className="relative inline-block text-night">
        <span className="relative z-10">{children}</span>
        <span
          className="absolute -inset-x-[0.14em] -inset-y-[0.04em] z-0 -rotate-[0.7deg] bg-brand-lime"
          aria-hidden="true"
        />
      </span>
    );
  }

  if (variant === "blue") {
    return (
      <span className="relative inline-block">
        <span className="relative z-10 text-white">{children}</span>
        <span
          className="absolute -inset-x-2 -inset-y-[0.06em] z-0 rounded-[8px] bg-brand-blue"
          aria-hidden="true"
        />
      </span>
    );
  }

  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-x-0 bottom-[0.04em] z-0 h-[0.26em] bg-brand-lime"
        aria-hidden="true"
      />
    </span>
  );
}
