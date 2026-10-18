# ASTCORP — Website corporativo

Sitio corporativo y comercial de ASTCORP: empresa de impresión, comunicación
visual, merchandising y soluciones corporativas.

No es una tienda online. El recorrido es:
**conocer ASTCORP → entender los servicios → explorar el catálogo → cotizar.**

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion ·
lucide-react · `next/image` · `next/font`

---

## Puesta en marcha

```bash
npm install
```

```bash
npm run dev
```

`http://localhost:3000`

| Comando             | Qué hace                           |
| ------------------- | ---------------------------------- |
| `npm run dev`       | Servidor de desarrollo             |
| `npm run build`     | Build de producción                |
| `npm run start`     | Sirve el build de producción       |
| `npm run typecheck` | Verificación de tipos sin compilar |

---

## Arquitectura de rutas

```
/                              Home (8 secciones)
/servicios                     Las seis líneas de negocio
/servicios/offset              Servicio + catálogo Offset
/servicios/visual              Servicio + catálogo Visual
/servicios/merch               Servicio + catálogo Merch
/servicios/box-corporativos    Servicio + catálogo Box Corporativos
/nosotros                      Información corporativa
/contacto                      Formulario y medios de contacto
```

**Los productos no tienen ruta propia.** Viven dentro del catálogo de su
servicio; la ficha completa se abre en un diálogo sobre el mismo catálogo, sin
perder el filtro ni la posición de scroll. El botón de cotizar lleva a
`/contacto` con el servicio y el producto precargados:

```
/contacto?servicio=offset&producto=Bolsas%20de%20papel%20personalizadas
```

Así se cotiza cualquier producto sin generar cientos de URLs.

---

## Estructura del proyecto

```
app/
├── page.tsx                       Home
├── servicios/
│   ├── page.tsx                   Índice de servicios
│   └── [service]/page.tsx         Servicio + catálogo
├── nosotros/page.tsx
├── contacto/page.tsx
├── api/contacto/route.ts          Recepción del formulario
└── sitemap.ts · robots.ts · not-found.tsx · icon.svg

components/
├── layout/    Navbar · MobileMenu · Footer · PageHero
├── home/      Hero · Differentials · ClientsCarousel · Services · Trust ·
│              WhyAstcorp · FeaturedProducts · Process · FinalCTA
│              (+ Timeline y MissionVision, reutilizados en /nosotros)
├── services/  ServiceHero · ServiceCard · ProductCard · ProductCatalog ·
│              ProductDialog · ServiceCTA
├── contact/   ContactForm
└── ui/        Container · Section · SectionHeading · Button · Reveal ·
               CountUp · Media · Marquee · Breadcrumbs · Logo · Icons · CTABand

data/
├── services.ts       Las 6 líneas de negocio, sus beneficios y subcategorías
├── products.ts       Catálogo (47 productos)
├── company.ts        Datos oficiales, misión, visión, valores, historia
├── clients.ts        Logos del carrusel de marcas
├── differentials.ts  Sección 02 del home
├── why.ts            Sección 05 del home
├── process.ts        Sección 07 del home
├── stats.ts          Métricas de la sección de confianza
├── timeline.ts       Historia de la empresa
├── navigation.ts     Menús (derivados de services.ts)
├── hero.ts           Assets del video de portada
└── types.ts          Tipos compartidos
```

`data/services.ts` es el eje: agregar o editar un servicio actualiza al mismo
tiempo la ruta, el menú, las cards del home, el footer y el sitemap.

---

## Home — 8 secciones

| #   | Sección               | Componente         |
| --- | --------------------- | ------------------ |
| 01  | Hero con video        | `Hero`             |
| 02  | Diferenciales         | `Differentials`    |
| —   | Carrusel de clientes  | `ClientsCarousel`  |
| 03  | Servicios             | `Services`         |
| 04  | Confianza             | `Trust`            |
| 05  | ¿Por qué ASTCORP?     | `WhyAstcorp`       |
| 06  | Productos destacados  | `FeaturedProducts` |
| 07  | Proceso               | `Process`          |
| 08  | CTA final             | `FinalCTA`         |

### Carrusel de clientes

Cinta continua en CSS puro (sin JavaScript), que se pausa al pasar el cursor y
se vuelve desplazable a mano si el usuario tiene activado el movimiento
reducido. Se adapta a cualquier cantidad de logos y desaparece si
`data/clients.ts` queda vacío.

---

## Sistema de diseño

Tokens en `app/globals.css`, dentro del bloque `@theme` (Tailwind 4,
configuración en CSS).

| Rol             | Token                                                              |
| --------------- | ------------------------------------------------------------------ |
| Acento          | `brand-lime` `#AEF84F` + `-strong` `-soft` `-pale`                  |
| Base oscura     | `night` `#101117` · `night-2` `#1B1D26` · `night-3` `#2B2E3B`       |
| Apoyo           | `brand-blue` `#5151ED` + `-soft` `-pale` `-deep` `-ink`             |
| Apoyo CMYK      | `cyan` `#00B4E4` · `magenta` `#EC008C`                              |
| Superficies     | `surface` `#FFF` · `surface-2` `#EEF1FB` · `surface-3` `#E2E7F7`    |
| Títulos         | `heading` `#101117`                                                 |
| Texto           | `ink` `#1C1F3B` · `ink-2` `#4B5175` · `ink-3` `#616890`             |
| Bordes          | `line` `#DBDFF0` · `line-strong` `#BFC6E2`                          |
| Sombras sólidas | `shadow-hard` · `shadow-hard-sm` · `shadow-hard-lime` · `-blue`     |

### Regla crítica del lime

`#AEF84F` contrasta **1.3:1 contra blanco**, así que **nunca se usa como color
de texto sobre fondo claro**. Sobre claro va siempre como bloque, subrayado o
relleno, con texto oscuro encima. Como texto solo aparece sobre `night`
(14.7:1). Está verificado: no hay una sola instancia de texto lime sobre fondo
claro en el sitio.

### Utilidades propias

`halftone` · `halftone-dark` · `halftone-lime` (tramas de semitono según el
fondo) · `grid-lines` · `hatch` · `text-stroke-ink` / `-lime` / `-white`
(tipografía calada) · `eyebrow` · `stat-figure` · `mask-fade-x`.

Piezas gráficas reutilizables: `CmykRule` y `CropMarks`
(`components/ui/PrintMarks.tsx`), `OffsetFrame` (`components/ui/Media.tsx`) y
`Highlight` / `AccentTitle` para los resaltados de titular.

### Contrastes verificados (WCAG AA)

| Combinación                 | Ratio    |
| --------------------------- | -------- |
| `heading` sobre blanco      | 18.8 : 1 |
| `night` sobre `brand-lime`  | 14.7 : 1 |
| `brand-lime` sobre `night`  | 14.7 : 1 |
| `ink-2` sobre `surface-2`   | 6.8 : 1  |
| `ink-3` sobre `surface-2`   | 4.8 : 1  |
| `night` sobre `cyan`        | 7.8 : 1  |
| blanco sobre `magenta`      | 4.3 : 1  |

Tipografía: **Archivo** variable (400–900) para títulos, **Inter** para texto,
**Instrument Serif** para los bloques editoriales (misión, visión). El
contraste de pesos (400 frente a 900) es parte de la identidad.

Movimiento: vocabulario en `lib/motion.ts`, envoltorios en
`components/ui/Reveal.tsx`. `prefers-reduced-motion` se respeta en dos capas
(componentes con `useReducedMotion` y anulación global en CSS).

Imágenes: `components/ui/Media.tsx` es el único punto de entrada. Si no hay
imagen, renderiza un placeholder de marca en lugar de una imagen rota.

---

## Cómo agregar contenido

### Un producto

```ts
// data/products.ts
{
  slug: "cinta-personalizada",     // identificador interno, no genera ruta
  name: "Cinta personalizada",
  service: "merch",                // debe existir en services.ts
  subcategory: "oficina",          // debe existir en ese servicio
  summary: "Resumen de una línea para la tarjeta.",
  description: "Texto de la ficha.",
  images: ["/images/products/cinta.webp"],
  features: ["Anchos disponibles", "Impresión a full color"],
  tags: ["oficina", "packaging"],
  featured: false,                 // true lo sube al home
}
```

Aparece en el catálogo de Merch, dentro del filtro "Oficina", con su contador
actualizado y su ficha cotizable. Sin tocar un componente.

### Un servicio

Agregar el objeto a `data/services.ts`. Genera la ruta, la página completa, la
entrada del menú, la card del home y del índice, el enlace del footer y el
sitemap.

---

## Tareas pendientes para el cliente

Todo lo pendiente está marcado con comentarios en `/data`.

### 1. Video del hero — hecho

`public/videos/hero.mp4` ya está en el proyecto y se reproduce en el hero.

**Observación:** el archivo actual es de **640 × 360 px**. A pantalla completa
se escala unas 3 veces, así que se verá borroso en pantallas grandes. Conviene
reemplazarlo por una versión 1920 × 1080. Basta sobrescribir el archivo con el
mismo nombre. Especificaciones en [`public/videos/README.md`](public/videos/README.md).

El poster (`public/images/hero-poster.webp`) es una imagen de marca generada;
conviene reemplazarla por un fotograma real del video.

### 2. Imágenes de producto y servicio

Solo hay una imagen real (`bolsa.jpg`, asignada a *Bolsas de papel
personalizadas*). El resto del catálogo muestra placeholders de marca.
Instrucciones y formatos en [`public/images/README.md`](public/images/README.md).

Las cuatro cards de servicio también aceptan portada: campo `cover` en
`data/services.ts`.

### 3. Logos de clientes — `data/clients.ts`

El carrusel del home muestra 10 celdas placeholder con el texto "Cliente 01…10".
Para publicar marcas reales hacen falta **dos cosas**: la autorización escrita
de cada empresa y el archivo del logo en `public/images/clients/`
(SVG preferentemente; si es PNG, 400 px de ancho y fondo transparente).

```ts
{ name: "Nombre de la marca", logo: "/images/clients/marca.svg" }
```

Los logos se muestran en escala de grises y recuperan el color al pasar el
cursor. No se publica ninguna marca de terceros sin autorización.

### 4. Métricas — `data/stats.ts`

Los años de experiencia se calculan solos desde la fecha de fundación. Las
demás métricas están en `confirmed: false` y **no se renderizan**: la sección de
confianza se apoya mientras tanto en hechos verificables (fundación, sede,
líneas de servicio, tamaño del catálogo). Para publicar una cifra real:

```ts
{ value: 320, suffix: "+", label: "Clientes atendidos", confirmed: true }
```

### 5. Historia — `data/timeline.ts`

Solo la fundación (2019) y "Actualidad" están confirmadas. Las tres etapas
intermedias muestran "202X" con la nota *Año por confirmar*.

### 6. Contacto y redes — `data/company.ts`

`email`, `whatsapp` y las redes sociales están en `null`. Los componentes
ocultan automáticamente lo que no esté definido; al completarlos aparecen en el
footer, en contacto y en el CTA final del home.

```ts
whatsapp: { number: "51982926333", url: "https://wa.me/51982926333" },
```

Mientras WhatsApp esté vacío, el CTA final muestra el teléfono en su lugar.

### 7. Endpoint del formulario — `app/api/contacto/route.ts`

**Importante antes de producción.** Hoy valida la solicitud y la registra en el
log del servidor, pero **no la envía a nadie**. Hay que conectarlo a un
transporte real: email (Resend, SendGrid, SMTP), CRM o WhatsApp Business API.
El adjunto llega en el campo `file` pero no se persiste.

### 8. Dominio — `data/company.ts`

`url` está en `https://astcorp.pe`. Alimenta metadata, canonical, Open Graph,
sitemap y `robots.txt`.

---

## SEO

Metadata dinámica por servicio, Open Graph y Twitter Card en todas las rutas,
canonical por página, `sitemap.xml` y `robots.txt` generados desde `/data`,
datos estructurados `Organization`, URLs en español, headings semánticos y
`alt` en todas las imágenes.

## Accesibilidad

Enlace "Saltar al contenido", un solo `h1` por página, foco visible con
`:focus-visible`, `aria-pressed` en filtros, `aria-live` en contadores de
resultados, `aria-expanded` en menús, menú móvil y ficha de producto como
diálogos con bloqueo de scroll y cierre con Escape, y navegación por teclado.
