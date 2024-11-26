import styled from 'styled-components';

export interface InteractiveTriadGridProps {
  defaultSize?: boolean;
  primaryContent: React.ReactNode | React.ReactNode[];
  secondaryContent: React.ReactNode | React.ReactNode[];
  tertiaryContent?: React.ReactNode | React.ReactNode[];
}

export const InteractiveTriadGrid = ({
  defaultSize,
  primaryContent,
  secondaryContent,
  tertiaryContent,
}: InteractiveTriadGridProps) => {
  return (
    <StyledMainWrapper className={defaultSize ? 'defaultSize' : ''}>
      <StyledMainContainer>
        <StyledFirstContainer>{primaryContent}</StyledFirstContainer>
        <StyledSecondContainer>{secondaryContent}</StyledSecondContainer>
        {tertiaryContent && (
          <StyledThirdContainer>{tertiaryContent}</StyledThirdContainer>
        )}
      </StyledMainContainer>
    </StyledMainWrapper>
  );
};

const StyledMainContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 2%;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  justify-content: center;
  padding: var(--size-padding-small);
  transition: var(--transition-fast) transform;
  width: 145%;
  will-change: transform;
  transform: translateX(1.5%);
`;

const StyledMainWrapper = styled.div`
  align-items: center;
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-primary);
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-fast) background-color;
  width: 100%;
  height: calc(var(--size-height-4-row));
  will-change: background-color;

  &:hover {
    background-color: var(--colors-app-primary-100);
  }

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-4-row));
  }

  &:hover ${StyledMainContainer} {
    transform: translateX(-33%);
  }
`;

const StyledFirstContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-gap-small);
  width: 100%;
  height: 100%;
`;

const StyledSecondContainer = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--size-icon-4xl);
  height: var(--size-icon-4xl);
  justify-content: center;
  width: var(--size-icon-4xl);
  color: var(--colors-app-primary-700);
  width: 100%;
  height: 100%;
`;

const StyledThirdContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-gap-small);
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
