import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ServiceIcon } from "@/components/ui/Icons";
import type { Service } from "@/data/types";

/**
 * Encabezado de /servicios/[slug].
 * Compensa la altura del navbar fijo y mantiene una jerarquía consistente
 * entre las cuatro líneas de negocio.
 */
export function ServiceHero({
  service,
  productCount,
}: {
  service: Service;
  productCount: number;
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

          <div className="gap-12 lg:flex lg:items-end lg:justify-between">
            <Reveal className="max-w-3xl">
              {/* Línea de cabecera: predomina el azul, con remate lime */}
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-[12px] bg-brand-lime-50 text-brand-blue">
                  <ServiceIcon name={service.icon} className="size-6" strokeWidth={1.75} />
                </span>
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
                <Button href="#catalogo" className="group">
                  Ver catálogo
                  <ArrowRight
                    className="size-[18px] transition-transform duration-300 group-hover:translate-y-0.5 group-hover:rotate-90"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Button>
                <Button href="/contacto" variant="outline">
                  Solicitar cotización
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="mt-10 shrink-0 lg:mt-0">
              <div className="flex gap-10">
                <div>
                  <div className="stat-figure text-[38px] leading-none text-ink">
                    {productCount}
                  </div>
                  <p className="mt-2 text-[13px] text-ink-2">
                    {productCount === 1 ? "Producto" : "Productos"}
                  </p>
                </div>
                <div>
                  <div className="stat-figure text-[38px] leading-none text-ink">
                    {service.subcategories.length}
                  </div>
                  <p className="mt-2 text-[13px] text-ink-2">Categorías</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
