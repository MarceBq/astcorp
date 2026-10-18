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
    titleAccent: "Offset",
    short: "Impresión comercial y corporativa.",
    description:
      "Impresión offset de alta calidad para empaques premium, bolsas personalizadas y material editorial.",
    intro:
      "Tiraje corto o volumen alto, con control de color y acabados que sostienen la percepción de una marca premium: desde la papelería que acompaña cada contacto comercial hasta el empaque que llega a la mano del consumidor.",
    icon: "offset",
    cover: null,
    benefits: [
      {
        title: "Control de color",
        description: "Color reproducible entre tirajes y reimpresiones, bajo manual de marca.",
      },
      {
        title: "Acabados premium",
        description: "Laminados, barniz UV, relieve y stamping según el nivel de producto.",
      },
      {
        title: "Troqueles a medida",
        description: "Estructura y resistencia desarrolladas junto con la gráfica del empaque.",
      },
      {
        title: "Volumen sin sobrecosto",
        description: "El costo por unidad baja al escalar el tiraje.",
      },
    ],
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
    titleAccent: "Publicidad Visual",
    short: "Soluciones de comunicación y publicidad visual.",
    description:
      "Desarrollo de ambientes y elementos visuales que potencian marcas y posicionan productos.",
    intro:
      "Piezas que ocupan espacio físico y compiten por atención: exhibidores, señalética, gráfica de punto de venta e implementaciones que traducen una identidad de marca al mundo real.",
    icon: "visual",
    cover: null,
    benefits: [
      {
        title: "Interior y exterior",
        description: "Materiales seleccionados según exposición, tránsito e intemperie.",
      },
      {
        title: "Estructura incluida",
        description: "Soporte, sustrato y gráfica resueltos como un solo entregable.",
      },
      {
        title: "Instalación en sitio",
        description: "Montaje coordinado en uno o varios locales.",
      },
      {
        title: "Réplica entre sedes",
        description: "La misma campaña ejecutada igual en cada punto de venta.",
      },
    ],
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
    titleAccent: "Corporativo",
    short: "Productos promocionales personalizados.",
    description:
      "Soluciones de merchandising personalizadas para potenciar campañas y generar impacto memorable.",
    intro:
      "Artículos que la gente conserva y usa. Selección de producto, técnica de personalización y control de tiempos para que la campaña llegue completa y a tiempo.",
    icon: "merch",
    cover: null,
    benefits: [
      {
        title: "Catálogo amplio",
        description: "Oficina, textil, drinkware, tecnología, ecológicos y artículos de temporada.",
      },
      {
        title: "Personalización a medida",
        description: "Bordado, serigrafía, grabado láser o impresión según el material.",
      },
      {
        title: "Muestras previas",
        description: "Aprobación de una muestra física antes de producir en volumen.",
      },
      {
        title: "Entrega por sede",
        description: "Distribución a una o varias direcciones según lo necesite el equipo.",
      },
    ],
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
    titleAccent: "Corporativos",
    short: "Kits y experiencias corporativas personalizadas.",
    description:
      "Regalos empresariales y experiencias para premiar, reconocer y fidelizar clientes y colaboradores.",
    intro:
      "Curaduría, empaque y armado de kits corporativos: la caja, el contenido, la impresión y el despacho gestionados como un solo proyecto.",
    icon: "box",
    cover: null,
    benefits: [
      {
        title: "Curaduría del contenido",
        description: "Selección de artículos ajustada al presupuesto y a la ocasión.",
      },
      {
        title: "Empaque personalizado",
        description: "Caja, tarjeta y material impreso diseñados para la campaña.",
      },
      {
        title: "Armado unitario",
        description: "Cada kit se arma y revisa individualmente antes de despachar.",
      },
      {
        title: "Despacho individual",
        description: "Envío a domicilio cuando el equipo o los clientes están dispersos.",
      },
    ],
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
   * la descripción, los beneficios y las subcategorías, y confirmar que el
   * alcance descrito corresponde a lo que la empresa realmente ejecuta.
   * Su catálogo está vacío hasta que se carguen productos en data/products.ts.
   * ------------------------------------------------------------------- */
  {
    slug: "branding",
    name: "Branding",
    title: "Branding y Diseño de Marca",
    titleAccent: "Diseño de Marca",
    short: "Identidad visual y aplicación de marca.",
    description:
      "Desarrollo de identidad visual y su aplicación coherente en cada pieza que produce la marca.",
    intro:
      "Una marca se sostiene cuando se ve igual en todos sus soportes. Trabajamos la identidad y, sobre todo, su bajada a producción: que el color, la tipografía y los acabados se mantengan iguales del arte final a la pieza impresa.",
    icon: "branding",
    cover: null,
    benefits: [
      {
        title: "Identidad aplicable",
        description: "Diseño pensado para producirse, no solo para verse en pantalla.",
      },
      {
        title: "Consistencia de color",
        description: "El color de marca se controla y se reproduce igual en cada tiraje.",
      },
      {
        title: "Manual de uso",
        description: "Lineamientos claros para que cualquier proveedor aplique la marca bien.",
      },
      {
        title: "Todo en un proveedor",
        description: "Del diseño de la marca a la impresión de sus piezas, sin intermediarios.",
      },
    ],
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
    titleAccent: "Inmobiliarios",
    short: "Material gráfico para la venta de proyectos.",
    description:
      "Gráfica, señalización y material de venta para proyectos inmobiliarios, de la sala de ventas a la entrega.",
    intro:
      "Un proyecto inmobiliario comunica en varios frentes a la vez: la valla en obra, la sala de ventas, el brochure que se lleva el cliente y el kit que recibe al firmar. Producimos todo ese material como un solo paquete, con el mismo estándar gráfico.",
    icon: "realestate",
    cover: null,
    benefits: [
      {
        title: "Sala de ventas completa",
        description: "Paneles, gráfica de muro y material de apoyo producidos en conjunto.",
      },
      {
        title: "Gran formato para obra",
        description: "Vallas y cercos con materiales pensados para exposición prolongada.",
      },
      {
        title: "Material de venta",
        description: "Brochures y fichas de unidad con acabados acordes al valor del proyecto.",
      },
      {
        title: "Entrega por etapas",
        description: "Producción escalonada según el avance comercial del proyecto.",
      },
    ],
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

export function getSubcategory(serviceSlug: string, subSlug: string) {
  return getService(serviceSlug)?.subcategories.find((s) => s.slug === subSlug);
}

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return services.some((s) => s.slug === slug);
}

/** Nombre corto de un servicio, para etiquetas de producto. */
export function serviceName(slug: string): string {
  return getService(slug)?.name ?? slug;
}
