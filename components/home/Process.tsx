import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionTransition } from "@/components/ui/SectionTransition";
import { processSteps } from "@/data/process";

/**
 * Proceso: cotiza, define, produce, entrega.
 *
 * Bloque azul de marca con los pasos en verde lima. Entra y sale con curva
 * para no leerse como una lámina aparte: el azul nace desde la sección de
 * arriba y devuelve el blanco a la de abajo.
 */
export function Process() {
  return (
    <>
      <SectionTransition from="white" to="blue" />

      <section className="bg-gradient-to-b from-brand-blue to-brand-blue-700 pb-6 pt-4 text-white">
        <Container width="wide">
          <SectionHeading
            tone="dark"
            eyebrow="Proceso"
            title="Cómo trabajamos."
            accent="trabajamos"
            description="Cuatro pasos, un solo responsable del proyecto de principio a fin."
          />

          <RevealGroup
            as="ol"
            gap={0.08}
            className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          >
            {processSteps.map((step, index) => (
              <RevealItem as="li" key={step.step} className="group relative">
                {/* Riel continuo: une los cuatro pasos en vez de presentarlos
                    como cuatro bloques sueltos. */}
                <span
                  className="relative block h-[3px] w-full rounded-full bg-white/25"
                  aria-hidden="true"
                >
                  <span className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-brand-lime transition-[width] duration-500 group-hover:w-full" />
                </span>

                <div className="mt-7 flex items-baseline gap-3">
                  <span className="stat-figure text-[32px] leading-none text-brand-lime">
                    {step.step}
                  </span>
                  <h3 className="text-[17px] font-bold leading-snug tracking-[-0.02em] text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-3 text-[14.5px] leading-relaxed text-white/90">
                  {step.description}
                </p>

                {/* Conector: prolonga el riel de un paso al siguiente */}
                {index < processSteps.length - 1 && (
                  <span
                    className="absolute -top-px left-full hidden h-[3px] w-8 bg-white/25 lg:block"
                    aria-hidden="true"
                  />
                )}
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <SectionTransition from="blue" to="white" />
    </>
  );
}
