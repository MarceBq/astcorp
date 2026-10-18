import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Ruta de navegación" className={cn("text-[13px]", className)}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-ink-3">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-brand-blue">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(last && "text-ink-2")} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!last && <ChevronRight className="size-4 text-line-strong" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
