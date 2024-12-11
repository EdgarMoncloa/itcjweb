import styled, { css } from 'styled-components';

export interface BorderHoverRevealProps {
  children?: React.ReactNode;
  defaultSize?: boolean;
}

export const BorderHoverReveal = ({
  children,
  defaultSize = false,
}: BorderHoverRevealProps) => {
  return (
    <StyledBorderHoverReveal className={defaultSize ? 'defaultSize' : ''}>
      <StyledContent>{children}</StyledContent>
      <StyledBorderX />
      <StyledBorderY />
    </StyledBorderHoverReveal>
  );
};

const StyledBorderHoverReveal = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  .defaultSize {
    width: var(--size-width-5-cols);
    height: var(--size-height-4-row);
  }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`;

const StyledBorderBase = css`
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  pointer-events: none;
  border-radius: 0;
  opacity: 0;
  transition:
    transform var(--transition-fast),
    border-radius var(--transition-fast),
    opacity var(--transition-fast);

  ${StyledBorderHoverReveal}:hover & {
    transform: translateX(0);
    border-radius: var(--size-border-radius-medium);
    opacity: 1;
  }
`;

const StyledBorderX = styled.div`
  &::after {
    ${StyledBorderBase};
    border-top: var(--size-border-small) solid var(--colors-app-primary-600);
    transform: translateX(-100%);
  }
  &::before {
    ${StyledBorderBase};
    border-bottom: var(--size-border-small) solid var(--colors-app-primary-600);
    transform: translateX(100%);
    /* transition-delay: calc(var(--delay-fast) * 1); */
  }
`;
const StyledBorderY = styled.div`
  &::after {
    ${StyledBorderBase};
    transform: translateY(-100%);
    border-right: var(--size-border-small) solid var(--colors-app-primary-600);
    /* transition-delay: calc(var(--delay-fast) * 0.5); */
  }
  &::before {
    ${StyledBorderBase};
    transform: translateY(100%);
    border-left: var(--size-border-small) solid var(--colors-app-primary-600);
    /* transition-delay: calc(var(--delay-fast) * 2); */
  }
`;
