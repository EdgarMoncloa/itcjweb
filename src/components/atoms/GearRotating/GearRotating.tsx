import styled from 'styled-components';
import GearSVG from '/icons/Gear_Icon.svg';

export interface GearRotatingProps {
  defaultSize?: boolean;
}

export const GearRotating = ({ defaultSize = false }: GearRotatingProps) => {
  return (
    <StyledGearRotating className={defaultSize ? 'defaultSize' : ''}>
      <StyledImg src={GearSVG} alt='Gear Icon' />
    </StyledGearRotating>
  );
};

const StyledGearRotating = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  &.defaultSize {
    height: var(--size-icon-4xl);
    width: var(--size-icon-4xl);
  }
`;

const StyledImg = styled.img`
  position: absolute;
  height: 200%;
  width: 200%;
  left: -100%;
  object-fit: contain;
  animation: rotateAnimation 617s linear infinite;
  transform-origin: center;

  @keyframes rotateAnimation {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
`;
