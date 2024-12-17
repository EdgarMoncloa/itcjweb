import styled from 'styled-components';
import { AllHeaders } from '../../organisms/AllHeaders';
import { NavMenu } from '../../organisms/NavMenu';
import { TecFooter } from '../../molecules/TecFooter';
import { GobFooter } from '../../molecules/GobFooter';

export interface InfoHubProps {}

export const InfoHub: React.FC<InfoHubProps> = () => {
  return (
    <StyledMainContainer>
      <AllHeaders />
      <StyledInfoHubContainer>
        <StyledNavMenuWrapper>
          <NavMenu />
        </StyledNavMenuWrapper>
        <StyledInfoContainer>Info</StyledInfoContainer>
      </StyledInfoHubContainer>
      <TecFooter />
      <GobFooter />
    </StyledMainContainer>
  );
};

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledInfoHubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledNavMenuWrapper = styled.div`
  width: var(--size-width-4-cols);
  height: max-content;
  max-height: 75vh;
  box-sizing: border-box;
  padding: var(--size-padding-small);
  position: sticky;
  top: var(--size-height-1-row);
  overflow-y: auto;
`;

const StyledInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 200vh;
  background-color: var(--colors-app-primary-500);
`;
