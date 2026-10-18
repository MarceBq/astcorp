import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "dark" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-[10px] font-bold tracking-[-0.005em] " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-200 " +
  "disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

/** Relleno y color de texto. */
const surfaces: Record<Variant, string> = {
  primary: "bg-brand-blue text-white hover:bg-brand-blue-deep",
  accent: "bg-brand-lime text-night hover:bg-brand-lime-strong",
  dark: "bg-night text-white hover:bg-night-2",
  outline: "bg-white text-night hover:bg-night hover:text-white",
  ghost: "text-brand-blue hover:bg-brand-lime-pale",
  onDark: "bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-night",
};

/** Contorno, separado para poder omitirlo con `borderless`. */
const borders: Record<Variant, string> = {
  primary: "border-2 border-night",
  accent: "border-2 border-night",
  dark: "border-2 border-night",
  outline: "border-2 border-night",
  ghost: "border-2 border-brand-blue/40 hover:border-brand-blue",
  onDark: "border-2 border-white/60 hover:border-white",
};

/**
 * Sombra sólida desplazada + micro-desplazamiento al pasar el cursor y
 * hundido al pulsar. Es lo que da el carácter de cartel serigrafiado.
 */
const press: Record<Variant, string> = {
  primary:
    "shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-night)]",
  accent:
    "shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-night)]",
  dark:
    "shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard-lime active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-night)]",
  outline:
    "shadow-hard-sm hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0_0_var(--color-night)]",
  ghost: "active:translate-y-px",
  /* Sobre el video una sombra oscura no se vería: aquí el desplazado es lime. */
  onDark:
    "hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-hard-lime active:translate-x-0 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** Omite contorno y sombra sólida. La altura no cambia. */
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
