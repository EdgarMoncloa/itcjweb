import { ReactNode } from "react";
import { InfoCardDualReveal } from "../../molecules/InfoCardDualReveal";
import styled from "styled-components";
import { StyledH2 } from "../../../tokens/CustomText";
import { useNavigate } from "react-router";

export interface PostgraduateItemProps {
  name: string;
  key: string;
  campuses: string[];
  description: string;
  icon: ReactNode;
  link?: string;
}

export interface PostGraduateSectionProps {
  title?: string;
  postgraduatePrograms: PostgraduateItemProps[];
}

export const PostgraduateSection = ({
  postgraduatePrograms,
  title = "Posgrados",
}: PostGraduateSectionProps) => {
  const navigate = useNavigate();

  const postgraduateElements = postgraduatePrograms.map((program, index) => {
    return (
      <InfoCardDualReveal
        {...program}
        key={index}
        subtitle={program.key}
        tags={program.campuses}
        title={program.name}
        colorVariant="neutral"
        onClick={() => {
          if (program.link) {
            navigate(program.link);
          }
        }}
      />
    );
  });

  return (
    <StyledMainContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledPostGraduateContainer>
        {postgraduateElements}
      </StyledPostGraduateContainer>
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  padding: var(--size-padding-large) var(--size-margin-body);
  background-color: var(--colors-itcj-primary);
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
  overflow: hidden;
  overflow: hidden;
`;

const StyledTitle = styled(StyledH2)`
  color: var(--colors-app-text-light);
  text-align: center;
`;

const StyledPostGraduateContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: var(--size-height-10-rows);
  gap: var(--size-gap-medium);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-template-rows: repeat(2, var(--size-height-10-rows));
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: var(--size-height-8-rows);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktopLarge}px) {
    grid-template-rows: var(--size-height-12-rows);
  }
`;
