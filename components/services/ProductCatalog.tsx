"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { ProductDialog } from "./ProductDialog";
import type { Product, Subcategory } from "@/data/types";
import { cn } from "@/lib/utils";

const ALL = "todos";

/**
 * Catálogo de un servicio: filtro por subcategoría + rejilla de productos.
 *
 * Los productos no navegan a una ruta propia; la ficha se abre en un diálogo
 * sobre el mismo catálogo. Escala sin cambios: recibe cualquier cantidad de
 * productos y deriva filtros y contadores de la propia data.
 */
export function ProductCatalog({
  products,
  subcategories,
}: {
  products: Product[];
  subcategories: Subcategory[];
}) {
  const [active, setActive] = useState(ALL);
  const [selected, setSelected] = useState<Product | null>(null);
  const reduced = useReducedMotion();

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const product of products) {
      map.set(product.subcategory, (map.get(product.subcategory) ?? 0) + 1);
    }
    return map;
  }, [products]);

  const subcategoryNames = useMemo(() => {
    const map = new Map<string, string>();
    for (const sub of subcategories) map.set(sub.slug, sub.name);
    return map;
  }, [subcategories]);

  /** Solo se ofrecen subcategorías con al menos un producto publicado. */
  const available = subcategories.filter((sub) => (counts.get(sub.slug) ?? 0) > 0);
  const filtered = active === ALL ? products : products.filter((p) => p.subcategory === active);

  if (products.length === 0) {
    return (
      <p className="rounded-card border border-dashed border-line bg-surface-2 p-10 text-center text-[15px] text-ink-2">
        Estamos preparando el catálogo de esta línea. Escríbenos y te enviamos las opciones
        disponibles.
      </p>
    );
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar catálogo">
        <Chip
          label="Todos"
          count={products.length}
          active={active === ALL}
          onClick={() => setActive(ALL)}
        />
        {available.map((sub) => (
          <Chip
            key={sub.slug}
            label={sub.name}
            count={counts.get(sub.slug) ?? 0}
            active={active === sub.slug}
            onClick={() => setActive(sub.slug)}
          />
        ))}
      </div>

      <p className="mt-6 text-[13px] text-ink-3" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "producto" : "productos"}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {filtered.map((product) => (
            <motion.div
              key={product.slug}
              layout={!reduced}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard
                product={product}
                subcategoryName={subcategoryNames.get(product.subcategory)}
                onSelect={() => setSelected(product)}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <ProductDialog product={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-2 rounded-[9px] border px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200",
        active
          ? "border-brand-blue bg-brand-blue text-white"
          : "border-line bg-white text-ink-2 hover:border-line-strong hover:text-ink",
      )}
    >
      {label}
      <span className={cn("text-[11.5px] tabular-nums", active ? "text-white/60" : "text-ink-3")}>
        {count}
      </span>
    </button>
  );
}
