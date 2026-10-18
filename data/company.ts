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
  email: null as string | null,
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

/** Años de operación calculados desde la fundación: nunca se codifica a mano. */
export function yearsOfExperience(reference: Date = new Date()): number {
  const founded = new Date(company.foundedISO);
  let years = reference.getFullYear() - founded.getFullYear();
  const beforeAnniversary =
    reference.getMonth() < founded.getMonth() ||
    (reference.getMonth() === founded.getMonth() && reference.getDate() < founded.getDate());
  if (beforeAnniversary) years -= 1;
  return Math.max(years, 0);
}
