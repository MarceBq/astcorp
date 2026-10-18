import { services } from "./services";

export interface NavChild {
  label: string;
  description: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  overview?: { label: string; href: string };
}

/**
 * Navegación principal: solo secciones, nunca productos.
 *
 * Diferenciales como envíos, precios, stock o garantía son contenido
 * comercial del home, no elementos de navegación.
 */
export const mainNav: NavItem[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Servicios",
    href: "/servicios",
    overview: { label: "Ver todos los servicios", href: "/servicios" },
    children: services.map((service) => ({
      label: service.name,
      description: service.short,
      href: `/servicios/${service.slug}`,
    })),
  },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
];

export const footerNav = [
  {
    title: "Servicios",
    links: services.map((service) => ({
      label: service.name,
      href: `/servicios/${service.slug}`,
    })),
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];
