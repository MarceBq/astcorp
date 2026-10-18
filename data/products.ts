import type { Product, ServiceSlug } from "./types";

/**
 * CATÁLOGO
 *
 * Los productos no tienen ruta propia: viven dentro del catálogo de su
 * servicio, en /servicios/[slug]. La ficha completa se abre en el mismo
 * catálogo, sin salir de la página.
 *
 * Estos registros describen las líneas de producto declaradas por ASTCORP.
 * No contienen precios ni marcas de terceros: el negocio trabaja por
 * cotización.
 *
 * Para crecer el catálogo basta agregar objetos a este array. Ningún
 * componente necesita cambiar: los filtros por subcategoría y los contadores
 * se derivan de la propia data.
 *
 * Campos por completar cuando el cliente entregue material:
 *   - `images`: rutas en /public/images/products/...
 *   - `features`: medidas, gramajes, técnicas y tirajes reales.
 */
export const products: Product[] = [
  /* ------------------------------- OFFSET ------------------------------- */
  {
    slug: "tarjetas-de-presentacion",
    name: "Tarjetas de presentación",
    service: "offset",
    subcategory: "papeleria",
    summary: "Tarjetas con acabados premium y control de color consistente.",
    description:
      "La pieza más pequeña de la papelería corporativa y la que más se toca. Trabajamos gramajes altos, laminados y acabados especiales para que la tarjeta sostenga la percepción de la marca en cada entrega.",
    images: [],
    features: [
      "Gramajes altos y papeles especiales",
      "Laminado mate, brillante o soft touch",
      "Acabados especiales bajo requerimiento",
      "Impresión a una o dos caras",
    ],
    tags: ["papelería", "identidad", "corporativo"],
    featured: false,
  },
  {
    slug: "hojas-membretadas",
    name: "Hojas membretadas",
    service: "offset",
    subcategory: "papeleria",
    summary: "Papelería institucional alineada al manual de marca.",
    description:
      "Documentación oficial impresa con el color corporativo exacto y reproducible entre tirajes, para empresas con procesos de aprobación formales.",
    images: [],
    features: [
      "Color corporativo controlado entre reimpresiones",
      "Formatos A4 y personalizados",
      "Opción de numeración y series",
      "Papeles bond y especiales",
    ],
    tags: ["papelería", "institucional"],
    featured: false,
  },
  {
    slug: "folder-corporativo",
    name: "Folder corporativo",
    service: "offset",
    subcategory: "papeleria",
    summary: "Carpetas porta documentos para propuestas y material comercial.",
    description:
      "Soporte de la presentación comercial: troquelado, solapas y bolsillos definidos según el material que debe contener, con acabados que acompañan la propuesta.",
    images: [],
    features: [
      "Troquel con solapa y porta tarjeta",
      "Laminado mate o brillante",
      "Cartulinas de alto gramaje",
      "Opción de acabados especiales",
    ],
    tags: ["papelería", "comercial", "presentación"],
    featured: true,
  },
  {
    slug: "cajas-plegadizas",
    name: "Cajas plegadizas",
    service: "offset",
    subcategory: "empaques",
    summary: "Estuchería para producto terminado con troquel a medida.",
    description:
      "Empaque secundario desarrollado desde el troquel: estructura, resistencia y gráfica se definen juntas para que la caja proteja el producto y comunique la marca en góndola.",
    images: [],
    features: [
      "Troquel desarrollado a medida",
      "Cartulinas según resistencia requerida",
      "Impresión a full color con control de tono",
      "Acabados: laminado, barniz UV, relieve",
    ],
    tags: ["packaging", "empaque", "retail"],
    featured: true,
  },
  {
    slug: "bolsas-de-papel-personalizadas",
    name: "Bolsas de papel personalizadas",
    service: "offset",
    subcategory: "empaques",
    summary: "Bolsas impresas para tienda, evento y entrega de producto.",
    description:
      "La bolsa circula fuera del punto de venta y sigue comunicando. Definimos formato, asa y resistencia según el peso real que va a cargar.",
    images: ["/images/products/bolsa.jpg"],
    features: [
      "Formatos y fuelles a medida",
      "Asas de cinta, cordón o troqueladas",
      "Papel kraft, couché o especiales",
      "Impresión offset a full color",
    ],
    tags: ["packaging", "retail", "bolsas"],
    featured: true,
  },
  {
    slug: "estuches-premium",
    name: "Estuches premium",
    service: "offset",
    subcategory: "empaques",
    summary: "Empaque rígido y acabados especiales para producto de alto valor.",
    description:
      "Estuchería para lanzamientos y ediciones limitadas, donde la apertura del empaque forma parte de la experiencia de producto.",
    images: [],
    features: [
      "Estructura rígida forrada",
      "Acabados: stamping, relieve, soft touch",
      "Interiores con troquel de sujeción",
      "Cintas, imanes y cierres especiales",
    ],
    tags: ["packaging", "premium", "lanzamiento"],
    featured: false,
  },
  {
    slug: "catalogos-comerciales",
    name: "Catálogos comerciales",
    service: "offset",
    subcategory: "comercial",
    summary: "Catálogos y brochures con encuadernación a elección.",
    description:
      "Material de venta impreso: paginación, papel y encuadernación definidos según el uso, desde el catálogo de feria hasta el brochure de fuerza de venta.",
    images: [],
    features: [
      "Encuadernación grapa, hotmelt o anillada",
      "Papeles couché y bond",
      "Impresión a full color",
      "Versiones bilingües",
    ],
    tags: ["editorial", "comercial", "catálogo"],
    featured: false,
  },
  {
    slug: "volantes-y-flyers",
    name: "Volantes y flyers",
    service: "offset",
    subcategory: "comercial",
    summary: "Material promocional de alto tiraje para campañas.",
    description:
      "Producción de volumen con costo por unidad optimizado, pensada para campañas de captación, promociones y volanteo en punto de venta.",
    images: [],
    features: [
      "Tirajes altos con costo optimizado",
      "Formatos estándar y personalizados",
      "Impresión a una o dos caras",
      "Opción de doblado",
    ],
    tags: ["promocional", "campaña", "volumen"],
    featured: false,
  },
  {
    slug: "afiches-publicitarios",
    name: "Afiches publicitarios",
    service: "offset",
    subcategory: "comercial",
    summary: "Afiches en distintos formatos para punto de venta y vía pública.",
    description:
      "Piezas de comunicación de campaña con color parejo entre lotes, para asegurar consistencia cuando la misma gráfica se despliega en varios locales.",
    images: [],
    features: [
      "Formatos A3, A2, A1 y personalizados",
      "Papeles couché y adhesivos",
      "Color consistente entre lotes",
      "Opción de plastificado",
    ],
    tags: ["promocional", "punto de venta", "campaña"],
    featured: false,
  },

  /* ------------------------------- VISUAL ------------------------------- */
  {
    slug: "banner-roll-up",
    name: "Banner roll up",
    service: "visual",
    subcategory: "publicidad-indoor",
    summary: "Banners enrollables para ferias, capacitaciones y activaciones.",
    description:
      "Formato portátil y reutilizable: la estructura se conserva y solo se cambia la gráfica cuando la campaña rota.",
    images: [],
    features: [
      "Estructura de aluminio reutilizable",
      "Gráfica intercambiable",
      "Formatos estándar y anchos especiales",
      "Estuche de transporte",
    ],
    tags: ["indoor", "ferias", "portátil"],
    featured: false,
  },
  {
    slug: "backing-para-eventos",
    name: "Backing para eventos",
    service: "visual",
    subcategory: "publicidad-indoor",
    summary: "Fondos de marca para prensa, lanzamientos y conferencias.",
    description:
      "Superficie de marca que aparece en cada fotografía del evento. Se dimensiona según el encuadre y la distancia real de cámara.",
    images: [],
    features: [
      "Estructura tensada o modular",
      "Gráfica sin costuras visibles",
      "Materiales antirreflejo para fotografía",
      "Montaje y desmontaje coordinados",
    ],
    tags: ["indoor", "eventos", "prensa"],
    featured: true,
  },
  {
    slug: "vinil-decorativo-interior",
    name: "Vinil decorativo interior",
    service: "visual",
    subcategory: "publicidad-indoor",
    summary: "Ambientación de oficinas, tiendas y espacios corporativos.",
    description:
      "Aplicación de gráfica sobre muros, vidrios y superficies para llevar la identidad de marca al espacio físico de trabajo o de venta.",
    images: [],
    features: [
      "Vinil impreso, esmerilado o de corte",
      "Aplicación sobre muro, vidrio y melamina",
      "Diseño adaptado a la arquitectura",
      "Instalación incluida",
    ],
    tags: ["indoor", "ambientación", "oficinas"],
    featured: false,
  },
  {
    slug: "gigantografias",
    name: "Gigantografías",
    service: "visual",
    subcategory: "publicidad-outdoor",
    summary: "Impresión de gran formato para fachadas y vía pública.",
    description:
      "Gráfica de gran superficie con materiales seleccionados para exposición a intemperie y lectura a distancia.",
    images: [],
    features: [
      "Materiales para exposición exterior",
      "Impresión de gran formato",
      "Refuerzos y ojales para tensado",
      "Medidas a requerimiento",
    ],
    tags: ["outdoor", "gran formato", "fachada"],
    featured: false,
  },
  {
    slug: "paneles-publicitarios",
    name: "Paneles publicitarios",
    service: "visual",
    subcategory: "publicidad-outdoor",
    summary: "Paneles y letreros exteriores con estructura y gráfica.",
    description:
      "Solución completa de señalización exterior: estructura, sustrato e instalación resueltos como un solo entregable.",
    images: [],
    features: [
      "Estructura metálica a medida",
      "Sustratos resistentes a intemperie",
      "Opción de iluminación",
      "Instalación coordinada en sitio",
    ],
    tags: ["outdoor", "señalización", "estructura"],
    featured: false,
  },
  {
    slug: "vinil-vehicular",
    name: "Vinil vehicular",
    service: "visual",
    subcategory: "publicidad-outdoor",
    summary: "Rotulado de flotas y vehículos de reparto.",
    description:
      "La flota como medio publicitario. Gráfica adaptada a la geometría de cada modelo, con materiales pensados para uso diario en calle.",
    images: [],
    features: [
      "Vinil de corte o impreso con laminado",
      "Diseño adaptado por modelo de vehículo",
      "Aplicación total o parcial",
      "Instalación por personal técnico",
    ],
    tags: ["outdoor", "flota", "rotulado"],
    featured: false,
  },
  {
    slug: "exhibidores-de-piso",
    name: "Exhibidores de piso",
    service: "visual",
    subcategory: "elementos-estructurales",
    summary: "Displays que ordenan el producto y ganan espacio en tienda.",
    description:
      "Mueble de exhibición diseñado alrededor del producto: capacidad, resistencia y armado se definen según la rotación esperada en el punto de venta.",
    images: [],
    features: [
      "Estructura en cartón, MDF o metal",
      "Diseño según formato y peso del producto",
      "Armado sencillo en tienda",
      "Gráfica integrada",
    ],
    tags: ["punto de venta", "display", "estructura"],
    featured: true,
  },
  {
    slug: "stands-modulares",
    name: "Stands modulares",
    service: "visual",
    subcategory: "elementos-estructurales",
    summary: "Módulos de feria reutilizables entre eventos.",
    description:
      "Sistema modular que se transporta, se rearma y cambia de gráfica, pensado para empresas con calendario de ferias recurrente.",
    images: [],
    features: [
      "Sistema modular reutilizable",
      "Gráfica intercambiable por campaña",
      "Mobiliario y accesorios complementarios",
      "Montaje en sede del evento",
    ],
    tags: ["ferias", "estructura", "modular"],
    featured: false,
  },
  {
    slug: "totems-publicitarios",
    name: "Tótems publicitarios",
    service: "visual",
    subcategory: "elementos-estructurales",
    summary: "Elementos verticales de señalización y marca.",
    description:
      "Piezas verticales que orientan y marcan presencia en accesos, pasillos y espacios abiertos.",
    images: [],
    features: [
      "Estructura autoportante",
      "Una o dos caras gráficas",
      "Versiones interior y exterior",
      "Opción iluminada",
    ],
    tags: ["señalización", "estructura", "marca"],
    featured: false,
  },
  {
    slug: "implementacion-punto-de-venta",
    name: "Implementación de punto de venta",
    service: "visual",
    subcategory: "visual-implementaciones",
    summary: "Ejecución integral de campaña en uno o varios locales.",
    description:
      "Producción, distribución e instalación de todos los elementos de una campaña, coordinada por local para que la ejecución sea idéntica en cada punto.",
    images: [],
    features: [
      "Producción de todos los elementos de campaña",
      "Distribución por local",
      "Instalación coordinada",
      "Registro fotográfico de la ejecución",
    ],
    tags: ["implementación", "campaña", "retail"],
    featured: true,
  },
  {
    slug: "senaletica-corporativa",
    name: "Señalética corporativa",
    service: "visual",
    subcategory: "visual-implementaciones",
    summary: "Sistemas de orientación para oficinas, plantas y clínicas.",
    description:
      "Señalización desarrollada como sistema: nomenclatura, jerarquía y materiales consistentes en todo el recorrido del espacio.",
    images: [],
    features: [
      "Sistema de señalización completo",
      "Materiales según uso y tránsito",
      "Cumplimiento de señalización obligatoria",
      "Instalación en sitio",
    ],
    tags: ["señalética", "corporativo", "sistema"],
    featured: false,
  },

  /* -------------------------------- MERCH ------------------------------- */
  {
    slug: "cuadernos-corporativos",
    name: "Cuadernos corporativos",
    service: "merch",
    subcategory: "oficina",
    summary: "Libretas personalizadas para equipos, clientes y eventos.",
    description:
      "Artículo de uso diario y alta permanencia. Tapa, papel interior y técnica de personalización se eligen según el destinatario del obsequio.",
    images: [],
    features: [
      "Tapa dura, flexible o ecológica",
      "Personalización por grabado o impresión",
      "Interiores rayados, cuadriculados o lisos",
      "Opción de elástico y porta lapicero",
    ],
    tags: ["oficina", "merchandising", "corporativo"],
    featured: true,
  },
  {
    slug: "set-de-escritorio",
    name: "Set de escritorio",
    service: "merch",
    subcategory: "oficina",
    summary: "Conjuntos de escritorio personalizados con la marca.",
    description:
      "Combinación de artículos de trabajo presentados como set, ideal para reconocimientos internos y regalos de fin de año.",
    images: [],
    features: [
      "Combinación de artículos a elección",
      "Presentación en estuche",
      "Personalización uniforme del set",
      "Armado por unidad",
    ],
    tags: ["oficina", "set", "corporativo"],
    featured: false,
  },
  {
    slug: "boligrafos-personalizados",
    name: "Bolígrafos personalizados",
    service: "merch",
    subcategory: "oficina",
    summary: "Lapiceros con marcado de marca para volumen alto.",
    description:
      "Clásico de campaña con costo unitario bajo y buena permanencia. Disponible en materiales plásticos, metálicos y ecológicos.",
    images: [],
    features: [
      "Materiales plástico, metal o ecológicos",
      "Marcado por serigrafía o grabado láser",
      "Tirajes altos",
      "Presentación individual opcional",
    ],
    tags: ["oficina", "volumen", "promocional"],
    featured: false,
  },
  {
    slug: "polos-corporativos",
    name: "Polos corporativos",
    service: "merch",
    subcategory: "textil",
    summary: "Textil personalizado para equipos, staff y campañas.",
    description:
      "Uniforme e identidad de equipo. Tela, corte y técnica de personalización se definen según el uso: operativo, evento o obsequio.",
    images: [],
    features: [
      "Algodón, pima y mezclas técnicas",
      "Bordado, serigrafía o transfer",
      "Curva de tallas completa",
      "Etiquetas personalizadas",
    ],
    tags: ["textil", "uniformes", "equipo"],
    featured: true,
  },
  {
    slug: "casacas-corporativas",
    name: "Casacas corporativas",
    service: "merch",
    subcategory: "textil",
    summary: "Prendas de abrigo con identidad de marca.",
    description:
      "Prenda de mayor valor percibido dentro del merchandising textil, habitual en reconocimientos internos y equipos de campo.",
    images: [],
    features: [
      "Modelos cortaviento, polar y softshell",
      "Bordado de alta densidad",
      "Curva de tallas completa",
      "Detalles reflectivos opcionales",
    ],
    tags: ["textil", "abrigo", "equipo"],
    featured: false,
  },
  {
    slug: "gorras-bordadas",
    name: "Gorras bordadas",
    service: "merch",
    subcategory: "textil",
    summary: "Gorras personalizadas para activaciones y equipos.",
    description:
      "Artículo de campaña y uniforme de campo, con bordado que mantiene la definición del logotipo tras el uso.",
    images: [],
    features: [
      "Modelos clásico, trucker y five panel",
      "Bordado o parche personalizado",
      "Ajuste regulable",
      "Colores según manual de marca",
    ],
    tags: ["textil", "activaciones", "campaña"],
    featured: false,
  },
  {
    slug: "tomatodos-personalizados",
    name: "Tomatodos personalizados",
    service: "merch",
    subcategory: "tomatodos-y-mug",
    summary: "Botellas reutilizables con marcado corporativo.",
    description:
      "Uno de los artículos de mayor uso diario y por lo tanto de mayor exposición de marca dentro del merchandising corporativo.",
    images: [],
    features: [
      "Acero inoxidable, tritán y aluminio",
      "Grabado láser o impresión",
      "Versiones térmicas",
      "Presentación en caja individual",
    ],
    tags: ["drinkware", "uso diario", "corporativo"],
    featured: true,
  },
  {
    slug: "mugs-ceramicos",
    name: "Mugs cerámicos",
    service: "merch",
    subcategory: "tomatodos-y-mug",
    summary: "Tazas personalizadas para obsequio y campañas internas.",
    description:
      "Regalo corporativo de rotación permanente, con opciones de impresión que resisten el lavado frecuente.",
    images: [],
    features: [
      "Cerámica y porcelana",
      "Impresión full color o grabado",
      "Versiones mágicas y de dos tonos",
      "Empaque individual",
    ],
    tags: ["drinkware", "obsequio", "interno"],
    featured: false,
  },
  {
    slug: "termos-de-acero",
    name: "Termos de acero",
    service: "merch",
    subcategory: "tomatodos-y-mug",
    summary: "Termos de alta gama para reconocimientos y regalos ejecutivos.",
    description:
      "Artículo de valor percibido alto, habitual en reconocimientos y en kits ejecutivos de fin de año.",
    images: [],
    features: [
      "Acero inoxidable de doble pared",
      "Grabado láser de precisión",
      "Distintas capacidades",
      "Estuche de presentación",
    ],
    tags: ["drinkware", "premium", "ejecutivo"],
    featured: false,
  },
  {
    slug: "power-banks",
    name: "Power banks",
    service: "merch",
    subcategory: "tecnologia",
    summary: "Baterías portátiles con marcado corporativo.",
    description:
      "Merchandising tecnológico de uso frecuente, adecuado para equipos comerciales y clientes corporativos.",
    images: [],
    features: [
      "Distintas capacidades",
      "Grabado láser o impresión UV",
      "Carcasas plástico, metal y bambú",
      "Empaque individual con cable",
    ],
    tags: ["tecnología", "ejecutivo", "corporativo"],
    featured: false,
  },
  {
    slug: "usb-personalizados",
    name: "USB personalizados",
    service: "merch",
    subcategory: "tecnologia",
    summary: "Memorias con marca para material comercial y eventos.",
    description:
      "Soporte físico para catálogos, fichas técnicas y presentaciones, con opción de precarga de contenido.",
    images: [],
    features: [
      "Distintas capacidades",
      "Precarga de contenido opcional",
      "Carcasas metálicas, plásticas y de madera",
      "Estuche de presentación",
    ],
    tags: ["tecnología", "eventos", "comercial"],
    featured: false,
  },
  {
    slug: "accesorios-de-escritorio-tech",
    name: "Accesorios de escritorio tech",
    service: "merch",
    subcategory: "tecnologia",
    summary: "Mouse pads, hubs y organizadores personalizados.",
    description:
      "Complementos de puesto de trabajo, muy usados en kits de bienvenida para equipos remotos e híbridos.",
    images: [],
    features: [
      "Mouse pads en distintos formatos",
      "Hubs y cargadores inalámbricos",
      "Organizadores de cables",
      "Personalización por impresión o grabado",
    ],
    tags: ["tecnología", "oficina", "onboarding"],
    featured: false,
  },
  {
    slug: "cuadernos-ecologicos",
    name: "Cuadernos ecológicos",
    service: "merch",
    subcategory: "ecologicos",
    summary: "Libretas en materiales reciclados y de origen responsable.",
    description:
      "Alternativa para marcas con lineamientos de sostenibilidad, manteniendo la calidad de personalización del merchandising tradicional.",
    images: [],
    features: [
      "Papel reciclado y tapas de cartón",
      "Detalles en corcho o bambú",
      "Personalización por grabado",
      "Sin plásticos en el empaque",
    ],
    tags: ["ecológico", "sostenibilidad", "oficina"],
    featured: false,
  },
  {
    slug: "set-ecologico-de-bambu",
    name: "Set ecológico de bambú",
    service: "merch",
    subcategory: "ecologicos",
    summary: "Conjuntos en bambú y materiales de bajo impacto.",
    description:
      "Sets de escritorio, cubiertos y accesorios en materiales de origen renovable, presentados en empaque sin plástico.",
    images: [],
    features: [
      "Bambú, corcho y fibras naturales",
      "Grabado láser sobre superficie natural",
      "Empaque libre de plástico",
      "Combinaciones a medida",
    ],
    tags: ["ecológico", "set", "sostenibilidad"],
    featured: false,
  },
  {
    slug: "mochilas-corporativas",
    name: "Mochilas corporativas",
    service: "merch",
    subcategory: "bolsas-y-mochilas",
    summary: "Mochilas personalizadas para equipos y programas internos.",
    description:
      "Artículo de alto valor percibido y uso prolongado, frecuente en kits de bienvenida y programas de reconocimiento.",
    images: [],
    features: [
      "Compartimento para laptop",
      "Bordado o etiqueta personalizada",
      "Materiales resistentes al uso diario",
      "Versiones antirrobo y ejecutivas",
    ],
    tags: ["bolsas", "onboarding", "ejecutivo"],
    featured: true,
  },
  {
    slug: "tote-bags-de-lona",
    name: "Tote bags de lona",
    service: "merch",
    subcategory: "bolsas-y-mochilas",
    summary: "Bolsas de tela reutilizables para campañas y retail.",
    description:
      "Sustituto reutilizable de la bolsa desechable, con amplia superficie de impresión para la marca.",
    images: [],
    features: [
      "Lona, drill y algodón crudo",
      "Serigrafía o impresión full color",
      "Asas cortas o largas",
      "Formatos a medida",
    ],
    tags: ["bolsas", "reutilizable", "campaña"],
    featured: false,
  },
  {
    slug: "morrales-personalizados",
    name: "Morrales personalizados",
    service: "merch",
    subcategory: "bolsas-y-mochilas",
    summary: "Morrales y bolsos ligeros para eventos y activaciones.",
    description:
      "Formato liviano y de bajo costo unitario, adecuado para entregas masivas en congresos y activaciones.",
    images: [],
    features: [
      "Modelos con cordón y bandolera",
      "Materiales ligeros y resistentes",
      "Impresión a full color",
      "Tirajes altos",
    ],
    tags: ["bolsas", "eventos", "activaciones"],
    featured: false,
  },
  {
    slug: "paraguas-personalizados",
    name: "Paraguas personalizados",
    service: "merch",
    subcategory: "articulos-personales",
    summary: "Paraguas y sombrillas con identidad corporativa.",
    description:
      "Artículo de uso estacional con gran superficie de marca y visibilidad en espacio público.",
    images: [],
    features: [
      "Modelos plegables y de bastón",
      "Impresión por paneles",
      "Estructuras reforzadas",
      "Funda personalizada",
    ],
    tags: ["personal", "estacional", "corporativo"],
    featured: false,
  },
  {
    slug: "llaveros-metalicos",
    name: "Llaveros metálicos",
    service: "merch",
    subcategory: "articulos-personales",
    summary: "Llaveros con grabado para entregas de volumen.",
    description:
      "Obsequio compacto y económico por unidad, con acabado metálico que sostiene bien el grabado del logotipo.",
    images: [],
    features: [
      "Metal, cuero sintético y combinados",
      "Grabado láser o esmaltado",
      "Troquel con forma personalizada",
      "Tirajes altos",
    ],
    tags: ["personal", "volumen", "obsequio"],
    featured: false,
  },
  {
    slug: "neceseres-personalizados",
    name: "Neceseres personalizados",
    service: "merch",
    subcategory: "articulos-personales",
    summary: "Estuches y neceseres de viaje con marca.",
    description:
      "Complemento habitual de kits de viaje y sets de bienvenida, con opciones de material y compartimentado.",
    images: [],
    features: [
      "Materiales textiles y sintéticos",
      "Compartimentos internos",
      "Bordado o etiqueta personalizada",
      "Presentación individual",
    ],
    tags: ["personal", "viaje", "kit"],
    featured: false,
  },
  {
    slug: "toallas-de-playa",
    name: "Toallas de playa",
    service: "merch",
    subcategory: "verano",
    summary: "Textil de temporada para campañas de verano.",
    description:
      "Pieza de campaña estacional con gran superficie gráfica, usada en activaciones y promociones de temporada.",
    images: [],
    features: [
      "Algodón y microfibra",
      "Impresión full color de gran superficie",
      "Formatos individuales y familiares",
      "Empaque con banda personalizada",
    ],
    tags: ["verano", "estacional", "campaña"],
    featured: false,
  },
  {
    slug: "coolers-portatiles",
    name: "Coolers portátiles",
    service: "merch",
    subcategory: "verano",
    summary: "Conservadoras y loncheras térmicas personalizadas.",
    description:
      "Artículo de campaña de verano con uso prolongado, frecuente en promociones de consumo masivo.",
    images: [],
    features: [
      "Distintas capacidades",
      "Materiales térmicos resistentes",
      "Impresión o bordado",
      "Versiones plegables",
    ],
    tags: ["verano", "estacional", "consumo"],
    featured: false,
  },
  {
    slug: "kit-de-verano",
    name: "Kit de verano",
    service: "merch",
    subcategory: "verano",
    summary: "Sets de temporada armados y empacados por unidad.",
    description:
      "Combinación de artículos estacionales presentada como set, con armado y empaque gestionados por ASTCORP.",
    images: [],
    features: [
      "Combinación de artículos a elección",
      "Armado y empacado por unidad",
      "Empaque personalizado",
      "Distribución coordinada",
    ],
    tags: ["verano", "set", "campaña"],
    featured: false,
  },

  /* -------------------------- BOX CORPORATIVOS -------------------------- */
  {
    slug: "packs-navidenos-corporativos",
    name: "Packs navideños corporativos",
    service: "box-corporativos",
    subcategory: "packs-navidenos",
    summary: "Cajas de fin de año armadas, empacadas y despachadas.",
    description:
      "Proyecto de temporada con fecha fija: curaduría de contenido, empaque personalizado, armado por unidad y coordinación de despacho a colaboradores o clientes.",
    images: [],
    features: [
      "Curaduría de contenido según presupuesto",
      "Caja y empaque personalizados",
      "Armado por unidad",
      "Despacho a una o múltiples direcciones",
    ],
    tags: ["navidad", "fin de año", "corporativo"],
    featured: true,
  },
  {
    slug: "regalos-ejecutivos",
    name: "Regalos ejecutivos",
    service: "box-corporativos",
    subcategory: "regalos-ejecutivos",
    summary: "Sets de alto valor percibido para clientes y directivos.",
    description:
      "Selección de piezas de gama alta presentadas en estuchería propia, para reconocimientos, cierres de negocio y relaciones institucionales.",
    images: [],
    features: [
      "Selección de artículos premium",
      "Estuchería rígida personalizada",
      "Tarjeta y mensaje personalizados",
      "Entrega individual coordinada",
    ],
    tags: ["ejecutivo", "premium", "reconocimiento"],
    featured: true,
  },
  {
    slug: "kit-de-bienvenida",
    name: "Kit de bienvenida",
    service: "box-corporativos",
    subcategory: "kit-de-bienvenida",
    summary: "Onboarding físico para nuevos colaboradores.",
    description:
      "El primer contacto material con la cultura de la empresa. Contenido, empaque y despacho pensados para llegar el día de ingreso, incluso a equipos remotos.",
    images: [],
    features: [
      "Contenido definido por perfil de puesto",
      "Empaque y material impreso personalizados",
      "Reposición periódica programada",
      "Envío a domicilio para equipos remotos",
    ],
    tags: ["onboarding", "cultura", "colaboradores"],
    featured: true,
  },
  {
    slug: "canastas-navidenas",
    name: "Canastas navideñas",
    service: "box-corporativos",
    subcategory: "canastas-navidenas",
    summary: "Canastas corporativas armadas para entrega masiva.",
    description:
      "Formato tradicional de fin de año, gestionado con control de armado y logística para volúmenes altos de entrega.",
    images: [],
    features: [
      "Distintos niveles de contenido",
      "Presentación y envoltura personalizadas",
      "Armado en volumen",
      "Coordinación de reparto",
    ],
    tags: ["navidad", "fin de año", "volumen"],
    featured: false,
  },
];

/* ----------------------------- Selectores ------------------------------ */

export function productsByService(service: ServiceSlug): Product[] {
  return products.filter((p) => p.service === service);
}

export function featuredProducts(limit?: number): Product[] {
  const list = products.filter((p) => p.featured);
  return typeof limit === "number" ? list.slice(0, limit) : list;
}

export function countByService(service: ServiceSlug): number {
  return products.reduce((total, p) => (p.service === service ? total + 1 : total), 0);
}
