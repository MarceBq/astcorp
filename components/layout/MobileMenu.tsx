"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Phone, Plus, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/data/navigation";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  /* Bloquea el scroll del documento y permite cerrar con Escape. */
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden"
        >
          {/* La barra superior conserva el lime del navbar para que abrir el
              menú no cambie de color la cabecera. */}
          <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-brand-blue-ink/15 bg-brand-lime px-5">
            <Logo tone="onLime" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar menú"
              className="inline-flex size-10 items-center justify-center rounded-[10px] border-2 border-brand-blue-ink/25 text-brand-blue-ink transition-colors hover:bg-brand-blue-ink/10"
            >
              <X className="size-6" strokeWidth={2.5} />
            </button>
          </div>

          <nav aria-label="Navegación móvil" className="flex-1 overflow-y-auto overscroll-contain px-5 py-4">
            <ul className="divide-y divide-line">
              {mainNav.map((item, index) => {
                const hasChildren = Boolean(item.children?.length);
                const isOpen = expanded === item.label;

                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index, duration: 0.3 }}
                    className="py-1"
                  >
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="flex-1 py-3.5 font-display text-[21px] font-semibold tracking-[-0.02em] text-heading"
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                          aria-label={isOpen ? `Contraer ${item.label}` : `Expandir ${item.label}`}
                          aria-expanded={isOpen}
                          className="inline-flex size-9 items-center justify-center rounded-[8px] border-2 border-line text-brand-blue"
                        >
                          {isOpen ? (
                            <Minus className="size-[18px]" strokeWidth={2.75} />
                          ) : (
                            <Plus className="size-[18px]" strokeWidth={2.75} />
                          )}
                        </button>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {hasChildren && isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="mb-3 ml-1 space-y-0.5 border-l border-line pl-4">
                            {item.children!.map((child) => (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  onClick={onClose}
                                  className="block py-2.5 text-[15px] font-medium text-ink-2"
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </div>
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className={cn("shrink-0 space-y-4 border-t border-line bg-surface-2 px-5 py-5")}>
            <Button href="/contacto" size="lg" className="w-full font-semibold" onClick={onClose}>
              Solicitar cotización
            </Button>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-ink-2">
              {company.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-blue"
                >
                  <Phone className="size-4" strokeWidth={1.75} aria-hidden="true" />
                  {phone.display}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
