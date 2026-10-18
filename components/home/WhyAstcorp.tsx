import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FeatureIcon } from "@/components/ui/Icons";
import { CmykRule, CropMarks, SheetNote } from "@/components/ui/PrintMarks";
import { InkFigure } from "@/components/ui/MisregisterTitle";
import { reasons } from "@/data/why";
import { pad } from "@/lib/utils";

/**
 * ¿Por qué ASTCORP? — sección de papel blanco, de las más limpias.
 *
 * Recursos de imprenta: trama de semitono cyan en degradado de densidad,
 * titular fuera de registro, tira de control CMYK en el canto de cada
 * tarjeta, marcas de corte y numeración con capas de tinta.
 */
export function WhyAstcorp() {
  return (
    <section
      id="por-que-astcorp"
      className="relative overflow-hidden border-b-2 border-ink-key bg-white paper py-16 sm:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-[420px] halftone-coarse halftone-fade-b text-ink-cyan opacity-40"
        aria-hidden="true"
      />

      <Container width="wide" className="relative">
        <SectionHeading
          eyebrow="Por qué ASTCORP"
          title="Cuatro razones para producir con nosotros."
          accent="producir"
          description="Una imprenta que responde por el resultado: del arte final al despacho, con un solo interlocutor."
        />

        <RevealGroup gap={0.08} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <RevealItem key={reason.id} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-card border-2 border-ink-key bg-white transition-transform duration-300 hover:-translate-y-1">
                {/* Tira de control en el canto superior de la tarjeta */}
                <CmykRule />

                <div className="relative flex flex-1 flex-col p-6 lg:p-7">
                  <CropMarks inset={-10} />

                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex size-14 items-center justify-center rounded-[11px] border-2 border-ink-key bg-brand-lime text-ink-key transition-colors duration-300 group-hover:bg-ink-yellow">
                      <FeatureIcon name={reason.icon} className="size-7" strokeWidth={2} />
                    </span>

                    <InkFigure
                      value={pad(index + 1)}
                      className="text-[40px] leading-none"
                    />
                  </div>

                  <h3 className="mt-7 text-[19px] font-extrabold leading-tight tracking-[-0.03em] text-ink-key">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-2">
                    {reason.description}
                  </p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <SheetNote withInks className="mt-12">
          Astcorp — Pliego 02 · Razones
        </SheetNote>
      </Container>
    </section>
  );
}
