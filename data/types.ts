/**
 * Tipos compartidos del contenido de ASTCORP.
 *
 * El sitio se organiza alrededor de cuatro servicios. Los productos viven
 * dentro del catálogo de su servicio: no tienen ruta propia.
 */

export type ServiceSlug =
  | "offset"
  | "visual"
  | "merch"
  | "box-corporativos"
  | "branding"
  | "proyectos-inmobiliarios";

export interface Subcategory {
  /** Identificador estable al que apunta `Product.subcategory`. */
  slug: string;
  name: string;
}

export interface Service {
  slug: ServiceSlug;
  /** Nombre corto para navegación, chips y etiquetas de producto. */
  name: string;
  /** Título completo para encabezados de página. */
  title: string;
  /** Una línea para la card del home. */
  short: string;
  description: string;
  /** Párrafo largo para el hero de la página de servicio. */
  intro: string;
  /** Taxonomía interna del catálogo: a ella apunta `Product.subcategory`. */
  subcategories: Subcategory[];
  /** Ícono de lucide-react, resuelto en components/ui/Icons.tsx */
  icon: "offset" | "visual" | "merch" | "box" | "branding" | "realestate";
  /** Imagen de portada. `null` muestra el placeholder de marca. */
  cover: string | null;
}

export interface Product {
  /** Identificador interno. No genera ruta: el producto vive en su catálogo. */
  slug: string;
  name: string;
  service: ServiceSlug;
  /** Debe coincidir con un `Subcategory.slug` de su servicio. */
  subcategory: string;
  /** Resumen de una línea para la tarjeta del catálogo. */
  summary: string;
  description: string;
  /** Rutas en /public o URLs absolutas. Vacío muestra el placeholder. */
  images: string[];
  /** Características técnicas mostradas en la ficha rápida. */
  features: string[];
  tags: string[];
  /** Lo sube a la sección de destacados del home. */
  featured: boolean;
}

export interface Client {
  /** Nombre de la marca. Se muestra como texto mientras no haya logo. */
  name: string;
  /** Ruta al logo en /public/images/clients. `null` muestra un placeholder. */
  logo: string | null;
  /** Sitio web del cliente. Opcional: si existe, el logo enlaza. */
  url?: string | null;
  /** Marca contenido de muestra pendiente de reemplazo y autorización. */
  isPlaceholder?: boolean;
}
