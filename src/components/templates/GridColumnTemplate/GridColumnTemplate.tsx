import styled from 'styled-components';
import { StyledH2 } from '../../../tokens/CustomText';
import { ReactNode } from 'react';

interface ItemsToAlignProps {
  items: ReactNode[];
  lastRowItems: number;
  columns: number;
  blankItem: ReactNode;
  lastRowAlign: 'left' | 'center' | 'right'; // O puede ser 'auto' si no quieres restringir a estos 3 valores
}

const alignItemsInGrid = ({
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

export interface GridColumnTemplateProps {
  title: string;
  items: ReactNode[];
  columns?: number;
  blankItem?: ReactNode;
  lastRowAlign?: 'left' | 'center' | 'right';
}

export const GridColumnTemplate = ({
  title,
  items,
  columns = 4,
  blankItem,
  lastRowAlign = 'left',
}: GridColumnTemplateProps) => {
  const lastRowItems = items.length % columns;

  let itemsWithFills: ReactNode[] = alignItemsInGrid({
    items,
    lastRowItems,
    columns,
    blankItem,
    lastRowAlign,
  });

  return (
    <StyledGridColumnTemplate>
      <StyledTitle>{title}</StyledTitle>
      <StyledItemsContainer $columns={columns}>
        {itemsWithFills}
      </StyledItemsContainer>
    </StyledGridColumnTemplate>
  );
};

const StyledGridColumnTemplate = styled.div`
  width: 100%;
  padding: var(--size-padding-large);
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
`;

const StyledTitle = styled(StyledH2)`
  width: 100%;
  text-align: center;
`;

const StyledItemsContainer = styled.div<{ $columns: number }>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: var(--size-gap-small);
`;

const StyledItemWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
