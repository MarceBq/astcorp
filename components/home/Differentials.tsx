import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FeatureIcon } from "@/components/ui/Icons";
import { CmykRule, OverprintShapes, RegistrationMark, SheetNote } from "@/components/ui/PrintMarks";
import { InkFigure } from "@/components/ui/MisregisterTitle";
import { differentials } from "@/data/differentials";
import { pad } from "@/lib/utils";

/**
 * Franja de diferenciales — papel azul de marca. Es una de las secciones
 * cargadas del ritmo.
 *
 * Recursos de imprenta: círculos CMYK en sobreimpresión (donde se cruzan
 * aparecen los colores mezclados reales), trama de semitono, numeración con
 * capas de tinta, marcas de registro y tiras de control a sangre.
 *
 * Al retirarse "Envíos internacionales" quedan 3 diferenciales, así que la
 * rejilla pasa de 1 columna directamente a 3: con 2 el tercero quedaría suelto.
 */
export function Differentials() {
  return (
    <section id="diferenciales" className="relative overflow-hidden bg-brand-blue py-16 sm:py-20">
      <CmykRule className="absolute inset-x-0 top-0 z-10" />

      {/* Ancladas a la derecha y a media densidad: donde se cruzan las tintas
          el fondo se aclara, y el texto blanco de la primera columna perdería
          contraste si las formas quedaran debajo. */}
      <OverprintShapes className="left-auto right-0 w-[48%] opacity-40" size={280} />
      <div
        className="pointer-events-none absolute inset-0 halftone-bg halftone-fade-t text-white/25"
        aria-hidden="true"
      />

      <Container width="wide" className="relative">
        <div className="mb-10 flex items-center gap-3">
          <RegistrationMark size={22} tone="light" />
          <SheetNote tone="light">C M Y K — Respaldo</SheetNote>
        </div>

        <RevealGroup gap={0.08} className="grid gap-10 md:grid-cols-3 md:gap-0">
          {differentials.map((item, index) => (
            <RevealItem
              key={item.id}
              className="group relative md:border-l md:border-white/20 md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <div className="flex items-center gap-4">
                <InkFigure
                  value={pad(index + 1)}
                  tone="light"
                  className="text-[clamp(3rem,4.6vw,4rem)] leading-none"
                />
                <span className="inline-flex size-12 items-center justify-center rounded-[11px] border-2 border-white/40 text-white transition-colors duration-300 group-hover:border-ink-yellow group-hover:bg-ink-yellow group-hover:text-ink-key">
                  <FeatureIcon name={item.icon} className="size-6" strokeWidth={2} />
                </span>
              </div>

              <h2 className="mt-6 text-[20px] font-extrabold leading-tight tracking-[-0.03em] text-white">
                {item.title}
              </h2>
              <p className="mt-2.5 max-w-xs text-[14.5px] leading-relaxed text-white/80">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <CmykRule className="absolute inset-x-0 bottom-0 z-10" />
    </section>
  );
}
