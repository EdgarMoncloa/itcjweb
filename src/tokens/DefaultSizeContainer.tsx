import { ReactNode } from "react";
import styled from "styled-components";

export const DefaultSizeContainer = ({ children }: { children: ReactNode }) => {
  return <StyledDefaultSizeContainer>{children}</StyledDefaultSizeContainer>;
};

const StyledDefaultSizeContainer = styled.div`
  width: 400px;
  height: 200px;
`;
