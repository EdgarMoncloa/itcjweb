import styled, { keyframes } from "styled-components";

export interface DropdownContainerProps {
  primaryContent: React.ReactNode;
  secondaryContent: React.ReactNode;
  showContent?: boolean;
  defaultSize?: boolean;
}

export const DropdownContainer = ({
  primaryContent,
  secondaryContent,
  showContent = false,
  defaultSize = false,
}: DropdownContainerProps) => {
  return (
    <StyledDropdownContainer className={defaultSize ? "defaultSize" : ""}>
      <StyledPrimaryContent>{primaryContent}</StyledPrimaryContent>

      <StyledSecondaryContent className={showContent ? "showContent" : ""}>
        {secondaryContent}
      </StyledSecondaryContent>
    </StyledDropdownContainer>
  );
};

const StyledDropdownContainer = styled.div`
  width: 100%;
  height: max-content;

  &.defaultSize {
    width: var(--size-width-6-cols);
  }
`;

const StyledPrimaryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const showContentAnimation = keyframes`
  0% {
    opacity: 0;
    pointer-events: none;
  }
  100% {
    opacity: 1;
    pointer-events: all;
  }
`;
const hideContentAnimation = keyframes`
  0% {
    opacity: 1;
    pointer-events: all;
  }
  100% {
    opacity: 0;
    pointer-events: none;
  }
`;

const StyledSecondaryContent = styled.div`
  animation: ${hideContentAnimation} var(--transition-normal) forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  opacity: 0.5;
  pointer-events: none;
  transition: max-height var(--transition-fast);

  &.showContent {
    animation: ${showContentAnimation} var(--transition-normal) forwards;
    /* TODO: Solve animation size */
    max-height: calc(var(--size-height-16-rows) * 3);
  }
`;
