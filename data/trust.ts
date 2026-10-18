import { products } from "./products";
import { company } from "./company";

export interface TrustFact {
  label: string;
  /** `null` => se renderiza como pendiente. Nunca se inventa la cifra. */
  value: string | null;
}

/**
 * Datos de la sección Confianza del home.
 *
 * Los dos primeros se derivan del propio contenido del sitio, así que siempre
 * están al día. Los ocho restantes son PLACEHOLDERS.
 *
 * TODO (cliente): reemplazar cada `value: null` por el dato real. Mientras
 * siga en `null`, la tarjeta se muestra marcada como "Por confirmar" en lugar
 * de inventar una cifra.
 */
export const trustFacts: TrustFact[] = [
  { label: "Productos en catálogo", value: `${products.length}+` },
  { label: "Sede de producción", value: company.address.city },

  // TODO (cliente): datos pendientes de entrega.
  { label: "Clientes atendidos", value: null },
  { label: "Proyectos entregados", value: null },
  { label: "Sectores atendidos", value: null },
  { label: "Ciudades atendidas", value: null },
  { label: "Tiempo de respuesta", value: null },
  { label: "Equipos de producción", value: null },
  { label: "Colaboradores", value: null },
  { label: "Despachos mensuales", value: null },
];
