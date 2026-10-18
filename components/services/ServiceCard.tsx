import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { ServiceIcon } from "@/components/ui/Icons";
import { CmykRule, CropMarks } from "@/components/ui/PrintMarks";
import type { Service } from "@/data/types";
import { cn, pad } from "@/lib/utils";

/** Tinta que identifica cada línea, rotando la secuencia del pliego. */
const inkByIndex = [
  "bg-ink-cyan text-ink-key",
  "bg-ink-magenta text-white",
  "bg-ink-yellow text-ink-key",
  "bg-brand-lime text-ink-key",
  "bg-brand-blue text-white",
  "bg-ink-key text-white",
];

/**
 * Card de línea de negocio. Se usa en el home y en /servicios.
 *
 * Recursos de imprenta: tira de control CMYK en el canto, marcas de corte,
 * imagen tratada como separación de color que entra en registro al pasar el
 * cursor, y folio entintado con la tinta que identifica la línea.
 */
export function ServiceCard({
  service,
  index = 0,
  className,
}: {
  service: Service;
  index?: number;
  className?: string;
}) {
  const ink = inkByIndex[index % inkByIndex.length];

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-card border-2 border-ink-key bg-white",
        "transition-[transform,box-shadow] duration-300 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-ink-cyan",
        className,
      )}
    >
      <CmykRule />

      <div className="relative">
        <Media
          src={service.cover}
          alt={service.title}
          label={service.name}
          frame="none"
          separation
          className="aspect-[16/10] rounded-none border-b-2 border-ink-key"
          imageClassName="group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Folio entintado, como la numeración de plancha */}
        <span
          className={cn(
            "absolute left-3 top-3 z-20 inline-flex items-center rounded-[6px] border-2 border-ink-key px-2 py-0.5 font-display text-[12px] font-black tracking-[-0.02em]",
            ink,
          )}
          aria-hidden="true"
        >
          {pad(index + 1)}
        </span>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <CropMarks inset={-10} />

        {/* Montado sobre el borde inferior de la imagen */}
        <span className="relative z-10 -mt-[52px] mb-5 inline-flex size-12 items-center justify-center rounded-[11px] border-2 border-ink-key bg-brand-lime text-ink-key transition-colors duration-300 group-hover:bg-ink-yellow">
          <ServiceIcon name={service.icon} className="size-6" strokeWidth={2} />
        </span>

        <h3 className="text-[21px] font-extrabold leading-tight tracking-[-0.035em] text-ink-key">
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
