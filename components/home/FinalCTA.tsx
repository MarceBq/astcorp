import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionTransition } from "@/components/ui/SectionTransition";
import { company } from "@/data/company";

/**
 * Cierre de conversión.
 *
 * Es el único bloque azul de la página. Entra con una curva en lugar de un
 * canto recto, y termina degradando al azul profundo del footer, de modo que
 * los dos últimos bloques se leen como uno solo.
 */
export function FinalCTA() {
  return (
    <>
      <SectionTransition variant="toBlue" />

      <section className="bg-gradient-to-b from-brand-blue to-brand-blue-900 pb-24 pt-10 text-white sm:pb-28">
        <Container width="wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[3px] w-7 rounded-full bg-brand-lime" aria-hidden="true" />
              <span className="eyebrow text-brand-lime">Siguiente paso</span>
            </div>

            <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.1] text-white">
              ¿Tienes un proyecto en mente?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/80">
              Cuéntanos qué necesitas y preparemos una solución para tu empresa.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contacto" size="lg" variant="accent" className="group/cta">
                Solicitar cotización
                <ArrowRight
                  className="size-[18px] transition-transform duration-300 group-hover/cta:translate-x-1"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </Button>

              {/* El acceso a WhatsApp aparece solo cuando el cliente confirme
                  el número oficial en data/company.ts */}
              {company.whatsapp ? (
                <Button
                  href={company.whatsapp.url}
                  size="lg"
                  variant="onDark"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
                  Escríbenos por WhatsApp
                </Button>
              ) : (
                <Button href={`tel:${company.phones[0].tel}`} size="lg" variant="onDark">
                  <Phone className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
                  {company.phones[0].display}
                </Button>
              )}
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
