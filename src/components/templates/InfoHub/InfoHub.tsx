import styled from "styled-components";
import { AllHeaders } from "../../organisms/AllHeaders";
import { NavMenu } from "../../organisms/NavMenu";
import { TecFooter } from "../../molecules/TecFooter";
import { GobFooter } from "../../molecules/GobFooter";
import { RichTextRenderer } from "../../atoms/RichTextRenderer";

export interface InfoHubProps {
  content: string;
}

export const InfoHub = ({ content }: InfoHubProps) => {
  return (
    <StyledMainContainer>
      <AllHeaders />
      <StyledInfoHubContainer>
        <StyledNavMenuWrapper>
          <NavMenu />
        </StyledNavMenuWrapper>
        <StyledInfoContainer>
          <RichTextRenderer text={content} />
        </StyledInfoContainer>
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
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: var(--size-width-4-cols) 1fr;
  gap: var(--size-gap-large);
  background-color: var(--colors-app-neutral-50);
  padding: var(--size-padding-medium) 0;
`;

const StyledNavMenuWrapper = styled.div`
  width: 100%;
  height: max-content;
  max-height: 75vh;
  box-sizing: border-box;
  position: sticky;
  top: var(--size-height-1-row);
  overflow-y: auto;
`;

const StyledInfoContainer = styled.div`
  border-radius: var(--size-border-radius-medium);
  width: 95%;
  padding: var(--size-padding-medium);
  background-color: var(--colors-app-neutral-50);
`;
