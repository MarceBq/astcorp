import { Section } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { confirmedStats } from "@/data/stats";
import { trustFacts } from "@/data/trust";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/**
 * Confianza.
 *
 * Bloque oscuro sobre la base casi negra, con trama de semitono. Sin filtros
 * de desenfoque: ni halo difuminado ni backdrop-blur, para que la sección se
 * vea nítida en cualquier pantalla.
 *
 * Son 10 tarjetas de datos. Las que aún no tienen cifra real se muestran como
 * "Por confirmar" en vez de inventar un número (ver data/trust.ts).
 */
export function Trust() {
  return (
    <Section tone="night" size="md" width="wide" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 halftone-dark opacity-35" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-lime to-transparent"
        aria-hidden="true"
      />

      <div className="relative">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading
            eyebrow="Confianza"
            tone="dark"
            title="Una empresa de producción, no un intermediario."
            accent="producción"
            description={company.activity}
            className="max-w-xl"
          />

          {confirmedStats.length > 0 && (
            <RevealGroup className="flex flex-wrap gap-x-14 gap-y-8 lg:justify-end">
              {confirmedStats.map((stat) => (
                <RevealItem key={stat.label}>
                  <div className="stat-figure text-[clamp(3rem,5.5vw,4.5rem)] leading-none text-brand-lime">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-3 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/70">
                    {stat.label}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>

        {/* 10 tarjetas: 2 columnas en móvil y tablet, 5 en escritorio.
            Son los únicos repartos que dejan filas completas con 10 ítems. */}
        <RevealGroup gap={0.05} className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-5">
          {trustFacts.map((fact) => {
            const pending = fact.value === null;

            return (
              <RevealItem
                key={fact.label}
                className={cn(
                  "rounded-card border-2 p-5 transition-colors duration-300",
                  pending
                    ? "border-dashed border-white/20 bg-white/[0.03]"
                    : "border-white/25 bg-white/[0.06] hover:border-brand-lime",
                )}
              >
                <div
                  className={cn(
                    "stat-figure text-[26px] leading-none",
                    pending ? "text-white/35" : "text-brand-lime",
                  )}
                >
                  {fact.value ?? "—"}
                </div>

                <p className="mt-2.5 text-[13px] leading-snug text-white/75">{fact.label}</p>

                {pending && (
                  <p className="mt-2 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white/40">
                    Por confirmar
                  </p>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </Section>
  );
}
