import styled, { css, keyframes } from 'styled-components';
import { StyledH6 } from '../../../tokens/CustomText';

const colorCHange = keyframes`
  to{
    color: var(--colors-app-text-light);
  }
`;
export const StyledRelevantSite = styled.a`
  border-radius: var(--size-border-radius-medium, 8px);
  border: 2px solid var(--colors-app-main-700, #c11627);
  color: var(--colors-app-text-dark);
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;

  /* Layout */
  align-items: center;
  display: flex;
  flex-shrink: 0;
  gap: 16px;
  height: var(--size-height-2-row);
  justify-content: center;
  padding: 8px;
  position: relative;
  width: 100%;

  &:hover {
    animation: ${colorCHange} 300ms ease forwards;
  }
`;

export const StyledBaseContainer = styled(StyledH6)`
  line-height: var(--line-height-small);
  display: flex;
  align-items: center;
  justify-content: center;
`;
