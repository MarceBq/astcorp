"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { mainNav, type NavItem } from "@/data/navigation";
import { cn } from "@/lib/utils";

/**
 * Navbar.
 *
 * Dos estados:
 *  - Transparente: solo en el home y solo antes de hacer scroll, para que el
 *    video del hero se vea completo.
 *  - Lime: el resto del tiempo. Fondo #AEF84F con tipografía en azul
 *    corporativo profundo y trazos gruesos para máxima legibilidad.
 */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  /** Solo el home tiene hero a pantalla completa detrás del navbar. */
  const overlaysHero = pathname === "/";
  const transparent = overlaysHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
          transparent
            ? "bg-transparent"
            : "bg-brand-lime shadow-[0_1px_16px_-8px_rgba(16,17,23,0.35)]",
        )}
      >
        <Container width="wide">
          <div className="flex h-[68px] items-center justify-between gap-6 lg:h-[76px]">
            <Logo tone={transparent ? "light" : "onLime"} />

            <nav aria-label="Navegación principal" className="hidden lg:block">
              <ul className="flex items-center gap-1" onMouseLeave={() => setOpenMenu(null)}>
                {mainNav.map((item) => (
                  <NavEntry
                    key={item.label}
                    item={item}
                    transparent={transparent}
                    active={item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)}
                    open={openMenu === item.label}
                    onOpen={() => setOpenMenu(item.children ? item.label : null)}
                  />
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                href="/contacto"
                size="sm"
                variant={transparent ? "accent" : "primary"}
                className="hidden font-semibold tracking-[-0.005em] sm:inline-flex"
              >
                Cotizar proyecto
              </Button>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menú"
                aria-expanded={mobileOpen}
                className={cn(
                  "inline-flex size-10 items-center justify-center rounded-[10px] border-2 transition-colors lg:hidden",
                  transparent
                    ? "border-white/40 text-white hover:bg-white/10"
                    : "border-brand-blue-900/25 text-brand-blue-900 hover:bg-brand-blue-900/10",
                )}
              >
                <Menu className="size-6" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

function NavEntry({
  item,
  transparent,
  active,
  open,
  onOpen,
}: {
  item: NavItem;
  transparent: boolean;
  active: boolean;
  open: boolean;
  onOpen: () => void;
}) {
  const hasChildren = Boolean(item.children?.length);
  const wide = item.label === "Servicios";

  return (
    <li className="relative" onMouseEnter={onOpen}>
      <Link
        href={item.href}
        aria-expanded={hasChildren ? open : undefined}
        className={cn(
          "inline-flex items-center gap-1 rounded-[8px] px-3.5 py-2 text-[15px] font-semibold tracking-[-0.005em] transition-colors",
          transparent
            ? "text-white/90 hover:text-white"
            : active
              ? "text-brand-blue-700"
              : "text-brand-blue-900 hover:text-brand-blue-700",
        )}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            className={cn("size-[18px] transition-transform duration-200", open && "rotate-180")}
            strokeWidth={2.75}
            aria-hidden="true"
          />
        )}
      </Link>

      {/* Marcador de sección activa */}
      {active && !transparent && (
        <span
          className="absolute inset-x-3.5 -bottom-0.5 h-[3px] rounded-full bg-brand-blue-700"
          aria-hidden="true"
        />
      )}

      <AnimatePresence>
        {hasChildren && open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className={cn("absolute left-0 top-full pt-3", wide ? "w-[520px]" : "w-[280px]")}
          >
            <div className="overflow-hidden rounded-card border border-line bg-white shadow-card-hover">
              <ul className={cn("p-2", wide && "grid grid-cols-2 gap-1")}>
                {item.children!.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="group block rounded-[10px] px-3.5 py-3 transition-colors hover:bg-neutral-50"
                    >
                      <span className="flex items-center justify-between gap-3 text-[15px] font-semibold text-ink">
                        {child.label}
                        <span className="h-px w-0 bg-brand-lime transition-all duration-300 group-hover:w-4" />
                      </span>
                      {child.description && (
                        <span className="mt-1 block text-[13px] font-normal leading-snug text-ink-3">
                          {child.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>

              {item.overview && (
                <Link
                  href={item.overview.href}
                  className="flex items-center justify-between border-t border-line bg-neutral-50 px-5 py-3 text-[13.5px] font-semibold text-brand-blue transition-colors hover:bg-brand-blue-50"
                >
                  {item.overview.label}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
