import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

/**
 * Cierre de conversión reutilizable en páginas interiores.
 * El home usa `FinalCTA`, que es una versión ampliada de este bloque.
 */
export function CTABand({
  title = "¿Qué necesita producir tu marca?",
  description = "Cuéntanos el proyecto, el plazo y el volumen estimado. Respondemos con una propuesta de producción concreta.",
  primaryLabel = "Solicitar cotización",
  primaryHref = "/contacto",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-white py-16 sm:py-20">
      <div
        className="pointer-events-none absolute -right-24 top-0 size-[380px] rounded-full bg-brand-lime-50 blur-[130px] opacity-70"
        aria-hidden="true"
      />

      <Container width="wide" className="relative">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-[1.1] text-ink">
              {title}
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">{description}</p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:items-center">
            <Button href={primaryHref} size="lg" className="group">
              {primaryLabel}
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
            <Button href={`tel:${company.phones[0].tel}`} size="lg" variant="outline">
              {company.phones[0].display}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
