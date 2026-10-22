"use client";

import { motion } from "framer-motion";
import { highlightSweep } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Paletas del resaltador.
 *
 * `lime` es la de uso normal, sobre tarjetas claras: azul profundo sobre
 * lima, 11.6:1. `blue` queda para tarjetas con fondo lima o cualquier otro
 * donde el lima no contrastaría: azul de marca con el texto en blanco.
 */
const tones = {
  lime: "text-brand-blue-900",
  blue: "[--highlight-color:var(--color-brand-blue)] text-white",
};

/**
 * Texto con franja de color detrás, como un trazo de marcador.
 *
 * Dentro de un `Reveal` la franja se pinta de izquierda a derecha al entrar
 * la tarjeta en pantalla; fuera de él, o con `prefers-reduced-motion`,
 * aparece ya pintada. El aspecto vive en la utilidad `highlight-text` de
 * globals.css, de modo que la clase sola sirve donde no haga falta JS.
 */
export function HighlightText({
  tone = "lime",
  className,
  children,
}: {
  tone?: keyof typeof tones;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.span
      variants={highlightSweep}
      className={cn("highlight-text", tones[tone], className)}
    >
      {children}
    </motion.span>
  );
}
