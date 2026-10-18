import { CTABand } from "@/components/ui/CTABand";
import type { Service } from "@/data/types";

/** Cierre de conversión de una página de servicio. */
export function ServiceCTA({ service }: { service: Service }) {
  return (
    <CTABand
      title={`¿Necesitas cotizar ${service.name.toLowerCase()}?`}
      description="Indícanos medidas, materiales y cantidades estimadas. Si aún no las tienes definidas, te proponemos alternativas."
      primaryHref={`/contacto?servicio=${service.slug}`}
    />
  );
}
