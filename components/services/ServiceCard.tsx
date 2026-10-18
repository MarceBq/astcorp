import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { ServiceIcon } from "@/components/ui/Icons";
import type { Service } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * Card de línea de negocio. Se usa en el home y en /servicios.
 *
 * Tratamiento gráfico: contorno sólido, sombra desplazada al pasar el cursor
 * y el ícono montado sobre el borde de la imagen, a modo de recorte pegado.
 */
export function ServiceCard({
  service,
  index,
  className,
}: {
  service: Service;
  index?: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-card border-2 border-night bg-white",
        "transition-[transform,box-shadow] duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-hard",
        className,
      )}
    >
      <Media
        src={service.cover}
        alt={service.title}
        label={service.name}
        frame="none"
        className="aspect-[16/10] rounded-none border-b-2 border-night"
        imageClassName="group-hover:scale-[1.05]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div className="flex flex-1 flex-col p-6">
        {/* Montado sobre el borde inferior de la imagen */}
        <span className="relative z-10 -mt-[52px] mb-5 inline-flex size-12 items-center justify-center rounded-[11px] border-2 border-night bg-brand-lime text-night transition-colors duration-300 group-hover:bg-night group-hover:text-brand-lime">
          <ServiceIcon name={service.icon} className="size-6" strokeWidth={2} />
        </span>

        <h3 className="text-[21px] font-extrabold leading-tight tracking-[-0.035em] text-night">
          {service.name}
        </h3>

        <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-2">{service.short}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 font-display text-[13px] font-extrabold uppercase tracking-[0.1em] text-brand-blue">
          <Link href={`/servicios/${service.slug}`} className="after:absolute after:inset-0">
            Ver servicio
          </Link>
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.5}
            aria-hidden="true"
          />
        </span>
      </div>
    </article>
  );
}
