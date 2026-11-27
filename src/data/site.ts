import type { ImageMetadata } from "astro";
import imgActividades from "@/assets/departamentos-proyectos.jpg";
import imgInteriores from "@/assets/instalaciones-interiores.jpg";
import imgInfraestructuras from "@/assets/departamentos-infraestructuras.jpg";
import imgAsesoramiento from "@/assets/departamentos-asesoramiento.jpg";
import imgResidencial from "@/assets/residencial.jpg";
import imgCafeteria from "@/assets/cafeteria.jpg";

/* --------------------------------------------------------------------------
   Datos de la empresa
   -------------------------------------------------------------------------- */
export const empresa = {
  nombre: "Proingenio",
  descriptor: "Oficina técnica de ingeniería",
  ubicacion: "Santa Eulària des Riu, Ibiza",
  coordenadas: "38°59′N · 1°32′E",
  direccion: ["C/ César Puget Riquer, 29", "Escalera C · Local 6", "07840 Santa Eulària des Riu", "Ibiza, Illes Balears"],
  horario: "Lunes a viernes, 9:00 – 18:00",
  telefonos: [
    { label: "Oficina", numero: "639 95 31 58", href: "tel:+34639953158" },
    { label: "Luis", numero: "649 58 00 69", href: "tel:+34649580069" },
    { label: "Fran", numero: "608 29 05 48", href: "tel:+34608290548" },
  ],
  emails: ["luis@proingenio.es", "fran@proingenio.es"],
};

/* --------------------------------------------------------------------------
   Navegación principal
   -------------------------------------------------------------------------- */
export const navegacion = [
  { href: "/#estudio", label: "Quiénes somos" },
  { href: "/departamentos", label: "Departamentos", submenu: true },
  { href: "/proyectos", label: "Proyectos" },
];

/* --------------------------------------------------------------------------
   Departamentos
   -------------------------------------------------------------------------- */
export interface Departamento {
  id: string;
  codigo: string;
  titulo: string;
  tituloCorto: string;
  resumen: string;
  descripcion: string;
  servicios: string[];
  imagen: ImageMetadata;
  alt: string;
}

export const departamentos: Departamento[] = [
  {
    id: "instalaciones-interiores",
    codigo: "01",
    titulo: "Proyectos de instalaciones interiores",
    tituloCorto: "Instalaciones interiores",
    resumen: "Electricidad, climatización, fontanería, telecomunicaciones y energía fotovoltaica.",
    descripcion:
      "Proyectamos y calculamos las instalaciones de viviendas, locales y edificios —desde la electricidad y la climatización hasta la fotovoltaica y la recarga del vehículo eléctrico— y dirigimos su ejecución conforme a la normativa vigente.",
    servicios: [
      "Instalaciones eléctricas de baja tensión",
      "Climatización y ventilación",
      "Fontanería y saneamiento",
      "Telecomunicaciones",
      "Instalaciones solares fotovoltaicas",
      "Recarga de vehículo eléctrico",
    ],
    imagen: imgInteriores,
    alt: "Técnico midiendo en un cuadro eléctrico",
  },
  {
    id: "infraestructuras",
    codigo: "02",
    titulo: "Proyectos de infraestructuras",
    tituloCorto: "Infraestructuras",
    resumen: "Redes de baja y media tensión, urbanización y acometidas.",
    descripcion:
      "Proyectamos las redes e infraestructuras que dan servicio a parcelas, edificios y urbanizaciones, así como las acometidas de cada instalación.",
    servicios: [
      "Redes de baja tensión",
      "Redes de media tensión",
      "Proyectos de urbanización",
      "Acometidas de instalaciones",
    ],
    imagen: imgInfraestructuras,
    alt: "Excavación para la instalación de una conducción",
  },
  {
    id: "proyectos-actividades",
    codigo: "03",
    titulo: "Proyectos de actividades",
    tituloCorto: "Actividades",
    resumen: "Proyectos de actividad para adecuar locales al uso previsto.",
    descripcion:
      "Redactamos el proyecto de actividad necesario para adecuar un local al uso deseado, con la justificación del cumplimiento de la normativa municipal y sectorial.",
    servicios: [
      "Proyectos de actividad",
      "Adecuación de locales al uso previsto",
      "Justificación de la normativa municipal y sectorial",
    ],
    imagen: imgActividades,
    alt: "Planos y documentación técnica sobre una mesa de trabajo",
  },
  {
    id: "asesoramiento",
    codigo: "04",
    titulo: "Asesoramiento a instaladores",
    tituloCorto: "Asesoramiento a instaladores",
    resumen: "Consultoría técnica, dirección de obra y gestiones para instaladores.",
    descripcion:
      "Damos soporte técnico a las empresas instaladoras: resolvemos sus consultas y nos ocupamos de las gestiones que requiere cada instalación.",
    servicios: ["Consultoría técnica", "Dirección de obra", "Gestiones para instaladores"],
    imagen: imgAsesoramiento,
    alt: "Dos técnicos revisando una instalación en obra",
  },
];

/* --------------------------------------------------------------------------
   Proyectos — CONTENIDO DE RELLENO, sin usar de momento (la página /proyectos
   está en construcción). Sustituir por proyectos reales al crearla.
   -------------------------------------------------------------------------- */
export interface Proyecto {
  titulo: string;
  tipo: string;
  lugar: string;
  año: string;
  alcance: string;
  imagen: ImageMetadata;
  alt: string;
}

export const proyectos: Proyecto[] = [
  {
    titulo: "Edificio plurifamiliar de doce viviendas",
    tipo: "Residencial",
    lugar: "Sant Josep de sa Talaia",
    año: "2024",
    alcance: "Instalaciones interiores y certificación energética",
    imagen: imgResidencial,
    alt: "Edificio residencial blanco de volúmenes escalonados",
  },
  {
    titulo: "Licencia de actividad para cafetería",
    tipo: "Actividad",
    lugar: "Eivissa",
    año: "2024",
    alcance: "Proyecto de actividad y tramitación municipal",
    imagen: imgCafeteria,
    alt: "Interior de una cafetería con barra y estanterías",
  },
  {
    titulo: "Renovación eléctrica de nave industrial",
    tipo: "Instalaciones",
    lugar: "Sant Antoni de Portmany",
    año: "2023",
    alcance: "Proyecto eléctrico de baja tensión y dirección de obra",
    imagen: imgInteriores,
    alt: "Cuadro eléctrico durante una revisión",
  },
  {
    titulo: "Red de baja tensión para urbanización",
    tipo: "Infraestructuras",
    lugar: "Santa Eulària des Riu",
    año: "2023",
    alcance: "Proyecto de red de baja tensión y acometidas",
    imagen: imgInfraestructuras,
    alt: "Zanja abierta para el tendido de una red en ejecución",
  },
];

/* --------------------------------------------------------------------------
   Cifras — PENDIENTE: confirmar con la empresa antes de publicar
   -------------------------------------------------------------------------- */
export const cifras = [
  { valor: 10, sufijo: "+", etiqueta: "Años de experiencia en Baleares" },
  { valor: 150, sufijo: "+", etiqueta: "Proyectos redactados" },
  { valor: 100, sufijo: "+", etiqueta: "Clientes" },
  { valor: 4, sufijo: "", etiqueta: "Áreas de especialidad" },
];
