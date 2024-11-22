import styled, { useTheme } from 'styled-components';
import { StyledH2, StyledH3 } from '../../../tokens/CustomText';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { alignItemsInGrid } from '../../../utils/alignItemsInGrid';
import { InfoCard, InfoCardProps } from '../../molecules/InfoCard';

export interface UndergraduateSectionProps {
  title: string;
  items: InfoCardProps[];
  blankItem?: ReactNode;
  lastRowAlign?: 'left' | 'center' | 'right';
}

export const UndergraduateSection = ({
  title,
  items,
  blankItem,
}: UndergraduateSectionProps) => {
  const itemsContainer = useRef<HTMLDivElement>(null);

  const baseInfoCards = items.map((item, index) => (
    <InfoCard key={index} {...item} />
  ));
  const [infoCards, setInfoCards] = useState<ReactNode[]>(baseInfoCards);
  const [itemsColumns, setItemsColumns] = useState<number>(4);

  const lastRowItems = items.length % itemsColumns;

  const handleResize = () => {
    if (itemsContainer.current) {
      const style = window.getComputedStyle(itemsContainer.current);
      const gridTemplateColumns = style.getPropertyValue(
        'grid-template-columns'
      );
      const columnCount = gridTemplateColumns.split(' ').length;
      setItemsColumns(columnCount);
    }
  };

  const handleCenterAlign = () => {
    if (itemsContainer.current) {
      const style = window.getComputedStyle(itemsContainer.current);
      const gridTemplateColumns = style.getPropertyValue(
        'grid-template-columns'
      );
      const columnCount = gridTemplateColumns.split(' ').length;
      setInfoCards(
        alignItemsInGrid({
          items: baseInfoCards,
          lastRowItems,
          columns: columnCount,
          blankItem: <InfoCard variant='blank' title='' />,
          lastRowAlign: 'center',
        })
      );
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleCenterAlign();
  }, [itemsColumns]);

  return (
    <StyledGridColumnTemplate>
      <StyledTitle>{title}</StyledTitle>
      <StyledItemsContainer ref={itemsContainer}>
        {infoCards}
      </StyledItemsContainer>
    </StyledGridColumnTemplate>
  );
};

const StyledGridColumnTemplate = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
`;

const StyledTitle = styled(StyledH3)`
  width: 100%;
  text-align: center;
`;

const StyledItemsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--size-gap-large);

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.largeDesktop}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.extraLargeDesktop}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
