import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Card, IconBadge } from "@/components/ui/Card";
import { FeatureIcon } from "@/components/ui/Icons";
import { differentials } from "@/data/differentials";

/**
 * Diferenciales comerciales.
 *
 * Tres columnas en escritorio: al retirarse "Envíos internacionales" quedan
 * 3 ítems, y con 2 columnas el tercero quedaría suelto.
 */
export function Differentials() {
  return (
    <Section id="diferenciales" tone="tint">
      <SectionHeading
        eyebrow="Respaldo"
        title="Lo que incluye trabajar con nosotros."
        accent="trabajar con nosotros"
      />

      <RevealGroup gap={0.07} className="mt-14 grid gap-6 md:grid-cols-3">
        {differentials.map((item) => (
          <RevealItem key={item.id} className="h-full">
            <Card as="article" interactive className="flex h-full items-start gap-5 p-7">
              <IconBadge>
                <FeatureIcon name={item.icon} className="size-[22px]" strokeWidth={1.75} />
              </IconBadge>

              <div>
                <h3 className="text-[17px] font-bold leading-snug tracking-[-0.02em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">{item.description}</p>
              </div>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
