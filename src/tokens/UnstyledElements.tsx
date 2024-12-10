import styled, { css } from 'styled-components';

const cssUnstyled = css`
  height: 100%;
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;

export const StyledUnstyledButton = styled.button`
  ${cssUnstyled}
`;
