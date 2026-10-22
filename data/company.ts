/**
 * Datos oficiales de ASTCORP.
 * Única fuente de verdad para contacto, dirección y textos institucionales.
 */

export const company = {
  name: "ASTCORP",
  legalDescriptor: "Soluciones gráficas y producción corporativa",
  tagline: "Soluciones gráficas que hacen crecer tu marca.",
  foundedISO: "2019-10-01",
  foundedLabel: "01 de octubre de 2019",
  foundedYear: 2019,

  /**
   * Años de operación que comunica ASTCORP, mostrados como "+10".
   *
   * TODO (cliente): no se derivan de `foundedISO`. Desde la constitución de
   * 2019 van 7 años, así que esta cifra alude a una trayectoria anterior al
   * registro de la empresa. Conviene confirmarla, porque la página de
   * Nosotros y el footer muestran la fecha de fundación y un visitante puede
   * contrastar ambos datos. Si cambia, se edita solo aquí.
   */
  yearsInOperation: 10,

  address: {
    street: "Av. Argentina 144",
    district: "Cercado de Lima",
    city: "Lima",
    country: "Perú",
    full: "Av. Argentina 144 – Cercado de Lima",
  },

  phones: [
    { display: "982 926 333", tel: "+51982926333" },
   
  ],

  /**
   * Completar cuando el cliente confirme los canales oficiales.
   * Los componentes ocultan automáticamente lo que quede en `null`.
   */
  /**
   * TODO (cliente): correo PROVISIONAL, no confirmado por ASTCORP.
   * Es un placeholder puesto para maquetar el bloque de contacto del footer.
   * Reemplazar por la dirección real antes de publicar, o volver a `null`
   * para que el dato desaparezca solo de la interfaz.
   */
  email: "contacto@astcorp.com" as string | null,
  whatsapp: null as { number: string; url: string } | null,
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    linkedin: null as string | null,
    tiktok: null as string | null,
  },

  activity:
    "Empresa especializada en servicios integrales de diseño, impresión, soluciones gráficas, publicidad visual, merchandising y soluciones corporativas.",

  mission:
    "Brindar soluciones gráficas e impresiones de alta calidad que potencien la imagen de nuestros clientes, ofreciendo un servicio eficiente, confiable y personalizado mediante tecnología y talento humano capacitado.",

  vision:
    "Ser reconocidos como una empresa líder en el rubro gráfico e imprenta a nivel nacional, destacando por excelencia, innovación y relaciones duraderas.",

  values: [
    {
      name: "Seriedad",
      description:
        "Compromisos claros desde la cotización: alcance, tiempos y acabados definidos antes de producir.",
    },
    {
      name: "Responsabilidad",
      description:
        "Control de cada etapa, del arte final al despacho, con trazabilidad sobre el estado del trabajo.",
    },
    {
      name: "Compromiso",
      description:
        "Acompañamiento directo en cada proyecto, con un interlocutor que conoce la marca y la campaña.",
    },
    {
      name: "Excelencia",
      description:
        "Estándares técnicos y revisión de calidad en color, materiales y acabados antes de la entrega.",
    },
  ],

  story: {
    lead: "ASTCORP se especializa en servicios integrales del rubro gráfico e imprenta, combinando calidad, puntualidad y compromiso con cada cliente.",
    paragraphs: [
      "Trabajamos desde el diseño hasta la impresión final aplicando estándares técnicos, tecnología de producción y atención personalizada en cada etapa del proyecto.",
      "Atendemos a empresas, emprendedores e instituciones con papelería corporativa, material publicitario, packaging, merchandising e impresiones personalizadas.",
    ],
  },

  /** Base URL para metadata, sitemap y Open Graph. */
  url: "https://astcorp.pe",
} as const;
