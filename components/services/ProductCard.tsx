import { Plus } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { serviceName } from "@/data/services";
import type { Product } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * Tarjeta de producto dentro del catálogo de un servicio.
 *
 * No enlaza a una ruta propia: abre la ficha en el mismo catálogo. Por eso
 * la tarjeta completa es un botón, no un enlace.
 */
export function ProductCard({
  product,
  onSelect,
  showService = false,
  subcategoryName,
  className,
}: {
  product: Product;
  onSelect: () => void;
  showService?: boolean;
  subcategoryName?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-haspopup="dialog"
      className={cn(
        "group block w-full rounded-media text-left transition-transform duration-300",
        className,
      )}
    >
      <div className="relative">
        <Media
          src={product.images[0]}
          alt={product.name}
          label={product.name}
          className="aspect-[4/3] transition-colors duration-300 group-hover:border-line-strong"
          imageClassName="group-hover:scale-[1.04]"
        />

        <span className="absolute bottom-3 right-3 inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 shadow-card backdrop-blur transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Plus className="size-[18px]" strokeWidth={2} aria-hidden="true" />
        </span>
      </div>

      <div className="mt-4">
        <span className="eyebrow text-brand-blue">
          {showService ? serviceName(product.service) : subcategoryName}
        </span>

        <h3 className="mt-2 text-[16.5px] font-semibold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-brand-blue">
          {product.name}
        </h3>

        <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{product.summary}</p>
      </div>
    </button>
  );
}
