import { useParams } from "react-router";
import { headerTecItems } from "../../../data/headerTecItems";
import { InfoHub } from "../../templates/InfoHub";
import { CentroDeIdiomas } from "./Content/CentroDeIdiomas";
import { CentroDeInformacion } from "./Content/CentroDeInformacion";
import { Incubadora } from "./Content/Incubadora";
import { OficinaDeTransferenciaDeTecnologiaYConocimientos } from "./Content/OficinaDeTransferenciaDeTecnologiaYConocimientos";

const content = [
  {
    id: "ott",
    label: "OTT",
    noTitle: true,
    content: <OficinaDeTransferenciaDeTecnologiaYConocimientos />,
  },
  {
    id: "incubadora",
    label: "Incubadora",
    noTitle: true,
    content: <Incubadora />,
  },
  {
    id: "centro-de-idiomas",
    label: "Centro de idiomas",
    noTitle: true,
    content: <CentroDeIdiomas />,
  },
  {
    id: "centro-de-informacion",
    label: "Centro de Información",
    noTitle: true,
    content: <CentroDeInformacion />,
  },
  // {
  //   label: "Bolsa de Trabajo",
  //   noTitle: true,
  //   content: <></>,
  // },
];

export const Servicios = () => {
  const { section } = useParams();
  let defaultIndex = 0;
  if (section) {
    defaultIndex = content.findIndex((item) => item.id === section);
  }
  return (
    <InfoHub
      title="Servicios"
      content={content}
      headerTecItems={headerTecItems}
    />
  );
};
