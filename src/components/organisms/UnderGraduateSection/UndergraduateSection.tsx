import styled from 'styled-components';
import { StyledH3 } from '../../../tokens/CustomText';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { alignItemsInGrid } from '../../../utils/alignItemsInGrid';
import { SingleInfoCard } from '../../molecules/InfoCard';
import {
  InfoCardTrialSlider,
  InfoCardTrialSliderProps,
} from '../../molecules/InfoCardTriadSlider/InfoCardTriadSlider';

export interface UndergraduateSectionProps {
  title: string;
  items: InfoCardTrialSliderProps[];
  blankItem?: ReactNode;
  lastRowAlign?: 'left' | 'center' | 'right';
}

export const UndergraduateSection = ({
  title,
  items,
  blankItem,
}: UndergraduateSectionProps) => {
  const itemsContainer = useRef<HTMLDivElement>(null);

  const baseUndergraduateCards = items.map((item, index) => (
    <InfoCardTrialSlider key={index} {...item} />
  ));
  const [undergraduateCards, setUndergraduateCards] = useState<ReactNode[]>(
    baseUndergraduateCards
  );
  const [itemsColumns, setItemsColumns] = useState<number>(0);

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
      setUndergraduateCards(
        alignItemsInGrid({
          items: baseUndergraduateCards,
          lastRowItems: items.length % itemsColumns,
          columns: columnCount,
          blankItem: <SingleInfoCard variant='blank' title='' />,
          lastRowAlign: 'center',
        })
      );
    }
  };

  useEffect(() => {
    handleResize();
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
        {undergraduateCards}
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
  @media (min-width: ${(props) => props.theme.breakpoints.desktopLarge}) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.fourKDesktop}) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
