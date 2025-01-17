import styled from "styled-components";
import { getWithColsVar } from "../../../../types/GlobalTypes";
import { ReactNode } from "react";

export interface SimpleDualGridProps {
  firstContentWidht?: number;
  firstContent?: ReactNode;
  secondContent?: ReactNode;
}

export const SimpleDualGrid = ({
  firstContentWidht = 1,
  firstContent,
  secondContent,
}: SimpleDualGridProps) => {
  return (
    <StyledSimpleDialGrid $firstContentWidht={firstContentWidht}>
      <StyedContent>{firstContent}</StyedContent>
      <StyedContent>{secondContent}</StyedContent>
    </StyledSimpleDialGrid>
  );
};

const StyledSimpleDialGrid = styled.div<{ $firstContentWidht: number }>`
  display: grid;
  grid-template-columns: ${(p) => getWithColsVar(p.$firstContentWidht)} 1fr;
  width: 100%;
  gap: var(--size-gap-small);
`;

const StyedContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
