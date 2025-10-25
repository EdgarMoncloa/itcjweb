import styled from "styled-components";
import { StyledH2 } from "../../../tokens/CustomText";
import { ComponentPropsWithRef } from "react";

interface BaseTitleProps extends ComponentPropsWithRef<typeof StyledBaseTitle> {
  children: React.ReactNode;
  colorVariant?: "primary" | "secondary" | "neutral";
}

export const BaseTitle = ({ children, ...props }: BaseTitleProps) => {
  return <StyledBaseTitle {...props}>{children}</StyledBaseTitle>;
};

const StyledBaseTitle = styled(StyledH2)`
  border-bottom: 1px solid var(--colors-app-primary-300);
  color: var(--colors-app-primary-950);
  width: 100%;
  padding: 0 var(--size-padding-small);
`;
