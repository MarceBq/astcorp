import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ProductCatalog } from "@/components/services/ProductCatalog";
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
      <ServiceHero service={service} productCount={items.length} />

      {/* Descripción del servicio */}
      <Section tone="white" size="lg" width="wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-px w-6 bg-brand-lime" aria-hidden="true" />
              <span className="eyebrow text-brand-blue">El servicio</span>
            </div>

            <h2 className="text-[clamp(1.6rem,2.8vw,2.25rem)] font-semibold leading-[1.1] text-heading">
              {service.description}
            </h2>

            <p className="mt-6 text-[16px] leading-relaxed text-ink-2">{service.intro}</p>

            <div className="mt-8 border-t border-line pt-7">
              <h3 className="eyebrow text-ink-3">Qué incluye</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.subcategories.map((sub) => (
                  <li
                    key={sub.slug}
                    className="rounded-[8px] border border-line bg-surface-2 px-3 py-1.5 text-[13.5px] text-ink-2"
                  >
                    {sub.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Media
              src={service.cover}
              alt={service.title}
              label={service.name}
              className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </Reveal>
        </div>
      </Section>

      {/* Beneficios */}
      <Section tone="muted" size="lg" width="wide">
        <SectionHeading eyebrow="Beneficios" title={`Por qué producir tu ${service.name.toLowerCase()} con ASTCORP.`} />

        <RevealGroup
          gap={0.06}
          className="mt-12 grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {service.benefits.map((benefit) => (
            <RevealItem key={benefit.title} className="bg-white p-6 lg:p-7">
              <Check className="size-[22px] text-brand-blue" strokeWidth={2} aria-hidden="true" />
              <h3 className="mt-5 text-[16px] font-semibold leading-snug tracking-[-0.02em] text-ink">
                {benefit.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{benefit.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* Catálogo */}
      <Section id="catalogo" tone="white" size="lg" width="wide">
        <SectionHeading
          eyebrow="Catálogo"
          title={`Catálogo de ${service.name}`}
          description="Filtra por categoría y abre cualquier producto para ver el detalle. Todos los trabajos se cotizan según material, acabado y volumen."
        />

        <div className="mt-12">
          <ProductCatalog products={items} subcategories={service.subcategories} />
        </div>
      </Section>

      {/* Otros servicios */}
      <Section tone="muted" size="sm" width="wide">
        <h2 className="eyebrow text-ink-3">Otros servicios</h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-3">
          {others.map((other) => (
            <Link
              key={other.slug}
              href={`/servicios/${other.slug}`}
              className="group bg-white p-6 transition-colors hover:bg-surface-2"
            >
              <span className="text-[17px] font-semibold tracking-[-0.02em] text-ink transition-colors group-hover:text-brand-blue">
                {other.title}
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
