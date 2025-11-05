import { Link } from "react-router";
import styled from "styled-components";

export const StyledGobHeader = styled.header`
  height: var(--size-height-medium);
  /* overflow: hidden; */
  width: 100%;
  background-color: var(--colors-gob-primary-dark);
  display: flex;
  align-items: center;
  padding: 0 var(--size-padding-medium);
`;

export const StyledLogoMexWrapper = styled.div`
  margin-right: auto;
  height: 100%;
`;
export const StyledImgLogoMex = styled.img`
  height: var(--size-height-small);
`;

export const StyledIconWrapper = styled.div`
  color: var(--colors-app-neutral-100);
`;
