import { MdNavigateNext } from "react-icons/md";
import styled from "styled-components";

interface NextArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  direction?: "left" | "right" | "up" | "down";
}

export const NextArrow = ({ onClick, direction = "left" }: NextArrowProps) => {
  let rotation;
  switch (direction) {
    case "right":
      rotation = 0;
      break;
    case "down":
      rotation = 90;
      break;
    case "left":
      rotation = 180;
      break;
    case "up":
      rotation = 270;
      break;
  }
  return (
    <StyledArrow onClick={onClick}>
      <MdNavigateNext style={{ transform: `rotate(${rotation}deg)` }} />
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
  font-size: var(--size-width-1-cols);
  justify-content: center;
  overflow: hidden;
  transition: border-width var(--transition-fast),
    background-color var(--transition-fast);
  width: 100%;

  &:hover {
    border-width: var(--size-border-large);
    background-color: var(--colors-app-primary-100);
  }
`;
