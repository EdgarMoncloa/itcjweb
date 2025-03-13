import styled from "styled-components";
import { getWithColsVar } from "../../../../types/GlobalTypes";
import { ReactNode } from "react";

export interface SimpleDualGridProps {
  firstContentWidht?: number;
  firstContent?: ReactNode;
  secondContent?: ReactNode;
}

export const SimpleDualGrid = ({
  firstContentWidht = 8,
  firstContent,
  secondContent,
}: SimpleDualGridProps) => {
  return (
    <StyledSimpleDualGrid $firstContentWidht={firstContentWidht}>
      <StyedContent>{firstContent}</StyedContent>
      <StyedContent>{secondContent}</StyedContent>
    </StyledSimpleDualGrid>
  );
};

const getGridTemplateColumns = (firstContentWidht: number) => {
  return `
    ${firstContentWidht}fr
    ${17 - firstContentWidht}fr
  `;
};
const StyledSimpleDualGrid = styled.div<{ $firstContentWidht: number }>`
  display: grid;
  width: 100%;
  height: 100%;
  gap: var(--size-gap-small);

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
    grid-template-columns: ${(p) =>
      getGridTemplateColumns(p.$firstContentWidht)};
  }
`;

const StyedContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;
