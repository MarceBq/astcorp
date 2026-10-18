import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { timeline } from "@/data/timeline";
import { cn } from "@/lib/utils";

/**
 * Historia de la empresa.
 * Los hitos con `confirmed: false` muestran el año como "202X" y una nota:
 * no se inventan fechas que el cliente no haya validado.
 */
export function Timeline({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Reveal>
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-px w-6 bg-brand-blue" aria-hidden="true" />
          <span className="eyebrow text-brand-blue">Trayectoria</span>
        </div>
        <h3 className="max-w-xl text-[clamp(1.5rem,2.6vw,2.1rem)] font-semibold leading-[1.12] text-heading">
          Una empresa que creció junto con sus clientes.
        </h3>
      </Reveal>

      <RevealGroup
        as="ol"
        gap={0.08}
        className="mt-12 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6"
      >
        {timeline.map((entry) => (
          <RevealItem as="li" key={entry.title} className="relative lg:pr-4">
            {/* Marcador sobre la línea superior */}
            <span
              className={cn(
                "absolute -top-[42px] left-0 size-2.5 rounded-full ring-4 ring-surface-2",
                entry.confirmed ? "bg-brand-blue" : "bg-line-strong",
              )}
              aria-hidden="true"
            />

            <div
              className={cn(
                "stat-figure text-[26px] leading-none",
                entry.confirmed ? "text-ink" : "text-ink-3",
              )}
            >
              {entry.year}
            </div>

            <h4 className="mt-3 text-[15px] font-semibold leading-snug tracking-[-0.015em] text-ink">
              {entry.title}
            </h4>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{entry.description}</p>

            {!entry.confirmed && (
              <p className="mt-3 text-[11.5px] uppercase tracking-[0.1em] text-ink-3">
                Año por confirmar
              </p>
            )}
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
