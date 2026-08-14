// Para pagina "/". El orden es el del trabajo real, del estudio a la puesta
// en marcha: por eso los pasos van numerados y en filas, no en columnas.
//
// ⚠️ `deliverable` es copy COMPUESTO a partir de material que ya estaba en el
// sitio (faqs.js, longFlow de abajo y las descripciones de projects.js).
// No inventa alcance nuevo, pero conviene que lo valide alguien de la empresa.
export const shortFlow = [
  {
    title: "Ingeniería y planificación",
    description:
      "Estudio y planificación de instalaciones eléctricas industriales.",
    deliverable: "Planos, diagramas y especificaciones técnicas",
  },
  {
    title: "Fabricación de tableros",
    description:
      "Desarrollo de tableros eléctricos y sistemas de distribución.",
    deliverable: "Tablero armado, cableado e identificado",
  },
  {
    title: "Montajes electromecánicos",
    description: "Montajes electromecánicos a medida, ejecutados en obra.",
    deliverable: "Montaje en obra y puesta en marcha",
  },
  {
    title: "Asesoramiento técnico",
    description:
      "Acompañamiento posterior y asesoramiento para optimizar consumos.",
    deliverable: "Documentación, mantenimiento y post-venta",
  },
];

// Para página "/design". Mismo criterio de `deliverable` que shortFlow: copy
// compuesto a partir de faqs.js y Company-sheet.astro, no alcance nuevo.
// El orden es el del trabajo real: antes "Entrega y seguimiento" estaba mal
// ubicado entre "Diseño conceptual" y "Desarrollo técnico".
export const longFlow = [
  {
    title: "Análisis de necesidades",
    subtitle: "Revisamos los requerimientos del cliente y del proyecto",
    deliverable: "Relevamiento de necesidades y alcance del proyecto",
  },
  {
    title: "Diseño conceptual",
    subtitle: "Elaboramos planos y diagramas preliminares",
    deliverable: "Planos y diagramas preliminares",
  },
  {
    title: "Desarrollo técnico",
    subtitle: "Definimos especificaciones, componentes y materiales",
    deliverable: "Especificaciones técnicas y lista de materiales",
  },
  {
    title: "Validación y pruebas",
    subtitle: "Aseguramos cumplimiento de normas y funcionalidad",
    deliverable: "Ensayos y verificación bajo normas IRAM e IEC 61439",
  },
  {
    title: "Entrega y seguimiento",
    subtitle: "Entregamos documentación y brindamos soporte post-venta",
    deliverable: "Documentación de entrega y soporte post-venta",
  },
];
