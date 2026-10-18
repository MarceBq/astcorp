import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** `wide` para grids de catálogo, `narrow` para lectura editorial. */
  width?: "default" | "wide" | "narrow";
}

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-[1240px]",
  wide: "max-w-[1440px]",
};

export function Container({ width = "default", className, children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", widths[width], className)} {...props}>
      {children}
    </div>
  );
}
