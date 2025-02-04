import styled, { css } from "styled-components";
import {
  StyledBody1,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledOverline,
} from "../../../tokens/CustomText";
import { SimpleDualGrid } from "../../atoms/Grids/SimpleDualGrid";
import { DynamicGrid } from "../../atoms/Grids/DynamicGrid";
import { SingleInfoCard } from "../../molecules/InfoCard";
import { ReactNode } from "react";
import { DynamicIcon } from "../../atoms/Icons/DynamicIcon";
import { DiagramStudyPlan } from "../../organisms/Diagrams/DiagramStudyPlan";
import { IngenieriaEnSistemas } from "../../../mocks/Majors/IngenieriaEnSistemas.mock";
import { CustomImg } from "../../atoms/CustomImg";
import { StyledImg } from "../../../tokens/CustomImg";
import Logo_Liebre_Circuitos from "/images/Logo_Liebre_Circuitos.png";

type OportunitiesArea = {
  title: string;
  icon: ReactNode;
};

export interface MajorTemplateProps {
  name: string;
  descriptionImage: string;
  description: string;
  oportunities: {
    description: string;
    areas: OportunitiesArea[];
  };
  competencies: {
    description: string;
    specifics: string[];
    generals: string[];
  };
}

// SECTION Component
export const MajorTemplate = ({
  name,
  descriptionImage,
  description,
  oportunities,
  competencies,
}: MajorTemplateProps) => {
  return (
    <StyledMajorTemplate>
      {/* ANCHOR Objective */}
      <StyledTitle>{name}</StyledTitle>
      <StyledDescription className="noBorder">
        <StyledCustomImg src={descriptionImage} alt={name} />
        <div>
          <StyledSubTitle>Objetivo de la carrera</StyledSubTitle>
          <StyledBody1>{description}</StyledBody1>
        </div>
      </StyledDescription>

      {/* ANCHOR Oportunities Area */}
      <StyledOportinitiesWrapper>
        <StyledOportunities>
          <StyledSubTitle style={{ gridArea: "title" }}>
            Oportunidades de trabajo
          </StyledSubTitle>
          <StyledText>{oportunities.description}</StyledText>
          <StyledDynamicGrid style={{ gridArea: "oportunities" }}>
            {oportunities.areas.map((area, index) => (
              <StyledOportunityItem>
                <DynamicIcon
                  icon={area.icon}
                  size={"xl"}
                  colorVariant="light"
                />
                <StyledOportunitiesText>{area.title}</StyledOportunitiesText>
              </StyledOportunityItem>
            ))}
          </StyledDynamicGrid>
        </StyledOportunities>
      </StyledOportinitiesWrapper>

      {/* ANCHOR Competences */}
      <StyledCompetences>
        <StyledSubTitle style={{ gridArea: "title" }}>
          Competencias
        </StyledSubTitle>

        <StyledText style={{ gridArea: "description" }}>
          {competencies.description}
        </StyledText>
        <StyledCompetencesListContainer>
          <StyledCompetencesSubtitle>
            Competencias Específicas
          </StyledCompetencesSubtitle>
          <ul>
            {competencies.specifics.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </StyledCompetencesListContainer>
        <StyledCompetencesListContainer>
          <StyledcompetencesLogo
            src={Logo_Liebre_Circuitos}
            alt="Logo Liebre Circuitos"
            style={{ gridArea: "logo" }}
          />
          <StyledCompetencesSubtitle>
            Competencias Generales
          </StyledCompetencesSubtitle>
          <ul>
            {competencies.generals.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </StyledCompetencesListContainer>
      </StyledCompetences>

      {/* ANCHOR Perfil */}
      <StyledSubTitle>Perfil</StyledSubTitle>
      <StyledTwoColumnsGrid>
        <StyledSingleInfoCard>
          <StyledSubTitle>Aspirante</StyledSubTitle>
          <ul>
            <li>
              Interés por la tecnología, la programación y el análisis de
              sistemas.
            </li>
            <li>
              Facilidad para resolver problemas mediante el razonamiento lógico
              y matemático.
            </li>
            <li>Habilidades básicas en el uso de computadoras y software.</li>
            <li>
              Capacidad de aprendizaje autodidacta y adaptabilidad a nuevas
              herramientas.
            </li>
            <li>Gusto por el trabajo colaborativo y en equipo.</li>
          </ul>
        </StyledSingleInfoCard>
        <StyledSingleInfoCard>
          <StyledSubTitle>Egresado</StyledSubTitle>
          <ul>
            <li>
              Capacidad para diseñar, desarrollar e implementar soluciones
              tecnológicas innovadoras.
            </li>
            <li>
              Habilidades avanzadas en programación, bases de datos, redes y
              ciberseguridad.
            </li>
            <li>Adaptabilidad a entornos de trabajo diversos y dinámicos.</li>
            <li>
              Competencias para liderar proyectos tecnológicos de gran escala.
            </li>
            <li>
              Enfoque ético, sostenible y responsable en la práctica
              profesional.
            </li>
            <li>
              Preparación para certificaciones y especializaciones tecnológicas.
            </li>
            <li>
              Orientación hacia la investigación y el desarrollo de tecnologías
              emergentes.
            </li>
          </ul>
        </StyledSingleInfoCard>
      </StyledTwoColumnsGrid>

      <StyledSubTitle>Plan de estudios</StyledSubTitle>
      <DiagramStudyPlan columns={IngenieriaEnSistemas.columns} />
      <StyledSubTitle>Especialidades</StyledSubTitle>
    </StyledMajorTemplate>
  );
};
// !SECTION Component
// SECTION Styles
// ANCHOR Utils

const StyledTitle = styled(StyledH1)`
  text-align: center;
`;

const StyledSubTitle = styled(StyledH3)`
  /* text-align: center; */
  overflow: hidden;
  width: 100%;
`;

const StyledText = styled(StyledBody1)`
  height: 100%;
  overflow: hidden;
`;

const cssBaseMargin = css`
  margin: 0 var(--size-margin-2xl);
  width: calc(100% - 2 * var(--size-margin-2xl));
`;
const cssBasePadding = css`
  padding: 0 var(--size-margin-2xl);
`;

// ANCHOR Major Template
const StyledMajorTemplate = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: var(--size-gap-medium);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* padding: 0 var(--size-margin-body-large); */
`;

// ANCHOR Description
const StyledDescription = styled(SingleInfoCard)`
  align-items: center;
  display: grid;
  gap: var(--size-gap-large);
  grid-template-columns: var(--size-width-4-cols) 1fr;
  grid-template-rows: var(--size-height-6-rows);
  justify-items: center;
  overflow: hidden;
  width: 100%;
  padding: var(--size-padding-medium);
  border-radius: var(--size-border-radius-small);

  ${cssBaseMargin}

  &.noBorder {
    border: none;
  }
`;

const StyledCustomImg = styled(CustomImg)`
  width: 100%;
  height: 100%;
`;

// ANCHOR Oportunities Area
const StyledOportinitiesWrapper = styled.div`
  width: 100%;
  background-color: var(--colors-app-primary-200);
`;
const StyledOportunities = styled.div`
  display: grid;
  grid-template-columns: 1fr var(--size-width-7-cols);
  grid-template-rows: auto 1fr;
  grid-template-areas: "title oportunities" "description oportunities";
  gap: var(--size-gap-medium);
  height: var(--size-height-8-rows);
  overflow: hidden;
  padding: var(--size-padding-large) var(--size-padding-xl);
  ${cssBaseMargin}
`;

const StyledDynamicGrid = styled.div`
  align-items: flex-start;
  display: grid;
  grid-auto-columns: var(--size-width-3-cols);
  grid-auto-flow: column;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: var(--size-gap-medium);
  height: 100%;
  justify-content: space-evenly;
  overflow: auto;
  width: 100%;
`;

const StyledOportunityItem = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: var(--size-gap-small);
  /* border: var(--size-border-small) solid var(--colors-app-neutral-50);
  border-radius: var(--size-border-radius-medium); */
`;

const StyledOportunitiesText = styled(StyledBody1)`
  text-align: left;
`;

// ANCHOR Competences
const StyledCompetences = styled.div`
  ${cssBaseMargin}

  align-items: center;
  align-items: start;
  display: grid;
  gap: var(--size-gap-medium);
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  justify-items: center;

  grid-template-areas:
    "title title"
    "description description"
    "specifics generals";
`;

const StyledCompetencesSubtitle = styled(StyledSubTitle)`
  background-color: var(--colors-app-primary-200);
  border-bottom: 4px solid var(--colors-app-primary-500);
`;

const StyledcompetencesLogo = styled.img`
  width: 50%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  left: -50%;
  top: -50%;
`;

const StyledCompetencesListContainer = styled.div`
  width: 80%;
  position: relative;
`;

const StyledSingleInfoCard = styled(SingleInfoCard)`
  width: 90%;
  overflow: hidden;
  padding: var(--size-padding-medium);
`;

const StyledTwoColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--size-padding-medium);
  justify-content: center;
  align-items: center;
  justify-items: center;
`;
// !SECTION Styles
