import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionTransition } from "@/components/ui/SectionTransition";
import { company } from "@/data/company";

/**
 * Cierre de conversión.
 *
 * Entra y sale con curva. Antes degradaba hacia el footer, pero ahora las
 * marcas de clientes van entre medias, así que devuelve el blanco a la
 * sección siguiente.
 */
export function FinalCTA() {
  return (
    <>
      <SectionTransition from="white" to="blue" />

      <section className="bg-gradient-to-b from-brand-blue to-brand-blue-700 pb-10 pt-6 text-white">
        <Container width="wide">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-[3px] w-7 rounded-full bg-brand-lime" aria-hidden="true" />
              <span className="eyebrow text-white">Siguiente paso</span>
            </div>

            <h2 className="text-[clamp(1.9rem,3.6vw,2.9rem)] font-bold leading-[1.1] text-white">
              ¿Tienes un proyecto en mente?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/90">
              Cuéntanos qué necesitas y preparemos una solución para tu empresa.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contacto" size="lg" variant="accent" className="group/cta">
                Solicitar cotización
                <ArrowRight
                  className="size-5 transition-transform duration-300 group-hover/cta:translate-x-1"
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
                  <MessageCircle className="size-5" strokeWidth={2} aria-hidden="true" />
                  Escríbenos por WhatsApp
                </Button>
              ) : (
                <Button href={`tel:${company.phones[0].tel}`} size="lg" variant="onDark">
                  <Phone className="size-5" strokeWidth={2} aria-hidden="true" />
                  {company.phones[0].display}
                </Button>
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <SectionTransition from="blue" to="white" />
    </>
  );
}
