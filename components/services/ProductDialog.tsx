"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Phone, X } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { getService, getSubcategory } from "@/data/services";
import { company } from "@/data/company";
import type { Product } from "@/data/types";

/**
 * Ficha de producto.
 *
 * Se abre sobre el catálogo en lugar de navegar a una ruta propia: el usuario
 * revisa el detalle y vuelve al listado sin perder el filtro ni el scroll.
 * El CTA lleva a /contacto con el producto y el servicio precargados.
 */
export function ProductDialog({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!product) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [product, onClose]);

  const service = product ? getService(product.service) : undefined;
  const subcategory = product ? getSubcategory(product.service, product.subcategory) : undefined;

  const quoteHref = product
    ? `/contacto?servicio=${encodeURIComponent(product.service)}&producto=${encodeURIComponent(product.name)}`
    : "/contacto";

  return (
    <AnimatePresence>
      {product && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center sm:p-6">
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-label="Cerrar ficha de producto"
            className="absolute inset-0 cursor-default bg-brand-blue-900/55 backdrop-blur-[2px]"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-t-[20px] border border-line bg-white shadow-card-hover sm:max-h-[86svh] sm:rounded-card"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute right-4 top-4 z-10 inline-flex size-9 items-center justify-center rounded-[9px] border border-line bg-white/90 text-ink backdrop-blur transition-colors hover:bg-neutral-50"
            >
              <X className="size-[18px]" strokeWidth={2} />
            </button>

            <div className="overflow-y-auto overscroll-contain">
              <div className="grid gap-0 sm:grid-cols-2">
                <Media
                  src={product.images[0]}
                  alt={product.name}
                  label={product.name}
                  className="aspect-[4/3] rounded-none border-0 border-b border-line sm:aspect-auto sm:h-full sm:min-h-[380px] sm:border-b-0 sm:border-r"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    {service && (
                      <span className="rounded-[6px] bg-brand-blue-100 px-2.5 py-1 text-[12px] font-medium text-brand-blue-700">
                        {service.name}
                      </span>
                    )}
                    {subcategory && (
                      <span className="rounded-[6px] border border-line px-2.5 py-1 text-[12px] text-ink-2">
                        {subcategory.name}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-4 text-[24px] font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-[28px]">
                    {product.name}
                  </h2>

                  <p className="mt-4 text-[15px] leading-relaxed text-ink-2">
                    {product.description}
                  </p>

                  {product.features.length > 0 && (
                    <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-[14.5px] leading-relaxed text-ink-2"
                        >
                          <Check
                            className="mt-0.5 size-[18px] shrink-0 text-brand-blue"
                            strokeWidth={2.25}
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-6 text-[13px] leading-relaxed text-ink-3">
                    El precio depende del material, el acabado y el volumen. Trabajamos por
                    cotización.
                  </p>

                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                    <Link
                      href={quoteHref}
                      className="group inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-[10px] border-2 border-brand-blue-700 bg-brand-blue px-5 text-sm font-medium text-white transition-colors hover:bg-brand-blue-700"
                    >
                      Solicitar cotización
                      <ArrowRight
                        className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </Link>
                    <a
                      href={`tel:${company.phones[0].tel}`}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-[10px] border-2 border-brand-blue/40 px-5 text-sm font-medium text-ink transition-colors hover:border-brand-blue hover:bg-brand-blue-50"
                    >
                      <Phone className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
                      {company.phones[0].display}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
