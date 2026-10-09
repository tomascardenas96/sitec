import { phone } from "./whatsapp.js";
export const phones = [
  { label: "249 424-7544", href: "tel:+5492494247544" },
  { label: "249 457-6143", href: "tel:+5492494576143" },
];
export const channels = [
  { kind: "whatsapp", label: "WhatsApp", value: phones[0].label, href: `https://wa.me/${phone}` },
  { kind: "phone", label: "Teléfono principal", value: phones[0].label, href: phones[0].href },
  { kind: "phone", label: "Teléfono adicional", value: phones[1].label, href: phones[1].href },
  { kind: "email", label: "Correo electrónico", value: "balcaelectromecanica@gmail.com", href: "mailto:balcaelectromecanica@gmail.com" },
  { kind: "address", label: "Taller", value: "Figueroa 2367, Tandil", href: "https://www.google.com/maps/search/?api=1&query=Figueroa+2367+Tandil" },
];
export const hours = [{ label: "Lunes a viernes", value: "7:00 a 17:00 hs." }];
// Publish only confirmed company profiles, with name, href and SVG path.
export const socialNetworks = [];
