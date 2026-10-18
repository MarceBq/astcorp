import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/AccentTitle";
import { CmykRule } from "@/components/ui/PrintMarks";
import { company } from "@/data/company";

/**
 * Cierre de conversión.
 *
 * Bloque de acento a sangre: el lime pasa al fondo y el titular al casi negro,
 * invirtiendo la relación del resto de la página para que el final destaque.
 */
export function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t-2 border-night bg-brand-lime py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 halftone-lime opacity-60" aria-hidden="true" />

      <Container width="wide" className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <CmykRule />
            <span className="eyebrow text-night">Siguiente paso</span>
            <CmykRule />
          </div>

          <h2 className="text-[clamp(2.25rem,5.2vw,4rem)] font-black leading-[0.98] tracking-[-0.045em] text-night">
            ¿Tienes un <Highlight variant="blue">proyecto</Highlight> en mente?
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-[17px] font-medium leading-relaxed text-night/75">
            Cuéntanos qué necesitas y preparemos una solución para tu empresa.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
        </Reveal>
      </Container>
    </section>
  );
}
