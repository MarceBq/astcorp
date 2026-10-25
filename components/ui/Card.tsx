import { cn } from "@/lib/utils";

/**
 * Tarjeta única del sistema.
 *
 * Todas las tarjetas del sitio salen de aquí: mismo radio, mismo filete,
 * misma sombra y la misma reacción al cursor.
 */
export function Card({
  as: Tag = "div",
  interactive = false,
  className,
  children,
  ...props
}: {
  as?: "div" | "article" | "li";
  /** Añade elevación y realce de filete al pasar el cursor. */
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  return (
    <Tag
      className={cn(
        "rounded-card border border-line bg-white",
        interactive &&
          "group transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Tamaños del contenedor de ícono.
 *
 * El tamaño del SVG y el grosor de trazo se imponen desde aquí
 * (`[&_svg]:…`), de modo que ningún punto del sitio pueda quedarse con un
 * ícono más pequeño o más fino: basta con usar `IconBadge`.
 */
const badgeSizes = {
  sm: "size-12 rounded-[14px] [&_svg]:size-6",
  md: "size-14 rounded-[16px] [&_svg]:size-7",
  lg: "size-16 rounded-[18px] [&_svg]:size-8",
};

/**
 * Paletas del badge: los dos colores de marca, uno sobre el otro. Ambas
 * combinaciones dan 4.3:1 entre ícono y contenedor, por encima del 3:1
 * mínimo de contraste no textual.
 */
const badgeTones = {
  /** Azul de marca con el ícono en verde lima. */
  blue: "bg-brand-blue text-brand-lime",
  /** Verde lima con el ícono en azul de marca. */
  lime: "bg-brand-lime text-brand-blue",
  /** Para fondos azules: translúcido con el ícono en lima. */
  onDark: "bg-white/10 text-brand-lime ring-1 ring-white/25",
};

export type BadgeTone = keyof typeof badgeTones;

/**
 * Ciclo de paletas de una fila de cards: azul y lima alternados. Se resuelve
 * por índice, nunca card por card, así que añadir o quitar una card reordena
 * el patrón sola.
 */
const badgeCycle = ["blue", "lime"] as const;

export function badgeToneFor(index: number): BadgeTone {
  return badgeCycle[index % badgeCycle.length];
}

export function IconBadge({
  size = "md",
  tone = "blue",
  className,
  children,
}: {
  size?: keyof typeof badgeSizes;
  tone?: BadgeTone;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center transition-colors duration-300",
        "[&_svg]:[stroke-width:2]",
        badgeSizes[size],
        badgeTones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
