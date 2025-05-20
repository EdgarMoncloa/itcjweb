import styled, { useTheme } from "styled-components";
import { ContentList } from "../../molecules/ContentList";
import { TransitionDisplay } from "../../atoms/Animations/TransitionDisplay";
import { ContentLink, ContentLinkProps } from "../../atoms/ContentLink";
import { useEffect, useRef, useState } from "react";
import { TransitionDisplay_TransitionType } from "../../atoms/Animations/TransitionDisplay/TransitionDisplay.types";
import { CSS_VAR_DURATION } from "../../../types/GlobalTypes";
import { ThemeType } from "../../../tokens/theme";

export interface HeroSectionProps {
  contentLikItems: ContentLinkProps[];
  defaultSize?: boolean;
  listVariant?: "Bullets" | "DynamicBentoGrid";
}

export const HeroSection = ({
  contentLikItems,
  defaultSize = false,
}: HeroSectionProps) => {
  const theme = useTheme() as ThemeType;

  const prevIndex = useRef(0);

  const [actualIndex, setActualIndex] = useState(0);
  const [firstRenderWithImg, setFirstRenderWithImg] = useState(true);
  const hasMounted = useRef(false);

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
    }, theme.duration.normal * 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [actualIndex]);

  const contentLinkElements = contentLikItems.map((item, index) => (
    <ContentLink
      key={`${item.title}-${index}`}
      title={item.title}
      caption={item.caption}
      img={item.img}
      alt={item.alt}
    />
  ));
  return (
    <StyledHero className={defaultSize ? "defaultSize" : ""}>
      <ContentList
        contentSelectorItems={contentLikItems}
        setSelectedIndex={setActualIndex}
      />
      <TransitionDisplay
        fromElement={contentLinkElements[prevIndex.current]}
        toElement={contentLinkElements[actualIndex]}
        toElementKey={`${actualIndex}`}
        animate={firstRenderWithImg === false}
        transitionType={TransitionDisplay_TransitionType.circleFromCenter}
        delay={CSS_VAR_DURATION.none}
      />
    </StyledHero>
  );
};

const StyledHero = styled.div`
  align-items: center;
  background-color: var(--colors-itcj-primary);
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

  &.defaultSize {
    height: var(--size-height-10-rows);
    width: var(--size-width-10-cols);
  }
`;
