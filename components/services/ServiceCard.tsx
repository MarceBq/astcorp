import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { IconCard } from "@/components/ui/IconCard";
import { HighlightText } from "@/components/ui/HighlightText";
import { ServiceIcon } from "@/components/ui/Icons";
import type { Service } from "@/data/types";

/**
 * Card de línea de negocio. Se usa en el home y en /servicios.
 *
 * Es una `IconCard` con portada: mismo formato centrado, mismo contenedor de
 * ícono y la misma rotación de paletas por índice que el resto del sitio.
 *
 * `highlightTitle` es opt-in porque el resaltador es propio de las vistas de
 * servicios: en el home la tarjeta mantiene el título limpio.
 */
export function ServiceCard({
  service,
  index = 0,
  highlightTitle = false,
  className,
}: {
  service: Service;
  /** Posición en la fila: decide el color del contenedor del ícono. */
  index?: number;
  highlightTitle?: boolean;
  className?: string;
}) {
  return (
    <IconCard
      index={index}
      className={className}
      icon={<ServiceIcon name={service.icon} aria-hidden="true" />}
      title={
        highlightTitle ? (
          <HighlightText>{service.name}</HighlightText>
        ) : (
          service.name
        )
      }
      description={service.short}
      media={
        <Media
          src={service.cover}
          alt={service.title}
          label={service.name}
          bordered={false}
          className="aspect-[16/10] rounded-none"
          imageClassName="group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      }
    >
      <span className="mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-blue">
        <Link
          href={`/servicios/${service.slug}`}
          className="after:absolute after:inset-0"
        >
          Ver servicio
        </Link>
        <ArrowRight
          className="size-5 transition-transform duration-300 group-hover:translate-x-1"
          strokeWidth={2}
          aria-hidden="true"
        />
      </span>
    </IconCard>
  );
}
