import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { AccentTitle } from "@/components/ui/AccentTitle";
import { CmykRule } from "@/components/ui/PrintMarks";
import { clients } from "@/data/clients";

/**
 * Carrusel de marcas que han colaborado con ASTCORP.
 *
 * Bloque de acento: fondo lime a sangre con trama de semitono oscura. Sobre
 * este fondo el resaltado del titular va en azul sólido, porque un resaltado
 * lime sería invisible.
 *
 * Cinta continua en CSS: no depende de JavaScript, se pausa al pasar el
 * cursor y se puede desplazar a mano con movimiento reducido.
 *
 * Mientras `clients` solo contenga placeholders se muestran celdas neutras
 * con el nombre: no se exhibe ninguna marca de terceros sin autorización.
 */
export function ClientsCarousel() {
  if (clients.length === 0) return null;

  return (
    <section
      aria-labelledby="clientes-titulo"
      className="relative overflow-hidden border-y-2 border-night bg-brand-lime py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute inset-0 halftone-lime opacity-60" aria-hidden="true" />

      <Container width="wide" className="relative">
        <Reveal className="text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <CmykRule />
            <span className="eyebrow text-night">Clientes</span>
            <CmykRule />
          </div>

          <AccentTitle
            as="h2"
            id="clientes-titulo"
            text={`Clientes que han confiado en  ASTCORP`}
            accent="ASTCORP"
            highlight="blue"
            baseColor="text-night"
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.05]"
          />

          <p className="mx-auto mt-5 max-w-xl text-[15.5px] font-medium leading-relaxed text-night/75">
            Empresas e instituciones que han producido con nosotros su papelería, su packaging,
            su campaña visual o sus kits corporativos.
          </p>
        </Reveal>
      </Container>

      <Marquee className="relative mt-12" speed="48s">
        <ul className="flex items-center">
          {clients.map((client, index) => (
            <li key={`${client.name}-${index}`} className="mx-3 py-2">
              <div className="flex h-[88px] w-[196px] shrink-0 items-center justify-center rounded-card border-2 border-night bg-white px-6 shadow-hard-sm transition-transform duration-300 hover:-translate-x-[2px] hover:-translate-y-[2px]">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={48}
                    className="max-h-11 w-auto object-contain grayscale transition-all duration-500 hover:grayscale-0"
                  />
                ) : (
                  <span className="text-center font-display text-[12px] font-extrabold uppercase tracking-[0.14em] text-ink-3">
                    {client.name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
