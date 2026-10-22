import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { Card, IconBadge } from "@/components/ui/Card";
import { HighlightText } from "@/components/ui/HighlightText";
import { ServiceIcon } from "@/components/ui/Icons";
import type { Service } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * Card de línea de negocio. Se usa en el home y en /servicios.
 * Misma construcción que el resto de tarjetas del sistema.
 *
 * `highlightTitle` es opt-in porque el resaltador es propio de las vistas de
 * servicios: en el home la tarjeta mantiene el título limpio.
 */
export function ServiceCard({
  service,
  highlightTitle = false,
  className,
}: {
  service: Service;
  highlightTitle?: boolean;
  className?: string;
}) {
  return (
    <Card
      as="article"
      interactive
      className={cn("relative flex h-full flex-col overflow-hidden", className)}
    >
      <Media
        src={service.cover}
        alt={service.title}
        label={service.name}
        bordered={false}
        className="aspect-[16/10] rounded-none"
        imageClassName="group-hover:scale-[1.04]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      <div className="flex flex-1 flex-col p-7">
        <IconBadge>
          <ServiceIcon name={service.icon} aria-hidden="true" />
        </IconBadge>

        <h3 className="mt-6 text-[19px] font-bold leading-snug tracking-[-0.025em] text-ink">
          {highlightTitle ? <HighlightText>{service.name}</HighlightText> : service.name}
        </h3>

        <p className="mt-2 flex-1 text-[14.5px] leading-relaxed text-ink-2">{service.short}</p>

        <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-blue">
          <Link href={`/servicios/${service.slug}`} className="after:absolute after:inset-0">
            Ver servicio
          </Link>
          <ArrowRight
            className="size-5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2}
            aria-hidden="true"
          />
        </span>
      </div>
    </Card>
  );
}
