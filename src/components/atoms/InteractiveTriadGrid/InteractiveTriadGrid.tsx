import styled from 'styled-components';

export interface InteractiveTriadGridProps {
  defaultSize?: boolean;
  primaryContent: React.ReactNode;
  secondaryContent: React.ReactNode;
  tertiaryContent?: React.ReactNode;
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
        <StyledBaseContainer>{primaryContent}</StyledBaseContainer>
        <StyledBaseContainer>{secondaryContent}</StyledBaseContainer>
        {tertiaryContent && (
          <StyledBaseContainer>{tertiaryContent}</StyledBaseContainer>
        )}
      </StyledMainContainer>
    </StyledMainWrapper>
  );
};

const StyledMainContainer = styled.div`
  display: grid;
  gap: var(--size-gap-small);
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  padding: var(--size-padding-small) 0;
  transform: translateX(var(--size-gap-small));
  transition: var(--transition-fast) transform;
  width: 147%;
  will-change: transform;
`;

const StyledMainWrapper = styled.div`
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

  &:hover ${StyledMainContainer} {
    transform: translateX(-33%);
  }

  &.defaultSize {
    width: var(--size-width-8-cols);
    height: calc(var(--size-height-4-row));
  }
`;

const StyledBaseContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
