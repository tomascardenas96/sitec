# Balca Design System

Sistema de diseño del sitio Balca. Centraliza tokens (colores, tipografía, espaciado) y componentes base reutilizables.

**Stack:** Astro + Tailwind 3.4. Todos los tokens viven en `tailwind.config.mjs`. Los componentes base están en `src/components/ui/`.

---

## 1. Tokens

### 1.1 Colores

Toda la paleta se consume vía clases utilitarias de Tailwind (`text-primary-500`, `bg-accent-400`, `border-neutral-200`, etc.).

#### Primary — Teal corporativo

Color principal de marca. Usado en títulos, bordes, íconos, botones outline y links.

| Token         | Hex       | Uso típico                               |
| ------------- | --------- | ---------------------------------------- |
| `primary-50`  | `#EAF3F1` | Fondos sutiles, hover de botones ghost   |
| `primary-100` | `#CCE0DC` | —                                        |
| `primary-200` | `#9AC2BA` | —                                        |
| `primary-300` | `#67A498` | —                                        |
| `primary-400` | `#4D8E81` | —                                        |
| `primary-500` | `#35796F` | **Base.** Títulos, bordes, íconos, links |
| `primary-600` | `#2C6359` | Hover de primary-500                     |
| `primary-700` | `#234D45` | Estados activos                          |
| `primary-800` | `#1A3832` | —                                        |
| `primary-900` | `#11241F` | —                                        |

#### Accent — Naranja

Color secundario de marca. Usado en CTAs principales y para marcar el ítem activo del menú.

| Token        | Hex       | Uso típico                          |
| ------------ | --------- | ----------------------------------- |
| `accent-50`  | `#FDF1E4` | —                                   |
| `accent-100` | `#FBDFC0` | —                                   |
| `accent-200` | `#F8C28A` | —                                   |
| `accent-300` | `#F5AC65` | —                                   |
| `accent-400` | `#F29E4C` | **Base.** Underline del menú activo |
| `accent-500` | `#E48322` | Gradiente CTA (inicio)              |
| `accent-600` | `#C76E1B` | —                                   |
| `accent-700` | `#A76420` | Gradiente CTA (fin)                 |
| `accent-800` | `#7A4A18` | —                                   |
| `accent-900` | `#4E2F10` | —                                   |

#### Neutral — Grises

Escala de grises consolidada (antes había 5+ grises sueltos).

| Token         | Hex       | Uso típico                                                       |
| ------------- | --------- | ---------------------------------------------------------------- |
| `neutral-50`  | `#F7F7F7` | Fondos muy suaves                                                |
| `neutral-100` | `#EDEDED` | Fondos de sección                                                |
| `neutral-200` | `#C7C7C7` | Bordes claros, texto sobre fondos oscuros                        |
| `neutral-300` | `#A6A6A6` | —                                                                |
| `neutral-400` | `#808080` | Texto sobre hover de links del header                            |
| `neutral-500` | `#6F6F6F` | Bordes y texto secundario                                        |
| `neutral-600` | `#464646` | **Body text default**                                            |
| `neutral-700` | `#363636` | Texto del menú móvil, énfasis                                    |
| `neutral-800` | `#262626` | Subtítulos del SectionTitle, texto enfático                      |
| `neutral-900` | `#131C27` | Fondo de testimonios (dark cards), texto bold dentro de párrafos |

#### Semánticos

| Token         | Hex       | Uso                        |
| ------------- | --------- | -------------------------- |
| `success`     | `#4FCE5D` | Botón flotante de WhatsApp |
| `success-600` | `#3FA84A` | Hover de success           |
| `danger`      | `#D14343` | Errores, alertas críticas  |
| `info`        | `#2F80ED` | Mensajes informativos      |

### 1.2 Tipografía

**Familias** (cargadas vía Google Fonts en `src/layouts/Main-layout.astro`):

| Token           | Familia               | Uso                               |
| --------------- | --------------------- | --------------------------------- |
| `font-oswald`   | Oswald, sans-serif    | Títulos, botones, texto destacado |
| `font-openSans` | Open Sans, sans-serif | Body text (default en `<body>`)   |

**Escala** (todos los valores son `[font-size, line-height]`):

| Token       | Tamaño           | Line-height |
| ----------- | ---------------- | ----------- |
| `text-2xs`  | 0.65rem (10.4px) | 0.9rem      |
| `text-xs`   | 0.75rem (12px)   | 1rem        |
| `text-sm`   | 0.85rem (13.6px) | 1.15rem     |
| `text-base` | 1rem (16px)      | 1.35rem     |
| `text-lg`   | 1.1rem (17.6px)  | 1.4rem      |
| `text-xl`   | 1.25rem (20px)   | 1.5rem      |
| `text-2xl`  | 1.6rem (25.6px)  | 1.9rem      |
| `text-3xl`  | 1.8rem (28.8px)  | 2.1rem      |
| `text-4xl`  | 2.2rem (35.2px)  | 2.5rem      |

> Nota: la escala sobrescribe los defaults de Tailwind para ajustarse al diseño existente. Si necesitás un tamaño no contemplado, agregalo al config en lugar de usar `text-[Xrem]`.

### 1.3 Bordes, sombras, gradientes

| Token               | Valor                                                         |
| ------------------- | ------------------------------------------------------------- |
| `rounded-sm`        | `0.2rem`                                                      |
| `rounded` (default) | `0.375rem`                                                    |
| `rounded-lg`        | `0.75rem`                                                     |
| `rounded-full`      | `9999px`                                                      |
| `shadow-card`       | `0 2px 8px rgba(0,0,0,.08)` — tarjetas e íconos en círculo    |
| `shadow-elevated`   | `0 8px 24px rgba(0,0,0,.12)` — botón primario                 |
| `bg-cta-gradient`   | `linear-gradient(to right, #E48322, #A76420)` — CTA principal |

---

## 2. Componentes UI

Todos viven en `src/components/ui/`.

### 2.1 `<Button>`

```ts
interface Props {
  variant?: "primary" | "outline" | "floating" | "ghost"; // default: "outline"
  size?: "sm" | "md" | "lg"; // default: "md"
  href?: string; // si está, renderiza <a>; si no, <button>
  target?: string; // pasalo cuando href apunta afuera
  fullWidth?: boolean; // default: false
  class?: string; // escape hatch para clases extra
}
```

**Variantes:**

| Variant    | Look                                              | Uso                                                  |
| ---------- | ------------------------------------------------- | ---------------------------------------------------- |
| `primary`  | Gradiente naranja, texto blanco, shadow-elevated  | CTA principal (ej. "SOLICITAR PRESUPUESTO" del Hero) |
| `outline`  | Borde primary-500, texto primary-500, shadow-card | Acción secundaria ("VER MÁS", "MÁS PROYECTOS")       |
| `floating` | Círculo verde fijo bottom-right                   | Botón WhatsApp persistente                           |
| `ghost`    | Sin fondo, hover suave en primary-50              | Acciones discretas                                   |

**Ejemplo:**

```astro
---
import Button from "../components/ui/Button.astro";
---

<Button href="/about-us" variant="outline">VER MÁS</Button>

<Button href="https://wa.me/..." target="blank" variant="primary" size="lg">
  SOLICITAR PRESUPUESTO
</Button>

<Button variant="ghost" size="sm">Cancelar</Button>
```

### 2.2 `<Card>`

Tarjeta base composable con slots nombrados.

```ts
interface Props {
  variant?: "bordered" | "elevated" | "minimal"; // default: "minimal"
  align?: "start" | "center"; // default: "start"
  iconBg?: boolean; // fondo primary-500 detrás del media slot
  iconRounded?: boolean; // hace el contenedor del media slot circular
  class?: string;
}
```

**Slots:**

| Slot      | Para                          |
| --------- | ----------------------------- |
| `media`   | Ícono o imagen a la izquierda |
| `header`  | Título                        |
| `body`    | Texto principal               |
| (default) | Contenido adicional debajo    |

**Ejemplo (Value-card):**

```astro
<Card align="start">
  <div slot="media">
    <Success class="w-7 h-7" />
  </div>
  <h3 slot="header" class="font-oswald text-primary-500 font-semibold">
    SEGURIDAD
  </h3>
  <p slot="body" class="text-sm text-neutral-800/60">
    Priorizamos la seguridad en cada proyecto.
  </p>
</Card>
```

**Ejemplo (Info-card con ícono en círculo de color):**

```astro
<Card align="start">
  <div slot="media" class="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-card">
    <img src={icon.src} alt={title} class="w-5 h-5" />
  </div>
  <h3 slot="header" class="font-oswald text-primary-500 text-lg">{title}</h3>
  <p slot="body" class="text-sm">{firstLine}</p>
</Card>
```

> El Card base sirve para layouts horizontales simples (ícono + texto). Para tarjetas con grids responsive complejos (Stage-card, Component-card, Professional-card) se mantiene el markup propio usando los tokens del DS.

### 2.3 `<SectionTitle>`

Encabezado de sección estandarizado.

```ts
interface Props {
  label: string; // título principal
  subtitle?: string; // subtítulo opcional
  variant?: "default" | "inverse"; // default: "default"
  hasIcon?: boolean; // si true, renderiza slot "icon"
  class?: string;
}
```

**Variantes:**

| Variant   | Color                                     | Usar sobre                                                    |
| --------- | ----------------------------------------- | ------------------------------------------------------------- |
| `default` | Título primary-500, subtítulo neutral-800 | Fondos claros                                                 |
| `inverse` | Título y subtítulo blancos                | Fondos oscuros (testimonios, secciones con `bg-cover` oscuro) |

**Ejemplo:**

```astro
---
import SectionTitle from "../components/ui/SectionTitle.astro";
import Diamond from "../assets/icons/diamond.svg";
---

<SectionTitle label="Nuestros Valores" hasIcon={true}>
  <Diamond slot="icon" />
</SectionTitle>

<SectionTitle
  label="Testimonios de Clientes"
  subtitle="Experiencia, innovación y resultados comprobados"
  variant="inverse"
  hasIcon={true}
>
  <Like slot="icon" />
</SectionTitle>
```

---

## 3. Convenciones

### 3.1 Cómo usar el sistema en un componente nuevo

1. **Colores:** usar tokens (`text-primary-500`, `bg-neutral-100`, etc.). Nunca hex hardcodeado en clases.
2. **Tipografía:** usar la escala (`text-xs` a `text-4xl`) y `font-oswald` / `font-openSans`. Nunca `text-[1.3rem]`.
3. **Botones, títulos y tarjetas simples:** usar los componentes de `src/components/ui/`. Crear variantes en el componente si falta una.
4. **Layouts/grids complejos:** se permite markup propio, pero los colores y tipografía deben venir del DS.

### 3.2 Cómo extender el sistema

**Agregar un color nuevo:** editar `tailwind.config.mjs` → `theme.extend.colors`. Mantener la convención de escalas 50–900 para colores con múltiples tonos.

**Agregar una variante de botón:** editar `src/components/ui/Button.astro`, agregar la key al `variantClasses` y al type de `variant`.

**Agregar un tamaño tipográfico:** editar `theme.extend.fontSize` con `[size, line-height]`. Si necesitás un tamaño puntual y único, usá `text-[Xrem]` como excepción, pero documentalo.

### 3.3 Uso en CSS global

`@apply` con tokens custom (ej. `primary-500`) puede fallar en `globals.css` por orden de generación del JIT. Cuando se usen tokens en CSS global, preferir la función `theme()`:

```css
a {
  color: theme("colors.primary.500");
}
```

en lugar de:

```css
a {
  @apply text-primary-500; /* puede fallar en dev server */
}
```

---

## 4. Antipatrones — evitar

| ❌ Mal                                      | ✅ Bien                                                           | Por qué                                                                                      |
| ------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `class={`text-[${color}]`}`                 | Props discretas (`variant="default" \| "inverse"`) + map estático | Tailwind no purga clases construidas en runtime — quedan sin aplicar en producción           |
| `text-[#35796F]`                            | `text-primary-500`                                                | Cambios de marca requieren editar 30+ archivos                                               |
| `text-[1.3rem]` (suelto)                    | `text-xl`                                                         | Inconsistencia en la escala visual                                                           |
| `<button><a href>...</a></button>`          | `<Button href="...">`                                             | HTML inválido — `<a>` no puede ser hijo de `<button>`                                        |
| `import logo from "/public/balca-logo.svg"` | `<img src="/balca-logo.svg">` directo                             | Astro sirve `public/` como estáticos; importarlos hace que Vite los procese innecesariamente |

---

## 5. Pendientes conocidos

- **Logo (`public/balca-logo.svg`):** pesa 469KB porque tiene un PNG embebido en base64 con entidades XML. SVGO no puede parsearlo. Pedir al diseñador un export vectorial limpio (target: <20KB) o reemplazar por PNG/WebP optimizado.
- **Contraste WCAG:** `neutral-500` (#6F6F6F) sobre blanco da 4.51:1 (AA al límite). Si algún subtítulo se ve débil, subir a `neutral-600`.
