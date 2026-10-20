import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

/** Proceso: cotiza, define, produce, entrega. */
export function Process() {
  return (
    <Section tone="plain">
      <SectionHeading
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
            {/* Riel continuo: une los cuatro pasos en escritorio en vez de
                presentarlos como cuatro bloques sueltos. */}
            <span className="relative block h-[3px] w-full rounded-full bg-neutral-200" aria-hidden="true">
              <span className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-brand-lime transition-[width] duration-500 group-hover:w-full" />
            </span>

            <div className="mt-7 flex items-baseline gap-3">
              <span className="stat-figure text-[28px] leading-none text-brand-blue">
                {step.step}
              </span>
              <h3 className="text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink">
                {step.title}
              </h3>
            </div>

            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">{step.description}</p>

            {/* Conector entre pasos: prolonga el riel de una tarjeta a la siguiente */}
            {index < processSteps.length - 1 && (
              <span
                className="absolute -top-px left-full hidden h-[3px] w-8 bg-neutral-200 lg:block"
                aria-hidden="true"
              />
            )}
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
