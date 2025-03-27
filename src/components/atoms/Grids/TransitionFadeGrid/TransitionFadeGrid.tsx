import {
  HTMLAttributes,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { TransitionDisplay } from "../../Animations/TransitionDisplay";
import { TransitionDisplay_TransitionType } from "../../Animations/TransitionDisplay/TransitionDisplay.types";
import { CSS_VAR_DURATION } from "../../../../types/GlobalTypes";
import { THEME_DURATION } from "../../../../tokens/theme";

// ANCHOR Utils
type ItemData = {
  timeToChange: number;
  actualIndex: number;
  prevIndex: number;
};

// SECTION Component
export interface TransitionFadeGridProps
  extends HTMLAttributes<HTMLDivElement> {
  cols: number;
  rows: number;
  items: ReactNode[];
  refreshInterval?: number;
  duration?: number;
  minDuration?: number;
  maxDuration?: number;
  transitionType?: TransitionDisplay_TransitionType;
  preserveFromElement?: boolean;
}

export const TransitionFadeGrid = ({
  rows,
  cols,
  items,
  refreshInterval = 1000,
  duration = 5000,
  minDuration,
  maxDuration,
  transitionType = TransitionDisplay_TransitionType.fade,
  preserveFromElement = false,
  ...props
}: TransitionFadeGridProps) => {
  // ANCHOR Constants
  const localMaxDuration = maxDuration || duration;
  const localMinDuration = minDuration || duration;
  const numVisibleItems = rows * cols;
  const randomFactorMemo = useMemo(
    () => localMinDuration - localMaxDuration + 1,
    [localMaxDuration, localMinDuration]
  );
  const getRandomTime = () => {
    return localMinDuration && localMaxDuration
      ? Math.random() * randomFactorMemo + localMaxDuration
      : duration;
  };

  // ANCHOR State
  const [isFirstRender, setIsFirstRender] = useState(true);
  const nextIndexRef = useRef(
    numVisibleItems < items.length ? numVisibleItems - 1 : 0
  );
  const [itemsData, setItemsData] = useState<Array<ItemData>>(
    Array.from({ length: numVisibleItems }, (_, index) => ({
      timeToChange: getRandomTime(),
      actualIndex: index,
      prevIndex: -1,
    }))
  );

  // ANCHOR Handlers
  const handleVisibleItems = (time: number) => {
    setItemsData((prevItemsData) => {
      const newItemsData = [...prevItemsData];
      newItemsData.forEach((itemData) => {
        if (itemData.timeToChange <= 0) {
          const getNextIndex = () => {
            return nextIndexRef.current === items.length - 1
              ? 0
              : nextIndexRef.current + 1;
          };

          nextIndexRef.current = getNextIndex();
          if (nextIndexRef.current === itemData.actualIndex) {
            nextIndexRef.current = getNextIndex();
          }

          itemData.timeToChange = getRandomTime();
          itemData.prevIndex = itemData.actualIndex;
          itemData.actualIndex = nextIndexRef.current;
        } else {
          itemData.timeToChange -= time;
        }
      });
      return newItemsData;
    });
  };

  // ANCHOR Effects
  useEffect(() => {
    if (isFirstRender === true) setIsFirstRender(false);

    let timeout: ReturnType<typeof setTimeout> | null = null;
    const repeatWithTimeout = () => {
      if (timeout) clearTimeout(timeout);
      handleVisibleItems(refreshInterval);
      timeout = setTimeout(repeatWithTimeout, refreshInterval);
    };
    repeatWithTimeout();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  // ANCHOR render
  return (
    <StyledContainer $cols={cols} $rows={rows} {...props}>
      {itemsData.map((itemData, index) => {
        return (
          <TransitionDisplay
            key={index}
            toElement={items[itemData.actualIndex]}
            fromElement={
              itemData.prevIndex === -1 ? null : items[itemData.prevIndex]
            }
            fromElementKey={`${itemData.prevIndex}`}
            toElementKey={`${itemData.actualIndex}`}
            animate={isFirstRender === false}
            transitionType={transitionType}
            delay={CSS_VAR_DURATION.none}
            preserveFromElement={preserveFromElement}
          />
        );
      })}
    </StyledContainer>
  );
};
// !SECTION Component

// SECTION Styles
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
// !SECTION Styles
