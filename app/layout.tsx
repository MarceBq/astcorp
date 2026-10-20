import type { Metadata, Viewport } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Archivo es la tipografía display: variable de 400 a 900, lo que permite el
 * contraste de pesos de los titulares sin cargar varias familias.
 */
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: `${company.name} | Impresión, merchandising y soluciones gráficas en Perú`,
    template: `%s | ${company.name}`,
  },
  description:
    "ASTCORP produce impresión offset, publicidad visual, merchandising y box corporativos para empresas en todo el Perú, con envíos a nivel nacional.",
  keywords: [
    "imprenta Lima",
    "impresión offset Perú",
    "merchandising corporativo",
    "publicidad visual",
    "box corporativos",
    "packaging Perú",
    "regalos empresariales",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: company.url,
    siteName: company.name,
    title: `${company.name} | Soluciones gráficas que hacen crecer tu marca`,
    description:
      "Impresión, merchandising, publicidad visual y soluciones corporativas para empresas de todo el Perú.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | Soluciones gráficas para empresas`,
    description:
      "Impresión offset, publicidad visual, merchandising y box corporativos. Cobertura a nivel nacional.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

/** Datos estructurados de la organización para resultados enriquecidos. */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: company.url,
  description: company.activity,
  foundingDate: company.foundedISO,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.district,
    addressRegion: company.address.city,
    addressCountry: "PE",
  },
  contactPoint: company.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.tel,
    contactType: "sales",
    areaServed: "PE",
    availableLanguage: "Spanish",
  })),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /**
     * `suppressHydrationWarning` solo cubre los atributos de <html>.
     * Extensiones como Dark Reader inyectan ahí atributos propios antes de
     * que React hidrate, y eso rompía la hidratación de toda la página. No
     * oculta discrepancias reales del árbol: el alcance es este único nodo.
     */
    <html
      lang="es-PE"
      className={`${inter.variable} ${archivo.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[8px] focus:bg-brand-blue focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
        >
          Saltar al contenido
        </a>

        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
