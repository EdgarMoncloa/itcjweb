import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  margin-top: var(--size-padding-small);
  border: var(--size-border-small) solid var(--colors-app-primary-700);
  border-radius: var(--size-border-radius-small);
  width: max-content;
`;

export const StyledTable = styled.table`
  text-align: center;
  border-collapse: collapse;

  thead {
    background-color: var(--colors-app-primary-300);
    border-bottom: var(--size-border-small) solid var(--colors-app-primary-700);
  }

  thead th {
    padding: var(--size-padding-small) var(--size-padding-medium);
  }

  & tbody {
    border-radius: var(--size-border-radius-medium);
    & tr {
      &:nth-child(even) {
        background-color: var(--colors-app-primary-100);
      }
    }
  }
`;
