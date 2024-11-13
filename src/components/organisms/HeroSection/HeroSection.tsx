import styled from 'styled-components';
import {
  ContentSelector,
  ContentSelectorProps,
} from '../../atoms/ContentSelector';
import { ContentList } from '../../molecules/ContentList';
import { TransitionDisplay } from '../../atoms/TransitionDisplay';
import { ContentLink, ContentLinkProps } from '../../atoms/ContentLink';
import { useEffect, useRef, useState } from 'react';
import { useAppConfig } from '../../../store/useAppConfig';

export interface HeroSectionProps {
  contentLikItems: ContentLinkProps[];
}

type StateType = 'loading' | 'base' | 'error' | 'inTransition';

export const HeroSection = ({ contentLikItems }: HeroSectionProps) => {
  const { transition } = useAppConfig();

  const prevIndex = useRef(0);

  const [state, setState] = useState<StateType>('loading');
  const [loadedImgs, setLoadedImgs] = useState<string[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);
  const [actualIndex, setActualIndex] = useState(0);
  const [firstRenderWithImg, setFirstRenderWithImg] = useState(true);
  const hasMounted = useRef(false);

  useEffect(() => {
    let loadedCount = 0;
    const tempLoadedImages: string[] = [];

    contentLikItems.forEach((linkItem, index) => {
      const img = new Image();
      img.src = linkItem.img;
      img.onload = () => {
        tempLoadedImages[index] = linkItem.img;
        loadedCount++;

        if (loadedCount === contentLikItems.length) {
          setLoadedImgs(tempLoadedImages);
          setAllLoaded(true);
        }
      };
    });
  }, []);

  useEffect(() => {
    if (hasMounted.current === false) {
      hasMounted.current = true;
      return;
    }
    if (firstRenderWithImg === true) {
      setFirstRenderWithImg(false);
    }

    const timeout = setTimeout(() => {
      prevIndex.current = actualIndex;

      // use "normal" transition instead of "slow" to avoid flickering
      // when the user clicks on the next or previous button
      // and the animation is in the last frames
    }, transition['normal']);

    return () => {
      clearTimeout(timeout);
    };
  }, [actualIndex]);

  const contentLinkElements = contentLikItems.map((item, index) => (
    <ContentLink
      key={index}
      title={item.title}
      caption={item.caption}
      img={item.img}
      alt={item.alt}
    />
  ));

  return allLoaded === true ? (
    <StyledHero>
      <ContentList
        contentSelectorItems={contentLikItems}
        setSelectedIndex={setActualIndex}
      />
      <TransitionDisplay
        fromElement={contentLinkElements[prevIndex.current]}
        toElement={contentLinkElements[actualIndex]}
        toElementKey={`${actualIndex}`}
        animate={firstRenderWithImg === false}
      />
    </StyledHero>
  ) : (
    'Loading'
  );
};

const StyledHero = styled.div`
  align-items: center;
  background-color: var(--colors-itcj-main);
  column-gap: var(--size-gap-small);
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: var(--size-width-1-cols) 1fr;
  height: 70vh;
  justify-content: center;
  justify-items: center;
  overflow: hidden;
  padding: var(--size-margin-small) var(--size-margin-medium);
  width: 100%;
`;
