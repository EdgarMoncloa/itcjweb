import styled from "styled-components";

export const StyledRelevantSite = styled.div`
  border-radius: var(--size-border-radius-medium, 8px);
  border: 2px solid var(--colors-app-main-700, #c11627);

  /* Layout */
  display: flex;
  width: 256px;
  height: 64px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`;

export const StyledIcon = styled.div`
  height: 100%;
  width: 100%;
`;
