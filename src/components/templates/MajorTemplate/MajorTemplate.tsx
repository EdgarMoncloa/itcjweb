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
}

export const MajorTemplate = ({
  name,
  descriptionImage,
  description,
  oportunities,
}: MajorTemplateProps) => {
  return (
    <StyledMajorTemplate>
      <StyledTitle>{name}</StyledTitle>
      <StyledSubTitle>Objetivo de la carrera</StyledSubTitle>
      <StyledDualGridWrapper>
        <SimpleDualGrid
          firstContentWidht={6}
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
