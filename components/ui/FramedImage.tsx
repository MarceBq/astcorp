import { Media } from "./Media";
import { cn } from "@/lib/utils";

const tones = {
  lime: "bg-brand-lime",
  blue: "bg-brand-blue",
};

/**
 * Imagen con franja de color.
 *
 * Detrás de la imagen va un bloque sólido del mismo tamaño y radio,
 * desplazado hacia abajo y a la derecha, de modo que asome como una franja
 * en el borde derecho e inferior.
 *
 * El desplazamiento es menor en móvil (10px frente a 16px) para que la
 * franja no empuje el ancho y provoque scroll horizontal.
 *
 * Reservada a los bloques grandes de texto + imagen. No se usa dentro de
 * tarjetas ni en imágenes de catálogo o de producto, donde el recurso
 * competiría con la propia tarjeta.
 */
export function FramedImage({
  src,
  alt,
  label,
  tone = "lime",
  className,
  mediaClassName,
  sizes,
  priority,
}: {
  src?: string | null;
  alt: string;
  label?: string;
  /** `lime` por defecto; `blue` cuando el fondo es claro-verdoso o lima. */
  tone?: keyof typeof tones;
  className?: string;
  mediaClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative isolate", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 translate-x-[10px] translate-y-[10px] rounded-media sm:translate-x-4 sm:translate-y-4",
          tones[tone],
        )}
      />

      <Media
        src={src}
        alt={alt}
        label={label}
        sizes={sizes}
        priority={priority}
        className={cn("relative z-10", mediaClassName)}
      />
    </div>
  );
}
