import type { Stat } from "./types";
import { yearsOfExperience } from "./company";

/**
 * Métricas de la sección de confianza.
 *
 * IMPORTANTE: no se inventan cifras. Las métricas con `confirmed: false`
 * simplemente NO se renderizan; la sección se apoya mientras tanto en hechos
 * verificables (fecha de fundación, sede, líneas de servicio).
 *
 * Para publicar una métrica: colocar `value` y cambiar `confirmed` a `true`.
 * El número se anima con count-up automáticamente.
 */
export const stats: Stat[] = [
  {
    value: yearsOfExperience(),
    suffix: "+",
    label: "Años de experiencia",
    confirmed: true,
  },
  {
    value: null,
    suffix: "+",
    label: "Clientes atendidos",
    confirmed: false,
  },
  {
    value: null,
    suffix: "+",
    label: "Proyectos producidos",
    confirmed: false,
  },
];

/** Solo las métricas con dato real confirmado llegan a la interfaz. */
export const confirmedStats = stats.filter(
  (stat): stat is Stat & { value: number } => stat.confirmed && stat.value !== null,
);
