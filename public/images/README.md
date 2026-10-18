# Imágenes del sitio

Estructura de carpetas esperada:

```
images/
├── hero-poster.webp     Poster del video del hero
├── clients/             Logotipos de clientes (SVG o PNG con fondo transparente)
├── products/<slug>/     Fotos de producto
├── projects/<slug>/     Fotos de proyectos
└── sectors/             Portadas de las páginas de sector
```

## Cómo se conectan con el sitio

Ningún componente referencia imágenes directamente: todas las rutas viven en
`/data`. Para publicar una imagen, se copia el archivo aquí y se apunta la ruta
en el registro correspondiente.

**Producto** — en `data/products.ts`:

```ts
images: [
  "/images/products/cajas-plegadizas/01.webp",
  "/images/products/cajas-plegadizas/02.webp",
],
```

La primera imagen del array es la que se usa en las tarjetas del catálogo.

**Proyecto** — en `data/projects.ts`, mismo formato. La primera es la portada y
el resto arma la galería del detalle.

**Sector** — en `data/sectors.ts`: `cover: "/images/sectors/retail.webp"`.

**Cliente** — en `data/clients.ts`: `logo: "/images/clients/nombre.svg"`.

Mientras `images` esté vacío o `cover` sea `null`, el sitio muestra un
placeholder de marca en lugar de una imagen rota.

## Formato recomendado

- **Formato:** WebP (mejor relación peso/calidad). También sirve JPG o PNG.
- **Producto y proyecto:** 1600 px de ancho como máximo, relación 4:3 o 16:9.
- **Logotipos de clientes:** SVG preferentemente; si es PNG, 400 px de ancho con
  fondo transparente. Se muestran en escala de grises y recuperan color al pasar
  el cursor.
- **Peso:** por debajo de 300 KB por imagen.

## Logotipos de terceros

Solo se publican logotipos de clientes con autorización escrita de la empresa
titular de la marca.
