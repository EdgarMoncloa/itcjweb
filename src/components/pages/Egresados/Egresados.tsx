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
    label: "Encuestas",
    content: <Encuestas />,
  },
  {
    label: "E.Firma",
    content: <EFirma />,
  },
  {
    label: "¿Qué es el programa de seguimiento de egresados?",
    content: <SeguimientoEgresados />,
  },
  {
    label: "¿Qué te ofrecemos?",
    content: <QueOfrecemos />,
  },
  {
    label: "¿Te gustaría ayudar al TecNM campus ITCJ?",
    content: <AyudarAlTecnm />,
  },
  {
    label: "Redes Sociales",
    content: <Egresados_RedesSociales />,
  },
  {
    label: "Proceso de titulación",
    content: <Egresados_ProcesoDeTitulacion />,
  },
];
export const Egresados = () => {
  return <InfoHub title="Egresados" content={content} />;
};
