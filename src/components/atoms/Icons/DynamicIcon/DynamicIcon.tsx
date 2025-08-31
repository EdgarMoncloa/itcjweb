import styled from "styled-components";
import { ComponentType, ReactNode, useEffect, useState } from "react";
import * as Icons from "react-icons/fa";
import { IconSize } from "../../../../types/GlobalTypes";

export interface DynamicIconProps
  extends React.ComponentPropsWithRef<typeof StyledIconWrapper> {
  icon?: React.ReactNode | string;
  colorVariant?: "primary" | "neutral" | "light";
  size?: IconSize;
}

export const DynamicIcon = ({
  icon,
  colorVariant,
  size = "medium",
  ...rest
}: DynamicIconProps) => {
  let iconElement: ReactNode = icon;

  if (typeof icon === "string") {
    const IconComponent = (Icons as Record<string, React.ComponentType>)[icon];

    if (!IconComponent) {
      console.error(`El ícono "${icon}" no existe en react-icons/fa`);
      iconElement = null;
    } else {
      iconElement = <IconComponent />;
    }
  }

  return (
    <StyledIconWrapper
      {...rest}
      className={colorVariant && colorVariant}
      $size={size}
    >
      {iconElement}
    </StyledIconWrapper>
  );
};

const StyledIconWrapper = styled.div<{ $size?: IconSize }>`
  align-items: center;
  display: flex;
  font-size: var(--size-icon-${(props) => props.$size});
  height: var(--size-icon-${(props) => props.$size});
  width: var(--size-icon-${(props) => props.$size});
  justify-content: center;

  /* Variants */
  &.primary {
    color: var(--colors-app-primary-700);
  }
  &.neutral {
    color: var(--colors-app-text-dark);
  }
  &.light {
    color: var(--colors-app-text-light);
  }
`;
