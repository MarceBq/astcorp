import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaProps {
  src?: string | null;
  alt: string;
  /** Texto del placeholder cuando aún no hay imagen del cliente. */
  label?: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  /** `false` quita el filete, para imágenes que van pegadas a una tarjeta. */
  bordered?: boolean;
}

/**
 * Contenedor de imagen, con el mismo radio y filete que el resto del sistema.
 *
 * Tolerante a la ausencia de material gráfico: mientras el cliente no entregue
 * fotografías, renderiza un placeholder neutro en lugar de una imagen rota. Al
 * poblar `images` en /data, la misma UI pasa a mostrar la foto real.
 */
export function Media({
  src,
  alt,
  label,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  fit = "cover",
  bordered = true,
}: MediaProps) {
  return (
    <div
      className={cn(
        "relative isolate aspect-[4/3] overflow-hidden rounded-media bg-neutral-100",
        bordered && "border border-line",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            fit === "cover" ? "object-cover" : "object-contain",
            "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            imageClassName,
          )}
        />
      ) : (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-gradient-to-br from-neutral-50 to-neutral-100 px-4 text-center"
          role="img"
          aria-label={alt}
        >
          <ImageIcon className="size-6 text-ink-3" strokeWidth={2} aria-hidden="true" />
          <span className="eyebrow max-w-[80%] text-ink-3">{label ?? "Imagen pendiente"}</span>
        </div>
      )}
    </div>
  );
}
