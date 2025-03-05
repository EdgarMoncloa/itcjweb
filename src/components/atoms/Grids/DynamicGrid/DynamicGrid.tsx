import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

export interface DynamicGridProps {
  items: React.ReactNode[];
  itemWidth: number;
  className?: string;
  style?: React.CSSProperties;
  numColumns?: number;
  blankItem?: React.ReactNode;
  fillMethod: "start" | "end" | "center";
}

export const DynamicGrid = ({
  items,
  itemWidth,
  className,
  style,
  numColumns = -1,
  blankItem,
  fillMethod = "start",
}: DynamicGridProps) => {
  const paddingToCenter = useRef(0);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const calcColumns = () => {
      if (!gridContainerRef.current) return 1;

      const totalPadding = paddingToCenter.current * 2;
      const containerWidth =
        gridContainerRef.current.offsetWidth - totalPadding;
      return Math.floor(containerWidth / itemWidth);
    };

    const updateColumns = () => {
      if (!gridContainerRef.current) return;
      if (fillMethod === "center") {
        paddingToCenter.current = 0;
        let newColumns = calcColumns();
        const newNumBlanks = newColumns - (items.length % newColumns);

        if (newColumns % 2 === 0 && newNumBlanks % 2 !== 0) {
          paddingToCenter.current = itemWidth / 2;
          newColumns = calcColumns();
        }

        gridContainerRef.current.style.padding = `0 ${paddingToCenter.current}px`;
        setColumns(newColumns);
      } else {
        setColumns(calcColumns());
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => {
      window.removeEventListener("resize", updateColumns);
    };
  }, [numColumns, itemWidth, items]);

  // ANCHOR Render

  const numOfItemsInLastCol = items.length % columns;
  const numItemsWithFilledCols = items.length - numOfItemsInLastCol;
  const numOfBlanks = columns - numOfItemsInLastCol;
  let itemsWithFills: ReactNode[] = [];

  const shouldAddCenterBlank = columns % 2 !== 0 && numOfBlanks % 2 !== 0;
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

  return (
    <StyledDynamicGrid
      ref={gridContainerRef}
      className={className}
      style={style}
      $paddingToCenter={paddingToCenter.current}
    >
      {itemsWithFills}
    </StyledDynamicGrid>
  );
};

type StyledDynamicGridProps = {
  $paddingToCenter: number;
};
const StyledDynamicGrid = styled.div<StyledDynamicGridProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-wrap: wrap;

  /* padding: 0 ${(props) => props.$paddingToCenter}px; */
`;
