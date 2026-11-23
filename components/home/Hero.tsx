"use client";

import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroSlides } from "@/data/hero";
import { cn } from "@/lib/utils";

/** Cuánto permanece cada imagen y cuánto dura el fundido entre una y otra. */
const DURACION = 5200;
const FUNDIDO = 1200;

/** Sección 01 — Hero a pantalla completa con pase de imágenes. */
export function Hero() {
  const reduced = useReducedMotion();
  const [actual, setActual] = useState(0);

  /**
   * El pase avanza solo. Con `prefers-reduced-motion` no se mueve: se queda
   * en la primera imagen, que es la portada natural.
   */
  useEffect(() => {
    if (reduced || heroSlides.length < 2) return;
    const id = setInterval(
      () => setActual((i) => (i + 1) % heroSlides.length),
      DURACION,
    );
    return () => clearInterval(id);
  }, [reduced]);

  return (
    <section
      className="relative flex min-h-[620px] h-[100svh] w-full items-end overflow-hidden bg-brand-blue-900"
      aria-label="Presentación de ASTCORP"
    >
      {/* --------------------------------------------------------------
          Capa 1 — Fondo de marca.
          Se ve mientras cargan las imágenes, de modo que el hero nunca
          aparece vacío ni roto.
      --------------------------------------------------------------- */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_10%,#2F2FA8_0%,#1B1B63_45%,#0E0F1F_100%)]" />
      <div
        className="absolute -left-40 top-1/4 size-[560px] rounded-full bg-brand-lime/20 blur-[160px]"
        aria-hidden="true"
      />

      {/* --------------------------------------------------------------
          Capa 2 — Pase de imágenes.
          Todas montadas y superpuestas: el cambio es un fundido de opacidad,
          así que no hay salto ni espera de carga al pasar a la siguiente.
      --------------------------------------------------------------- */}
      {heroSlides.map((slide, i) => {
        const visible = i === actual;
        // Dos recortes de la misma foto: el vertical en teléfono y el
        // apaisado de `sm` hacia arriba. Solo uno se muestra por pantalla.
        const comun = cn(
          "object-cover transition-opacity ease-in-out",
          visible ? "opacity-100" : "opacity-0",
        );
        const estilo = { transitionDuration: `${FUNDIDO}ms` };

        return (
          <Fragment key={slide.src}>
            <Image
              src={slide.movil}
              // Solo la visible lleva texto alternativo: las demás están en
              // el DOM pero tapadas, y describirlas todas sería ruido.
              alt={visible ? slide.alt : ""}
              fill
              // La primera pesa en el LCP y entra con prioridad. Las otras no
              // se dejan en `lazy`: están tapadas y el observador podría no
              // dispararlas a tiempo, y el fundido las necesita ya cargadas.
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              sizes="100vw"
              className={cn(comun, "sm:hidden")}
              style={estilo}
            />
            <Image
              src={slide.src}
              alt=""
              fill
              priority={i === 0}
              loading={i === 0 ? undefined : "eager"}
              sizes="100vw"
              className={cn(comun, "hidden sm:block")}
              style={estilo}
            />
          </Fragment>
        );
      })}

      {/* --------------------------------------------------------------
          Capa 3 — Overlay de legibilidad.
          Degradado direccional en vez de un velo plano: oscurece donde vive
          el texto y deja respirar la imagen a la derecha.
      --------------------------------------------------------------- */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0B0C18]/88 via-[#0B0C18]/55 to-[#0B0C18]/15"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#0B0C18]/80 via-[#0B0C18]/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0B0C18]/70 to-transparent"
        aria-hidden="true"
      />

      {/* -------------------------------------------------------------- */}
      <Container width="wide" className="relative z-10 pb-16 pt-32 sm:pb-20">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="max-w-[54rem]"
        >
          <div className="flex items-center gap-2.5">
            <span
              className="size-[7px] rounded-[2px] bg-brand-lime"
              aria-hidden="true"
            />
            <span className="font-display text-[14px] font-bold uppercase tracking-[0.24em] text-white">
              ASTCORP
            </span>
          </div>

          <h1 className="mt-7 text-[clamp(2.5rem,6.6vw,5.25rem)] font-bold leading-[1.02] tracking-[-0.035em] text-white">
            Soluciones que{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-ink">imprimen</span>
              <span
                className="absolute -inset-x-[0.08em] -inset-y-[0.02em] z-0 rounded-[4px] bg-brand-lime"
                aria-hidden="true"
              />
            </span>{" "}
            tu marca.
          </h1>

          <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-[clamp(0.95rem,1.4vw,1.15rem)] font-medium tracking-[0.02em] text-white/85">
            <span>Impresión</span>
            <span className="text-brand-lime" aria-hidden="true">
              ·
            </span>
            <span>Visual</span>
            <span className="text-brand-lime" aria-hidden="true">
              ·
            </span>
            <span>Merch</span>
            <span className="text-brand-lime" aria-hidden="true">
              ·
            </span>
            <span>Corporativo</span>
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href="/contacto"
              size="lg"
              variant="accent"
              className="group"
            >
              Solicitar cotización
              <ArrowRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Button>
            <Button href="/servicios" size="lg" variant="onDark">
              Ver servicios
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Indicador de scroll */}
      <motion.a
        href="#por-que-astcorp"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        aria-label="Continuar al contenido"
        className="absolute inset-x-0 bottom-5 z-10 mx-auto flex w-fit flex-col items-center gap-1.5 text-white/60 transition-colors hover:text-white"
      >
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown
          className="size-5 animate-bounce"
          strokeWidth={2}
          aria-hidden="true"
        />
      </motion.a>
    </section>
  );
}
