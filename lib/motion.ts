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

/**
 * Resaltador: la franja se pinta de izquierda a derecha.
 *
 * Hereda el estado del `Reveal` que envuelve la tarjeta, así que se pinta
 * justo cuando la tarjeta entra en pantalla. Fuera de un `Reveal` —o con
 * movimiento reducido, donde `Reveal` deja de propagar variantes— el span
 * se queda con el `background-size` de la clase, es decir, ya pintado.
 */
export const highlightSweep: Variants = {
  hidden: { backgroundSize: "0% 100%" },
  visible: {
    backgroundSize: "100% 100%",
    transition: { duration: 0.5, ease: easeOutSoft, delay: 0.15 },
  },
};

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
