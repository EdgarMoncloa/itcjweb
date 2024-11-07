import styled from 'styled-components';
import { ContentSelectorProps } from '../../atoms/ContentSelector';
import { ContentList } from '../../molecules/ContentList';

export interface HeroSectionProps {
  contentSelectorItems: ContentSelectorProps[];
}

export const HeroSection = ({ contentSelectorItems }: HeroSectionProps) => {
  return (
    <StyledHero>
      <ContentList contentSelectorItems={contentSelectorItems} />
      <StyledTempMain>Menu</StyledTempMain>
    </StyledHero>
  );
};

const StyledHero = styled.div`
  width: 100%;
  background-color: var(--colors-itcj-main);
  height: 70vh;
  display: grid;
  grid-template-columns: var(--size-width-1-cols) 1fr;
  padding: var(--size-margin-small) var(--size-margin-medium);
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const StyledTempMain = styled.div`
  width: 100%;
  height: 100%;
`;
