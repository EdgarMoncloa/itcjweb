import styled from 'styled-components';

export type InteractiveTriadGridSize = '1-1-1' | '2-1-2';
export interface InteractiveTriadGridProps {
  defaultSize?: boolean;
  primaryContent: React.ReactNode;
  secondaryContent: React.ReactNode;
  tertiaryContent?: React.ReactNode;
  gridSize?: InteractiveTriadGridSize;
}

export const InteractiveTriadGrid = ({
  defaultSize,
  primaryContent,
  secondaryContent,
  tertiaryContent,
  gridSize = '1-1-1',
}: InteractiveTriadGridProps) => {
  let gridClassName = `grid-${gridSize}`;
  return (
    <StyledMainWrapper
      className={[defaultSize ? 'defaultSize' : '', gridClassName].join(' ')}
    >
      <StyledMainContainer className={gridClassName}>
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
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  padding: var(--size-padding-small) 0;
  transition: var(--transition-fast) transform;
  width: 147%;
  will-change: transform;
  gap: 1%;
  transform: translateX(1%);

  &.grid-2-1-2 {
    grid-template-columns: 2fr 1fr 2fr;
    gap: 4%;
    transform: translateX(5%);
  }
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

  &.grid-2-1-2 {
    &:hover ${StyledMainContainer} {
      transform: translateX(-37%);
    }
  }
`;

const StyledBaseContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
