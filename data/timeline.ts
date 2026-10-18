import type { TimelineEntry } from "./types";

/**
 * Historia de la empresa.
 *
 * Solo la fundación es un dato confirmado. Las etapas posteriores están
 * marcadas con `confirmed: false` y muestran el año como pendiente: el
 * cliente debe fijar las fechas reales antes de publicar.
 */
export const timeline: TimelineEntry[] = [
  {
    year: "2019",
    title: "Fundación de ASTCORP",
    description:
      "La empresa inicia operaciones el 01 de octubre en Lima, con foco en servicios integrales de diseño e impresión.",
    confirmed: true,
  },
  {
    year: "202X",
    title: "Consolidación de servicios gráficos",
    description:
      "Se estandariza el proceso de trabajo desde el arte final hasta la impresión, con control de color y acabados.",
    confirmed: false,
  },
  {
    year: "202X",
    title: "Expansión de merchandising",
    description:
      "Se amplía la oferta de artículos promocionales y técnicas de personalización para campañas corporativas.",
    confirmed: false,
  },
  {
    year: "202X",
    title: "Expansión de soluciones visuales",
    description:
      "Se incorpora el desarrollo de publicidad indoor y outdoor, elementos estructurales e implementaciones visuales.",
    confirmed: false,
  },
  {
    year: "Actualidad",
    title: "Cobertura nacional",
    description:
      "ASTCORP atiende proyectos en todo el Perú y coordina la entrega en una o varias sedes.",
    confirmed: true,
  },
];
