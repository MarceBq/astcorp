import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contacto y solicitud de cotización",
  description: `Solicita una cotización a ASTCORP. ${company.address.full}. Teléfonos ${company.phones
    .map((p) => p.display)
    .join(" y ")}.`,
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto | ASTCORP",
    description: "Solicita una cotización de impresión, merchandising o publicidad visual.",
    url: "/contacto",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="¿Qué necesita producir tu marca?"
        titleAccent="producir tu marca"
        description="Cuéntanos el proyecto, el plazo y el volumen estimado. Respondemos con una propuesta de producción concreta: materiales, alternativas y tiempos reales."
        breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
      />

      <Section tone="plain" size="md" width="wide">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <Reveal>
            {/* El formulario lee la precarga de ?servicio= y ?producto=,
                por eso necesita un límite de Suspense. */}
            <Suspense
              fallback={
                <div className="h-[560px] animate-pulse rounded-card border border-line bg-neutral-50" />
              }
            >
              <ContactForm />
            </Suspense>
          </Reveal>

          <Reveal delay={0.08} className="space-y-4">
            <InfoCard icon={<MapPin className="size-5" strokeWidth={1.75} />} title="Dirección">
              <p className="text-[15px] leading-relaxed text-ink-2">
                {company.address.full}
                <br />
                {company.address.city}, {company.address.country}
              </p>
            </InfoCard>

            <InfoCard icon={<Phone className="size-5" strokeWidth={1.75} />} title="Teléfonos">
              <ul className="space-y-1.5">
                {company.phones.map((phone) => (
                  <li key={phone.tel}>
                    <a
                      href={`tel:${phone.tel}`}
                      className="text-[17px] font-medium tracking-[-0.02em] text-ink transition-colors hover:text-brand-blue"
                    >
                      {phone.display}
                    </a>
                  </li>
                ))}
              </ul>
            </InfoCard>

            {company.whatsapp && (
              <InfoCard
                icon={<MessageCircle className="size-5" strokeWidth={1.75} />}
                title="WhatsApp"
              >
                <a
                  href={company.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-brand-blue underline underline-offset-4"
                >
                  Escribir por WhatsApp
                </a>
              </InfoCard>
            )}

            <InfoCard icon={<Clock className="size-5" strokeWidth={1.75} />} title="Atención">
              <p className="text-[15px] leading-relaxed text-ink-2">
                Coordinamos visitas y entregas de material según el proyecto. Escríbenos para
                agendar una reunión con un asesor comercial.
              </p>
            </InfoCard>

            <div className="rounded-card border border-line bg-neutral-50 p-6">
              <h2 className="eyebrow text-ink-3">Para agilizar tu cotización</h2>
              <ul className="mt-4 space-y-2.5 text-[14.5px] leading-relaxed text-ink-2">
                <li>Cantidad estimada y fecha de entrega requerida</li>
                <li>Medidas, material o referencia visual del producto</li>
                <li>Si el arte ya está listo o requiere diseño</li>
                <li>Direcciones de despacho, si son varias sedes</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-line bg-white p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex size-9 items-center justify-center rounded-[8px] bg-brand-blue-50 text-brand-blue">
          {icon}
        </span>
        <h2 className="text-[15px] font-semibold tracking-[-0.015em] text-ink">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
