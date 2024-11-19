import styled, { css } from 'styled-components';
import { TextTypes } from '../types/GlobalTypes';

const defaultTextStyle = css`
  margin: none;
`;

export const StyledH1 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-h1);
`;
export const StyledH2 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-h2);
`;
export const StyledH3 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-h3);
`;
export const StyledH4 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-h4);
`;
export const StyledH5 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-h5);
`;
export const StyledH6 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-h6);
`;
export const StyledBody1 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-body1);
`;
export const StyledBody2 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-body2);
`;
export const StyledBody3 = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-body3);
`;
export const StyledTextButton = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-body3);
  letter-spacing: 1.25px;
  font-weight: lighter;
`;
export const StyledOverline = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-overline);
  letter-spacing: 1.5px;
  font-weight: lighter;
`;
export const StyledTextCaption = styled.div`
  ${defaultTextStyle}
  font-size: var(--font-size-overline);
  letter-spacing: 0.4px;
  font-weight: lighter;
`;

export const getStyledTextByName = (name: TextTypes) => {
  switch (name) {
    case 'H1':
      return StyledH1;
    case 'H2':
      return StyledH2;
    case 'H3':
      return StyledH3;
    case 'H4':
      return StyledH4;
    case 'H5':
      return StyledH5;
    case 'H6':
      return StyledH6;
    case 'body1':
      return StyledBody1;
    case 'body2':
      return StyledBody2;
    case 'body3':
      return StyledBody3;
    case 'button':
      return StyledTextButton;
    case 'caption':
      return StyledTextCaption;
    case 'overline':
      return StyledOverline;
  }
};
