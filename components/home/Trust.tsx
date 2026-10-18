import { Section } from "@/components/ui/Section";
import { CountUp } from "@/components/ui/CountUp";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CmykRule, OverprintShapes, RegistrationMark, SheetNote } from "@/components/ui/PrintMarks";
import { confirmedStats } from "@/data/stats";
import { trustFacts } from "@/data/trust";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

/**
 * Confianza — papel azul de marca. Sección cargada.
 *
 * Recursos de imprenta: círculos CMYK en sobreimpresión, trama de semitono,
 * titular fuera de registro, cifras con capas de tinta y marcas de registro
 * en las tarjetas confirmadas.
 *
 * Sin filtros de desenfoque, por el encargo anterior: la sección se ve
 * nítida en cualquier pantalla.
 *
 * Son 10 tarjetas. Las que aún no tienen cifra real se muestran como
 * "Por confirmar" en vez de inventar un número (ver data/trust.ts).
 */
export function Trust() {
  return (
    <Section tone="blue" size="md" width="wide" className="relative overflow-hidden">
      <CmykRule className="absolute inset-x-0 top-0 z-10" />

      {/* Media densidad: por encima, las cifras en amarillo perderían contraste
          sobre las zonas donde las tintas se cruzan. */}
      <OverprintShapes className="left-auto right-0 w-[55%] opacity-35" size={300} />
      <div
        className="pointer-events-none absolute inset-0 halftone-bg halftone-fade-b text-white/20"
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
                  <div className="stat-figure text-[clamp(3rem,5.5vw,4.5rem)] leading-none text-ink-yellow">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-3 font-display text-[12px] font-bold uppercase tracking-[0.14em] text-white/80">
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
                  "relative rounded-card border-2 p-5 transition-colors duration-300",
                  pending
                    ? "border-dashed border-white/30 bg-white/[0.04]"
                    : "border-white/40 bg-white/[0.08] hover:border-ink-yellow",
                )}
              >
                {!pending && (
                  <RegistrationMark size={16} tone="light" className="absolute right-3 top-3 opacity-60" />
                )}

                <div
                  className={cn(
                    "stat-figure text-[26px] leading-none",
                    pending ? "text-white/40" : "text-ink-yellow",
                  )}
                >
                  {fact.value ?? "—"}
                </div>

                <p className="mt-2.5 text-[13px] leading-snug text-white/80">{fact.label}</p>

                {pending && (
                  <p className="mt-2 font-display text-[10px] font-bold uppercase tracking-[0.14em] text-white/45">
                    Por confirmar
                  </p>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>

        <SheetNote tone="light" withInks className="mt-12">
          Astcorp — Pliego 06 · Confianza
        </SheetNote>
      </div>

      <CmykRule className="absolute inset-x-0 bottom-0 z-10" />
    </Section>
  );
}
