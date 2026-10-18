import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FeatureIcon } from "@/components/ui/Icons";
import { differentials } from "@/data/differentials";
import { pad } from "@/lib/utils";

/**
 * Franja de diferenciales.
 *
 * Bloque oscuro entre dos secciones de color: corta la página y concentra la
 * atención en las tres ventajas comerciales. Numeración lime de gran tamaño,
 * sin tarjetas, separadas solo por filetes.
 *
 * Al retirarse "Envíos internacionales" quedan 3 diferenciales, así que la
 * rejilla pasa de 1 columna directamente a 3: con 2 el tercero quedaría suelto.
 */
export function Differentials() {
  return (
    <section id="diferenciales" className="relative overflow-hidden bg-night py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 halftone-dark opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 size-[380px] rounded-full bg-brand-lime/10 blur-[130px]"
        aria-hidden="true"
      />

      <Container width="wide" className="relative">
        <RevealGroup gap={0.08} className="grid gap-10 md:grid-cols-3 md:gap-0">
          {differentials.map((item, index) => (
            <RevealItem
              key={item.id}
              className="group relative md:border-l md:border-white/15 md:px-8 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
            >
              <div className="flex items-center gap-4">
                <span
                  className="font-display text-[clamp(3rem,4.6vw,4rem)] font-black leading-none tracking-[-0.07em] text-brand-lime"
                  aria-hidden="true"
                >
                  {pad(index + 1)}
                </span>
                <span className="inline-flex size-12 items-center justify-center rounded-[11px] border-2 border-white/25 text-brand-lime transition-colors duration-300 group-hover:border-brand-lime group-hover:bg-brand-lime group-hover:text-night">
                  <FeatureIcon name={item.icon} className="size-6" strokeWidth={2} />
                </span>
              </div>

              <h2 className="mt-6 text-[20px] font-extrabold leading-tight tracking-[-0.03em] text-white">
                {item.title}
              </h2>
              <p className="mt-2.5 max-w-xs text-[14.5px] leading-relaxed text-white/70">
                {item.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
