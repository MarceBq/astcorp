import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "ghost" | "onDark";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-control font-semibold " +
  "transition-[background-color,border-color,color,box-shadow] duration-200 " +
  "disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap";

/**
 * Cinco variantes y ninguna decoración: el peso visual lo dan el azul y el
 * lima, no los efectos. El lima siempre lleva texto oscuro encima (14.1:1).
 */
const variants: Record<Variant, string> = {
  primary: "bg-brand-blue text-white shadow-control hover:bg-brand-blue-600",
  accent: "bg-brand-lime text-ink shadow-control hover:bg-brand-lime-600",
  outline: "border border-line-strong bg-white text-ink hover:border-brand-blue hover:text-brand-blue",
  ghost: "text-brand-blue hover:bg-brand-blue-50",
  onDark: "border border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-[52px] px-7 text-[15px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
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
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const {
      href,
      variant: _variant,
      size: _size,
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
