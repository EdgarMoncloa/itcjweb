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
    label: "Reglamento de Estudiantes del TecNM",
    content: <ReglamentosDeEstudiantes />,
  },
  {
    label: "Directorio de Coordinadores",
    content: <DirectorioDeCoordinadores />,
  },
  {
    label: "Actividades Extraescolares",
    content: <ActividadesExtraescolares />,
  },
  {
    label: "Opciones de titulación",
    content: <OpcionesDeTitulacion />,
  },
  {
    label: "Desarrollo Académico",
    content: <DesarrolloAcademico />,
  },
  {
    label: "Política de privacidad y manejo de datos personales",
    content: <PoliticaDePrivacidadyManejoDeDatosPersonales />,
  },
  {
    label: "Nuevo ingreso",
    content: <NuevoIngreso />,
  },
  {
    label: "Sistema de Información Integral",
    content: <SistemaDeInformacionIntegral />,
  },
  {
    label: "Encuesta de servicios",
    content: <EncuestaDeServicios />,
  },
  {
    label: "Servicios escolares",
    content: <ServiciosEscolares />,
  },
  {
    label: "Buzón de felicitaciones, sugerencias y quejas",
    content: <Buzon />,
  },
  {
    label: "Bolsa de Trabajo (ITCJ-INDEX-CONREDES)",
    content: <BolsaDeTrabajo />,
  },
  {
    label: "Código de Ética de la Administración Pública Federal 2022",
    content: <CodigoDeEticaDeLaAdministracionFederal />,
  },
  {
    label:
      "Pronunciamiento de Cero Tolerancia al Hostigamiento Sexual y Acoso Sexual en el TecNM",
    content: <PronunciamientoCeroTolerancia />,
  },
  {
    label: "Código de Conducta del Tecnológico Nacional de México",
    content: <CodigoDeConducta />,
  },
  {
    label: "Tutorial de Residencia Profesional",
    content: <TutorialDeResidenciaProfesional />,
  },
  {
    label: "Seguro Escolar TecNM / Instituto Tecnológico de Ciudad Juárez",
    content: <SeguroEscolar />,
  },
  {
    label: "Protección de Datos Personales",
    content: <ProteccionDeDatosPersonales />,
  },
  {
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
  return <InfoHub title="Estudiantes" content={content} />;
};
