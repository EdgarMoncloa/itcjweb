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
  padding: var(--size-padding-large) var(--size-margin-xl);
  background-color: var(--colors-itcj-primary);
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
  height: var(--size-height-14-row);
`;

const StyledTitle = styled(StyledH2)`
  color: var(--colors-app-text-light);
  text-align: center;
`;

const StyledPostGraduateContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--size-gap-medium);
`;
