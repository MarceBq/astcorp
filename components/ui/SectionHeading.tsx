import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Fragmento de `title` que se destaca en azul. Debe aparecer en él. */
  accent?: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  action?: React.ReactNode;
  as?: "h2" | "h1" | "h3";
  className?: string;
}

/**
 * Encabezado de sección, idéntico en todo el sitio.
 *
 * Una sola escala tipográfica y un solo recurso de énfasis: la palabra clave
 * en azul. Es lo que mantiene el mismo tono de una sección a otra.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  tone = "light",
  action,
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const index = accent ? title.indexOf(accent) : -1;

  const heading =
    index === -1 || !accent ? (
      title
    ) : (
      <>
        {title.slice(0, index)}
        <span className={dark ? "text-brand-lime" : "text-brand-blue"}>{accent}</span>
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
      <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
        {eyebrow && (
          <div
            className={cn(
              "mb-5 flex items-center gap-3",
              align === "center" && "justify-center",
            )}
          >
            <span className="h-[3px] w-7 rounded-full bg-brand-lime" aria-hidden="true" />
            {/* Sobre azul el acento lo da el filete: el lima a 11px se queda
                en 4.36:1 sobre #5151ED, por debajo de AA para texto chico. */}
            <span className={cn("eyebrow", dark ? "text-white" : "text-brand-blue")}>
              {eyebrow}
            </span>
          </div>
        )}

        <Tag
          className={cn(
            "font-bold",
            Tag === "h1"
              ? "text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.06]"
              : "text-[clamp(1.75rem,3.2vw,2.6rem)] leading-[1.12]",
            dark ? "text-white" : "text-ink",
          )}
        >
          {heading}
        </Tag>

        {description && (
          <p
            className={cn(
              "mt-5 text-[17px] leading-relaxed",
              dark ? "text-white/90" : "text-ink-2",
            )}
          >
            {description}
          </p>
        )}
      </Reveal>

      {action && (
        <Reveal delay={0.08} className="shrink-0">
          {action}
        </Reveal>
      )}
    </div>
  );
}
