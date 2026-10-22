import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Service } from "@/data/types";

/**
 * Encabezado de /servicios/[slug].
 * Compensa la altura del navbar fijo y mantiene una jerarquía consistente
 * entre las seis líneas de negocio.
 *
 * Sin cifras ni ícono: el encabezado es solo etiqueta, titular, entradilla y
 * acciones, en una columna.
 *
 * `hasCatalog` es false en los servicios que aún no tienen productos
 * cargados: allí no se renderiza la sección de catálogo, así que el botón
 * que lleva a ella tampoco debe aparecer.
 */
export function ServiceHero({
  service,
  hasCatalog,
}: {
  service: Service;
  hasCatalog: boolean;
}) {
  return (
    <div className="bg-gradient-to-b from-neutral-50 to-white">

      <Container width="wide">
        <div className="pb-14 pt-[124px] sm:pb-16 sm:pt-[140px] lg:pb-20 lg:pt-[168px]">
          <Breadcrumbs
            className="mb-8"
            items={[
              { label: "Inicio", href: "/" },
              { label: "Servicios", href: "/servicios" },
              { label: service.name },
            ]}
          />

          <div>
            <Reveal className="max-w-3xl">
              {/* Línea de cabecera: predomina el azul, con remate lime */}
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[3px] w-7 rounded-full bg-brand-lime" aria-hidden="true" />
                <span className="eyebrow text-brand-blue">Servicio</span>
              </div>

              <h1 className="text-[clamp(2.1rem,4.4vw,3.4rem)] font-bold leading-[1.06] text-ink">
                {service.title}
              </h1>

              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-2">
                {service.intro}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {hasCatalog && (
                  <Button href="#catalogo" className="group">
                    Ver catálogo
                    <ArrowRight
                      className="size-5 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-90"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </Button>
                )}
                <Button href="/contacto" variant={hasCatalog ? "outline" : "primary"}>
                  Solicitar cotización
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
