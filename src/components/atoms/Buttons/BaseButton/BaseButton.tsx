import { ComponentPropsWithRef, ReactNode } from "react";
import styled from "styled-components";
import { COLOR_VARIANT } from "../../../../types/GlobalTypes";

interface BaseButtonProps
  extends ComponentPropsWithRef<typeof StyledBaseButton> {
  icon?: ReactNode;
  children?: ReactNode;
  colorVariant?: COLOR_VARIANT.primary | COLOR_VARIANT.neutral;
  onClick?: () => void;
}

export const BaseButton = ({
  icon,
  children,
  colorVariant = COLOR_VARIANT.primary,
  ...props
}: BaseButtonProps) => {
  return (
    <StyledBaseButton
      {...props}
      className={`${props.className} ${colorVariant}`}
    >
      {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
      <StyledContent>{children}</StyledContent>
    </StyledBaseButton>
  );
};

const StyledBaseButton = styled.button`
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

  /* ANCHOR Variants */
  &.${COLOR_VARIANT.primary} {
    border: var(--size-border-small) solid var(--colors-app-primary-100);
    background-color: var(--colors-app-primary-50);

    &:hover {
      background-color: var(--colors-app-primary-100);
    }
  }
  &.${COLOR_VARIANT.secondary} {
    border: var(--size-border-small) solid var(--colors-app-secondary-100);
    background-color: var(--colors-app-secondary-50);

    &:hover {
      background-color: var(--colors-app-secondary-100);
    }
  }
  &.${COLOR_VARIANT.neutral} {
    border: var(--size-border-small) solid var(--colors-app-neutral-100);
    background-color: var(--colors-app-neutral-50);

    &:hover {
      background-color: var(--colors-app-neutral-100);
    }
  }
`;
const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--size-icon-medium);

  /* Variants */
  .${COLOR_VARIANT.primary} & {
    color: var(--colors-app-primary-700);
  }
  .${COLOR_VARIANT.secondary} & {
    color: var(--colors-app-secondary-700);
  }
  .${COLOR_VARIANT.neutral} & {
    color: var(--colors-app-neutral-700);
  }
`;
const StyledContent = styled.div``;
