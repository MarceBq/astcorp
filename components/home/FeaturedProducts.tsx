import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { featuredProducts } from "@/data/products";
import { serviceName } from "@/data/services";

/**
 * Productos destacados.
 *
 * Es una vitrina, no un catálogo: muestra una selección corta y deriva al
 * catálogo del servicio correspondiente.
 */
export function FeaturedProducts() {
  const items = featuredProducts(4);
  if (items.length === 0) return null;

  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Destacados"
        title="Productos destacados."
        accent="destacados"
        description="Una muestra de lo que más producimos. El catálogo completo vive dentro de cada servicio."
        action={
          <Link
            href="/servicios"
            className="group/cta inline-flex items-center gap-2 text-[14.5px] font-semibold text-brand-blue"
          >
            Ver catálogo
            <ArrowRight
              className="size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        }
      />

      <RevealGroup gap={0.06} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((product) => (
          <RevealItem key={product.slug}>
            <article className="group relative">
              <Media
                src={product.images[0]}
                alt={product.name}
                label={product.name}
                className="aspect-[4/3] transition-colors duration-300 group-hover:border-brand-blue/30"
                imageClassName="group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="mt-5">
                <span className="eyebrow text-brand-blue">{serviceName(product.service)}</span>

                <h3 className="mt-2.5 text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink">
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
