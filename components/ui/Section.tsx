import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "plain" | "tint" | "blue";
  size?: "md" | "sm";
  width?: "default" | "wide" | "narrow";
  /** Desactiva el Container para secciones que gestionan su propio ancho. */
  bleed?: boolean;
}

/**
 * Fondos de sección. Solo tres, y dos de ellos son prácticamente blanco:
 * la continuidad de la página depende de no cambiar de superficie a cada paso.
 *
 * `tint` no es un bloque de color plano sino un degradado que nace y muere en
 * blanco, de modo que no deja cantos visibles contra las secciones vecinas.
 * El azul se reserva al cierre y al footer.
 */
const tones = {
  plain: "bg-white",
  tint: "bg-gradient-to-b from-white via-neutral-50 to-white",
  blue: "bg-brand-blue text-white",
};

/** Un único ritmo vertical para todo el sitio. */
const paddings = {
  md: "py-20 sm:py-24 lg:py-28",
  sm: "py-14 sm:py-16",
};

const widths = {
  narrow: "narrow",
  default: "default",
  wide: "wide",
} as const;

export function Section({
  tone = "plain",
  size = "md",
  width = "wide",
  bleed = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(tones[tone], paddings[size], className)} {...props}>
      {bleed ? children : <Container width={widths[width]}>{children}</Container>}
    </section>
  );
}
