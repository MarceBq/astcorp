import { NextResponse } from "next/server";

/**
 * Recepción de solicitudes de cotización.
 *
 * ESTADO: valida y registra la solicitud en el log del servidor.
 *
 * PENDIENTE DE INTEGRACIÓN — antes de salir a producción hay que conectar
 * este handler a un transporte real. Opciones habituales:
 *   - Envío por email (Resend, SendGrid, SMTP corporativo)
 *   - Registro en un CRM o Google Sheet
 *   - Notificación a WhatsApp Business API
 *
 * El adjunto llega en el campo `file`. Para conservarlo hay que subirlo a un
 * almacenamiento (S3, Blob, Drive) y enviar el enlace en la notificación:
 * este handler no persiste archivos.
 */

const MAX_FILE_BYTES = 8 * 1024 * 1024;

export async function POST(request: Request) {
  let form: FormData;

  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Formato de solicitud inválido." }, { status: 400 });
  }

  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();

  if (name.length < 2 || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Datos incompletos o inválidos." }, { status: 422 });
  }

  const file = form.get("file");
  if (file instanceof File && file.size > MAX_FILE_BYTES) {
    return NextResponse.json({ error: "El archivo supera los 8 MB." }, { status: 413 });
  }

  const submission = {
    receivedAt: new Date().toISOString(),
    name,
    email,
    company: String(form.get("company") ?? "").trim() || null,
    phone: String(form.get("phone") ?? "").trim() || null,
    service: String(form.get("service") ?? "").trim() || null,
    sector: String(form.get("sector") ?? "").trim() || null,
    message,
    attachment:
      file instanceof File && file.size > 0
        ? { name: file.name, size: file.size, type: file.type }
        : null,
  };

  console.info("[astcorp] Nueva solicitud de cotización", submission);

  return NextResponse.json({ ok: true }, { status: 200 });
}
