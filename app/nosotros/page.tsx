import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { FramedImage } from "@/components/ui/FramedImage";
import { HighlightText } from "@/components/ui/HighlightText";
import { CTABand } from "@/components/ui/CTABand";
import { MissionVision } from "@/components/home/MissionVision";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Nosotros — Historia, misión y visión",
  description: `${company.name} es una empresa peruana de servicios integrales de diseño, impresión, publicidad visual, merchandising y soluciones corporativas, fundada en ${company.foundedYear}.`,
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros | ASTCORP",
    description: company.activity,
    url: "/nosotros",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Del arte final a la entrega, con un solo responsable."
        titleAccent="un solo responsable"
        description={company.story.lead}
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Nosotros" }]}
        aside={
          <div className="flex gap-10">
            <div>
              <div className="stat-figure text-[38px] leading-none text-ink">
                +{company.yearsInOperation}
              </div>
              <p className="mt-2 text-[13px] text-ink-2">Años de operación</p>
            </div>
            <div>
              <div className="stat-figure text-[38px] leading-none text-ink">
                {services.length}
              </div>
              <p className="mt-2 text-[13px] text-ink-2">Líneas de servicio</p>
            </div>
          </div>
        }
      />

      {/* Historia */}
      <Section tone="plain" size="md" width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <FramedImage
              src={null}
              alt="Equipo y producción de ASTCORP"
              label="Producción ASTCORP"
              mediaClassName="aspect-[4/5]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="mb-4 flex items-center gap-2.5">
                <span className="h-px w-6 bg-brand-lime" aria-hidden="true" />
                <span className="eyebrow text-brand-blue">La empresa</span>
              </div>

              <p className="text-[clamp(1.35rem,2.3vw,1.85rem)] leading-[1.35] text-ink">
                {company.activity}
              </p>

              <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-ink-2">
                {company.story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 border-t border-line pt-8">
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="eyebrow text-ink-3">Fundación</dt>
                  <dd className="mt-2 text-[15.5px] text-ink">{company.foundedLabel}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink-3">Sede</dt>
                  <dd className="mt-2 text-[15.5px] text-ink">{company.address.full}</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Pilares */}
      <Section tone="tint" size="md" width="wide" >
        <Reveal>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="h-px w-6 bg-brand-blue" aria-hidden="true" />
            <span className="eyebrow text-brand-blue">Pilares</span>
          </div>
          <h2 className="max-w-2xl text-[clamp(1.75rem,3.2vw,2.6rem)] font-semibold leading-[1.08] text-ink">
            Cuatro compromisos que sostienen cada proyecto.
          </h2>
        </Reveal>

        {/* Número y título son los dos elementos protagonistas de cada pilar.
            Sobre tarjeta blanca el lima no contrasta (1.3:1), así que la cifra
            va en azul de marca y el lima queda para el resaltado del título,
            el mismo recurso que las cards de Servicios. */}
        <RevealGroup className="mt-12 grid gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2 lg:grid-cols-4">
          {company.values.map((value, index) => (
            <RevealItem key={value.name} className="bg-white p-7 sm:p-8">
              <span className="stat-figure block text-[46px] leading-none text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-[20px] font-bold leading-relaxed tracking-[-0.02em]">
                <HighlightText>{value.name}</HighlightText>
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-2">{value.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <MissionVision />
      <CTABand />
    </>
  );
}
