import styled from 'styled-components';
import { IconSize } from '../../../types/GlobalTypes';

export interface IconProps {
  icon: React.ReactNode;
  colorVariant?: 'primary' | 'neutral' | 'light';
  size: IconSize;
}

export const Icon = ({ icon, colorVariant, size = 'medium' }: IconProps) => {
  return (
    <StyledIconWrapper className={colorVariant && colorVariant} $size={size}>
      {icon}
    </StyledIconWrapper>
  );
};

const StyledIconWrapper = styled.div<{ $size: IconSize }>`
  align-items: center;
  display: flex;
  font-size: var(--size-icon-${(props) => props.$size});
  height: var(--size-icon-${(props) => props.$size});
  width: var(--size-icon-${(props) => props.$size});
  justify-content: center;

  /* Variants */
  &.primary {
    color: var(--colors-app-primary-700);
  }
  &.neutral {
    color: var(--colors-app-text-dark);
  }
  &.light {
    color: var(--colors-app-text-light);
  }
`;
