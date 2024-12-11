import styled from 'styled-components';

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
    <StyledDropdownContainer className={defaultSize ? 'defaultSize' : ''}>
      <StyledPrimaryContent>{primaryContent}</StyledPrimaryContent>

      <StyledSecondaryContent className={showContent ? 'showContent' : ''}>
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
  border-radius: var(--size-border-radius-medium);
`;

const StyledSecondaryContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: max-content;
  width: 100%;
  max-height: 0;
  overflow: hidden;
  opacity: 0.5;
  transition:
    max-height var(--transition-fast),
    opacity var(--transition-normal);

  &.showContent {
    max-height: var(--size-height-10-row);
    opacity: 1;
  }
`;
