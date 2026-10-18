/**
 * Assets del hero de portada.
 *
 * PARA CAMBIAR EL VIDEO: reemplazar el archivo en /public/videos/hero.mp4.
 * No hace falta tocar código.
 *
 * `webm` es opcional. Si se genera una versión WebM (menor peso en Chrome y
 * Firefox), colocarla en /public/videos/hero.webm y apuntar la ruta aquí.
 *
 * `poster` se muestra mientras el video carga y en conexiones lentas.
 * Se entrega un poster de marca por defecto; reemplazarlo por un fotograma
 * real del video cuando esté disponible.
 *
 * Poner `mp4: null` desactiva el video y deja únicamente el fondo de marca.
 */
export const heroMedia = {
  mp4: "/videos/hero.mp4" as string | null,
  webm: null as string | null,
  poster: "/images/hero-poster.webp" as string | null,
};
