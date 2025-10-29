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
import { headerTecItems } from "../../../data/headerTecItems";
import { useParams } from "react-router";

const content = [
  {
    id: "contador-publico",
    label: "Contador Público",
    content: <ContadorPublico />,
    noTitle: true,
  },
  {
    id: "licenciatura-en-administracion",
    label: "Licenciatura en Administración",
    content: <LicenciaturaEnAdministración />,
    noTitle: true,
  },
  {
    id: "ingenieria-electromecanica",
    label: "Ingeniería Electromecánica",
    content: <IngenieriaElectromecanica />,
    noTitle: true,
  },
  {
    id: "ingenieria-mecanica",
    label: "Ingeniería Mecánica",
    content: <IngenieriaMecanica />,
    noTitle: true,
  },
  {
    id: "ingenieria-en-sistemas-computacionales",
    label: "Ingeniería en Sistemas Computacionales",
    content: <IngenieriaEnSistemasComputacionales />,
    noTitle: true,
  },
  {
    id: "ingenieria-electronica",
    label: "Ingeniería Electrónica",
    content: <IngenieriaElectronica />,
    noTitle: true,
  },
  {
    id: "ingenieria-en-tecnologias-de-la-informacion-y-comunicaciones",
    label: "Ingeniería en Tecnologías de la Información y Comunicaciones",
    content: <IngenieriaEnTecnologiasDeLaInformacionYComunicaciones />,
    noTitle: true,
  },
  {
    id: "ingenieria-en-gestion-empresarial",
    label: "Ingeniería en Gestión Empresarial",
    content: <IngenieriaEnGestionEmpresasrial />,
    noTitle: true,
  },
  {
    id: "ingenieria-electrica",
    label: "Ingeniería Eléctrica",
    content: <IngenieriaElectrica />,
    noTitle: true,
  },
  {
    id: "ingenieria-industrial",
    label: "Ingeniería Industrial",
    content: <IngenieriaIndustrial />,
    noTitle: true,
  },
  {
    id: "ingenieria-en-logistica",
    label: "Ingeniería en Logística",
    content: <IngenieriaEnLogistica />,
    noTitle: true,
  },
  {
    id: "ingenieria-en-mecatronica",
    label: "Ingeniería en Mecatrónica",
    content: <IngenieriaEnMecatronica />,
    noTitle: true,
  },
  {
    id: "educacion-a-distancia",
    label: "Educación a Distancia",
    content: <EducacionADistancia />,
    noTitle: true,
  },
  {
    id: "extencion-campus-2",
    label: "Extención Campus 2",
    content: <ExtencionCampus2 />,
    noTitle: true,
  },
  {
    id: "oferta-educativa-impresa",
    label: "Oferta Educativa Impresa",
    content: <OfertaEducativaImpresa />,
    noTitle: true,
  },
  {
    id: "ingenieria-en-semiconductores",
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
const title = "Identidad institucional";

export const ProgramasAcademicosPage = () => {
  const { section } = useParams();
  let defaultIndex = 0;
  if (section) {
    defaultIndex = content.findIndex((item) => item.id === section);
  }
  return (
    <InfoHub
      title={title}
      content={content}
      defaultItemIndex={defaultIndex || 0}
      headerTecItems={headerTecItems}
    />
  );
};
