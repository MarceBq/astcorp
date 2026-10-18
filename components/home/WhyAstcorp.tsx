import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FeatureIcon } from "@/components/ui/Icons";
import { CropMarks } from "@/components/ui/PrintMarks";
import { reasons } from "@/data/why";
import { pad } from "@/lib/utils";

/** ¿Por qué ASTCORP? — primera sección después del hero. */
export function WhyAstcorp() {
  return (
    <section
      id="por-que-astcorp"
      className="relative overflow-hidden border-b-2 border-night bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Semitono de imprenta, muy tenue, anclado a una esquina */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-[460px] halftone opacity-50"
        aria-hidden="true"
      />

      <Container width="wide" className="relative">
        <div className="relative px-6 py-6 sm:px-8">
          <CropMarks />
          <SectionHeading
            eyebrow="Por qué ASTCORP"
            title="Cuatro razones para producir con nosotros."
            accent="producir"
            description="Una imprenta que responde por el resultado: del arte final al despacho, con un solo interlocutor."
          />
        </div>

        <RevealGroup gap={0.08} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <RevealItem key={reason.id} className="h-full">
              <article className="group flex h-full flex-col rounded-card border-2 border-night bg-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard lg:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-14 items-center justify-center rounded-[11px] border-2 border-night bg-brand-lime text-night transition-colors duration-300 group-hover:bg-night group-hover:text-brand-lime">
                    <FeatureIcon name={reason.icon} className="size-7" strokeWidth={2} />
                  </span>

                  <span
                    className="font-display text-[42px] font-black leading-none tracking-[-0.06em] text-stroke-ink opacity-25 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    {pad(index + 1)}
                  </span>
                </div>

                <h3 className="mt-7 text-[19px] font-extrabold leading-tight tracking-[-0.03em] text-night">
                  {reason.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-2">
                  {reason.description}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
