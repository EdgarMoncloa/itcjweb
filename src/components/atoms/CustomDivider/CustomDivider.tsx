import React from 'react';
import {
  StyledBottomBar,
  StyledContentContainer,
  StyledDivider,
  StyledDividerContainer,
  StyledMainBar,
} from './style';
import { StyledH5 } from '../../../tokens/CustomText';

type CustomDividerProps = {
  content?: string | React.ReactNode;
};

export const CustomDivider = ({ content }: CustomDividerProps) => {
  return (
    <StyledDividerContainer>
      <StyledDivider>
        <StyledMainBar />
        <StyledBottomBar />
      </StyledDivider>
      {content && (
        <StyledContentContainer>
          <StyledH5>{content}</StyledH5>
        </StyledContentContainer>
      )}
      <StyledDivider>
        <StyledMainBar />
        <StyledBottomBar />
      </StyledDivider>
    </StyledDividerContainer>
  );
};
