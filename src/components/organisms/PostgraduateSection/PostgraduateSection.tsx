import { ReactNode } from 'react';
import { InfoCardDualReveal } from '../../molecules/InfoCardDualReveal';
import styled from 'styled-components';
import { StyledH2 } from '../../../tokens/CustomText';

export interface PostgraduateItemProps {
  name: string;
  key: string;
  campuses: string[];
  description: string;
  icon: ReactNode;
}

export interface PostGraduateSectionProps {
  title?: string;
  postgraduatePrograms: PostgraduateItemProps[];
}

export const PostgraduateSection = ({
  postgraduatePrograms,
  title = 'Posgrados',
}: PostGraduateSectionProps) => {
  const postgraduateElements = postgraduatePrograms.map((program, index) => {
    return (
      <InfoCardDualReveal
        {...program}
        key={index}
        subtitle={program.key}
        tags={program.campuses}
        title={program.name}
        colorVariant='neutral'
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
  grid-auto-rows: var(--size-height-10-row);
  gap: var(--size-gap-medium);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-rows: repeat(2, var(--size-height-10-row));
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: var(--size-height-8-row);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktopLarge}) {
    grid-template-rows: var(--size-height-12-row);
  }
`;
