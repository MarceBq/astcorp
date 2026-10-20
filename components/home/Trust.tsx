import { Section } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { confirmedStats } from "@/data/stats";
import { trustFacts } from "@/data/trust";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/**
 * Confianza.
 *
 * Son 10 tarjetas. Las que aún no tienen cifra real se muestran como
 * "Por confirmar" en vez de inventar un número (ver data/trust.ts).
 */
export function Trust() {
  return (
    <Section tone="plain">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
        <SectionHeading
          eyebrow="Confianza"
          title="Una empresa de producción, no un intermediario."
          accent="producción"
          description={company.activity}
        />

        {confirmedStats.length > 0 && (
          <RevealGroup className="flex flex-wrap gap-x-14 gap-y-8 lg:justify-end">
            {confirmedStats.map((stat) => (
              <RevealItem key={stat.label}>
                <div className="stat-figure text-[clamp(2.75rem,5vw,4rem)] leading-none text-brand-blue">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-[14px] font-medium text-ink-2">{stat.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </div>

      {/* 10 tarjetas: 2 columnas en móvil y tablet, 5 en escritorio.
          Son los únicos repartos que dejan filas completas con 10 ítems. */}
      <RevealGroup gap={0.05} className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-5">
        {trustFacts.map((fact) => {
          const pending = fact.value === null;

          return (
            <RevealItem key={fact.label}>
              <Card
                className={cn(
                  "h-full p-5",
                  pending && "border-dashed bg-neutral-50",
                )}
              >
                <div
                  className={cn(
                    "stat-figure text-[24px] leading-none",
                    pending ? "text-ink-3" : "text-brand-blue",
                  )}
                >
                  {fact.value ?? "—"}
                </div>

                <p className="mt-2.5 text-[13px] leading-snug text-ink-2">{fact.label}</p>

                {pending && (
                  <p className="mt-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-ink-3">
                    Por confirmar
                  </p>
                )}
              </Card>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
