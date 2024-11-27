import styled from 'styled-components';
import { ReactNode } from 'react';

export interface DualContentHoverRevealProps {
  defaultSize?: boolean;
  primaryContent: ReactNode;
  secondaryContent: ReactNode;
}

export const DualContentHoverReveal = ({
  defaultSize = false,
  primaryContent,
  secondaryContent,
}: DualContentHoverRevealProps) => {
  return (
    <StyledMainContainer className={defaultSize ? 'defaultSize' : ''}>
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
`;

const StyledSecondaryContent = styled(StyledPrimaryContent)`
  background-color: var(--colors-app-primary-100);
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: var(--transition-normal) opacity;
  will-change: opacity;
`;

const StyledMainContainer = styled.div`
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-primary);
  cursor: pointer;
  height: 100%;
  height: var(--size-height-8-row);
  overflow: hidden;
  position: relative;
  width: 100%;

  &.defaultSize {
    width: var(--size-width-8-cols);
    height: calc(var(--size-height-10-row));
  }

  &:hover ${StyledSecondaryContent} {
    opacity: 1;
    pointer-events: all;
  }
`;
