import Task from "../assets/icons/task.png";
import Box from "../assets/icons/new-product.png";
import Factory from "../assets/icons/electric-factory.png";
import Support from "../assets/icons/technical-support.png";

import Analysis from "../assets/icons/analysis.png";
import Design from "../assets/icons/design.png";
import Follow from "../assets/icons/follow.png";
import Technical from "../assets/icons/technical.png";
import Testing from "../assets/icons/testing.png";

// Para pagina "/"
export const shortFlow = [
  {
    icon: Task,
    title: "Estudio y planificación de instalaciones eléctricas industriales",
  },
  {
    icon: Box,
    title: "Desarrollo de tableros eléctricos y sistemas de distribución",
  },
  {
    icon: Factory,
    title: "Montajes electromecánicos a medida",
  },
  {
    icon: Support,
    title: "Asesoramiento técnico para optimizar consumos",
  },
];

// Para pagina "/design"
export const longFlow = [
  {
    title: "Análisis de necesidades",
    subtitle: "Revisamos los requerimientos del cliente y del proyecto",
    icon: Analysis.src,
  },
  {
    title: "Diseño conceptual",
    subtitle: "Elaboramos planos y diagramas preliminares",
    icon: Design.src,
  },
  {
    title: "Entrega y seguimiento",
    subtitle: "Entregamos documentación y brindamos soporte post-venta",
    icon: Follow.src,
  },
  {
    title: "Desarrollo técnico",
    subtitle: "Definimos especificaciones, componentes y materiales",
    icon: Technical.src,
  },
  {
    title: "Validación y pruebas",
    subtitle: "Aseguramos cumplimiento de normas y funcionalidad",
    icon: Testing.src,
  },
];
