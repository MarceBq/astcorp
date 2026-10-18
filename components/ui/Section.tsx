import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: "white" | "muted" | "soft" | "night" | "brand" | "blue" | "lime";
  size?: "sm" | "md" | "lg";
  width?: "default" | "wide" | "narrow";
  /** Desactiva el Container para secciones que gestionan su propio ancho. */
  bleed?: boolean;
}

/**
 * Paleta de fondos de sección. El ritmo del home alterna claro, oscuro y
 * acento; `night` es la base oscura y `lime` el bloque de acento.
 */
const tones = {
  white: "bg-surface text-ink",
  muted: "bg-surface-2 text-ink",
  soft: "bg-surface-3 text-ink",
  night: "bg-night text-white",
  brand: "bg-brand-blue-ink text-white",
  blue: "bg-brand-blue text-white",
  lime: "bg-brand-lime text-night",
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
