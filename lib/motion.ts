import type { Variants, Transition } from "framer-motion";

/**
 * Vocabulario de movimiento del sitio.
 *
 * Reglas: entradas cortas, sin rebote, sin escalas agresivas.
 * `prefers-reduced-motion` se respeta vía `useReducedMotion` en los
 * componentes y vía CSS en globals.css.
 */

export const easeOutSoft: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutSoft },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: easeOutSoft } },
};

/** Contenedor para escalonar hijos que usen `fadeUp`. */
export const stagger = (staggerChildren = 0.07, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});

/** Revelado de imagen: la máscara sube y deja ver el medio. */
export const imageReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.8, ease: easeOutSoft },
  },
};

/** Configuración por defecto de `whileInView`. */
export const viewportOnce = { once: true, amount: 0.25 } as const;
