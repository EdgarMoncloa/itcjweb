import styled from "styled-components";
import { InfoHub } from "../../templates/InfoHub";
import {
  StyledBody1,
  StyledBody3,
  StyledH2,
  StyledH3,
  StyledOverline,
} from "../../../tokens/CustomText";
import { CustomImg } from "../../molecules/CustomImg";
import Logo_sgig from "/images/Logo_sgig.png";
import { DocumentLink } from "../../atoms/Buttons/DocumentLink";

const defaultItemIndex = 0;
const title = "DIVISIÓN DE ESTUDIOS DE POSGRADO E INVESTIGACIÓN";
export const SGIG = () => {
  return (
    <StyledSGIG>
      <StyledH2>
        Sistema de Gestión de Igualdad de Género y No Discriminación (SGIG)
      </StyledH2>
      <StyledHeadContent>
        <StyledHeaderCard style={{ gridArea: "card" }}>
          <StyledHeaderImg src={Logo_sgig} alt="Logo SGIG" noBorder />

          <StyledBody1>Correo oficial del subcomité de ética:</StyledBody1>
          {/* TODO: Copy wrapper */}
          <StyledOverline>subcomite.etica@cdjuarez.tecnm.mx</StyledOverline>
        </StyledHeaderCard>
        <StyledHeaderTitle style={{ gridArea: "dTitle" }}>
          Documentos
        </StyledHeaderTitle>
        <DocumentLink>Pronunciamiento hostigamiento sexual vc</DocumentLink>
        <DocumentLink>Política de igualdad laboral</DocumentLink>
        <DocumentLink>
          Lineamientos lenguaje incluyente TecNM-GIG-LI-01
        </DocumentLink>
        <DocumentLink>Prontuario lenguaje incluyente</DocumentLink>
        <DocumentLink>Reglamento de estudiantes del TecNM</DocumentLink>
        <DocumentLink>Pronunciamiento hostigamiento sexual</DocumentLink>
      </StyledHeadContent>
    </StyledSGIG>

    // <InfoHub
    //   content={posgradosContent}
    //   defaultItemIndex={defaultItemIndex}
    //   title={title}
    // />
  );
};

const StyledSGIG = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const StyledHeadContent = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(3, 3fr);
  grid-template-rows: 1fr 2fr 2fr;
  grid-template-areas: "card dTitle dTitle dTitle" "card . . ." "card . . .";
  width: 100%;
  gap: var(--size-gap-medium);
  padding: var(--size-padding-medium);
`;

const StyledHeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: var(--size-gap-small);
  border: 1px solid var(--colors-app-primary-300);
  background-color: var(--colors-app-primary-50);
  padding: var(--size-padding-medium);
  text-align: center;
`;

const StyledHeaderImg = styled(CustomImg)`
  padding: var(--size-padding-medium);
`;

const StyledHeaderTitle = styled(StyledH3)`
  display: flex;
  align-items: center;
  word-wrap: break-word;
  text-overflow: ellipsis;
`;

const StyledDocumentLink = styled(DocumentLink)`
  padding: var(--size-padding-medium);
`;
