import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SectionTransition } from "@/components/ui/SectionTransition";
import { footerNav } from "@/data/navigation";
import { company } from "@/data/company";

/**
 * Footer.
 *
 * Fondo en azul corporativo profundo (#1B1B63) con degradado hacia el azul de
 * marca: cierra la página con el contraste más alto del sitio. Los títulos de
 * columna y los estados hover usan el lime como resalte.
 *
 * Los íconos de contacto van sueltos, a 18px y trazo fino: el footer queda
 * fuera del sistema de `IconBadge` que agranda los íconos del resto del sitio.
 *
 * Teléfono, email y ubicación son los tres datos destacados —blanco puro y
 * semibold— por encima del resto del texto.
 *
 * Solo se muestran los canales realmente disponibles: el email y las redes
 * permanecen ocultos mientras estén en `null` en data/company.ts.
 */
export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "Instagram", href: company.social.instagram },
    { label: "Facebook", href: company.social.facebook },
    { label: "LinkedIn", href: company.social.linkedin },
    { label: "TikTok", href: company.social.tiktok },
  ].filter((social): social is { label: string; href: string } =>
    Boolean(social.href),
  );

  return (
    <>
      {/* La curva mantiene la entrada suave desde la sección anterior */}
      <SectionTransition from="white" to="blueDeep" />

      <footer className="relative overflow-hidden bg-brand-blue-900 text-white">
        {/* Degradado corporativo y texturas */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_120%_at_85%_0%,#2F2FA8_0%,#22226F_45%,#161645_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-24 size-[460px] rounded-full bg-brand-lime/15 blur-[150px]"
          aria-hidden="true"
        />

        <Container width="wide" className="relative">
          <div className="grid gap-12 py-16 lg:grid-cols-[1.3fr_2fr] lg:gap-16 lg:py-20">
            {/* Identidad */}
            <div>
              <Logo tone="light" />
              <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-white/75">
                {company.activity}
              </p>

              {socials.length > 0 && (
                <div className="mt-8">
                  <h2 className="eyebrow text-brand-lime">Redes sociales</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex rounded-[8px] border border-white/20 bg-white/[0.06] px-3 py-2 text-[14.5px] text-white/80 transition-colors hover:border-brand-lime hover:bg-brand-lime hover:text-brand-blue-900"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Mapa del sitio y contacto */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {footerNav.map((group) => (
                <div key={group.title}>
                  <h2 className="eyebrow text-brand-lime">{group.title}</h2>
                  {/* py-1.5 amplía el área táctil en móvil sin alterar el ritmo visual */}
                  <ul className="mt-3 space-y-0.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="inline-block py-1.5 text-[15.5px] text-white/80 transition-colors hover:text-brand-lime"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div>
                {/* Único encabezado de columna que crece: es el que el cliente
                  pidió hacer más visible. */}
                <h2 className="eyebrow text-[13px] text-brand-lime">
                  Contacto
                </h2>
                <address className="mt-4 space-y-3.5 not-italic text-[15.5px] text-white/80">
                  <div className="flex items-start gap-2.5">
                    <Phone
                      className="mt-0.5 size-[18px] shrink-0 text-brand-lime"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="flex flex-col">
                      {company.phones.map((phone) => (
                        <a
                          key={phone.tel}
                          href={`tel:${phone.tel}`}
                          className="w-fit py-1 text-[17px] font-semibold text-white transition-colors hover:text-brand-lime"
                        >
                          {phone.display}
                        </a>
                      ))}
                    </span>
                  </div>

                  {company.email && (
                    <div className="flex items-start gap-2.5">
                      <Mail
                        className="mt-0.5 size-[18px] shrink-0 text-brand-lime"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <a
                        href={`mailto:${company.email}`}
                        className="break-words text-[17px] font-semibold text-white transition-colors hover:text-brand-lime"
                      >
                        {company.email}
                      </a>
                    </div>
                  )}

                  <div className="flex items-start gap-2.5">
                    <MapPin
                      className="mt-0.5 size-[18px] shrink-0 text-brand-lime"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>
                      <span className="text-[17px] font-semibold text-white">
                        {company.address.full}
                      </span>
                      <br />
                      <span className="text-white/70">
                        {company.address.city}, {company.address.country}
                      </span>
                    </span>
                  </div>
                </address>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/20 py-6 text-[14.5px] text-white/75 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year}{" "}
              <span className="text-white/85">{company.name}</span>. Todos los
              derechos reservados.
            </p>
            <p>
              {company.address.city}, {company.address.country}
            </p>
          </div>
        </Container>
      </footer>
    </>
  );
}
