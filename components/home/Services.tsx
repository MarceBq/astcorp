import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services } from "@/data/services";

/**
 * Las líneas de negocio.
 * Tres columnas en escritorio: con 6 servicios quedan dos filas completas.
 */
export function Services() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Servicios"
        title="Soluciones para cada necesidad."
        accent="cada necesidad"
        description="Seis líneas de producción y un solo interlocutor: desde la papelería corporativa hasta la caja que entregas a fin de año."
        action={
          <Button href="/servicios" variant="outline" className="group/cta">
            Ver todos los servicios
            <ArrowRight
              className="size-5 transition-transform duration-300 group-hover/cta:translate-x-1"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Button>
        }
      />

      <RevealGroup gap={0.07} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <RevealItem key={service.slug} className="h-full">
            <ServiceCard service={service} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
