import React from 'react';
import styled from 'styled-components';
import { StyledH5 } from '../../../tokens/CustomText';

type CustomDividerProps = {
  content?: string | React.ReactNode;
  dividerOnSides?: boolean;
};

export const CustomDivider = ({
  content,
  dividerOnSides,
}: CustomDividerProps) => {
  let contentElement = content && (
    <StyledContentContainer as={StyledH5}>
      <StyledTitle>{content}</StyledTitle>
    </StyledContentContainer>
  );

  if (dividerOnSides) {
    contentElement = (
      <>
        <StyledDividerOnSides as={StyledH5}>
          <StyledTitle>{content}</StyledTitle>
        </StyledDividerOnSides>
        <StyledDivider>
          <StyledMainBar />
          <StyledBottomBar />
        </StyledDivider>
      </>
    );
  }

  return (
    <StyledDividerContainer>
      <StyledDivider>
        <StyledMainBar>{!dividerOnSides && contentElement}</StyledMainBar>
        <StyledBottomBar />
      </StyledDivider>
      {dividerOnSides && contentElement}
    </StyledDividerContainer>
  );
};

export const StyledDividerContainer = styled.div`
  width: 100%;
  height: max-content;
  align-items: center;
  align-content: center;
  display: flex;
`;

// ANCHOR Content
const StyledContentContainer = styled.div`
  margin: 0 var(--size-padding-small);
  padding-bottom: var(--size-padding-xs);
  width: 100%;
`;
const StyledTitle = styled(StyledH5)`
  width: 100%;
  text-align: center;
  color: var(--colors-app-text-light);
`;
// ANCHOR Dividers
const StyledDivider = styled.div`
  overflow: hidden;
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: var(--size-padding-xs);
`;
const StyledDividerOnSides = styled(StyledContentContainer)`
  width: default;
`;

const StyledMainBar = styled.div`
  width: 100%;
  min-height: var(--size-padding-small);
  background-color: var(--colors-app-primary-700);
`;

const StyledBottomBar = styled.div`
  width: 100%;
  height: var(--size-border-medium);
  background-color: var(--colors-app-primary-700);
`;
