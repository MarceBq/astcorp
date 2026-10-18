import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { CmykRule } from "./PrintMarks";
import { AccentTitle, type HighlightVariant } from "./AccentTitle";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Fragmento de `title` a resaltar. Debe aparecer literalmente en él. */
  accent?: string;
  highlight?: HighlightVariant;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  /** Contenido a la derecha del título en desktop: normalmente un CTA. */
  action?: React.ReactNode;
  as?: "h2" | "h1" | "h3";
  className?: string;
}

/**
 * Encabezado de sección, común a todo el sitio.
 *
 * Titular en display con peso 800 y escala grande, etiqueta precedida por la
 * barra de registro CMYK y, opcionalmente, una palabra resaltada en lime.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  highlight,
  description,
  align = "left",
  tone = "light",
  action,
  as = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        action && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      )}
    >
      <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
        {eyebrow && (
          <div
            className={cn(
              "mb-5 flex items-center gap-3",
              align === "center" && "justify-center",
            )}
          >
            <CmykRule tone={tone} />
            <span className={cn("eyebrow", dark ? "text-brand-lime" : "text-brand-blue")}>
              {eyebrow}
            </span>
          </div>
        )}

        <AccentTitle
          as={as}
          text={title}
          accent={accent}
          highlight={highlight ?? (dark ? "marker" : "underline")}
          baseColor={dark ? "text-white" : "text-heading"}
          className={cn(
            "font-extrabold",
            as === "h1"
              ? "text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[0.98]"
              : "text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.02]",
          )}
        />

        {description && (
          <p
            className={cn(
              "mt-6 text-[17px] leading-relaxed",
              dark ? "text-white/75" : "text-ink-2",
            )}
          >
            {description}
          </p>
        )}
      </Reveal>

      {action && (
        <Reveal delay={0.1} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}
