import { cn } from "@/lib/utils";

/**
 * Tarjeta única del sistema.
 *
 * Todas las tarjetas del sitio salen de aquí: mismo radio, mismo filete,
 * misma sombra y la misma reacción al cursor. Es la pieza que más hacía
 * que cada sección pareciera de un diseño distinto.
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

const badgeSizes = {
  md: "size-12 rounded-[12px]",
  lg: "size-14 rounded-[14px]",
};

/**
 * Contenedor de ícono, igual en toda la web: fondo lima muy suave con el
 * ícono en azul, que se invierte a lima pleno al pasar el cursor.
 */
export function IconBadge({
  size = "md",
  className,
  children,
}: {
  size?: keyof typeof badgeSizes;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center bg-brand-lime-50 text-brand-blue",
        "transition-colors duration-300 group-hover:bg-brand-lime group-hover:text-ink",
        badgeSizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
