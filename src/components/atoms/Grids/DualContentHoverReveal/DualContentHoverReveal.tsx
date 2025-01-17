import styled from 'styled-components';
import { ReactNode } from 'react';
import { colorVariant } from '../../../../types/GlobalTypes';

type InfoCardColorVariants = Omit<colorVariant, 'secondary'>;

export interface DualContentHoverRevealProps {
  defaultSize?: boolean;
  primaryContent: ReactNode;
  secondaryContent: ReactNode;
  colorVariant?: InfoCardColorVariants;
}

export const DualContentHoverReveal = ({
  defaultSize = false,
  primaryContent,
  secondaryContent,
  colorVariant = 'primary',
}: DualContentHoverRevealProps) => {
  return (
    <StyledMainContainer
      className={[defaultSize ? 'defaultSize' : '', colorVariant].join(' ')}
    >
      <StyledPrimaryContent>{primaryContent}</StyledPrimaryContent>
      <StyledSecondaryContent>{secondaryContent}</StyledSecondaryContent>
    </StyledMainContainer>
  );
};

const StyledPrimaryContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
  height: 100%;
  justify-content: center;
  padding: var(--size-padding-medium);
  width: 100%;

  /* Variants */
  .neutral & {
    background-color: var(--colors-app-neutral-100);
  }
`;

const StyledSecondaryContent = styled(StyledPrimaryContent)`
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: var(--transition-normal) opacity;
  will-change: opacity;

  /* Variants */
  .primary & {
    background-color: var(--colors-app-primary-100);
  }

  .neutral & {
    color: var(--colors-app-text-light);
    background-color: var(--colors-app-neutral-900);
  }
`;

const StyledMainContainer = styled.div`
  cursor: pointer;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: var(--size-border-radius-medium);

  /* Pseudos */
  &:hover ${StyledSecondaryContent} {
    opacity: 1;
    pointer-events: all;
  }

  /* Variants */
  &.defaultSize {
    width: var(--size-width-8-cols);
    height: calc(var(--size-height-10-row));
  }

  &.primary {
    border: var(--size-border-small) solid var(--colors-itcj-primary);
    border-radius: var(--size-border-radius-medium);
  }
  &.neutral {
    border: none;
  }
`;
