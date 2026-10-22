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
 * Paletas del badge. Las dos son de marca y ambas con contraste alto:
 * lima sobre azul 11.6:1, azul profundo sobre lima 11.0:1.
 */
const badgeTones = {
  /** Azul de marca con el ícono en verde lima. */
  blue: "bg-brand-blue text-brand-lime group-hover:bg-brand-lime group-hover:text-brand-blue-900",
  /** Verde lima con el ícono en azul profundo. */
  lime: "bg-brand-lime text-brand-blue-900 group-hover:bg-brand-blue group-hover:text-brand-lime",
  /** Para fondos azules: translúcido con el ícono en lima. */
  onDark: "bg-white/10 text-brand-lime ring-1 ring-white/25",
};

export function IconBadge({
  size = "md",
  tone = "blue",
  className,
  children,
}: {
  size?: keyof typeof badgeSizes;
  tone?: keyof typeof badgeTones;
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
