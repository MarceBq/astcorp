import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { AccentTitle } from "@/components/ui/AccentTitle";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  /** Fragmento del título que se resalta en azul con subrayado lime. */
  titleAccent?: string;
  description?: string;
  breadcrumbs?: Crumb[];
  /** Bloque opcional a la derecha: métricas, CTA o metadatos. */
  aside?: React.ReactNode;
  className?: string;
}

/**
 * Encabezado estándar de páginas interiores.
 * Compensa la altura del navbar fijo y mantiene una jerarquía consistente
 * entre catálogo, sectores, proyectos y páginas institucionales.
 */
export function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  breadcrumbs,
  aside,
  className,
}: PageHeroProps) {
  return (
    <div className={cn("relative overflow-hidden border-b border-line bg-surface-2", className)}>
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-32 size-[420px] rounded-full bg-brand-blue-soft blur-[120px] opacity-60"
        aria-hidden="true"
      />

      <Container width="wide" className="relative">
        <div className="pb-14 pt-[124px] sm:pb-16 sm:pt-[140px] lg:pb-20 lg:pt-[168px] ">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-8" />}

          <div className={cn("gap-12", aside && "lg:flex lg:items-end lg:justify-between")}>
            <Reveal className="max-w-3xl">
              {/* Línea de cabecera: predomina el azul, con remate lime */}
              {eyebrow && (
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="h-[3px] w-9 rounded-full bg-brand-blue" aria-hidden="true" />
                  <span className="eyebrow text-brand-blue">{eyebrow}</span>
                </div>
              )}

              <AccentTitle
                text={title}
                accent={titleAccent}
                className="text-[clamp(2.1rem,4.6vw,3.6rem)] font-semibold leading-[1.05]"
              />

              {description && (
                <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-2">{description}</p>
              )}
            </Reveal>

            {aside && (
              <Reveal delay={0.1} className="mt-10 shrink-0 lg:mt-0">
                {aside}
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
