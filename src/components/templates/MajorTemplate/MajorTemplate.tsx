import styled from "styled-components";
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

export const MajorTemplate = ({
  name,
  descriptionImage,
  description,
  oportunities,
  competencies,
}: MajorTemplateProps) => {
  return (
    <StyledMajorTemplate>
      <StyledTitle>{name}</StyledTitle>
      <StyledSubTitle>Objetivo de la carrera</StyledSubTitle>
      <StyledDualGridWrapper>
        <SimpleDualGrid
          firstContentWidht={3}
          firstContent={<StyledImg src={descriptionImage} alt={name} />}
          secondContent={description}
        />
      </StyledDualGridWrapper>
      <StyledSubTitle>Oportunidades de trabajo</StyledSubTitle>
      <StyledBody1>{oportunities.description}</StyledBody1>
      <StyledDynamicGridWrapper>
        <DynamicGrid>
          {oportunities.areas.map((area, index) => (
            <StyledInfoCardWrapper>
              <SingleInfoCard key={index}>
                <StyledOportunitiesArea>
                  <DynamicIcon icon={area.icon} size={"3xl"} />
                  <StyledOportunitiesOverline>
                    {area.title}
                  </StyledOportunitiesOverline>
                </StyledOportunitiesArea>
              </SingleInfoCard>
            </StyledInfoCardWrapper>
          ))}
        </DynamicGrid>
      </StyledDynamicGridWrapper>
      <StyledSubTitle>Competencias </StyledSubTitle>
      <div>{competencies.description}</div>
      <StyledTwoColumnsGrid>
        <StyledSingleInfoCard>
          <StyledSubTitle>Competencias Específicas</StyledSubTitle>
          <ul>
            {competencies.specifics.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </StyledSingleInfoCard>
        <StyledSingleInfoCard>
          <div>
            <StyledSubTitle>Competencias Generales</StyledSubTitle>
            <ul>
              {competencies.generals.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </StyledSingleInfoCard>
      </StyledTwoColumnsGrid>

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
      <StyledSubTitle>Especialidades</StyledSubTitle>
    </StyledMajorTemplate>
  );
};

const StyledMajorTemplate = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: var(--size-gap-medium);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled(StyledH1)`
  text-align: center;
`;

const StyledDualGridWrapper = styled.div`
  width: 100%;
  /* height: var(--size-height-4-row); */
  height: max-content;
  overflow: hidden;
`;

const StyledSubTitle = styled(StyledH3)`
  text-align: center;
`;

const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

// ANCHOR Oportunities Area
const StyledDynamicGridWrapper = styled.div`
  width: max-content;
  width: 100%;
  overflow: hidden;
`;

const StyledInfoCardWrapper = styled.div`
  width: var(--size-icon-5xl);
  height: var(--size-icon-5xl);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledOportunitiesArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-small);
  align-items: center;
  justify-content: center;
  padding: var(--size-padding-medium);
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const StyledOportunitiesOverline = styled(StyledOverline)`
  text-align: center;
`;

// ANCHOR Competences
const StyledTwoColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--size-padding-medium);
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

const StyledSingleInfoCard = styled(SingleInfoCard)`
  width: 80%;
  overflow: hidden;
  padding: var(--size-padding-medium);
`;
