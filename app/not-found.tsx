import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden border-b border-line bg-neutral-50">

      <Container width="wide" className="relative">
        <div className="flex min-h-[70vh] flex-col justify-center py-32">
          <span className="stat-figure text-[clamp(4rem,12vw,9rem)] leading-none text-line-strong">
            404
          </span>

          <h1 className="mt-6 max-w-2xl text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.08] text-ink">
            No encontramos la página que buscas.
          </h1>

          <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-ink-2">
            Es posible que el enlace haya cambiado o que la página ya no esté disponible. Puedes
            volver al inicio o explorar nuestros servicios.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Volver al inicio
            </Button>
            <Button href="/contacto" size="lg" variant="outline">
              Solicitar cotización
            </Button>
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <h2 className="eyebrow text-ink-3">Servicios</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="inline-flex rounded-[8px] border border-line bg-white px-3.5 py-2 text-[14px] text-ink-2 transition-colors hover:border-brand-blue hover:text-brand-blue"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
