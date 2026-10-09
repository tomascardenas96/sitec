import dairyInterior from "../assets/images/projects/dairy-distribution-control-panel/interior.webp";
import dairyFront from "../assets/images/projects/dairy-distribution-control-panel/front.webp";
import irrigation from "../assets/images/projects/dairy-irrigation-supply-panel/interior.webp";
import generator from "../assets/images/projects/generator-grid-switching-panel/installation-overview.webp";
import pumpInterior from "../assets/images/projects/submersible-pump-control-panel/interior.webp";
import pumpFront from "../assets/images/projects/submersible-pump-control-panel/front.webp";
import swineAssembly from "../assets/images/projects/swine-finishing-control-panels/assembly-detail.webp";
import swineInterior from "../assets/images/projects/swine-finishing-control-panels/installed-interior.webp";
import swineInstallation from "../assets/images/projects/swine-finishing-control-panels/installation-overview.webp";
import swineOverview from "../assets/images/projects/swine-facility/interior-overview.webp";
import swineAisle from "../assets/images/projects/swine-facility/central-aisle.webp";

// Titles and descriptions use only the supplied folder labels, not inferred specifications.
// The swine selection groups sector photographs without claiming a single client or site.
export const allProjects = [
  {
    id: 1, image: dairyInterior, title: "Distribución y control — La Chavense",
    subtitle: "Tablero para tambo",
    description: "Tablero de distribución y control para el tambo La Chavense. Las fotografías muestran el interior del gabinete y su frente instalado.",
    gallery: [{ image: dairyInterior, caption: "Interior del tablero de distribución y control" }, { image: dairyFront, caption: "Frente del tablero instalado" }],
  },
  {
    id: 2, image: pumpInterior, title: "Control de bomba sumergible",
    subtitle: "Tablero para sistema de bombeo",
    description: "Tablero de control para una bomba sumergible. La selección reúne una vista del cableado interior y otra de los mandos del frente.",
    gallery: [{ image: pumpInterior, caption: "Interior del tablero de control de bomba sumergible" }, { image: pumpFront, caption: "Mandos del frente del tablero" }],
  },
  {
    id: 3, image: swineInstallation, title: "Instalaciones porcinas",
    subtitle: "Tableros de control y vistas de instalaciones",
    description: "Selección de trabajos en el sector porcino: tableros de control para sala de engorde y fotografías de instalaciones de un criadero.",
    gallery: [{ image: swineInstallation, caption: "Tableros de control para sala de engorde porcino" }, { image: swineAssembly, caption: "Detalle de armado de un tablero de control" }, { image: swineInterior, caption: "Interior de un tablero instalado" }, { image: swineOverview, caption: "Vista interior de un criadero porcino" }, { image: swineAisle, caption: "Pasillo central de un criadero porcino" }],
  },
  {
    id: 4, image: generator, title: "Conmutación generador y red",
    subtitle: "Tablero de transferencia",
    description: "Tablero de conmutación entre un generador y la red eléctrica. La fotografía presenta el gabinete y el entorno de instalación.",
    gallery: [{ image: generator, caption: "Instalación del tablero de conmutación generador-red" }],
  },
  {
    id: 5, image: irrigation, title: "Alimentación para tambo y riego",
    subtitle: "Tablero de acometida para tambo y riego por pivot",
    description: "Tablero de acometida para tambo y riego por pivot. La imagen muestra la disposición interior del gabinete.",
    gallery: [{ image: irrigation, caption: "Interior del tablero de acometida para tambo y riego" }],
  },
];
