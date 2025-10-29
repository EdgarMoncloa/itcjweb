import { headerTecItems } from "../../../data/headerTecItems";
import { StyledH3 } from "../../../tokens/CustomText";
import { DocumentLink } from "../../atoms/Buttons/DocumentLink";
import { InfoHub } from "../../templates/InfoHub";
import { Contraloria_Description } from "./content/Contraloria_Description";
import { Contraloria_E010 } from "./content/Contraloria_E010";
import { Contraloria_E021 } from "./content/Contraloria_E021";
import { Contraloria_Quejas } from "./content/Contraloria_Quejas";
import { Contraloria_S247 } from "./content/Contraloria_S247";

const defaultItemIndex = 0;
const title = "DIVISIÓN DE ESTUDIOS DE POSGRADO E INVESTIGACIÓN";
const contraloriaContent = [
  Contraloria_Description,
  Contraloria_S247,
  Contraloria_E010,
  Contraloria_E021,
  {
    label: "Documentos Normativos",
    content: (
      <>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20E021%20Investigación%202025%2F2%2E-%20E021%202025%2F2%2E-%20E021%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20E021%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20E021%2F1-LINE~1%20-%20Lineamientos%2EPDF&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20E021%20Investigación%202025%2F2%2E-%20E021%202025%2F2%2E-%20E021%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20E021%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20E021&ga=1">
          Lineamientos
        </DocumentLink>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20Esquema%20S247%2Epdf&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20S247%202025&ga=1">
          ESQUEMA de Contraloría Social 2025
        </DocumentLink>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20S247%202025%2F3-S247-GUÍA%20OPERATIVA%20de%20Contraloía%20Social%202025%2EPDF&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20S247%202025&ga=1">
          GUÍA OPERATIVA de Contraloía Social 2025
        </DocumentLink>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20S247%202025%2F4-S247-Programa%20Anual%20de%20Trabajo%20de%20Contraloría%20Social%20PACTS%202024%2EPDF&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20S247%202025&ga=1">
          Programa Anual de Trabajo de Contraloría Social "PACTS" 2025
        </DocumentLink>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20S247%202025%2F5-OFDE-Oficio%20de%20Validación%20de%20Documentos%20Normativos%202025%2EPDF&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F1%2E-%20SUBCARPETA%20DCTOS%20NORMATIVOS%20S247%202025&ga=1">
          Oficio de Validación de Documentos Normativos 2025
        </DocumentLink>
        <StyledH3>Formatos de Guía Operativa</StyledH3>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20SUBCARPETA%20DE%20FORMATOS%20S247%202025%2F5-S247-Anexo%201%2E-%20Acta%20de%20Constitución%20de%20Comité%20de%20Contraloría%20Social%202025%2EPDF&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20SUBCARPETA%20DE%20FORMATOS%20S247%202025&ga=1">
          Anexo 1 - Acta Constitucíon del Comité de Contraloría Social 2025
        </DocumentLink>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20SUBCARPETA%20DE%20FORMATOS%20S247%202025%2F6-S247-Anexo%202%2E-%20Acta%20de%20Sustitución%20de%20Integrante%20de%20Comité%20de%20C%2ES%2E%202025%2EPDF&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20SUBCARPETA%20DE%20FORMATOS%20S247%202025&ga=1">
          Anexo 2 - Acta de Sustitución de Integrante(s) del Comité de C.S. 2025
        </DocumentLink>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20SUBCARPETA%20DE%20FORMATOS%20S247%202025%2F7-S247-Anexo%203%2E-%20Minutas%20de%20reunión%20de%20Comité%20de%20Contraloría%20Social%202025%2EPDF&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20SUBCARPETA%20DE%20FORMATOS%20S247%202025&ga=1">
          Anexo 3 - Minuta de Reunión de Comité de Contraloría Social 2025
        </DocumentLink>
        <DocumentLink href="https://tecnmjrz-my.sharepoint.com/personal/pagina_tec_cdjuarez_tecnm_mx/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20SUBCARPETA%20DE%20FORMATOS%20S247%202025%2F8-S247-Anexo%204%2E-%20Informe%20de%20Comité%20de%20Contraloría%20Social%202025%2EPDF&parent=%2Fpersonal%2Fpagina_tec_cdjuarez_tecnm_mx%2FDocuments%2FITCJ%20Web%20Page%2F2025%2FCambios%20contraloria%202025%2008%2FRV_%20Difusión%20Dctos%20Normativos%20de%20C%2ES%2E%20S247%20PRODEP%202025%2F1%2E-%20S247%202025%2F1%2E-%20S247%202025%2F3%2E-%20DOCUMENTOS%20NORMATIVOS%20S247%202025%2F2%2E-%20SUBCARPETA%20DE%20FORMATOS%20S247%202025&ga=1">
          Anexo 4 - Informe del Comité de Contraloria Social 2025
        </DocumentLink>
      </>
    ),
  },
  Contraloria_Quejas,
  {
    label: "Manual Sistema Informatíco C.S.",
    content: (
      <>
        {/* TODO: links */}
        <div>
          <DocumentLink href="">
            Manual del Sistema Informático de C.S. (SICS) - Instancia Ejecutora
          </DocumentLink>
        </div>
        <div>
          <DocumentLink href="">
            Manual del Sistema Informático de C.S. (SICS) - Instancia Normativa
          </DocumentLink>
        </div>
      </>
    ),
  },
  {
    label: "Logotipos",
    content: (
      <>
        {/* TODO: links */}
        <div>
          <DocumentLink>2023</DocumentLink>
        </div>
        <div>
          <DocumentLink>2024</DocumentLink>
        </div>
        <div>
          <DocumentLink>2025</DocumentLink>
        </div>
      </>
    ),
  },
];

export const Contraloria = () => {
  return (
    <InfoHub
      content={contraloriaContent}
      defaultItemIndex={defaultItemIndex}
      title={title}
      headerTecItems={headerTecItems}
    />
  );
};
