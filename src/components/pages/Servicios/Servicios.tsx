import { headerTecItems } from "../../../data/headerTecItems";
import { InfoHub } from "../../templates/InfoHub";
import { CentroDeIdiomas } from "./Content/CentroDeIdiomas";
import { CentroDeInformacion } from "./Content/CentroDeInformacion";
import { Incubadora } from "./Content/Incubadora";
import { OficinaDeTransferenciaDeTecnologiaYConocimientos } from "./Content/OficinaDeTransferenciaDeTecnologiaYConocimientos";

const content = [
  {
    label: "OTT",
    noTitle: true,
    content: <OficinaDeTransferenciaDeTecnologiaYConocimientos />,
  },
  {
    label: "Incubadora",
    noTitle: true,
    content: <Incubadora />,
  },
  {
    label: "Centro de idiomas",
    noTitle: true,
    content: <CentroDeIdiomas />,
  },
  {
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
  return (
    <InfoHub
      title="Servicios"
      content={content}
      headerTecItems={headerTecItems}
    />
  );
};
