import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "dark" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-[10px] font-bold tracking-[-0.005em] " +
  "transition-[background-color,border-color,color] duration-200 " +
  "disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

/**
 * Relleno y color de texto.
 * Los fondos son papel (azul, lima, blanco); la tinta K queda para el texto,
 * el contorno y la sombra.
 */
const surfaces: Record<Variant, string> = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue-deep",
  accent: "bg-brand-lime text-ink-key hover:bg-brand-lime-strong",
  dark: "bg-ink-key text-white hover:bg-night-2",
  /* Al pasar el cursor se entinta de amarillo: K sobre amarillo da 16:1 */
  outline: "bg-white text-ink-key hover:bg-ink-yellow",
  ghost: "text-brand-blue hover:bg-brand-lime-pale",
  onDark: "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-ink-key",
};

/** Contorno en tinta K, separado para poder omitirlo con `borderless`. */
const borders: Record<Variant, string> = {
  primary: "border-2 border-ink-key",
  accent: "border-2 border-ink-key",
  dark: "border-2 border-ink-key",
  outline: "border-2 border-ink-key",
  ghost: "border-2 border-brand-blue/40 hover:border-brand-blue",
  onDark: "border-2 border-white/60 hover:border-white",
};

/**
 * Sello de tinta: sombra sólida magenta en reposo, cyan al pasar el cursor y
 * K al pulsar, con el botón desplazándose como si se entintara el papel.
 * Es la utilidad `.ink-button` de globals.css.
 */
const press: Record<Variant, string> = {
  primary: "ink-button",
  accent: "ink-button",
  dark: "ink-button",
  outline: "ink-button",
  ghost: "active:translate-y-px",
  onDark: "ink-button",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** Omite contorno y sello de tinta. La altura no cambia. */
  borderless?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", borderless = false, className, children } = props;
  const classes = cn(
    base,
    surfaces[variant],
    !borderless && borders[variant],
    !borderless && press[variant],
    sizes[size],
    className,
  );

  if (props.href !== undefined) {
    const {
      href,
      variant: _variant,
      size: _size,
      borderless: _borderless,
      className: _className,
      children: _children,
      ...rest
    } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const {
    variant: _variant,
    size: _size,
    borderless: _borderless,
    className: _className,
    children: _children,
    ...rest
  } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
