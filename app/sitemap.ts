import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";

/**
 * Sitemap.
 *
 * Los productos no aparecen: viven dentro del catálogo de su servicio y no
 * tienen URL propia. Agregar un servicio a data/services.ts lo incorpora aquí
 * automáticamente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, priority: 1, changeFrequency: "monthly", lastModified },
    { url: `${base}/servicios`, priority: 0.9, changeFrequency: "monthly", lastModified },
    { url: `${base}/nosotros`, priority: 0.6, changeFrequency: "yearly", lastModified },
    { url: `${base}/contacto`, priority: 0.9, changeFrequency: "yearly", lastModified },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${base}/servicios/${service.slug}`,
    priority: 0.85,
    changeFrequency: "weekly",
    lastModified,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
