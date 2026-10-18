/** Incluye `bigint` porque `React.ReactNode && "clase"` puede estrecharse a `0n`. */
export type ClassValue = string | number | bigint | null | undefined | false | ClassValue[];

/**
 * Concatenador de clases mínimo. No resuelve conflictos de Tailwind:
 * los componentes reciben `className` al final de la lista para que el
 * consumidor pueda sobrescribir.
 */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      const nested = cn(...input);
      if (nested) out.push(nested);
    } else {
      out.push(String(input));
    }
  }
  return out.join(" ");
}

/** "01", "02", ... para numeración editorial de secciones y listas. */
export function pad(n: number, size = 2): string {
  return String(n).padStart(size, "0");
}
