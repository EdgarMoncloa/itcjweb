import styled from "styled-components";

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
  padding-bottom: var(--size-padding-very-small);
`;
// Dividers
export const StyledDivider = styled.div`
  width: 100%;
  height: calc(
    var(--size-padding-small) + var(--size-padding-very-small) +
      var(--size-padding-very-small)
  );
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--size-padding-small) var(--size-padding-very-small);
  gap: var(--size-padding-very-small);
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
