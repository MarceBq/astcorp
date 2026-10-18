"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/**
 * Los envoltorios son polimórficos (`div`, `li`, `ol`, `article`...) pero
 * comparten la misma API de props. Se normaliza el tipo al de `motion.div`
 * para no duplicar firmas por cada etiqueta soportada.
 */
type MotionTag = typeof motion.div;
const asMotion = (tag: keyof typeof motion): MotionTag => motion[tag] as unknown as MotionTag;

interface RevealProps extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView"> {
  /** Retraso extra en segundos, para escalonar bloques hermanos. */
  delay?: number;
  as?: "div" | "li" | "article" | "section";
}

/** Entrada fade-up al entrar en viewport. Inerte si el usuario reduce movimiento. */
export function Reveal({ delay = 0, as = "div", children, ...props }: RevealProps) {
  const reduced = useReducedMotion();
  const Component = asMotion(as);

  if (reduced) {
    const { transition: _transition, ...rest } = props;
    return <Component {...rest}>{children}</Component>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay }}
      {...props}
    >
      {children}
    </Component>
  );
}

interface RevealGroupProps
  extends Omit<HTMLMotionProps<"div">, "variants" | "initial" | "whileInView"> {
  /** Separación temporal entre hijos, en segundos. */
  gap?: number;
  delayChildren?: number;
  as?: "div" | "ul" | "ol";
}

/** Contenedor que escalona a sus hijos `RevealItem`. */
export function RevealGroup({
  gap = 0.07,
  delayChildren = 0,
  as = "div",
  children,
  ...props
}: RevealGroupProps) {
  const reduced = useReducedMotion();
  const Component = asMotion(as);

  if (reduced) return <Component {...props}>{children}</Component>;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger(gap, delayChildren)}
      {...props}
    >
      {children}
    </Component>
  );
}

interface RevealItemProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  as?: "div" | "li" | "article";
}

export function RevealItem({ as = "div", children, ...props }: RevealItemProps) {
  const reduced = useReducedMotion();
  const Component = asMotion(as);

  if (reduced) return <Component {...props}>{children}</Component>;

  return (
    <Component variants={fadeUp} {...props}>
      {children}
    </Component>
  );
}
