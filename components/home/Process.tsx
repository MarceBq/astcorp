import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

/**
 * Proceso: cotiza, define, produce, entrega.
 *
 * Cada paso lleva uno de los cuatro colores de la separación CMYK, en el
 * mismo orden del pliego: cian, magenta, amarillo (aquí el lime) y negro.
 */
const stepTones = [
  /* El cian es una tinta clara: con texto blanco daría 2.4:1, así que lleva
     tinta oscura encima (7.7:1). El magenta sí admite blanco (4.3:1). */
  { bar: "bg-cyan", chip: "bg-cyan text-night" },
  { bar: "bg-magenta", chip: "bg-magenta text-white" },
  { bar: "bg-brand-lime", chip: "bg-brand-lime text-night" },
  { bar: "bg-night", chip: "bg-night text-white" },
];

export function Process() {
  return (
    <Section tone="white" size="lg" width="wide" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-28 bottom-0 size-[420px] halftone opacity-40"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo trabajamos"
          accent="trabajamos"
          description="Cuatro pasos, un solo responsable del proyecto de principio a fin."
        />

        <RevealGroup
          as="ol"
          gap={0.09}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {processSteps.map((step, index) => {
            const tone = stepTones[index % stepTones.length];

            return (
              <RevealItem as="li" key={step.step} className="group relative lg:pr-6">
                {/* Barra de color: la tira de registro del pliego */}
                <span
                  className={cn(
                    "block h-[7px] w-full origin-left rounded-full transition-transform duration-500 group-hover:scale-x-100",
                    tone.bar,
                  )}
                  aria-hidden="true"
                />

                <span
                  className={cn(
                    "mt-7 inline-flex items-center justify-center rounded-[10px] border-2 border-night px-3 py-1 font-display text-[22px] font-black leading-none tracking-[-0.05em] transition-transform duration-300 group-hover:-translate-y-1",
                    tone.chip,
                  )}
                  aria-hidden="true"
                >
                  {step.step}
                </span>

                <h3 className="mt-5 text-[19px] font-extrabold leading-tight tracking-[-0.03em] text-night">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{step.description}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </Section>
  );
}
