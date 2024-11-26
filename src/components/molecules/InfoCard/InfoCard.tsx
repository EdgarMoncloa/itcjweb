import styled from 'styled-components';
import { InfoCardHorizontal } from './variants/InfoCardHorizontal';
import { InfoCardVertical } from './variants/InfoCardVertical';

export interface InfoCardProps {
  title: string;
  description?: {
    title?: string;
    text?: string;
    maxLines?: number;
  };
  tags?: string[];
  icon?: React.ReactNode;
  defaultSize?: boolean;
  variant?: 'horizontal' | 'vertical' | 'blank';
  colorScheme?: 'primary' | 'primary-intercalated' | 'neutral';
}

export const InfoCard = ({
  variant = 'horizontal',
  ...props
}: InfoCardProps) => {
  let element: React.ReactNode;

  switch (variant) {
    case 'horizontal':
      return <InfoCardHorizontal {...props} />;
    case 'vertical':
      return <InfoCardVertical {...props} />;

    case 'blank':
      return (
        <StyledMainWrapper className={props.defaultSize ? 'defaultSize' : ''}>
          {props.title}
        </StyledMainWrapper>
      );
    default:
      break;
  }
  return element;
};

const StyledMainContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 3fr;
  justify-content: center;
  padding: var(--size-padding-small);
  width: 160%;
  height: 100%;
  transition: var(--transition-fast) transform;
  will-change: transform;
`;

const StyledMainWrapper = styled.div`
  align-items: center;
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-primary);
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-fast) background-color;
  width: 100%;
  height: calc(var(--size-height-4-row));
  will-change: background-color;

  &:hover {
    background-color: var(--colors-app-primary-100);
  }

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-4-row));
  }

  &:hover ${StyledMainContainer} {
    transform: translateX(-38%);
  }
`;
