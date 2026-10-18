import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "white" | "muted" | "soft" | "blue" | "blueDeep" | "lime";
  size?: "sm" | "md" | "lg";
  width?: "default" | "wide" | "narrow";
  /** Desactiva el Container para secciones que gestionan su propio ancho. */
  bleed?: boolean;
}

/**
 * Fondos de sección: solo papel.
 *
 * El negro queda excluido como superficie a propósito — es tinta, no soporte.
 * Los fondos son blanco, tonos claros, el azul de marca y el verde lima.
 */
const tones = {
  white: "bg-surface text-ink",
  muted: "bg-surface-2 text-ink",
  soft: "bg-surface-3 text-ink",
  blue: "bg-brand-blue text-white",
  blueDeep: "bg-brand-blue-ink text-white",
  lime: "bg-brand-lime text-ink-key",
};

const paddings = {
  sm: "py-14 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
};

export function Section({
  tone = "white",
  size = "md",
  width = "default",
  bleed = false,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(tones[tone], paddings[size], className)} {...props}>
      {bleed ? children : <Container width={width}>{children}</Container>}
    </section>
  );
}
