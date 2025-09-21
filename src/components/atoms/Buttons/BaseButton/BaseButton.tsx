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
      {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
      <StyledContent>{children}</StyledContent>
    </StyledBaseButton>
  );
};

const StyledBaseButton = styled.button`
  border: var(--size-border-small) solid var(--colors-app-primary-100);
  background-color: var(--colors-app-primary-50);
  padding: var(--size-padding-small) var(--size-padding-medium);
  cursor: pointer;
  transition: all var(--transition-normal);
  border-radius: var(--size-border-radius-medium);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: var(--size-padding-small);
  text-align: left;
  width: 100%;
  min-height: var(--size-height-1-rows);

  &:hover {
    background-color: var(--colors-app-primary-100);
  }
`;
const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--colors-app-primary-700);
  font-size: var(--size-icon-medium);
`;
const StyledContent = styled.div``;
