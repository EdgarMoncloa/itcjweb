import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DynamicGrid_FillMethod } from "./DynamicGrid.types";
import { CSS_VAR_GAP } from "../../../../types/GlobalTypes";

export interface DynamicGrid_Props {
  items: React.ReactNode[];
  blankItem?: React.ReactNode;
  className?: string;
  numColumns?: number;
  fillMethod?: DynamicGrid_FillMethod;
  gap?: CSS_VAR_GAP;
  style?: React.CSSProperties;
}

const getItemsWithFills = (
  fillMethod: DynamicGrid_FillMethod,
  items: React.ReactNode[],
  columns: number,
  blankItem: React.ReactNode
) => {
  const numOfItemsInLastCol = items.length % columns;
  const numItemsWithFilledCols = items.length - numOfItemsInLastCol;
  const numOfBlanks = columns - numOfItemsInLastCol;
  const shouldAddCenterBlank = columns % 2 !== 0 && numOfBlanks % 2 !== 0;

  let itemsWithFills: ReactNode[] = [];
  switch (fillMethod) {
    case "start":
      itemsWithFills = [
        ...items.slice(0, numItemsWithFilledCols),
        ...Array.from(
          {
            length: numOfItemsInLastCol !== 0 ? numOfBlanks : 0,
          },
          () => blankItem
        ),
        ...items.slice(numItemsWithFilledCols),
      ];
      break;
    case "end":
      itemsWithFills = [
        ...items,
        ...Array.from(
          {
            length: numOfItemsInLastCol !== 0 ? numOfBlanks : 0,
          },
          () => blankItem
        ),
      ];
      break;
    case "center":
      if (numOfBlanks === columns) {
        itemsWithFills = [...items];
      } else {
        itemsWithFills = [
          ...items.slice(0, numItemsWithFilledCols),
          ...Array.from(
            { length: Math.floor(numOfBlanks / 2) },
            () => blankItem
          ),
          ...items.slice(numItemsWithFilledCols),
          ...Array.from(
            { length: Math.ceil(numOfBlanks / 2) },
            () => blankItem
          ),
        ];
        if (shouldAddCenterBlank) {
          const centerIndex = numItemsWithFilledCols + Math.floor(columns / 2);
          itemsWithFills.splice(centerIndex, 0, blankItem);
          itemsWithFills.splice(itemsWithFills.length - 1, 1);
        }
      }
      break;
    default:
      break;
  }
  return itemsWithFills;
};

export const DynamicGrid = ({
  items,
  blankItem,
  className,
  numColumns = 5,
  fillMethod = DynamicGrid_FillMethod.Center,
  gap = CSS_VAR_GAP.none,
  style,
}: DynamicGrid_Props) => {
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const [columns, setColumns] = useState(numColumns);

  const itemsWithFills: ReactNode[] = getItemsWithFills(
    fillMethod,
    items,
    columns,
    blankItem
  );

  useEffect(() => {
    setColumns(numColumns);
  }, [numColumns, items]);

  return (
    <StyledDynamicGrid
      ref={gridContainerRef}
      className={`gap-${gap} ${className}`}
      style={style}
      $numCols={numColumns}
      $gap={gap}
    >
      {itemsWithFills}
    </StyledDynamicGrid>
  );
};

type StyledDynamicGridProps = {
  $numCols: number;
  $gap: CSS_VAR_GAP;
};
const StyledDynamicGrid = styled.div<StyledDynamicGridProps>`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$numCols}, 1fr);
  align-items: center;
  justify-content: center;
  overflow: hidden;
  gap: var(${(props) => props.$gap});
`;
