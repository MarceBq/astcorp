import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Media, OffsetFrame } from "@/components/ui/Media";
import { featuredProducts } from "@/data/products";
import { serviceName } from "@/data/services";
import { pad } from "@/lib/utils";

/** Colores de apoyo rotando por tarjeta, a modo de separación CMYK. */
const offsetTones = ["lime", "blue", "cyan", "night"] as const;

/**
 * Productos destacados.
 *
 * Es una vitrina, no un catálogo: muestra una selección corta y deriva al
 * catálogo del servicio correspondiente. El detalle del producto se abre
 * dentro de ese catálogo, no en una ruta propia.
 */
export function FeaturedProducts() {
  const items = featuredProducts(4);
  if (items.length === 0) return null;

  return (
    <Section tone="muted" size="lg" width="wide">
      <SectionHeading
        eyebrow="Destacados"
        title="Productos destacados"
        accent="destacados"
        description="Una muestra de lo que más producimos. El catálogo completo vive dentro de cada servicio."
        action={
          <Link
            href="/servicios"
            className="group/cta inline-flex items-center gap-2 border-b-[3px] border-brand-lime pb-1 font-display text-[14px] font-extrabold uppercase tracking-[0.1em] text-night transition-colors hover:border-night"
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

      <RevealGroup gap={0.06} className="mt-16 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product, index) => (
          <RevealItem key={product.slug}>
            <article className="group relative">
              <OffsetFrame tone={offsetTones[index % offsetTones.length]}>
                <Media
                  src={product.images[0]}
                  alt={product.name}
                  label={product.name}
                  frame="hard"
                  className="aspect-[4/3]"
                  imageClassName="group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Índice sobre la imagen, a la manera de una ficha de pliego */}
                <span
                  className="absolute left-3 top-3 z-20 inline-flex items-center rounded-[6px] border-2 border-night bg-brand-lime px-2 py-0.5 font-display text-[12px] font-black tracking-[-0.02em] text-night"
                  aria-hidden="true"
                >
                  {pad(index + 1)}
                </span>
              </OffsetFrame>

              <div className="mt-6">
                <span className="eyebrow text-brand-blue">{serviceName(product.service)}</span>

                <h3 className="mt-2.5 text-[18px] font-extrabold leading-tight tracking-[-0.03em] text-night">
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
        ))}
      </RevealGroup>
    </Section>
  );
}
