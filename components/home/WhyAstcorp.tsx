import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { IconCard } from "@/components/ui/IconCard";
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
        {reasons.map((reason, index) => (
          <RevealItem key={reason.id} className="h-full">
            <IconCard
              index={index}
              icon={<FeatureIcon name={reason.icon} aria-hidden="true" />}
              title={reason.title}
              description={reason.description}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
