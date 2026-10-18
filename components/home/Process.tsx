import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SheetNote } from "@/components/ui/PrintMarks";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";

/**
 * Proceso — papel blanco, sección de respiro.
 *
 * Los cuatro pasos llevan las cuatro tintas en el orden real de impresión:
 * cyan, magenta, amarillo y negro. Cada paso es una plancha.
 *
 * El texto sobre cyan y amarillo va en K: con blanco darían 2.5:1 y 1.2:1.
 * Solo el magenta admite blanco (4.3:1).
 */
const planchas = [
  { nombre: "Cyan", barra: "bg-ink-cyan", chip: "bg-ink-cyan text-ink-key" },
  { nombre: "Magenta", barra: "bg-ink-magenta", chip: "bg-ink-magenta text-white" },
  { nombre: "Amarillo", barra: "bg-ink-yellow", chip: "bg-ink-yellow text-ink-key" },
  { nombre: "Negro", barra: "bg-ink-key", chip: "bg-ink-key text-white" },
];

export function Process() {
  return (
    <Section tone="white" size="lg" width="wide" className="relative overflow-hidden paper">
      <div
        className="pointer-events-none absolute -right-24 bottom-0 size-[400px] halftone-coarse halftone-fade-t text-ink-yellow opacity-50"
        aria-hidden="true"
      />

      <div className="relative">
        <SectionHeading
          eyebrow="Proceso"
          title="Cómo trabajamos"
          accent="trabajamos"
          description="Cuatro pasos, un solo responsable del proyecto de principio a fin. Uno por plancha, en el orden en que se imprime."
        />

        <RevealGroup
          as="ol"
          gap={0.09}
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {processSteps.map((step, index) => {
            const plancha = planchas[index % planchas.length];

            return (
              <RevealItem as="li" key={step.step} className="group relative lg:pr-6">
                {/* Parche de control de la plancha */}
                <span
                  className={cn("block h-[10px] w-full rounded-full", plancha.barra)}
                  aria-hidden="true"
                />

                <div className="mt-7 flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex items-center justify-center rounded-[10px] border-2 border-ink-key px-3 py-1 font-display text-[22px] font-black leading-none tracking-[-0.05em] transition-transform duration-300 group-hover:-translate-y-1",
                      plancha.chip,
                    )}
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>
                  <SheetNote>{plancha.nombre}</SheetNote>
                </div>

                <h3 className="mt-5 text-[19px] font-extrabold leading-tight tracking-[-0.03em] text-ink-key">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{step.description}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <SheetNote withInks className="mt-14">
          Astcorp — Pliego 08 · Proceso
        </SheetNote>
      </div>
    </Section>
  );
}
