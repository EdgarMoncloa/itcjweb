import React, { ReactNode } from "react";
import styled, { css } from "styled-components";
import { StyledH2 } from "../../../../tokens/CustomText";

export interface Item {
  content: ReactNode;
  icon: ReactNode;
}

export interface DiagramTimelineBentoProps {
  items?: Array<{
    content: ReactNode;
    icon?: ReactNode;
  }>;
  title: ReactNode;
  haveIcons?: boolean;
}

export const DiagramTimelineBento = ({
  items,
  title = <StyledH2>Title</StyledH2>,
  haveIcons = false,
}: DiagramTimelineBentoProps) => {
  return (
    <StyledDiagramWrapper>
      {title && (
        <StyledCenteredItem>
          <StyledContent>{title}</StyledContent>
        </StyledCenteredItem>
      )}
      <StyledDiagramTimeLineBento>
        {items?.map((item, idx) => {
          return (
            <StyledItem key={idx} className={haveIcons ? "withIcons" : ""}>
              {haveIcons && <StyledTitle>{item.icon}</StyledTitle>}
              <StyledMiddleContainer>
                <StyledMiddleCircle>{idx + 1}</StyledMiddleCircle>
              </StyledMiddleContainer>
              <StyledContentWrapper>
                <StyledContent>{item.content}</StyledContent>
              </StyledContentWrapper>
            </StyledItem>
          );
        })}
      </StyledDiagramTimeLineBento>
    </StyledDiagramWrapper>
  );
};
const StyledDiagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--size-padding-medium);
  border-radius: var(--size-border-radius-large);
  border: var(--size-border-small) solid var(--colors-app-primary-700);
`;

const StyledDiagramTimeLineBento = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: var(--size-height-5-row);
  padding: 0 var(--size-padding-small);
`;

const cssBaseFrame = css`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--colors-app-neutral-50);
  border: var(--size-border-small) solid var(--colors-app-primary-700);
  overflow: hidden;
  padding: var(--size-padding-small);
  border-radius: var(--size-border-radius-large);
`;

// ANCHOR CENTERED
const StyledCenteredItem = styled.div`
  ${cssBaseFrame}
  margin-bottom: var(--size-margin-medium);
  border: none;
  background-color: var(--colors-app-primary-200);
  text-align: center;
`;

// ANCHOR BASE FRAME

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: var(--size-width-2-cols) 5fr;
  justify-content: center;
  align-items: center;
  justify-items: center;

  &.withIcons {
    grid-template-columns: 1fr var(--size-width-2-cols) 5fr;
  }
`;

const StyledTitle = styled.div`
  ${cssBaseFrame}
`;

const StyledMiddleContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--colors-app-primary-200);
`;

const StyledMiddleCircle = styled.div`
  width: var(--size-icon-4xl);
  height: var(--size-icon-4xl);
  border-radius: 50%;
  background-color: var(--colors-app-neutral-100);
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-h1);
  color: var(--colors-app-primary-900);
`;

const StyledContentWrapper = styled.div`
  ${cssBaseFrame}
`;
const StyledContent = styled.div`
  padding: var(--size-padding-small) var(--size-padding-medium);
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
