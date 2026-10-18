# Video del hero

Coloca aquí el video de presentación con el nombre exacto:

```
hero.mp4
```

No hace falta tocar código: el hero lo toma automáticamente.

## Recomendaciones de export

| Parámetro   | Valor sugerido                        |
| ----------- | ------------------------------------- |
| Resolución  | 1920 x 1080 (Full HD)                 |
| Duración    | 8 a 20 segundos, en loop limpio       |
| Códec       | H.264 (MP4)                           |
| Bitrate     | 3 a 5 Mbps                            |
| Audio       | Sin audio (el video se reproduce muteado) |
| Peso final  | Idealmente por debajo de 6 MB         |

El video se recorta con `object-fit: cover`, así que la acción principal debe
estar centrada: en móvil se pierden los bordes laterales.

El texto del hero se apoya sobre la mitad izquierda. Conviene que esa zona del
video no tenga elementos con mucho detalle o contraste.

## Versión WebM (opcional)

Un WebM pesa bastante menos en Chrome y Firefox. Si lo generas, guárdalo como
`hero.webm` y actívalo en `data/hero.ts`:

```ts
webm: "/videos/hero.webm",
```

## Poster

`/public/images/hero-poster.webp` es la imagen que se ve mientras el video
carga. Se entrega una versión de marca por defecto; conviene reemplazarla por
un fotograma real del video (mismo encuadre) una vez que esté listo.

## Si todavía no hay video

El hero funciona igual: muestra un fondo de marca a pantalla completa. Para
desactivar el video de forma explícita, poner `mp4: null` en `data/hero.ts`.
