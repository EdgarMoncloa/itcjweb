import { ContentElement, InfoHub } from "../../templates/InfoHub";
import { headerTecItems } from "../../../data/headerTecItems";
import { useNavigate, useParams } from "react-router";
import { DynamicGrid } from "../../atoms/Grids/DynamicGrid";
import { DocumentLink } from "../../atoms/Buttons/DocumentLink";
import { CSS_VAR_GAP } from "../../../types/GlobalTypes";
import { AllHeaders } from "../../organisms/AllHeaders";
import { TecFooter } from "../../molecules/TecFooter";
import { GobFooter } from "../../molecules/GobFooter";
import styled from "styled-components";

const content: ContentElement[] = [
  {
    id: "temp",
    label: "Decreto de Creacion del Tecnologico Nacional de México",
    content: null,
    link: "https://www.tecnm.mx/pdf/jurídico/decreto_tecnologico_nacional_mexico.pdf",
  },
  // {
  //   id: "Temp",
  //   label: "Ley General de Responsabilidades Administrativas",
  //   content: null,
  //   link: "https://www.diputados.gob.mx/LeyesBiblio/pdf/LGRA.pdf",
  // },
  {
    id: "temp",
    label:
      "Reglamento Interior del Trabajo para el Personal Docente de los Institutos Tecnologicos",
    content: null,
    link: "https://www.tecnm.mx/pdf/jurídico/REGLAMENTO_DOCENTE.pdf",
  },
  {
    id: "temp",
    label:
      "Reglamento Interior del trabajo para el personal No Docente de los Institutos Tecnologicos",
    content: null,
    link: "https://www.tecnm.mx/pdf/jurídico/REGLAMENTO_NO_DOCENTE.pdf",
  },
  {
    id: "temp",
    label:
      "Documento del Proceso Promoción para el Personal de los Institutos Tecnologicos 2025",
    content: null,
    link: "https://drive.google.com/file/d/1tJCXCwYhBCM-Dr4JirNmUt6qT8SCrouO/view",
  },
  {
    id: "temp",
    label:
      "Pronunciamiento de Cero Tolerancia al Hostigamiento Sexual y al Acoso Sexual en el Tecnológico Nacional de México",
    content: null,
    link: "https://drive.google.com/file/d/1r_-cBVIDkv5Gaw9pKyUOiIdHH01o4AMX/view",
  },
  {
    id: "temp",
    label: "Manual de Organización del Tecnológico Nacional de México.",
    content: null,
    link: "https://www.tecnm.mx/pdf/jurídico/MANUAL_DE_ORGANIZACIÓN.pdf",
  },
  {
    id: "temp",
    label: "Manual de Procedimientos del TecNM",
    content: null,
    link: "https://www.tecnm.mx/normateca/Dirección%20de%20Planeación%20y%20Evaluación/Manual_de_Procedimientos_del_Tecnológico_Nacional_de_México_2.pdf",
  },
  {
    id: "temp",
    label: "Manual de Identidad Gráfica TecNM",
    content: null,
    link: "https://www.tecnm.mx/normateca/Dirección%20de%20Cooperación%20y%20Difusión/2025/Manual_de_Identidad_Grafica_TecNM_2025.pdf",
  },
  {
    id: "temp",
    label: "Manual de Lineamientos Academico-Administrativo del TecNM (2015)",
    content:
      "https://www.tecnm.mx/normateca/Dirección%20de%20Docencia%20e%20Innovación%20Educativa/Manual%20Lineamientos%20TecNM%202015/Manual_de_Lineamientos_TecNM.pdf",
  },
  {
    id: "temp",
    label: "Criterios especificos para la Compactación de Plazas",
    content: null,
    link: "https://www.tecnm.mx/normateca/Dirección%20de%20Personal/2025/CRITERIOS%20ESPECIFICOS%20PARA%20LA%20COMPACTACION%20DE%20PLAZAS%202023.pdf",
  },
  {
    id: "temp",
    label: "Recibos de nómina del TecNM. Portal de Autoservicios",
    content: null,
    link: "https://portalautoservicios-tnm.sep.gob.mx/login.jsp",
  },
  {
    id: "temp",
    label: "Sistema de Administracion TecNM SISAD 2025",
    content: null,
    link: "https://administracion2.tecnm.mx",
  },
  {
    id: "temp",
    label:
      "SIISAE Sistema Integral de Servicios Administrativos y Estudiantiles del TecNM-ITCJ",
    content: null,
    link: "http://siisae.cdjuarez.tecnm.mx/login/login",
  },
  {
    id: "temp",
    label:
      "Lineamientos para la Operación de los Estudios de Posgrado en el Tecnológico Nacional de México. (diciembre 2023)",
    content: null,
    link: "https://drive.google.com/file/d/1ND46JdiDEQG3iE12WpZZgMDFlA6K5II7/view",
  },
];

export const Personal = () => {
  return (
    <StyledMainContainer>
      <AllHeaders headerTecItems={headerTecItems} />
      <StyledContent>
        <DynamicGrid
          gap={CSS_VAR_GAP.medium}
          items={content.map((item, index) => (
            <DocumentLink key={index} href={item.link}>
              {item.label}
            </DocumentLink>
          ))}
        />
      </StyledContent>
      <TecFooter />
      <GobFooter />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--size-padding-medium) var(--size-margin-body);
`;
