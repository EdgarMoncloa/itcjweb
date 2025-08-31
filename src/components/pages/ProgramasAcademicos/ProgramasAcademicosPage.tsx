import { BiLinkExternal } from "react-icons/bi";
import { InfoHub } from "../../templates/InfoHub";
import { ContadorPublico } from "./Majors/ContadorPublico";
import { LicenciaturaEnAdministración } from "./Majors/LicenciaturaEnAdministración";
import { IngenieriaElectromecanica } from "./Majors/IngenieriaElectromecanica";
import { IngenieriaMecanica } from "./Majors/IngenieriaMecanica";
import { IngenieriaEnSistemasComputacionales } from "./Majors/IngenieriaEnSistemasComputacionales";
import { IngenieriaElectronica } from "./Majors/IngenieriaElectronica";
import { IngenieriaEnTecnologiasDeLaInformacionYComunicaciones } from "./Majors/IngenieriaEnTecnologiasDeLaInformacionYComunicaciones";
import { IngenieriaEnGestionEmpresasrial } from "./Majors/IngenieriaEnGestionEmpresasrial";
import { IngenieriaElectrica } from "./Majors/IngenieriaElectrica";
import { IngenieriaIndustrial } from "./Majors/IngenieriaIndustrial";
import { IngenieriaEnLogistica } from "./Majors/IngenieriaEnLogistica";
import { IngenieriaEnMecatronica } from "./Majors/IngenieriaEnMecatronica";
import { EducacionADistancia } from "./Majors/EducacionADistancia";
import { ExtencionCampus2 } from "./Majors/ExtencionCampus2";
import { IngenieriaEnSemiconductores } from "./Majors/IngenieriaEnSemiconductores";
import { OfertaEducativaImpresa } from "./Majors/OfertaEducativaImpresa";

const content = [
  {
    label: "Contador Público",
    content: <ContadorPublico />,
    noTitle: true,
  },
  {
    label: "Licenciatura en Administración",
    content: <LicenciaturaEnAdministración />,
    noTitle: true,
  },
  {
    label: "Ingeniería Electromecánica",
    content: <IngenieriaElectromecanica />,
    noTitle: true,
  },
  {
    label: "Ingeniería Mecánica",
    content: <IngenieriaMecanica />,
    noTitle: true,
  },
  {
    label: "Ingeniería en Sistemas Computacionales",
    content: <IngenieriaEnSistemasComputacionales />,
    noTitle: true,
  },
  {
    label: "Ingeniería Electrónica",
    content: <IngenieriaElectronica />,
    noTitle: true,
  },
  {
    label: "Ingeniería en Tecnologías de la Información y Comunicaciones",
    content: <IngenieriaEnTecnologiasDeLaInformacionYComunicaciones />,
    noTitle: true,
  },
  {
    label: "Ingeniería en Gestión Empresarial",
    content: <IngenieriaEnGestionEmpresasrial />,
    noTitle: true,
  },
  {
    label: "Ingeniería Eléctrica",
    content: <IngenieriaElectrica />,
    noTitle: true,
  },
  {
    label: "Ingeniería Industrial",
    content: <IngenieriaIndustrial />,
    noTitle: true,
  },
  {
    label: "Ingeniería en Logística",
    content: <IngenieriaEnLogistica />,
    noTitle: true,
  },
  {
    label: "Ingeniería en Mecatrónica",
    content: <IngenieriaEnMecatronica />,
    noTitle: true,
  },
  {
    label: "Educación a Distancia",
    content: <EducacionADistancia />,
    noTitle: true,
  },
  {
    label: "Extención Campus 2",
    content: <ExtencionCampus2 />,
    noTitle: true,
  },
  {
    label: "Oferta Educativa Impresa",
    content: <OfertaEducativaImpresa />,
    noTitle: true,
  },
  {
    label: "Ingeniería en Semiconductores",
    content: <IngenieriaEnSemiconductores />,
    noTitle: true,
  },
  {
    label: (
      <>
        Posgrados <BiLinkExternal />
      </>
    ),
    content: <></>,
    onClick: () => {
      window.open("https://tecnm.mx/posgrados/", "_self");
    },
  },
];
const defaultItemIndex = 0;
const title = "Identidad institucional";

export const ProgramasAcademicosPage = () => {
  return (
    <InfoHub
      title={title}
      content={content}
      defaultItemIndex={defaultItemIndex}
    />
  );
};
