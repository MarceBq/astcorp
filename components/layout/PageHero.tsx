import { Container } from "@/components/ui/Container";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  /** Fragmento del título que se destaca en azul. */
  titleAccent?: string;
  description?: string;
  breadcrumbs?: Crumb[];
  /** Bloque opcional a la derecha: métricas, CTA o metadatos. */
  aside?: React.ReactNode;
  className?: string;
}

/**
 * Encabezado de páginas interiores.
 *
 * Mismo sistema que `SectionHeading`: filete lima, etiqueta azul y titular
 * con la palabra clave en azul. Sobre un degradado que nace y muere en claro,
 * para no cortar contra la sección siguiente.
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
  const index = titleAccent ? title.indexOf(titleAccent) : -1;

  const heading =
    index === -1 || !titleAccent ? (
      title
    ) : (
      <>
        {title.slice(0, index)}
        <span className="text-brand-blue">{titleAccent}</span>
        {title.slice(index + titleAccent.length)}
      </>
    );

  return (
    <div className={cn("bg-gradient-to-b from-neutral-50 to-white", className)}>
      <Container width="wide">
        <div className="pb-14 pt-[124px] sm:pb-16 sm:pt-[140px] lg:pb-20 lg:pt-[168px]">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} className="mb-8" />}

          <div className={cn("gap-12", aside && "lg:flex lg:items-end lg:justify-between")}>
            <Reveal className="max-w-3xl">
              {eyebrow && (
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-[3px] w-7 rounded-full bg-brand-lime" aria-hidden="true" />
                  <span className="eyebrow text-brand-blue">{eyebrow}</span>
                </div>
              )}

              <h1 className="text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.06] text-ink">
                {heading}
              </h1>

              {description && (
                <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-2">
                  {description}
                </p>
              )}
            </Reveal>

            {aside && (
              <Reveal delay={0.08} className="mt-10 shrink-0 lg:mt-0">
                {aside}
              </Reveal>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
