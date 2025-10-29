import { useParams } from "react-router";
import { headerTecItems } from "../../../data/headerTecItems";
import { InfoHub } from "../../templates/InfoHub";
import { AyudarAlTecnm } from "./content/AyudarAlTecnm";
import { EFirma } from "./content/EFirma";
import { Egresados_ProcesoDeTitulacion } from "./content/Egresados_ProcesoDeTitulacion";
import { Egresados_RedesSociales } from "./content/Egresados_RedesSociales";
import { Encuestas } from "./content/Encuestas";
import { QueOfrecemos } from "./content/QueOfrecemos";
import { SeguimientoEgresados } from "./content/SeguimientoEgresados";

const content = [
  {
    id: "encuestas",
    label: "Encuestas",
    content: <Encuestas />,
  },
  {
    id: "e-firma",
    label: "E.Firma",
    content: <EFirma />,
  },
  {
    id: "que-es-el-programa-de-seguimiento-de-egresados",
    label: "¿Qué es el programa de seguimiento de egresados?",
    content: <SeguimientoEgresados />,
  },
  {
    id: "que-te-ofrecemos",
    label: "¿Qué te ofrecemos?",
    content: <QueOfrecemos />,
  },
  {
    id: "te-gustaria-ayudar-al-tecnm-campus-itcj",
    label: "¿Te gustaría ayudar al TecNM campus ITCJ?",
    content: <AyudarAlTecnm />,
  },
  {
    id: "redes-sociales",
    label: "Redes Sociales",
    content: <Egresados_RedesSociales />,
  },
  {
    id: "proceso-de-titulacion",
    label: "Proceso de titulación",
    content: <Egresados_ProcesoDeTitulacion />,
  },
];
export const Egresados = () => {
  const { section } = useParams();
  let defaultIndex = 0;
  if (section) {
    defaultIndex = content.findIndex((item) => item.id === section);
  }
  return (
    <InfoHub
      title="Egresados"
      content={content}
      headerTecItems={headerTecItems}
      defaultItemIndex={defaultIndex}
    />
  );
};
