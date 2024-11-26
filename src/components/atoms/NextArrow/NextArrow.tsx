import { MdNavigateNext } from 'react-icons/md';
import styled from 'styled-components';

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  inverted?: boolean;
}

export const NextArrow = ({ onClick, inverted = false }: NextArrowProps) => {
  return (
    <StyledArrow
      onClick={onClick}
      style={{ transform: inverted === true ? 'rotate(180deg)' : '' }}
    >
      <MdNavigateNext />
    </StyledArrow>
  );
};

const StyledArrow = styled.div`
  align-items: center;
  border: var(--size-border-xs) solid var(--colors-app-primary-700);
  border-radius: var(--size-border-radius-medium);
  color: var(--colors-app-primary-700);
  cursor: pointer;
  display: flex;
  font-size: var(--size-width-2-cols);
  justify-content: center;
  overflow: hidden;
  transition:
    border-width var(--transition-fast),
    background-color var(--transition-fast);
  width: 100%;

  &:hover {
    border-width: var(--size-border-large);
    background-color: var(--colors-app-primary-100);
  }
`;
