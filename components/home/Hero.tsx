"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { heroMedia } from "@/data/hero";
import { cn } from "@/lib/utils";

/** Sección 01 — Hero a pantalla completa con video de presentación. */
export function Hero() {
  const reduced = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  /**
   * El video suele estar listo antes de que React hidrate, de modo que el
   * evento `canplay` ya pasó y nunca llega al handler. Se consulta
   * `readyState` al montar para no dejar el video en opacidad 0.
   */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.readyState >= 3) setVideoReady(true);
  }, []);

  return (
    <section
      className="relative flex min-h-[620px] h-[100svh] w-full items-end overflow-hidden bg-brand-blue-900"
      aria-label="Presentación de ASTCORP"
    >
      {/* --------------------------------------------------------------
          Capa 1 — Fondo de marca.
          Se ve mientras el video carga y si el navegador no lo reproduce,
          de modo que el hero nunca aparece vacío ni roto.
      --------------------------------------------------------------- */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_15%_10%,#2F2FA8_0%,#1B1B63_45%,#0E0F1F_100%)]" />
      <div
        className="absolute -left-40 top-1/4 size-[560px] rounded-full bg-brand-lime/20 blur-[160px]"
        aria-hidden="true"
      />
      {heroMedia.poster && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${heroMedia.poster})` }}
          aria-hidden="true"
        />
      )}

      {/* --------------------------------------------------------------
          Capa 2 — Video de fondo.
      --------------------------------------------------------------- */}
      {(heroMedia.mp4 || heroMedia.webm) && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroMedia.poster ?? undefined}
          onLoadedData={() => setVideoReady(true)}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoReady(false)}
          aria-hidden="true"
          tabIndex={-1}
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-1000",
            videoReady ? "opacity-100" : "opacity-0",
          )}
        >
          {heroMedia.webm && <source src={heroMedia.webm} type="video/webm" />}
          {heroMedia.mp4 && <source src={heroMedia.mp4} type="video/mp4" />}
        </video>
      )}

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
            <span className="size-[7px] rounded-[2px] bg-brand-lime" aria-hidden="true" />
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
            <Button href="/contacto" size="lg" variant="accent" className="group">
              Solicitar cotización
              <ArrowRight
                className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
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
        <span className="text-[10.5px] font-semibold uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="size-[18px] animate-bounce" strokeWidth={1.75} aria-hidden="true" />
      </motion.a>
    </section>
  );
}
