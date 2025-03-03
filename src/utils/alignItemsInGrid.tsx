import { ReactNode } from 'react';
import styled from 'styled-components';

export interface ItemsToAlignProps {
  items: ReactNode[];
  lastRowItems: number;
  columns: number;
  blankItem: ReactNode;
  lastRowAlign: 'left' | 'center' | 'right';
}

export const alignItemsInGrid = ({
  items,
  lastRowItems,
  columns,
  blankItem,
  lastRowAlign,
}: ItemsToAlignProps): ReactNode[] => {
  const lastRowFirstItemIndex = items.length - lastRowItems;
  const itemsWithFills: ReactNode[] = [];

  const addBlankItems = (numBlanks: number) => {
    for (let i = 0; i < numBlanks; i++) {
      itemsWithFills.push(<StyledItemWrapper>{blankItem}</StyledItemWrapper>);
    }
  };

  let numBlackItemsLeft = 0;
  let numBlackItemsRight = 0;

  if (lastRowAlign === 'left') {
    numBlackItemsLeft = 0;
    numBlackItemsRight = columns - lastRowItems;
  } else if (lastRowAlign === 'center') {
    numBlackItemsLeft = Math.floor((columns - lastRowItems) / 2);
    numBlackItemsRight = Math.ceil((columns - lastRowItems) / 2);
  } else if (lastRowAlign === 'right') {
    numBlackItemsLeft = columns - lastRowItems;
    numBlackItemsRight = 0;
  }

  for (let i = 0; i < items.length; i++) {
    if (i === lastRowFirstItemIndex && i) {
      addBlankItems(numBlackItemsLeft);
    }
    itemsWithFills.push(<StyledItemWrapper>{items[i]}</StyledItemWrapper>);
    if (i === items.length - 1 && i) {
      addBlankItems(numBlackItemsRight);
    }
  }

  return itemsWithFills;
};

const StyledItemWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
