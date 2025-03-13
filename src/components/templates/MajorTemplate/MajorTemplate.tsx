import styled, { css, useTheme } from "styled-components";
import {
  StyledBody1,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledOverline,
} from "../../../tokens/CustomText";
import { SimpleDualGrid } from "../../atoms/Grids/SimpleDualGrid";
import { DynamicGrid } from "../../atoms/Grids/DynamicGrid";
import { SingleInfoCard } from "../../molecules/InfoCard";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { DynamicIcon } from "../../atoms/Icons/DynamicIcon";
import { DiagramStudyPlan } from "../../organisms/Diagrams/DiagramStudyPlan";
import { IngenieriaEnSistemas } from "../../../mocks/Majors/IngenieriaEnSistemas.mock";
import { CustomImg } from "../../atoms/CustomImg";
import { StyledImg } from "../../../tokens/CustomImg";
import Logo_Liebre_Circuitos from "/images/Logo_Liebre_Circuitos.png";
import { DynamicGrid_FillMethod } from "../../atoms/Grids/DynamicGrid/DynamicGrid.types";
import { ThemeType } from "../../../tokens/theme";
import { CSS_VAR_GAP } from "../../../types/GlobalTypes";

type OportunitiesArea = {
  title: string;
  icon: ReactNode;
};
type speciality = {
  name: string;
  description: string;
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
  specialities: speciality[];
}

// SECTION Component
export const MajorTemplate = ({
  name,
  descriptionImage,
  description,
  oportunities,
  competencies,
  specialities,
}: MajorTemplateProps) => {
  const theme = useTheme() as ThemeType;
  const specialitiesRef = useRef<HTMLDivElement>(null);
  const [specialitiesCols, setSpecialitiesCols] = useState(3);

  const handleResise = useCallback(() => {
    if (specialitiesRef.current) {
      const specialitiesContainerWidth = specialitiesRef.current.clientWidth;
      if (specialitiesContainerWidth < theme.breakpoints.mobile) {
        setSpecialitiesCols(1);
        return;
      }
      if (specialitiesContainerWidth < theme.breakpoints.tablet) {
        setSpecialitiesCols(2);
        return;
      }
      if (specialitiesContainerWidth < theme.breakpoints.laptop) {
        setSpecialitiesCols(3);
        return;
      }
    }
  }, [specialities]);

  useEffect(() => {
    handleResise();
    window.addEventListener("resize", handleResise);
    return () => {
      window.removeEventListener("resize", handleResise);
    };
  }, []);

  return (
    <StyledMajorTemplate>
      {/* ANCHOR Objective */}
      <StyledTitle>{name}</StyledTitle>
      <StyledDescription className="noBorder">
        <StyledCustomImg src={descriptionImage} alt={name} />
        <div>
          <StyledDescriptionTitle>
            Objetivo de la carrera
          </StyledDescriptionTitle>
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
      <StyledBaseMarginContainer>
        <StyledPerfilTitle>Perfil</StyledPerfilTitle>
        <StyledTwoColumnsGrid>
          <StyledSingleInfoCard>
            <StyledSubTitle2>Aspirante</StyledSubTitle2>
            <ul>
              <li>
                Interés por la tecnología, la programación y el análisis de
                sistemas.
              </li>
              <li>
                Facilidad para resolver problemas mediante el razonamiento
                lógico y matemático.
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
            <StyledSubTitle2>Egresado</StyledSubTitle2>
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
                Preparación para certificaciones y especializaciones
                tecnológicas.
              </li>
              <li>
                Orientación hacia la investigación y el desarrollo de
                tecnologías emergentes.
              </li>
            </ul>
          </StyledSingleInfoCard>
        </StyledTwoColumnsGrid>
      </StyledBaseMarginContainer>

      {/* ANCHOR Study Plan */}
      <StyledStudyPlanContainer>
        <StyledStudyPlanTitle>Plan de estudios</StyledStudyPlanTitle>
        <DiagramStudyPlan columns={IngenieriaEnSistemas.columns} />
      </StyledStudyPlanContainer>

      {/* ANCHOR Specialties */}
      <StyledSubTitle>Especialidades</StyledSubTitle>
      <StyledSpecialtiesContainer ref={specialitiesRef}>
        <DynamicGrid
          fillMethod={DynamicGrid_FillMethod.Center}
          numColumns={specialitiesCols}
          gap={CSS_VAR_GAP.medium}
          items={specialities.map((speciality: speciality) => (
            <StyledSingleInfoCard>
              <StyledSubTitle2>{speciality.name}</StyledSubTitle2>
              <StyledBody1>{speciality.description}</StyledBody1>
            </StyledSingleInfoCard>
          ))}
        />
      </StyledSpecialtiesContainer>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </StyledMajorTemplate>
  );
};
// !SECTION Component
// SECTION Styles
// ANCHOR Utils

const StyledTitle = styled(StyledH1)`
  text-align: center;
  margin: var(--size-margin-small) 0;
`;

const StyledSubTitle = styled(StyledH3)`
  text-align: center;
  overflow: hidden;
  width: 100%;
  /* margin: var(--size-margin-medium) 0; */
  color: var(--colors-app-primary-700);
`;

const StyledSubTitle2 = styled(StyledH4)`
  /* text-align: center; */
  overflow: hidden;
  width: 100%;
  /* margin: var(--size-margin-xs) 0; */
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

// ANCHOR Shared
const StyledBaseMarginContainer = styled.div`
  ${cssBaseMargin}
`;

// ANCHOR Major Template
const StyledMajorTemplate = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: var(--size-gap-large);
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

const StyledDescriptionTitle = styled(StyledSubTitle)`
  text-align: left;
`;

// ANCHOR Oportunities Area
const StyledOportinitiesWrapper = styled.div`
  width: 100%;
  background-color: var(--colors-app-primary-200);
  ${cssBasePadding}
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

const StyledCompetencesSubtitle = styled(StyledSubTitle2)`
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
  width: 100%;
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

// ANCHOR Perfil
const StyledPerfilTitle = styled(StyledSubTitle)`
  margin-bottom: var(--size-margin-medium);
`;

// ANCHOR Study Plan
const StyledStudyPlanContainer = styled.div`
  width: 100%;
  background-color: var(--colors-app-primary-200);

  ${cssBasePadding}
  padding-bottom: var(--size-padding-large);
`;

const StyledStudyPlanTitle = styled(StyledSubTitle)`
  margin: var(--size-margin-small) 0;
`;

// ANCHOR Specialties
const StyledSpecialtiesContainer = styled.div`
  width: 100%;
  ${cssBaseMargin}
`;

// !SECTION Styles
