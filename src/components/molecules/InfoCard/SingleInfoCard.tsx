import { ReactNode } from "react";
import styled from "styled-components";
export interface SingleInfoCardProps {
  variant?: "blank" | "primary";
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SingleInfoCard = ({
  variant = "primary",
  children,
  className,
  style,
}: SingleInfoCardProps) => {
  return (
    <StyledSingleInfoCard className={`${className} ${variant}`} style={style}>
      {children}
    </StyledSingleInfoCard>
  );
};

const StyledSingleInfoCard = styled.div`
  align-items: center;
  border-radius: var(--size-border-radius-medium);
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-fast) background-color;
  width: 100%;
  height: 100%;
  will-change: background-color;

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-4-row));
  }

  /* ANCHOR Variants */
  &.blank {
    background-color: var(--colors-app-neutral-50);
    border: var(--size-border-small) dashed var(--colors-app-neutral-500);
    cursor: default;
  }
  &.primary {
    background-color: var(--colors-app-neutral-50);
    border: var(--size-border-small) solid var(--colors-itcj-primary);
    cursor: pointer;

    &:hover {
      background-color: var(--colors-app-primary-200);
    }
  }
`;
