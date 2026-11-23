/**
 * Imágenes del hero de portada.
 *
 * Se muestran en bucle, una tras otra, en el orden de este array. La última
 * es la de cierre.
 *
 * PARA CAMBIARLAS: reemplazar los archivos en /public/images/hero/ o editar
 * este array. No hace falta tocar código.
 *
 * Cada entrada tiene dos recortes de la misma foto, los dos al mismo tamaño
 * que sus hermanos para que ninguna salte de encuadre al pasar a la
 * siguiente:
 *
 *   `src`    1920x1080 (16:9) — la proporción del hero en escritorio.
 *   `movil`  1080x1440 (3:4)  — en un teléfono el 16:9 se recortaría hasta
 *                               dejar ver apenas una cuarta parte del ancho.
 *
 * Dejar el array vacío desactiva el pase y deja solo el fondo de marca.
 */
export const heroSlides: { src: string; movil: string; alt: string }[] = [
  {
    src: "/images/hero/01-corporativo.webp",
    movil: "/images/hero/01-corporativo-movil.webp",
    alt: "Set corporativo ASTCORP: taza, botella, tote bag, polo, cuaderno y lentes",
  },
  {
    src: "/images/hero/02-verano.webp",
    movil: "/images/hero/02-verano-movil.webp",
    alt: "Línea de verano ASTCORP: botella, toalla, sombrero, abanico y ventilador de mano",
  },
  {
    src: "/images/hero/03-kit-azul.webp",
    movil: "/images/hero/03-kit-azul-movil.webp",
    alt: "Kit corporativo ASTCORP en azul: botella, tote bag, polo, taza y cuaderno",
  },
  {
    src: "/images/hero/04-cuadernos.webp",
    movil: "/images/hero/04-cuadernos-movil.webp",
    alt: "Cuadernos anillados ASTCORP con la frase Hacemos realidad tus proyectos",
  },
];
