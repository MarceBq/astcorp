import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Marca denominativa provisional.
 * Cuando el cliente entregue el logotipo oficial en vectorial, reemplazar el
 * contenido interno por un <Image> o el SVG, conservando la API.
 *
 * `onLime` es la variante para el navbar: sobre fondo lime el punto de acento
 * pasa a azul, porque el lime sobre lime no se vería.
 */
export function Logo({
  tone = "dark",
  className,
  href = "/",
}: {
  tone?: "dark" | "light" | "onLime";
  className?: string;
  href?: string | null;
}) {
  const wordmark = {
    dark: "text-ink",
    light: "text-white",
    onLime: "text-brand-blue-900",
  }[tone];

  const dot = tone === "onLime" ? "bg-brand-blue" : "bg-brand-lime";

  const content = (
    <span className={cn("inline-flex items-baseline gap-[3px]", className)}>
      <span
        className={cn(
          "font-display text-[19px] font-bold leading-none tracking-[-0.045em]",
          wordmark,
        )}
      >
        ASTCORP
      </span>
      <span className={cn("mb-[2px] size-[6px] shrink-0 rounded-[1px]", dot)} aria-hidden="true" />
    </span>
  );

  if (href === null) return content;

  return (
    <Link href={href} aria-label="ASTCORP — Inicio" className="inline-flex rounded-sm">
      {content}
    </Link>
  );
}
