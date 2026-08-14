import { phone } from "./whatsapp.js";

// TODO: email.falso@sitec.com y /sitec-instagram son placeholders heredados
// del sitio anterior (marca "SITEC"). Reemplazar por los datos reales de
// BALCA antes de publicar. Los teléfonos también son los que ya mostraba el
// sitio (Top-bar.astro, Footer.astro) — confirmar si son los reales.
export const channels = [
  {
    kind: "whatsapp",
    label: "WhatsApp",
    value: "+54 9 2281 37-8525",
    href: `https://wa.me/${phone}`,
  },
  {
    kind: "phone",
    label: "Teléfono",
    value: "(2494) - 123456",
    href: "tel:+542494123456",
  },
  {
    kind: "phone",
    label: "Teléfono",
    value: "(2494) - 789987",
    href: "tel:+542494789987",
  },
  {
    kind: "email",
    label: "E-mail",
    value: "email.falso@sitec.com",
    href: "mailto:email.falso@sitec.com",
  },
  {
    kind: "instagram",
    label: "Instagram",
    value: "/sitec-instagram",
    href: "https://instagram.com/sitec-instagram",
  },
  {
    kind: "address",
    label: "Taller",
    value: "Figueroa 2367, Tandil",
    href: "https://www.google.com/maps/search/?api=1&query=Figueroa+2367+Tandil",
  },
];

export const hours = [
  { label: "Lunes a viernes", value: "8:00 a 17:00 hs." },
  { label: "Sábados", value: "8:00 a 13:00 hs." },
];
