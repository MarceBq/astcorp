"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message" | "file", string>>;

const MAX_FILE_BYTES = 8 * 1024 * 1024; // 8 MB

/**
 * Formulario de cotización.
 *
 * Acepta precarga por querystring desde el catálogo:
 *   /contacto?servicio=merch&producto=Tomatodos%20personalizados
 * Así el producto no necesita una ruta propia para poder cotizarse.
 */
export function ContactForm() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [fileName, setFileName] = useState<string | null>(null);

  const presetService = searchParams.get("servicio") ?? "";
  const presetProduct = searchParams.get("producto") ?? "";

  const serviceValue = services.some((s) => s.slug === presetService) ? presetService : "";
  const presetMessage = presetProduct
    ? `Hola, quisiera cotizar: ${presetProduct}.\n\nCantidad estimada:\nFecha de entrega:\nDetalles adicionales:`
    : "";

  function validate(data: FormData): Errors {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const file = data.get("file");

    if (name.length < 2) next.name = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) next.email = "Ingresa un correo válido.";
    if (message.length < 10) next.message = "Cuéntanos brevemente qué necesitas producir.";
    if (file instanceof File && file.size > MAX_FILE_BYTES) {
      next.file = "El archivo supera los 8 MB.";
    }

    return next;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const firstField = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contacto", { method: "POST", body: data });
      if (!response.ok) throw new Error(`Respuesta ${response.status}`);
      setStatus("success");
      form.reset();
      setFileName(null);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-line bg-white p-10 text-center">
        <CheckCircle2
          className="mx-auto size-11 text-brand-blue"
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <h2 className="mt-5 text-[22px] font-semibold tracking-[-0.02em] text-ink">
          Solicitud enviada
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-ink-2">
          Recibimos tu requerimiento. Un asesor de ASTCORP se pondrá en contacto para revisar
          materiales, tiempos y volumen.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-[14px] font-medium text-brand-blue underline underline-offset-4"
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-card border border-line bg-white p-6 sm:p-8 lg:p-10"
    >
      {presetProduct && (
        <p className="mb-6 rounded-[10px] border border-line bg-brand-blue-pale px-4 py-3 text-[13.5px] leading-relaxed text-ink-2">
          Estás cotizando <strong className="font-medium text-ink">{presetProduct}</strong>. Puedes
          editar el mensaje si necesitas algo distinto.
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" name="name" required error={errors.name}>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            className={inputClass(errors.name)}
          />
        </Field>

        <Field label="Empresa" name="company">
          <input
            type="text"
            id="company"
            name="company"
            autoComplete="organization"
            className={inputClass()}
          />
        </Field>

        <Field label="Email" name="email" required error={errors.email}>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            className={inputClass(errors.email)}
          />
        </Field>

        <Field label="Teléfono" name="phone">
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass()}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field label="Servicio de interés" name="service">
            <select
              id="service"
              name="service"
              className={inputClass()}
              defaultValue={serviceValue}
            >
              <option value="">Selecciona una opción</option>
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.title}
                </option>
              ))}
              <option value="otro">Otro / aún por definir</option>
            </select>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field label="Mensaje" name="message" required error={errors.message}>
            <textarea
              id="message"
              name="message"
              rows={6}
              defaultValue={presetMessage}
              placeholder="Describe el proyecto: producto, cantidad estimada, medidas y fecha de entrega."
              className={cn(inputClass(errors.message), "min-h-[148px] resize-y py-3")}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="file"
            className="flex cursor-pointer items-center justify-between gap-4 rounded-[10px] border-2 border-dashed border-brand-blue bg-surface-2 px-4 py-3.5 transition-colors hover:border-brand-blue-deep hover:bg-brand-blue-pale"
          >
            <span className="flex min-w-0 items-center gap-2.5 text-[14px] text-ink-2">
              <Paperclip
                className="size-[18px] shrink-0 text-ink-3"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <span className="truncate">
                {fileName ?? "Adjuntar archivo (opcional): arte, referencia o brief"}
              </span>
            </span>
            <span className="shrink-0 text-[12.5px] text-ink-3">Máx. 8 MB</span>
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="sr-only"
            accept=".pdf,.ai,.eps,.psd,.jpg,.jpeg,.png,.webp,.zip,.rar,.doc,.docx,.xls,.xlsx"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
          />
          {errors.file && <FieldError id="file-error">{errors.file}</FieldError>}
        </div>
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-[10px] border border-line bg-surface-2 px-4 py-3.5 text-[14px] leading-relaxed text-ink-2"
        >
          <AlertCircle
            className="mt-0.5 size-[18px] shrink-0 text-ink-3"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          No pudimos enviar la solicitud. Vuelve a intentarlo o escríbenos directamente a los
          teléfonos indicados.
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12.5px] leading-relaxed text-ink-3">
          Los datos se utilizan únicamente para responder tu solicitud de cotización.
        </p>

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="group shrink-0"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-[18px] animate-spin" strokeWidth={2} aria-hidden="true" />
              Enviando
            </>
          ) : (
            <>
              Solicitar cotización
              <ArrowRight
                className="size-[18px] transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={2}
                aria-hidden="true"
              />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

/* ------------------------------ Primitivas ------------------------------ */

/**
 * Todos los campos llevan contorno azul corporativo sólido de 2 px.
 * Al enfocar, el borde se oscurece y se suma un halo, para que el estado de
 * foco siga distinguiéndose del estado normal.
 */
function inputClass(error?: string) {
  return cn(
    "h-11 w-full rounded-[10px] border-2 bg-white px-3.5 text-[15px] text-ink transition-colors",
    "placeholder:text-ink-3 focus:outline-none focus:ring-2 focus:ring-brand-blue/30",
    error
      ? "border-red-500 focus:border-red-600"
      : "border-brand-blue focus:border-brand-blue-deep",
  );
}

function Field({
  label,
  name,
  required = false,
  error,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[13.5px] font-medium text-ink">
        {label}
        {required && (
          <span className="ml-1 text-brand-blue" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && <FieldError id={`${name}-error`}>{error}</FieldError>}
    </div>
  );
}

function FieldError({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-[12.5px] text-red-600">
      {children}
    </p>
  );
}
