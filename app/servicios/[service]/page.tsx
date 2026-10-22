import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { HighlightText } from "@/components/ui/HighlightText";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { getService, services } from "@/data/services";
import { productsByService } from "@/data/products";
import type { ServiceSlug } from "@/data/types";

interface Params {
  params: Promise<{ service: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.title} para empresas`,
    description: service.description,
    alternates: { canonical: `/servicios/${service.slug}` },
    openGraph: {
      title: `${service.title} | ASTCORP`,
      description: service.description,
      url: `/servicios/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const items = productsByService(service.slug as ServiceSlug);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Hero */}
      <ServiceHero service={service} hasCatalog={items.length > 0} />

      {/* Catálogo: solo encabezado y galería. Sin filtros, sin ficha y sin
          texto sobre las imágenes; el detalle se resuelve en la cotización.
          Los servicios sin productos cargados no renderizan la sección, para
          no dejar un encabezado sin nada debajo. */}
      {items.length > 0 && (
        <Section id="catalogo" tone="plain" size="md" width="wide">
          <SectionHeading
            eyebrow="Catálogo"
            title={`Catálogo de ${service.name}`}
            description="Una muestra de lo que producimos en esta línea. Todos los trabajos se cotizan según material, acabado y volumen."
          />

          {/* Cada imagen se revela por su cuenta en lugar de colgar de un
              `RevealGroup`: con catálogos largos la rejilla es más alta que
              la pantalla y el umbral del grupo no llegaría a cumplirse. El
              retraso por columna conserva el escalonado de cada fila. */}
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
            {items.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 3) * 0.06}>
                <Media
                  src={product.images[0]}
                  alt={`${product.name} — ${service.name}`}
                  label={product.name}
                  className="aspect-[4/3] transition-[transform,box-shadow] duration-500 ease-out-soft hover:-translate-y-1 hover:shadow-card"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Otros servicios */}
      <Section tone="tint" size="sm" width="wide">
        <h2 className="eyebrow text-ink-3">Otros servicios</h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/servicios/${other.slug}`}
              className="group bg-white p-6 transition-colors hover:bg-neutral-50"
            >
              <span className="block text-[17px] font-semibold leading-relaxed tracking-[-0.02em]">
                <HighlightText>{other.title}</HighlightText>
              </span>
              <span className="mt-2 block text-[14px] leading-relaxed text-ink-2">
                {other.short}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <ServiceCTA service={service} />
    </>
  );
}
