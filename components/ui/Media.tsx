import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const frames = {
  soft: "border border-line",
  hard: "border-2 border-night",
  none: "",
};

interface MediaProps {
  src?: string | null;
  alt: string;
  /** Texto del placeholder cuando aún no hay imagen del cliente. */
  label?: string;
  /** Clases de aspecto y radio. */
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
  /** `hard` usa contorno sólido casi negro, para el tratamiento gráfico. */
  frame?: keyof typeof frames;
}

/**
 * Contenedor de imagen tolerante a la ausencia de material gráfico.
 *
 * Mientras el cliente no entregue fotografías, renderiza un placeholder de
 * marca en lugar de una imagen rota. Al poblar `images` en /data, la misma
 * UI pasa a mostrar la foto real sin ningún cambio de código.
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
  frame = "soft",
}: MediaProps) {
  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-media bg-surface-2",
        frames[frame],
        "aspect-[4/3]",
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
        <div className="absolute inset-0" role="img" aria-label={alt}>
          <div className="absolute inset-0 halftone opacity-60" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-br from-brand-lime-pale via-transparent to-brand-blue-pale"
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-4 text-center">
            <ImageIcon className="size-[22px] text-ink-3" strokeWidth={1.5} aria-hidden="true" />
            <span className="eyebrow max-w-[80%] text-ink-3">{label ?? "Imagen pendiente"}</span>
          </div>
        </div>
      )}
    </div>
  );
}

const offsetTones = {
  lime: "bg-brand-lime",
  blue: "bg-brand-blue",
  night: "bg-night",
  cyan: "bg-cyan",
};

/**
 * Bloque de color sólido desplazado detrás de un medio.
 *
 * Envuelve a `Media` (o a cualquier bloque) para el tratamiento tipo cartel:
 * el color asoma por la esquina inferior derecha y se acerca al pasar el
 * cursor, como si la lámina se asentara. Requiere que el contenedor padre
 * tenga la clase `group` para que reaccione al hover de la tarjeta completa.
 */
export function OffsetFrame({
  children,
  tone = "lime",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof offsetTones;
  className?: string;
}) {
  return (
    <div className={cn("relative isolate", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 translate-x-[10px] translate-y-[10px] rounded-media transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[5px] group-hover:translate-y-[5px]",
          offsetTones[tone],
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
