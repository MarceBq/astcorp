import type { Client } from "./types";

/**
 * MARCAS QUE HAN COLABORADO CON ASTCORP
 *
 * Alimenta el carrusel de logos del home.
 *
 * Todos los registros son placeholders. No se publica ninguna marca de
 * terceros sin autorización escrita de la empresa titular.
 *
 * Para publicar un cliente real:
 *   1. Confirmar por escrito la autorización de uso del logotipo.
 *   2. Copiar el archivo a /public/images/clients/<archivo>.svg
 *      (SVG preferentemente; si es PNG, 400 px de ancho y fondo transparente).
 *   3. Reemplazar `name`, apuntar `logo` a la ruta y quitar `isPlaceholder`.
 *
 * El carrusel se adapta a cualquier cantidad de logos y se oculta por completo
 * si este array queda vacío.
 */
export const clients: Client[] = [
  { name: "Cliente 01", logo: null, isPlaceholder: true },
  { name: "Cliente 02", logo: null, isPlaceholder: true },
  { name: "Cliente 03", logo: null, isPlaceholder: true },
  { name: "Cliente 04", logo: null, isPlaceholder: true },
  { name: "Cliente 05", logo: null, isPlaceholder: true },
  { name: "Cliente 06", logo: null, isPlaceholder: true },
  { name: "Cliente 07", logo: null, isPlaceholder: true },
  { name: "Cliente 08", logo: null, isPlaceholder: true },
  { name: "Cliente 09", logo: null, isPlaceholder: true },
  { name: "Cliente 10", logo: null, isPlaceholder: true },
];
