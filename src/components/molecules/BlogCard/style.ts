import styled from 'styled-components';
import { StyledBody1, StyledH5, StyledH6 } from '../../../tokens/CustomText';

export const StyledBlogCard = styled.a`
  /* Layout */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 2fr;
  /* width: var(--size-width-4-cols, 304px); */
  width: 100%;
  overflow: hidden;

  /* Style */
  border-radius: var(--size-border-radius-medium, 8px);
  border: var(--size-border-small, 2px) solid
    var(--colors-app-primary-700, #c11627);
  background: var(--colors-app-Background, #fcfcfc);
  cursor: pointer;
  text-decoration: none;
  color: var(--colors-app-text-dark);

  /* Main Shadow */
  box-shadow: var(--shadow-primary);
  transition: border-width var(--transition-fast);

  &:hover {
    border-width: var(--size-border-xl);
  }
`;
export const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  padding: var(--size-padding-small);
`;

export const StyledContentTitle = styled(StyledH6)`
  width: 100%;
  height: 100%;
`;

export const StyledContent = styled(StyledBody1)`
  height: 100%;
  width: 100%;
  overflow: hidden;
  line-height: calc(var(--font-size-body1) + 4px);
`;
