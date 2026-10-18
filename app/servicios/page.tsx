import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABand } from "@/components/ui/CTABand";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Process } from "@/components/home/Process";
import { services } from "@/data/services";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Servicios — Offset, Visual, Merch y Box Corporativos",
  description:
    "Las cuatro líneas de ASTCORP: impresión offset, publicidad visual, merchandising corporativo y box corporativos para empresas en Perú.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios | ASTCORP",
    description:
      "Impresión offset, publicidad visual, merchandising y box corporativos para empresas.",
    url: "/servicios",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Soluciones para cada necesidad"
        titleAccent="cada necesidad"
        description="Cuatro líneas de negocio que cubren desde la papelería corporativa hasta la implementación visual de un punto de venta. Cada servicio incluye su catálogo y se cotiza según material, acabado y volumen."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]}
        aside={
          <div className="flex gap-10">
            <div>
              <div className="stat-figure text-[38px] leading-none text-ink">{services.length}</div>
              <p className="mt-2 text-[13px] text-ink-2">Líneas de negocio</p>
            </div>
            <div>
              <div className="stat-figure text-[38px] leading-none text-ink">{products.length}</div>
              <p className="mt-2 text-[13px] text-ink-2">Productos en catálogo</p>
            </div>
          </div>
        }
      />

      <Section tone="white" size="lg" width="wide">
        <RevealGroup gap={0.07} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Process />

      <CTABand />
    </>
  );
}
