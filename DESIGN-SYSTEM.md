# BALCA Design System

Sistema de diseño del sitio BALCA. Centraliza tokens (colores, tipografía, espaciado) y componentes base reutilizables.

**Stack:** Astro + Tailwind 3.4. Todos los tokens viven en `tailwind.config.mjs`. Los componentes base están en `src/components/ui/`. Las pocas clases que no se pueden expresar como utilidades viven en `@layer components` de `src/styles/globals.css`.

## 0. La dirección: "Tablero"

El lenguaje visual sale del objeto que fabrica la empresa, no de una estética genérica de "industrial":

- **Cantos vivos.** Las superficies grandes no llevan radio. El radio queda para controles chicos.
- **Reglas, no tarjetas.** La estructura de página es una grilla de hairlines (como una planilla técnica o un plano de tablero), no una fila de tarjetas con ícono.
- **Acero + señalización.** Superficies `steel-900/950` para los bloques oscuros; `accent-500` (naranja) solo donde hay que señalizar: CTA, marcador de sección, estado activo.
- **Chapa grabada.** Los rótulos chicos van en Oswald caja alta con tracking ancho (clase `.plate`), como el grabado de una chapa de identificación.
- **Una sola elevación.** O borde o sombra, nunca los dos en la misma pieza.

---

## 1. Tokens

### 1.1 Colores

#### Primary — Teal corporativo

Color de marca heredado del logo. Se usa en links de acción dentro de contenido y acentos secundarios.

| Token         | Hex       | Uso típico                             |
| ------------- | --------- | -------------------------------------- |
| `primary-500` | `#35796F` | **Base.** Links de contenido, "ver ficha" |
| `primary-600` | `#2C6359` | Hover de primary-500                   |
| `primary-700` | `#234D45` | Estados activos                        |

(La escala completa 50–900 sigue definida en el config.)

#### Accent — Naranja de señalización

Color de acción. **Nunca se usa como color de texto chico sobre blanco** (no llega a 4.5:1): para eso está `accent-700`.

| Token        | Hex       | Uso típico                                             |
| ------------ | --------- | ------------------------------------------------------ |
| `accent-400` | `#F29E4C` | Hover del CTA; rótulos `.plate` sobre acero            |
| `accent-500` | `#E48322` | **Base.** Fondo del CTA, marcador de sección, hazard   |
| `accent-600` | `#C76E1B` | Estado `:active` del CTA                               |
| `accent-700` | `#A76420` | Naranja como **texto** sobre blanco (4.69:1)           |

> Sobre `accent-500` el texto va en `steel-950`, no en blanco. Blanco sobre naranja da 2.8:1 y no pasa AA.

#### Steel — Superficies oscuras

Escala derivada de los dos oscuros que ya tenía el sitio (`#131C27` de las tarjetas, `#344147` del footer).

| Token       | Hex       | Uso típico                                           |
| ----------- | --------- | ---------------------------------------------------- |
| `steel-50`  | `#EEF1F3` | Fondo de sección claro (testimonios)                 |
| `steel-200` | `#B3BFC7` | Bordes claros; texto secundario sobre acero (10.3:1) |
| `steel-300` | `#8A9AA6` | Rótulos `.plate` sobre acero (6.7:1)                 |
| `steel-400` | `#5F7280` | Texto secundario **solo sobre claro** (4.97:1)       |
| `steel-500` | `#44565F` | Texto de párrafo secundario sobre blanco (7.67:1)    |
| `steel-700` | `#26333D` | **Body text default** (12.9:1)                       |
| `steel-900` | `#131C27` | Superficie oscura de sección                         |
| `steel-950` | `#0A0F16` | Hero, footer, texto sobre naranja                    |

> `steel-400` no pasa AA sobre `steel-900/950` (3.87:1). Sobre acero usar `steel-300` o más claro.

`neutral-*` queda para las páginas internas que todavía no se rediseñaron. En código nuevo, usar `steel-*`.

#### Semánticos

| Token         | Hex       | Uso                        |
| ------------- | --------- | -------------------------- |
| `success`     | `#4FCE5D` | Botón flotante de WhatsApp |
| `success-600` | `#3FA84A` | Hover de success           |
| `danger`      | `#D14343` | Errores, alertas críticas  |
| `info`        | `#2F80ED` | Mensajes informativos      |

### 1.2 Tipografía

| Token           | Familia               | Uso                                        |
| --------------- | --------------------- | ------------------------------------------ |
| `font-oswald`   | Oswald, sans-serif    | Display, títulos, botones, rótulos `.plate` |
| `font-openSans` | Open Sans, sans-serif | Body text (default en `<body>`)            |

**Escala.** `2xs` a `4xl` son la escala heredada (texto). `5xl` a `8xl` son la escala **display**, pensada para Oswald condensada a tamaño de cartel:

| Token       | Tamaño            | Line-height |
| ----------- | ----------------- | ----------- |
| `text-2xs`  | 0.65rem (10.4px)  | 0.9rem      |
| `text-xs`   | 0.75rem (12px)    | 1rem        |
| `text-sm`   | 0.85rem (13.6px)  | 1.15rem     |
| `text-base` | 1rem (16px)       | 1.35rem     |
| `text-lg`   | 1.1rem (17.6px)   | 1.4rem      |
| `text-xl`   | 1.25rem (20px)    | 1.5rem      |
| `text-2xl`  | 1.6rem (25.6px)   | 1.9rem      |
| `text-3xl`  | 1.8rem (28.8px)   | 2.1rem      |
| `text-4xl`  | 2.2rem (35.2px)   | 2.5rem      |
| `text-5xl`  | 2.75rem (44px)    | 1.04        |
| `text-6xl`  | 3.5rem (56px)     | 1.0         |
| `text-7xl`  | 4.5rem (72px)     | 0.96        |
| `text-8xl`  | 5.75rem (92px)    | 0.92        |

**Tracking:**

| Token              | Valor     | Uso                                    |
| ------------------ | --------- | -------------------------------------- |
| `tracking-display` | `-0.02em` | Todos los títulos en Oswald            |
| `tracking-plate`   | `0.22em`  | Rótulos grabados (lo aplica `.plate`)  |

**Medida de línea:** `max-w-measure` (68ch) para párrafos. `text-base`/`text-lg` + `leading-relaxed` en body copy.

### 1.3 Layout

| Token          | Valor  | Uso                                      |
| -------------- | ------ | ---------------------------------------- |
| `max-w-shell`  | `88rem` | Ancho de la grilla (lo aplica `Container`) |
| `max-w-measure`| `68ch`  | Ancho de párrafo                          |

### 1.4 Sombras, motion

| Token                    | Valor                                  | Uso                              |
| ------------------------ | -------------------------------------- | -------------------------------- |
| `shadow-card`            | `0 2px 8px rgba(0,0,0,.08)`            | Legacy (páginas internas)        |
| `shadow-elevated`        | `0 8px 24px rgba(0,0,0,.12)`           | Header en scroll, botón flotante |
| `shadow-panel`           | `8px 8px 0 0 rgba(19,28,39,0.10)`      | Desplazamiento duro, sin halo    |
| `ease-out`               | `cubic-bezier(0.22, 1, 0.36, 1)`       | Curva única del sitio            |
| `animate-plate-in`       | fade + rise 700ms                      | Entrada del hero y del title-page |
| `animate-rule-in`        | scaleX 900ms                           | Trazado de reglas                |

### 1.5 Clases de `globals.css`

| Clase     | Qué hace                                                                 |
| --------- | ------------------------------------------------------------------------ |
| `.plate`  | Oswald + caja alta + `tracking-plate`. Para rótulos chicos.               |
| `.hazard` | Franja de señalización diagonal naranja/acero. **Motivo de marca: solo en el borde superior del footer.** |
| `.field`  | Campo de formulario: borde `steel-200`, sin radio, oscurece a `steel-900` en foco. Usado por el formulario de `/contact`. |

---

## 2. Componentes UI

### 2.1 `<Container>`

Envoltorio de grilla. Todo bloque de página va adentro de uno.

```ts
interface Props {
  as?: "div" | "section" | "header" | "footer" | "nav"; // default: "div"
  width?: "shell" | "measure"; // default: "shell"
  class?: string;
}
```

### 2.2 `<Button>`

```ts
interface Props {
  variant?: "primary" | "solidDark" | "outline" | "outlineLight" | "ghost" | "floating";
  size?: "sm" | "md" | "lg"; // default: "md"
  href?: string;   // si está, renderiza <a>; si no, <button>
  target?: string; // con "_blank" agrega rel="noopener noreferrer" solo
  label?: string;  // aria-label cuando el contenido es un ícono
  fullWidth?: boolean;
  class?: string;
}
```

| Variant        | Look                                       | Usar sobre         |
| -------------- | ------------------------------------------ | ------------------ |
| `primary`      | Bloque naranja, texto `steel-950`          | Claro y acero      |
| `solidDark`    | Bloque `steel-950`, texto blanco           | Naranja y claro    |
| `outline`      | Borde 2px `steel-900`                      | Claro y naranja    |
| `outlineLight` | Borde 2px `white/60`                       | Acero y foto       |
| `ghost`        | Texto sin caja                             | Claro              |
| `floating`     | Cuadrado verde (WhatsApp)                  | Fijo               |

### 2.3 `<SectionTitle>`

```ts
interface Props {
  label: string;
  kicker?: string;    // rótulo .plate arriba del título
  subtitle?: string;
  variant?: "default" | "inverse"; // default: "default"
  align?: "center" | "start";      // default: "center"
  hasIcon?: boolean;  // legacy: slot "icon" (páginas internas)
  class?: string;
}
```

Renderiza el marcador de sección (barra naranja de 3px + kicker), el título display y el subtítulo. En home se usa `align="start"`.

### 2.4 `<Process-row>` (`common/`)

Fila numerada para secuencias sobre fondo `steel-900`: numeral grande + título/descripción + `deliverable` opcional (tercera columna en desktop, se oculta si no se pasa). La usan `home/Design-section.astro` (`shortFlow`, 4 pasos con entregable) y `design/Stages.astro` (`longFlow`, 5 etapas). Va dentro de un `<ol role="list">`.

### 2.5 `<Register-row>` (`projects/`)

Fila de planilla para el catálogo completo de obras: `N.º` + título + descripción + flecha, como una fila de `Project-card` pero en formato de lista, no de tarjeta. La usa `projects/Works-register.astro`.

---

## 3. Convenciones

1. **Colores:** siempre tokens. Nunca hex hardcodeado ni `text-[#333]`.
2. **Tipografía:** siempre la escala. Para display usar `5xl`–`8xl` + `tracking-display`.
3. **Contraste:** verificar contra la tabla de arriba antes de elegir un gris sobre acero.
4. **Radio:** las superficies grandes van sin radio. No agregar `rounded-*` a secciones ni tarjetas.
5. **Elevación:** borde **o** sombra, nunca los dos.
6. **`@apply` con tokens custom en `globals.css` puede fallar por orden del JIT.** Usar la función `theme()`:

```css
a { color: theme("colors.primary.500"); }
```

---

## 4. Antipatrones — evitar

| ❌ Mal                                       | ✅ Bien                                    | Por qué                                                                     |
| -------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| `class={`text-[${color}]`}`                  | Props discretas + map estático              | Tailwind no purga clases construidas en runtime                             |
| `text-[#35796F]`                             | `text-primary-500`                          | Cambios de marca requieren editar 30+ archivos                              |
| Texto blanco sobre `accent-500`              | `text-steel-950` sobre `accent-500`         | 2.8:1 no pasa AA                                                            |
| `text-steel-400` sobre `steel-900`           | `text-steel-300`                            | 3.87:1 no pasa AA                                                           |
| Fila de tarjetas ícono + título + texto      | Grilla de reglas                            | Es la estructura genérica que este rediseño reemplazó                       |
| Fondo de grilla decorativo                   | Superficie plana                            | Sin un plano real debajo es papel pintado                                   |
| `<button><a href>...</a></button>`           | `<Button href="...">`                       | HTML inválido                                                               |
| `import logo from "/public/..."`             | `<img src="/balca-logo.svg">`               | Astro sirve `public/` como estáticos                                        |
| `<img src={img.src}>` para fotos grandes     | `<Image>` de `astro:assets`                 | Sin optimizar, el hero pesaba 2.4MB (ahora 96KB)                            |

---

## 5. Pendientes conocidos

- **Logo (`public/balca-logo.svg`):** 469KB, tiene un PNG embebido en base64. Además es oscuro sobre claro, por eso en el footer va sobre una chapa blanca. Pedir un export vectorial limpio (target: <20KB) y, si se puede, una versión monocromática blanca para superficies de acero.
- **Foto del hero:** es stock genérico. Las fotos de obra (`src/assets/images/home/proyects/`) son reales y se ven mucho mejor; conviene reemplazarla por una foto propia del taller en formato apaisado.
- **Testimonios:** el copy de `src/data/testimonials.js` es **propuesto**, no real. No publicar sin citas y autorización de cada cliente. Si el array queda vacío, la sección no se renderiza.
- **Catálogo de proyectos:** las 24 entradas de `projects.js` reciclan 3 fotos. Home y `/projects` ("Obras destacadas") muestran solo esas 3; el resto del catálogo se presenta como planilla de texto (`projects/Works-register.astro`) en vez de grilla de tarjetas, para no repetir las mismas 3 fotos 8 veces cada una.
- **`email.falso@sitec.com`, `/sitec-instagram` y los teléfonos** en `src/data/contact.js`: placeholders heredados del sitio anterior (marca "SITEC"), marcados con `TODO` en el archivo. Reemplazar por los datos reales de BALCA antes de publicar `/contact`.
- **URLs de redes sociales** en `Social-links.astro`: apuntan a los dominios genéricos.
- **`longFlow.deliverable`** en `design-flow.js` (usado por `/design`): copy compuesto a partir de material existente, mismo criterio que `shortFlow.deliverable` — conviene que lo valide alguien de la empresa antes de publicar.
- **Páginas internas** (`design`, `contact`, `projects`, `404`): ya rediseñadas en el lenguaje "Tablero", junto con `/about-us` y `/`. No queda ninguna página con el sistema viejo.
- **`professionals.js` y `src/assets/images/professionals/*.png`:** huérfanos desde el rediseño de `/about-us` — la sección de equipo con bios lorem ipsum se reemplazó por "El taller" (capacidades reales, sin caras inventadas). Quedan sin borrar por si más adelante se arma una sección de equipo con datos reales.
- **Copy de "Quiénes somos" en `Company-sheet.astro`:** compuesto a partir de contenido que ya existía en el sitio (Hero, About-section, faqs, design-flow). No inventa alcance nuevo, pero conviene que lo valide alguien de la empresa antes de publicar — mismo criterio que el copy del Hero.
- **`/projects/1`–`/projects/4`** ya no existen: la paginación se eliminó junto con el bug que generaba una página 4 vacía. El catálogo completo vive en `/projects`, sin paginar.
