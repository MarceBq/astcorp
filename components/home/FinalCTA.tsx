import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MisregisterTitle } from "@/components/ui/MisregisterTitle";
import {
  CmykBar,
  CmykRule,
  OverprintShapes,
  RegistrationMark,
  SheetNote,
} from "@/components/ui/PrintMarks";
import { company } from "@/data/company";

/**
 * Cierre de conversión — papel verde lima. Última sección cargada.
 *
 * Recursos de imprenta: círculos CMYK en sobreimpresión, trama de semitono
 * en tinta K, titular fuera de registro con la palabra clave entintada en
 * magenta, marcas de registro y tiras de control a sangre.
 */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-lime py-20 sm:py-24 lg:py-28">
      <CmykRule className="absolute inset-x-0 top-0 z-10" />

      <OverprintShapes className="-left-16 w-[55%] opacity-50" size={300} />
      <div
        className="pointer-events-none absolute inset-0 halftone-bg halftone-fade-t text-ink-key/20"
        aria-hidden="true"
      />

      <RegistrationMark size={26} className="absolute right-6 top-10 opacity-70 lg:right-10" />

      <Container width="wide" className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <CmykBar size="md" />
            <span className="eyebrow text-ink-key">Siguiente paso</span>
            <CmykBar size="md" />
          </div>

          <MisregisterTitle
            as="h2"
            text="¿Tienes un proyecto en mente?"
            className="text-[clamp(2.25rem,5.2vw,4rem)] font-black leading-[0.98] tracking-[-0.045em]"
          >
            ¿Tienes un{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white">proyecto</span>
              <span
                className="absolute -inset-x-[0.09em] -inset-y-[0.03em] z-0 -rotate-[0.7deg] bg-ink-magenta"
                aria-hidden="true"
              />
            </span>{" "}
            en mente?
          </MisregisterTitle>

          <p className="mx-auto mt-6 max-w-xl text-[17px] font-medium leading-relaxed text-ink-key/80">
            Cuéntanos qué necesitas y preparemos una solución para tu empresa.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contacto" size="lg" variant="dark" className="group/cta">
              Solicitar cotización
              <ArrowRight
                className="size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1"
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </Button>

            {/* El acceso a WhatsApp aparece solo cuando el cliente confirme
                el número oficial en data/company.ts */}
            {company.whatsapp ? (
              <Button
                href={company.whatsapp.url}
                size="lg"
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-[18px]" strokeWidth={2} aria-hidden="true" />
                Escríbenos por WhatsApp
              </Button>
            ) : (
              <Button href={`tel:${company.phones[0].tel}`} size="lg" variant="outline">
                <Phone className="size-[18px]" strokeWidth={2} aria-hidden="true" />
                {company.phones[0].display}
              </Button>
            )}
          </div>

          <SheetNote withInks className="mt-14 justify-center">
            Astcorp — Pliego 09 · Cierre
          </SheetNote>
        </Reveal>
      </Container>

      <CmykRule className="absolute inset-x-0 bottom-0 z-10" />
    </section>
  );
}
