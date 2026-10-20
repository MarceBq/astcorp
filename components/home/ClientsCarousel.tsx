import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { clients } from "@/data/clients";

/**
 * Carrusel de marcas que han colaborado con ASTCORP.
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
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <Container width="wide">
        <SectionHeading
          align="center"
          eyebrow="Clientes"
          title="Marcas que han confiado en ASTCORP."
          accent="han confiado"
          description="Empresas e instituciones que han producido con nosotros su papelería, su packaging, su campaña visual o sus kits corporativos."
        />
      </Container>

      <Marquee className="mt-14" speed="48s">
        <ul className="flex items-center">
          {clients.map((client, index) => (
            <li key={`${client.name}-${index}`} className="mx-3">
              <div className="flex h-[84px] w-[188px] shrink-0 items-center justify-center rounded-card border border-line bg-white px-6 transition-colors duration-300 hover:border-brand-blue/30">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={48}
                    className="max-h-10 w-auto object-contain grayscale transition-all duration-500 hover:grayscale-0"
                  />
                ) : (
                  <span className="text-center text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-3">
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
