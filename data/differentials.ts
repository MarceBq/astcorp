/**
 * Diferenciales comerciales del home.
 *
 * Los títulos son los proporcionados por el cliente. Las descripciones son
 * breves y evitan afirmaciones absolutas que ASTCORP no haya confirmado
 * (plazos garantizados, cifras de stock, cobertura exacta).
 *
 * Nota: el envío internacional se retiró a pedido del cliente. La cobertura
 * que se comunica es únicamente nacional.
 */
export const differentials = [
  {
    id: "envios-nacionales",
    icon: "truck" as const,
    title: "Envíos a nivel nacional",
    description: "Entregas en todo el país, a una o a múltiples sedes.",
  },
  {
    id: "precios-y-stock",
    icon: "layers" as const,
    title: "Precios y stock en línea",
    description: "Consulta disponibilidad y alternativas antes de cerrar tu pedido.",
  },
  {
    id: "garantia",
    icon: "shield" as const,
    title: "Productos con garantía",
    description: "Revisión de calidad en color, materiales y acabados antes de entregar.",
  },
];
