import styled from 'styled-components';
import { StyledH5 } from '../../../tokens/CustomText';

export const StyledDividerContainer = styled.div`
  width: 100%;
  height: max-content;
  align-items: center;
  align-content: center;
  display: flex;
`;

// Content
export const StyledContentContainer = styled.div`
  margin: 0 var(--size-padding-small);
  padding-bottom: var(--size-padding-xs);
  width: max-content;
`;
export const StyledTitle = styled(StyledH5)`
  width: max-content;
`;
// Dividers
export const StyledDivider = styled.div`
  width: 100%;
  height: calc(
    var(--size-padding-small) + var(--size-padding-xs) + var(--size-padding-xs)
  );
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--size-padding-small) var(--size-padding-xs);
  gap: var(--size-padding-xs);
`;

export const StyledMainBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--colors-app-main-700);
`;

export const StyledBottomBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--colors-app-main-700);
`;
