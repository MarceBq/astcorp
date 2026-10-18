import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Media, SeparationFrame } from "@/components/ui/Media";
import { CropMarks, SheetNote } from "@/components/ui/PrintMarks";
import { featuredProducts } from "@/data/products";
import { serviceName } from "@/data/services";
import { cn, pad } from "@/lib/utils";

/** Secuencia de planchas: una tinta por tarjeta, en orden de pliego. */
const planchas = [
  { frame: "cyan", chip: "bg-ink-cyan text-ink-key" },
  { frame: "magenta", chip: "bg-ink-magenta text-white" },
  { frame: "yellow", chip: "bg-ink-yellow text-ink-key" },
  { frame: "key", chip: "bg-ink-key text-white" },
] as const;

/**
 * Productos destacados — papel claro, sección de respiro.
 *
 * Recursos de imprenta: cada imagen sale como separación de color (desaturada
 * con planchas cyan y magenta desplazadas) y entra en registro al pasar el
 * cursor; detrás, una plancha sólida desplazada en la tinta de la tarjeta;
 * más marcas de corte y folio entintado.
 *
 * Es una vitrina, no un catálogo: deriva al catálogo de cada servicio.
 */
export function FeaturedProducts() {
  const items = featuredProducts(4);
  if (items.length === 0) return null;

  return (
    <Section tone="muted" size="lg" width="wide" className="relative overflow-hidden paper">
      <SectionHeading
        eyebrow="Destacados"
        title="Productos destacados"
        accent="destacados"
        description="Una muestra de lo que más producimos. El catálogo completo vive dentro de cada servicio."
        action={
          <Link
            href="/servicios"
            className="group/cta inline-flex items-center gap-2 border-b-[3px] border-ink-magenta pb-1 font-display text-[14px] font-extrabold uppercase tracking-[0.1em] text-ink-key transition-colors hover:border-ink-cyan"
          >
            Ver catálogo
            <ArrowRight
              className="size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1"
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </Link>
        }
      />

      <RevealGroup gap={0.06} className="mt-16 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product, index) => {
          const plancha = planchas[index % planchas.length];

          return (
            <RevealItem key={product.slug}>
              <article className="group relative">
                <SeparationFrame tone={plancha.frame}>
                  <div className="relative">
                    <Media
                      src={product.images[0]}
                      alt={product.name}
                      label={product.name}
                      frame="hard"
                      separation
                      className="aspect-[4/3]"
                      imageClassName="group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <CropMarks inset={-9} />

                    <span
                      className={cn(
                        "absolute left-3 top-3 z-20 inline-flex items-center rounded-[6px] border-2 border-ink-key px-2 py-0.5 font-display text-[12px] font-black tracking-[-0.02em]",
                        plancha.chip,
                      )}
                      aria-hidden="true"
                    >
                      {pad(index + 1)}
                    </span>
                  </div>
                </SeparationFrame>

                <div className="mt-7">
                  <span className="eyebrow text-ink-key/60">{serviceName(product.service)}</span>

                  <h3 className="mt-2.5 text-[18px] font-extrabold leading-tight tracking-[-0.03em] text-ink-key">
                    <Link
                      href={`/servicios/${product.service}#catalogo`}
                      className="transition-colors after:absolute after:inset-0 group-hover:text-brand-blue"
                    >
                      {product.name}
                    </Link>
                  </h3>

                  <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{product.summary}</p>
                </div>
              </article>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <SheetNote withInks className="mt-14">
        Astcorp — Pliego 07 · Destacados
      </SheetNote>
    </Section>
  );
}
