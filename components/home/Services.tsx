import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SheetNote } from "@/components/ui/PrintMarks";
import { services } from "@/data/services";

/**
 * Las líneas de negocio — papel blanco, sección de respiro.
 *
 * Recursos de imprenta: titular fuera de registro, trama de semitono
 * magenta en degradado, y cada tarjeta con su tira de control, sus marcas de
 * corte y la imagen tratada como separación de color.
 *
 * Tres columnas en escritorio: con 6 servicios quedan dos filas completas.
 */
export function Services() {
  return (
    <Section tone="white" size="lg" width="wide" className="relative overflow-hidden paper">
      <div
        className="pointer-events-none absolute -left-20 top-1/4 size-[400px] halftone-coarse halftone-fade-r text-ink-magenta opacity-30"
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

        <RevealGroup gap={0.07} className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <RevealItem key={service.slug} className="h-full">
              <ServiceCard service={service} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>

        <SheetNote withInks className="mt-12">
          Astcorp — Pliego 04 · Servicios
        </SheetNote>
      </div>
    </Section>
  );
}
