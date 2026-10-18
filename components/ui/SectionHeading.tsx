import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { CmykBar, RegistrationMark } from "./PrintMarks";
import { MisregisterTitle } from "./MisregisterTitle";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Fragmento de `title` a entintar. Debe aparecer literalmente en él. */
  accent?: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** `dark` para fondos azules; `lime` para el bloque de acento. */
  tone?: "light" | "dark" | "lime";
  action?: React.ReactNode;
  as?: "h2" | "h1" | "h3";
  className?: string;
}

/**
 * Encabezado de sección, común a todo el sitio.
 *
 * Tres recursos de imprenta: marca de registro + tira de control CMYK en la
 * etiqueta, titular fuera de registro, y la palabra clave entintada sobre un
 * parche de amarillo (K sobre amarillo = 16:1, el resaltado más legible de
 * toda la paleta).
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  tone = "light",
  action,
  as = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const index = accent ? title.indexOf(accent) : -1;

  const visible =
    index === -1 || !accent ? (
      title
    ) : (
      <>
        {title.slice(0, index)}
        <span className="relative inline-block">
          <span className="relative z-10 text-ink-key">{accent}</span>
          <span
            className="absolute -inset-x-[0.1em] -inset-y-[0.02em] z-0 -rotate-[0.6deg] bg-ink-yellow"
            aria-hidden="true"
          />
        </span>
        {title.slice(index + accent.length)}
      </>
    );

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
            <RegistrationMark size={20} tone={dark ? "light" : "ink"} />
            <CmykBar size="sm" />
            <span className={cn("eyebrow", dark ? "text-white" : "text-ink-key")}>{eyebrow}</span>
          </div>
        )}

        <MisregisterTitle
          as={as}
          text={title}
          tone={dark ? "light" : "ink"}
          className={cn(
            "font-extrabold",
            as === "h1"
              ? "text-[clamp(2.4rem,5.6vw,4.5rem)] leading-[0.98]"
              : "text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.02]",
          )}
        >
          {visible}
        </MisregisterTitle>

        {description && (
          <p
            className={cn(
              "mt-6 text-[17px] leading-relaxed",
              dark ? "text-white/80" : "text-ink-2",
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
