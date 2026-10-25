import { Card, IconBadge, badgeToneFor } from "./Card";
import { cn } from "@/lib/utils";

/**
 * Card con ícono: el formato único de todas las secciones de atributos del
 * sitio (razones, líneas de servicio…).
 *
 * Contenido centrado y en el mismo orden siempre: contenedor del ícono,
 * título en bold y descripción en gris. Las cards de una fila se estiran a la
 * misma altura porque la rejilla las alinea y la card ocupa todo el alto.
 *
 * `index` es la posición dentro de su fila: de ahí sale la paleta del
 * contenedor del ícono, que rota cada cuatro cards.
 *
 * No es para el catálogo ni para el footer, que conservan lo suyo.
 */
export function IconCard({
  icon,
  title,
  description,
  index = 0,
  media,
  children,
  className,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Posición en la fila: decide el color del contenedor del ícono. */
  index?: number;
  /** Imagen opcional a sangre sobre el contenido. */
  media?: React.ReactNode;
  /** Pie de la card: un enlace, un CTA… */
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      as="article"
      interactive
      className={cn("relative flex h-full flex-col overflow-hidden", className)}
    >
      {media}

      <div className="flex flex-1 flex-col items-center p-8 text-center">
        <IconBadge size="lg" tone={badgeToneFor(index)}>
          {icon}
        </IconBadge>

        {/* Interlineado holgado: deja respirar al resaltador tipo marcador
            cuando el título ocupa dos líneas. */}
        <h3 className="mt-6 text-[19px] font-bold leading-[1.5] tracking-[-0.02em] text-ink">
          {title}
        </h3>

        {description && (
          <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink-2">
            {description}
          </p>
        )}

        {children}
      </div>
    </Card>
  );
}
