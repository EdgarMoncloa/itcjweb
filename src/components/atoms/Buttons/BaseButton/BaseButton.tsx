import { ComponentPropsWithRef, ReactNode } from "react";
import styled from "styled-components";

interface BaseButtonProps
  extends ComponentPropsWithRef<typeof StyledBaseButton> {
  icon?: ReactNode;
  children?: ReactNode;
  onClick?: () => void;
}

export const BaseButton = ({ icon, children, ...props }: BaseButtonProps) => {
  return (
    <StyledBaseButton {...props}>
      {icon}
      {children}
    </StyledBaseButton>
  );
};

const StyledBaseButton = styled.button`
  border: var(--size-border-small) solid var(--colors-app-primary-100);
  background-color: var(--colors-app-primary-50);
  padding: var(--size-padding-medium) var(--size-padding-large);
  cursor: pointer;
  transition: all var(--transition-normal);
  border-radius: var(--size-border-radius-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--size-padding-small);

  &:hover {
    background-color: var(--colors-app-primary-100);
  }
`;
