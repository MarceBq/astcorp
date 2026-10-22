import type { Service, ServiceSlug } from "./types";

/**
 * Las cuatro líneas de negocio de ASTCORP.
 *
 * Este archivo es el eje de la arquitectura del sitio: define las rutas
 * (/servicios/[slug]), el menú, las cards del home y los catálogos internos.
 * El orden aquí es el orden en que aparecen en toda la interfaz.
 */
export const services: Service[] = [
  {
    slug: "offset",
    name: "Offset",
    title: "Impresión Offset",
    short: "Impresión comercial y corporativa.",
    description:
      "Impresión offset de alta calidad para empaques premium, bolsas personalizadas y material editorial.",
    intro:
      "Tiraje corto o volumen alto, con control de color y acabados que sostienen la percepción de una marca premium: desde la papelería que acompaña cada contacto comercial hasta el empaque que llega a la mano del consumidor.",
    icon: "offset",
    cover: null,
    subcategories: [
      { slug: "papeleria", name: "Papelería" },
      { slug: "empaques", name: "Empaques" },
      { slug: "comercial", name: "Comercial" },
    ],
  },
  {
    slug: "visual",
    name: "Visual",
    title: "Comunicación y Publicidad Visual",
    short: "Soluciones de comunicación y publicidad visual.",
    description:
      "Desarrollo de ambientes y elementos visuales que potencian marcas y posicionan productos.",
    intro:
      "Piezas que ocupan espacio físico y compiten por atención: exhibidores, señalética, gráfica de punto de venta e implementaciones que traducen una identidad de marca al mundo real.",
    icon: "visual",
    cover: null,
    subcategories: [
      { slug: "publicidad-indoor", name: "Publicidad Indoor" },
      { slug: "publicidad-outdoor", name: "Publicidad Outdoor" },
      { slug: "elementos-estructurales", name: "Elementos estructurales" },
      { slug: "visual-implementaciones", name: "Visual Implementaciones" },
    ],
  },
  {
    slug: "merch",
    name: "Merch",
    title: "Merchandising Corporativo",
    short: "Productos promocionales personalizados.",
    description:
      "Soluciones de merchandising personalizadas para potenciar campañas y generar impacto memorable.",
    intro:
      "Artículos que la gente conserva y usa. Selección de producto, técnica de personalización y control de tiempos para que la campaña llegue completa y a tiempo.",
    icon: "merch",
    cover: null,
    subcategories: [
      { slug: "oficina", name: "Oficina" },
      { slug: "textil", name: "Textil" },
      { slug: "tomatodos-y-mug", name: "Tomatodos y Mug" },
      { slug: "tecnologia", name: "Tecnología" },
      { slug: "ecologicos", name: "Ecológicos" },
      { slug: "bolsas-y-mochilas", name: "Bolsas y Mochilas" },
      { slug: "articulos-personales", name: "Artículos Personales" },
      { slug: "verano", name: "Verano" },
    ],
  },
  {
    slug: "box-corporativos",
    name: "Box Corporativos",
    title: "Box Corporativos",
    short: "Kits y experiencias corporativas personalizadas.",
    description:
      "Regalos empresariales y experiencias para premiar, reconocer y fidelizar clientes y colaboradores.",
    intro:
      "Curaduría, empaque y armado de kits corporativos: la caja, el contenido, la impresión y el despacho gestionados como un solo proyecto.",
    icon: "box",
    cover: null,
    subcategories: [
      { slug: "packs-navidenos", name: "Packs Navideños" },
      { slug: "regalos-ejecutivos", name: "Regalos Ejecutivos" },
      { slug: "kit-de-bienvenida", name: "Kit de Bienvenida" },
      { slug: "canastas-navidenas", name: "Canastas Navideñas" },
    ],
  },

  /* ---------------------------------------------------------------------
   * TODO (cliente): los dos servicios siguientes se agregaron a pedido, pero
   * sus textos son un borrador redactado por nosotros, no información
   * entregada por ASTCORP. Antes de publicar hay que validar con el cliente
   * la descripción y las subcategorías, y confirmar que el alcance descrito
   * corresponde a lo que la empresa realmente ejecuta.
   * Su catálogo está vacío hasta que se carguen productos en data/products.ts.
   * ------------------------------------------------------------------- */
  {
    slug: "branding",
    name: "Branding",
    title: "Branding y Diseño de Marca",
    short: "Identidad visual y aplicación de marca.",
    description:
      "Desarrollo de identidad visual y su aplicación coherente en cada pieza que produce la marca.",
    intro:
      "Una marca se sostiene cuando se ve igual en todos sus soportes. Trabajamos la identidad y, sobre todo, su bajada a producción: que el color, la tipografía y los acabados se mantengan iguales del arte final a la pieza impresa.",
    icon: "branding",
    cover: null,
    subcategories: [
      { slug: "identidad-visual", name: "Identidad visual" },
      { slug: "manual-de-marca", name: "Manual de marca" },
      { slug: "papeleria-de-marca", name: "Papelería de marca" },
      { slug: "aplicaciones", name: "Aplicaciones" },
    ],
  },
  {
    slug: "proyectos-inmobiliarios",
    name: "Proyectos inmobiliarios",
    title: "Proyectos Inmobiliarios",
    short: "Material gráfico para la venta de proyectos.",
    description:
      "Gráfica, señalización y material de venta para proyectos inmobiliarios, de la sala de ventas a la entrega.",
    intro:
      "Un proyecto inmobiliario comunica en varios frentes a la vez: la valla en obra, la sala de ventas, el brochure que se lleva el cliente y el kit que recibe al firmar. Producimos todo ese material como un solo paquete, con el mismo estándar gráfico.",
    icon: "realestate",
    cover: null,
    subcategories: [
      { slug: "sala-de-ventas", name: "Sala de ventas" },
      { slug: "senaletica-de-obra", name: "Señalética de obra" },
      { slug: "material-de-venta", name: "Material de venta" },
      { slug: "entrega-de-unidades", name: "Entrega de unidades" },
    ],
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return services.some((s) => s.slug === slug);
}

/** Nombre corto de un servicio, para etiquetas de producto. */
export function serviceName(slug: string): string {
  return getService(slug)?.name ?? slug;
}
