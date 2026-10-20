import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { company } from "@/data/company";

const blocks = [
  { key: "mision", label: "Misión", text: company.mission },
  { key: "vision", label: "Visión", text: company.vision },
];

/**
 * Misión y visión.
 *
 * Antes eran dos bloques de tratamiento distinto (uno claro y otro azul a
 * sangre), lo que rompía la continuidad. Ahora son dos tarjetas del sistema,
 * idénticas entre sí y al resto del sitio.
 */
export function MissionVision() {
  return (
    <Section tone="tint">
      <SectionHeading
        eyebrow="Nuestra filosofía"
        title="Lo que nos mueve y hacia dónde vamos."
        accent="hacia dónde vamos"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {blocks.map((block, index) => (
          <Reveal key={block.key} delay={index * 0.08}>
            <Card className="h-full p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <span className="h-[3px] w-7 rounded-full bg-brand-lime" aria-hidden="true" />
                <span className="eyebrow text-brand-blue">{block.label}</span>
              </div>

              <p className="mt-6 text-[clamp(1.05rem,1.8vw,1.3rem)] leading-relaxed text-ink">
                {block.text}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
