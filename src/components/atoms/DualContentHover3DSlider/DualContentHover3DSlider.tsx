import styled from 'styled-components';

export interface DualContentHover3DSliderProps {
  defaultSize?: boolean;
  colorVariant?: 'primary';
}

export const DualContentHover3DSlider = ({
  colorVariant = 'primary',
  defaultSize = false,
}: DualContentHover3DSliderProps) => {
  return (
    <StyledMainContainer
      className={[colorVariant, defaultSize && 'defaultSize'].join(' ')}
    >
      <StyledLeftContainer>Content 1</StyledLeftContainer>
      <StyledRightContainer>Content 2</StyledRightContainer>
      <Styled3DSlider />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  perspective: 1000px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  z-index: var(--z-index-above-background);
  gap: var(--size-gap-medium);
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-primary);
  overflow: visible;
  width: 100%;
  height: 100%;
  position: relative;

  &.defaultSize {
    width: var(--size-width-6-cols);
    height: var(--size-height-7-row);
  }
`;

const StyledContentContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: color var(--transition-slow);
`;

const StyledLeftContainer = styled(StyledContentContainer)`
  ${StyledMainContainer}:hover & {
    color: var(--colors-app-text-dark);
  }
  /* Variants */
  .primary & {
    color: var(--colors-app-text-light);
  }
`;

const StyledRightContainer = styled(StyledContentContainer)`
  ${StyledMainContainer}:hover & {
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
    transform: rotateY(180deg);
  }

  /* Variants */
  .primary & {
    background-color: var(--colors-itcj-primary);
  }
`;
