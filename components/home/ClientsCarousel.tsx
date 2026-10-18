import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { MisregisterTitle } from "@/components/ui/MisregisterTitle";
import { CmykBar, CmykRule, CropMarks, RegistrationMark, SheetNote } from "@/components/ui/PrintMarks";
import { clients } from "@/data/clients";

/**
 * Carrusel de marcas — papel verde lima. Sección cargada.
 *
 * Recursos de imprenta: trama de semitono en tinta K sobre el lima, titular
 * fuera de registro, marcas de registro, marcas de corte en cada celda de
 * logo y tiras de control a sangre arriba y abajo.
 *
 * Sobre lima el texto va siempre en K (14.7:1). El cyan y el amarillo se
 * quedan en tramas y filetes: como texto no llegarían ni a 2:1.
 *
 * Mientras `clients` solo contenga placeholders se muestran celdas neutras
 * con el nombre: no se exhibe ninguna marca de terceros sin autorización.
 */
export function ClientsCarousel() {
  if (clients.length === 0) return null;

  return (
    <section
      aria-labelledby="clientes-titulo"
      className="relative overflow-hidden bg-brand-lime py-16 sm:py-20"
    >
      <CmykRule className="absolute inset-x-0 top-0 z-10" />

      <div
        className="pointer-events-none absolute inset-0 halftone-bg halftone-fade-b text-ink-key/25"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 size-[340px] halftone-coarse text-ink-magenta opacity-30"
        aria-hidden="true"
      />

      <Container width="wide" className="relative">
        <Reveal className="text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <RegistrationMark size={20} />
            <CmykBar size="sm" />
            <span className="eyebrow text-ink-key">Clientes</span>
            <CmykBar size="sm" />
            <RegistrationMark size={20} />
          </div>

          <MisregisterTitle
            as="h2"
            text="Clientes que han confiado en ASTCORP"
            className="text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.05]"
          >
            <span id="clientes-titulo">
              Clientes que han confiado en{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-white">ASTCORP</span>
                <span
                  className="absolute -inset-x-[0.1em] -inset-y-[0.03em] z-0 -rotate-[0.6deg] bg-ink-magenta"
                  aria-hidden="true"
                />
              </span>
            </span>
          </MisregisterTitle>

          <p className="mx-auto mt-5 max-w-xl text-[15.5px] font-medium leading-relaxed text-ink-key/80">
            Empresas e instituciones que han producido con nosotros su papelería, su packaging,
            su campaña visual o sus kits corporativos.
          </p>
        </Reveal>
      </Container>

      <Marquee className="relative mt-14" speed="48s">
        <ul className="flex items-center">
          {clients.map((client, index) => (
            <li key={`${client.name}-${index}`} className="relative mx-4 py-3">
              <div className="relative flex h-[88px] w-[196px] shrink-0 items-center justify-center rounded-card border-2 border-ink-key bg-white px-6 shadow-ink-magenta transition-transform duration-300 hover:-translate-x-[3px] hover:-translate-y-[3px]">
                <CropMarks inset={-8} />
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={48}
                    className="max-h-11 w-auto object-contain grayscale transition-all duration-500 hover:grayscale-0"
                  />
                ) : (
                  <span className="text-center font-display text-[12px] font-extrabold uppercase tracking-[0.14em] text-ink-key/55">
                    {client.name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Marquee>

      <Container width="wide" className="relative">
        <SheetNote withInks className="mt-12">
          Astcorp — Pliego 03 · Clientes
        </SheetNote>
      </Container>

      <CmykRule className="absolute inset-x-0 bottom-0 z-10" />
    </section>
  );
}
