import styled from 'styled-components';
import {
  ContentSelector,
  ContentSelectorProps,
} from '../../atoms/ContentSelector';
import { ContentList } from '../../molecules/ContentList';
import { TransitionDisplay } from '../../atoms/TransitionDisplay';
import { ContentLink } from '../../atoms/ContentLink';

export interface HeroSectionProps {
  contentSelectorItems: ContentSelectorProps[];
}

export const HeroSection = ({ contentSelectorItems }: HeroSectionProps) => {
  const contentLinkElements = contentSelectorItems.map((item, index) => (
    <ContentLink
      key={index}
      title={item.title}
      caption={item.caption}
      img='https://picsum.photos/200/300'
    />
  ));
  const fromElement = <StyledFromELement>Primer Elemento</StyledFromELement>;
  const toElement = <StyledToElement>Segundo Elemento</StyledToElement>;

  return (
    <StyledHero>
      <ContentList contentSelectorItems={contentSelectorItems} />
      <TransitionDisplay
        fromElement={fromElement}
        toElement={contentLinkElements[1]}
      />
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

const StyledFromELement = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--colors-app-main-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-h1);
`;

const StyledToElement = styled(StyledFromELement)`
  background-color: var(--colors-app-secondary-300);
`;
