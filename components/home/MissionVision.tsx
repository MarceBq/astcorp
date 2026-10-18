import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const blocks = [
  { key: "mision", label: "Misión", text: company.mission },
  { key: "vision", label: "Visión", text: company.vision },
];

export function MissionVision() {
  return (
    <Section tone="white" size="lg" width="wide">
      <Reveal>
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-px w-6 bg-brand-blue" aria-hidden="true" />
          <span className="eyebrow text-brand-blue">Nuestra filosofía</span>
        </div>
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {blocks.map((block, index) => (
          <Reveal
            key={block.key}
            delay={index * 0.1}
            className={cn(
              "relative overflow-hidden rounded-card border p-8 sm:p-12 lg:p-14",
              index === 0
                ? "border-line bg-surface-2"
                : "border-transparent bg-brand-blue text-white",
            )}
          >
            <div
              className={cn(
                "pointer-events-none absolute inset-0 grid-lines",
                index === 0 ? "opacity-40" : "opacity-[0.07]",
              )}
              aria-hidden="true"
            />

            {index === 1 && (
              <div
                className="pointer-events-none absolute -bottom-24 -right-16 size-[320px] rounded-full bg-brand-lime/20 blur-[110px]"
                aria-hidden="true"
              />
            )}

            <div className="relative">
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "stat-figure text-[13px]",
                    index === 0 ? "text-line-strong" : "text-white/40",
                  )}
                >
                  {index === 0 ? "01" : "02"}
                </span>
                <span
                  className={cn(
                    "eyebrow",
                    index === 0 ? "text-brand-blue" : "text-brand-lime",
                  )}
                >
                  {block.label}
                </span>
              </div>

              <p
                className={cn(
                  "mt-8 font-editorial text-[clamp(1.3rem,2.5vw,2rem)] leading-[1.32] tracking-[-0.01em]",
                  index === 0 ? "text-ink" : "text-white",
                )}
              >
                {block.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
