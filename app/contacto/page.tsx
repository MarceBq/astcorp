import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge, badgeToneFor } from "@/components/ui/Card";
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
    description:
      "Solicita una cotización de impresión, merchandising o publicidad visual.",
    url: "/contacto",
  },
};

/** Clase común de los tres datos destacados: el mismo criterio del footer. */
const featured =
  "text-[18px] font-semibold tracking-[-0.02em] text-brand-blue transition-colors hover:text-brand-blue-700";

/**
 * Datos de contacto de la columna lateral.
 *
 * Todos salen de data/company.ts, el mismo origen que lee el footer, así que
 * un cambio de teléfono o correo se refleja en las dos vistas. Los canales
 * que estén en `null` no generan tarjeta.
 */
interface InfoCardData {
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const infoCards: InfoCardData[] = [
  {
    title: "Dirección",
    icon: <MapPin aria-hidden="true" />,
    content: (
      <>
        <p className="text-[18px] font-semibold leading-snug tracking-[-0.02em] text-brand-blue">
          {company.address.full}
        </p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-2">
          {company.address.city}, {company.address.country}
        </p>
      </>
    ),
  },
  {
    title: company.phones.length > 1 ? "Teléfonos" : "Teléfono",
    icon: <Phone aria-hidden="true" />,
    content: (
      <ul className="space-y-1.5">
        {company.phones.map((phone) => (
          <li key={phone.tel}>
            <a href={`tel:${phone.tel}`} className={featured}>
              {phone.display}
            </a>
          </li>
        ))}
      </ul>
    ),
  },
  ...(company.email
    ? [
        {
          title: "Email",
          icon: <Mail aria-hidden="true" />,
          content: (
            <a
              href={`mailto:${company.email}`}
              className={`block break-words ${featured}`}
            >
              {company.email}
            </a>
          ),
        },
      ]
    : []),
  {
    title: "Atención",
    icon: <Clock aria-hidden="true" />,
    content: (
      <p className="text-[15px] leading-relaxed text-ink-2">
        Coordinamos visitas y entregas de material según el proyecto. Escríbenos
        para agendar una reunión con un asesor comercial.
      </p>
    ),
  },
];

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
            {/* Las tarjetas salen de una lista para que la rotación de
                paletas del ícono se resuelva por índice, igual que en las
                demás vistas, y no se desordene al ocultarse un canal. */}
            {infoCards.map((card, index) => (
              <InfoCard
                key={card.title}
                index={index}
                icon={card.icon}
                title={card.title}
              >
                {card.content}
              </InfoCard>
            ))}

            <div className="rounded-card border border-line bg-neutral-50 p-6">
              <h2 className="eyebrow text-ink-3">
                Para agilizar tu cotización
              </h2>
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

/**
 * Tarjeta de dato de contacto.
 *
 * Comparte con el resto del sitio el contenedor de ícono y su rotación de
 * paletas, pero conserva el contenido alineado a la izquierda: aquí el
 * protagonista es el dato —teléfono, correo, dirección—, no un título con
 * descripción, así que centrarlo invertiría la jerarquía.
 */
function InfoCard({
  icon,
  title,
  index,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-line bg-white p-6">
      <div className="flex items-center gap-3.5">
        <IconBadge size="sm" tone={badgeToneFor(index)}>
          {icon}
        </IconBadge>
        {/* Etiqueta discreta: el protagonista es el dato, no su nombre. */}
        <h2 className="eyebrow text-ink-3">{title}</h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
