import styled, { css } from "styled-components";
import Liebre_Icon from "/icons/Liebre_Icon.png";

export const StyledHr = styled.hr`
  border: 0;
  height: var(--size-border-xs);
  background-color: var(--colors-app-primary-700);
`;

export const StyledBlockquote = styled.blockquote`
  background-color: var(--colors-app-primary-50);
  padding: var(--size-padding-xs) var(--size-padding-medium);
  border-radius: var(--size-border-radius-small);
`;

const cssRtl = css`
  & li {
    padding-right: var(--size-padding-medium);
  }
  & li::before {
    right: 0;
  }
`;
const cssLtr = css`
  & li {
    padding-left: var(--size-padding-medium);
  }
  & li::before {
    left: 0;
  }
`;
type StyledUlProps = {
  $rtl?: boolean;
};
export const StyledUl = styled.ul<StyledUlProps>`
  padding-inline-start: 0;
  & li {
    list-style-type: none;
    position: relative;
  }
  & li::before {
    content: "";
    position: absolute;
    top: var(--size-padding-small);
    width: var(--font-size-body3);
    height: var(--font-size-body3);
    background-image: url(${Liebre_Icon});
    background-size: var(--font-size-body3) var(--font-size-body3);
  }

  ${(p) => p.$rtl && cssRtl}
  ${(p) => !p.$rtl && cssLtr}
`;

export const StyledOl = styled.ol``;
