import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Card, IconBadge } from "@/components/ui/Card";
import { FeatureIcon } from "@/components/ui/Icons";
import { reasons } from "@/data/why";

/** ¿Por qué ASTCORP? — primera sección después del hero. */
export function WhyAstcorp() {
  return (
    <Section id="por-que-astcorp" tone="plain">
      <SectionHeading
        eyebrow="Por qué ASTCORP"
        title="Cuatro razones para producir con nosotros."
        accent="producir"
        description="Una imprenta que responde por el resultado: del arte final al despacho, con un solo interlocutor."
      />

      <RevealGroup gap={0.07} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason) => (
          <RevealItem key={reason.id} className="h-full">
            <Card as="article" interactive className="flex h-full flex-col p-7">
              <IconBadge size="lg">
                <FeatureIcon name={reason.icon} aria-hidden="true" />
              </IconBadge>

              <h3 className="mt-6 text-[18px] font-bold leading-snug tracking-[-0.02em] text-ink">
                {reason.title}
              </h3>
              <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-2">
                {reason.description}
              </p>
            </Card>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
