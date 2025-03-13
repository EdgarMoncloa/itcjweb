import { ReactNode, useRef, useState } from "react";
import styled from "styled-components";

type PlacementMode = "random" | "sequential";
type TransitionMode = "random" | "all";

export interface TransitionFadeGridProps {
  size: {
    cols: number;
    rows: number;
  };
  items: ReactNode[];
  placementMode?: PlacementMode;
  transitionMode?: TransitionMode;
  transitionDuration?: number;
}

type ItemData = {
  timeToChange: number;
  index: number;
  nextIndex: number;
};

export const TransitionFadeGrid = ({
  size,
  items,
  placementMode = "random",
  transitionMode = "random",
  transitionDuration = 500,
}: TransitionFadeGridProps) => {
  const numVisibleItems = size.rows * size.cols;
  const defaultVisibleItems = items.slice(0, numVisibleItems);

  const [visibleIndexStart, setVisibleIndexStart] = useState(0);
  const [visibleIndexEnd, setVisibleIndexEnd] = useState(numVisibleItems - 1);

  const [visibleItems, setVisibleItems] =
    useState<ReactNode[]>(defaultVisibleItems);

  const itemsData = useRef<Array<ItemData | null>>(
    Array.from({ length: numVisibleItems }, () => null)
  );

  const getNextVisibleItems = () => {
    let nextVisibleIndexStart = visibleIndexEnd + 1;
    if (nextVisibleIndexStart > items.length - 1) {
      nextVisibleIndexStart = 0;
    }
    let nextVisibleIndexEnd = nextVisibleIndexStart + numVisibleItems;
    let nextVisibleItems = [];
    if (nextVisibleIndexEnd > items.length - 1) {
      nextVisibleIndexEnd = nextVisibleIndexEnd - items.length;

      nextVisibleItems = [
        ...items.slice(nextVisibleIndexStart, items.length),
        items.slice(0, nextVisibleIndexEnd),
      ];
    } else {
      nextVisibleItems = items.slice(
        nextVisibleIndexStart,
        nextVisibleIndexEnd
      );
    }
  };

  // ANCHOR render
  return (
    <StyledContainer $cols={size.cols} $rows={size.rows}>
      {visibleItems}
    </StyledContainer>
  );
};

type StyledContainerProps = {
  $cols: number;
  $rows: number;
};
const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.$cols}, 1fr);
  grid-template-rows: repeat(${(props) => props.$rows}, 1fr);
`;
