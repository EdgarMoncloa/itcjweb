import { ReactNode } from 'react';
import styled from 'styled-components';

export interface DualContentHover3DSliderProps {
  firstContent: ReactNode;
  secondContent: ReactNode;
  defaultSize?: boolean;
  colorVariant?: 'primary';
}

export const DualContentHover3DSlider = ({
  firstContent,
  secondContent,
  colorVariant = 'primary',
  defaultSize = false,
}: DualContentHover3DSliderProps) => {
  return (
    <StyledMainContainer
      className={[colorVariant, defaultSize && 'defaultSize'].join(' ')}
    >
      <StyledLeftContainer>{firstContent}</StyledLeftContainer>
      <StyledRightContainer>{secondContent}</StyledRightContainer>
      <Styled3DSlider />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-primary);
  display: grid;
  gap: var(--size-gap-medium);
  grid-template-columns: 1fr 1fr;
  height: 100%;
  overflow: visible;
  perspective: 1000px;
  position: relative;
  width: 100%;
  z-index: var(--z-index-above-background);

  &.defaultSize {
    width: var(--size-width-6-cols);
    height: var(--size-height-7-row);
  }
`;

const StyledContentContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: color var(--transition-fast);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLeftContainer = styled(StyledContentContainer)`
  transition-delay: var(--delay-fast);
  ${StyledMainContainer}:hover & {
    transition-delay: var(--delay-very-fast);
    color: var(--colors-app-text-dark);
  }
  /* Variants */
  .primary & {
    color: var(--colors-app-text-light);
  }
`;

const StyledRightContainer = styled(StyledContentContainer)`
  transition-delay: var(--delay-very-fast);
  ${StyledMainContainer}:hover & {
    transition-delay: var(--delay-fast);
    color: var(--colors-app-text-light);
  }
  /* Variants */
  .primary & {
    color: var(--colors-app-text-dark);
  }
`;

const Styled3DSlider = styled.div`
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: var(--z-index-background-highest);
  transform-origin: top right;
  transition: transform var(--transition-slow);
  border-start-start-radius: var(--size-border-radius-medium);

  ${StyledMainContainer}:hover & {
    transform: rotateY(-180deg);
  }

  /* Variants */
  .primary & {
    background-color: var(--colors-itcj-primary);
  }
`;
