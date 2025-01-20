import { ReactNode } from "react";
import styled from "styled-components";
export interface SingleInfoCardProps {
  children?: ReactNode;
  // colorScheme?: "primary" | "primary-intercalated" | "neutral";
}

export const SingleInfoCard = ({ children }: SingleInfoCardProps) => {
  return <StyledSingleInfoCard>{children}</StyledSingleInfoCard>;
};

const StyledSingleInfoCard = styled.div`
  align-items: center;
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-primary);
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-fast) background-color;
  width: 100%;
  height: 100%;
  will-change: background-color;

  &:hover {
    background-color: var(--colors-app-primary-100);
  }

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-4-row));
  }
`;
