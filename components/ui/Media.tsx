import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const frames = {
  soft: "border border-line",
  hard: "border-2 border-ink-key",
  none: "",
};

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
  frame?: keyof typeof frames;
  /**
   * Tratamiento de separación de color: la imagen sale desaturada con dos
   * planchas (cyan y magenta) desplazadas encima; al pasar el cursor las
   * planchas se alinean y la imagen entra en registro, a color pleno.
   * Requiere que un ancestro tenga la clase `group`.
   */
  separation?: boolean;
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
  separation = false,
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
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn(
              fit === "cover" ? "object-cover" : "object-contain",
              "transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
              separation && "grayscale contrast-[1.15] group-hover:grayscale-0",
              imageClassName,
            )}
          />

          {/* Planchas desplazadas: se alinean y desaparecen al entrar en registro */}
          {separation && (
            <>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 translate-x-[6px] translate-y-[-4px] bg-ink-cyan opacity-45 mix-blend-multiply transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 translate-x-[-6px] translate-y-[4px] bg-ink-magenta opacity-35 mix-blend-multiply transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-0"
              />
            </>
          )}
        </>
      ) : (
        <div className="absolute inset-0" role="img" aria-label={alt}>
          {/* El placeholder también es una separación: tres tramas CMY */}
          <div className="absolute inset-0 bg-white" aria-hidden="true" />
          <div
            className="absolute inset-0 halftone-coarse text-ink-cyan opacity-55 overprint"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 halftone-bg translate-x-[4px] text-ink-magenta opacity-45 overprint"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 halftone-fine translate-y-[3px] text-ink-yellow opacity-50 overprint"
            aria-hidden="true"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-4 text-center">
            <ImageIcon className="size-[22px] text-ink-key/60" strokeWidth={1.75} aria-hidden="true" />
            <span className="eyebrow max-w-[80%] text-ink-key/60">{label ?? "Imagen pendiente"}</span>
          </div>
        </div>
      )}
    </div>
  );
}

const inkTones = {
  cyan: "bg-ink-cyan",
  magenta: "bg-ink-magenta",
  yellow: "bg-ink-yellow",
  key: "bg-ink-key",
  lime: "bg-brand-lime",
  blue: "bg-brand-blue",
};

/**
 * Plancha de color desplazada detrás de un medio.
 *
 * Envuelve a `Media` para el efecto de separación: la tinta asoma por una
 * esquina y se acerca al registro al pasar el cursor. El contenedor padre
 * necesita la clase `group`.
 */
export function SeparationFrame({
  children,
  tone = "cyan",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof inkTones;
  className?: string;
}) {
  return (
    <div className={cn("relative isolate", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 z-0 translate-x-[10px] translate-y-[10px] rounded-media transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px] group-hover:translate-y-[3px]",
          inkTones[tone],
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
