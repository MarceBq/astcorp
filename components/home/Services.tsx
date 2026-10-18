import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

/**
 * Las líneas de negocio.
 *
 * La rejilla usa 3 columnas en escritorio: con 6 servicios quedan dos filas
 * completas, sin celdas sueltas.
 */
export function Services() {
  return (
    <Section tone="white" size="lg" width="wide" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -left-24 top-1/3 size-[420px] halftone opacity-40"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones para cada necesidad"
          accent="cada necesidad"
          description="Seis líneas de producción y un solo interlocutor: desde la papelería corporativa hasta la caja que entregas a fin de año."
          action={
            <Button href="/servicios" variant="outline" className="group/cta">
              Ver todos los servicios
              <ArrowRight
                className="size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </Button>
          }
        />

        <RevealGroup gap={0.07} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </Section>
  );
}
