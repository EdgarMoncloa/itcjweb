import { useParams } from "react-router";
import { headerTecItems } from "../../../data/headerTecItems";
import { InfoHub } from "../../templates/InfoHub";
import { ActividadesExtraescolares } from "./content/ActividadesExtraescolares";
import { BolsaDeTrabajo } from "./content/BolsaDeTrabajo";
import { Buzon } from "./content/Buzon";
import { CodigoDeConducta } from "./content/CodigoDeConducta";
import { CodigoDeEticaDeLaAdministracionFederal } from "./content/CodigoDeEticaDeLaAdministracionFederal";
import { DesarrolloAcademico } from "./content/DesarrolloAcademico";
import { DirectorioDeCoordinadores } from "./content/DirectorioDeCoordinadores";
import { EncuestaDeServicios } from "./content/EncuestaDeServicios";
import { Lineamientos } from "./content/Lineamientos";
import { LineamientosDePosgrado } from "./content/LineamientosDePosgrado";
import { NuevoIngreso } from "./content/NuevoIngreso";
import { OpcionesDeTitulacion } from "./content/OpcionesDeTitulacion";
import { PoliticaDePrivacidadyManejoDeDatosPersonales } from "./content/PoliticaDePrivacidadyManejoDeDatosPersonales";
import { PronunciamientoCeroTolerancia } from "./content/PronunciamientoCeroTolerancia";
import { ProteccionDeDatosPersonales } from "./content/ProteccionDeDatosPersonales";
import { ReglamentosDeEstudiantes } from "./content/ReglamentosDeEstudiantes";
import { SeguroEscolar } from "./content/SecuroEscolar";
import { ServiciosEscolares } from "./content/ServiciosEscolares";
import { SistemaDeInformacionIntegral } from "./content/SistemaDeInformacionIntegral";
import { TutorialDeResidenciaProfesional } from "./content/TutorialDeResidenciaProfesional";

const content = [
  {
    id: "reglamento-de-estudiantes-del-tecnm",
    label: "Reglamento de Estudiantes del TecNM",
    content: <ReglamentosDeEstudiantes />,
  },
  {
    id: "directorio-de-coordinadores",
    label: "Directorio de Coordinadores",
    content: <DirectorioDeCoordinadores />,
  },
  {
    id: "actividades-extraescolares",
    label: "Actividades Extraescolares",
    content: <ActividadesExtraescolares />,
  },
  {
    id: "opciones-de-titulacion",
    label: "Opciones de titulación",
    content: <OpcionesDeTitulacion />,
  },
  {
    id: "desarrollo-academico",
    label: "Desarrollo Académico",
    content: <DesarrolloAcademico />,
  },
  {
    id: "politica-de-privacidad-y-manejo-de-datos-personales",
    label: "Política de privacidad y manejo de datos personales",
    content: <PoliticaDePrivacidadyManejoDeDatosPersonales />,
  },
  {
    id: "nuevo-ingreso",
    label: "Nuevo ingreso",
    content: <NuevoIngreso />,
  },
  {
    id: "sistema-de-informacion-integral",
    label: "Sistema de Información Integral",
    content: <SistemaDeInformacionIntegral />,
  },
  {
    id: "encuesta-de-servicios",
    label: "Encuesta de servicios",
    content: <EncuestaDeServicios />,
  },
  {
    id: "servicios-escolares",
    label: "Servicios escolares",
    content: <ServiciosEscolares />,
  },
  {
    id: "buzon-de-felicitaciones,-sugerencias-y-quejas",
    label: "Buzón de felicitaciones, sugerencias y quejas",
    content: <Buzon />,
  },
  {
    id: "bolsa-de-trabajo-(itcj-index-conredes)",
    label: "Bolsa de Trabajo (ITCJ-INDEX-CONREDES)",
    content: <BolsaDeTrabajo />,
  },
  {
    id: "codigo-de-etica-de-la-administracion-publica-federal-2022",
    label: "Código de Ética de la Administración Pública Federal 2022",
    content: <CodigoDeEticaDeLaAdministracionFederal />,
  },
  {
    id: "pronunciamiento-de-cero-tolerancia-al-hostigamiento-sexual-y-acoso-sexual-en-el-tecnm",
    label:
      "Pronunciamiento de Cero Tolerancia al Hostigamiento Sexual y Acoso Sexual en el TecNM",
    content: <PronunciamientoCeroTolerancia />,
  },
  {
    id: "codigo-de-conducta-del-tecnologico-nacional-de-mexico",
    label: "Código de Conducta del Tecnológico Nacional de México",
    content: <CodigoDeConducta />,
  },
  {
    id: "tutorial-de-residencia-profesional",
    label: "Tutorial de Residencia Profesional",
    content: <TutorialDeResidenciaProfesional />,
  },
  {
    id: "seguro-escolar-tecnm-instituto-tecnologico-de-ciudad-juarez",
    label: "Seguro Escolar TecNM / Instituto Tecnológico de Ciudad Juárez",
    content: <SeguroEscolar />,
  },
  {
    id: "proteccion-de-datos-personales",
    label: "Protección de Datos Personales",
    content: <ProteccionDeDatosPersonales />,
  },
  {
    id: "lineamientos-de-posgrado-2024",
    label: "Lineamientos de Posgrado 2024",
    content: <LineamientosDePosgrado />,
  },
  // {
  //   label: "Resolución de equivalencia de estudios",
  //   content: <></>,
  // },
  // {
  //   label: "Titulación integral",
  //   content: <></>,
  // },
  // {
  //   label: "Programa de tutorías",
  //   content: <></>,
  // },
  // {
  //   label: "Acreditación de servicio social",
  //   content: <></>,
  // },
  // {
  //   label: "Acreditación de actividades complementarias",
  //   content: <></>,
  // },
  // {
  //   label: "Acreditación de residencias profesionales",
  //   content: <></>,
  // },
  {
    label: "Lineamientos",
    content: <Lineamientos />,
  },
];

export const Estudiantes = () => {
  const { section } = useParams();
  let defaultIndex = 0;
  if (section) {
    defaultIndex = content.findIndex((item) => item.id === section);
  }
  return (
    <InfoHub
      title="Estudiantes"
      content={content}
      headerTecItems={headerTecItems}
      defaultItemIndex={defaultIndex}
    />
  );
};
