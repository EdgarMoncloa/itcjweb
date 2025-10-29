import { useRef } from "react";
import styled from "styled-components";

export interface LogoLink3DProps {
  href: string;
  logoSrc: string;
  alt: string;
  target?: string;
  defaultSize?: boolean;
}

export const LogoLink3D = ({
  href,
  logoSrc,
  alt,
  target,
  defaultSize,
}: LogoLink3DProps) => {
  // Maximum rotation limit in degrees
  const maxRotation = 45;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const timeWhenMouseEnter = useRef<number>(0);
  const isRotating = useRef<boolean>(false);
  const initialMousePosition = useRef<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // Handles when the mouse enters the element
  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      !wrapperRef.current ||
      !initialMousePosition ||
      isRotating.current === true
    ) {
      return;
    }

    timeWhenMouseEnter.current = Date.now();

    const rect = wrapperRef.current.getBoundingClientRect();
    // Normalized X/Y position (0 to 1)
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    initialMousePosition.current = { x, y };
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      !wrapperRef.current ||
      !initialMousePosition.current ||
      isRotating.current === true
    ) {
      return;
    }

    const rect = wrapperRef.current.getBoundingClientRect();
    // Current normalized X/Y position
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    // Calculate relative movement from the initial position
    const xDelta = x - initialMousePosition.current.x;
    const yDelta = y - initialMousePosition.current.y;

    // Scale the relative movement to calculate rotations
    const xRotation = Math.max(
      -maxRotation,
      Math.min(maxRotation, yDelta * -maxRotation)
    );
    const yRotation = Math.max(
      -maxRotation,
      Math.min(maxRotation, xDelta * maxRotation)
    );

    // Update the styles directly to avoid additional renders
    const element = wrapperRef.current.firstChild as HTMLElement;
    if (element) {
      element.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (isRotating.current === true) {
      return;
    }

    const element = wrapperRef.current?.firstChild as HTMLElement;
    if (!element) return;

    const timeExit = Date.now();
    if (
      timeExit - timeWhenMouseEnter.current < 328 &&
      timeExit - timeWhenMouseEnter.current > 264
    ) {
      element.style.animation = "rotateAnimation 1s linear 0s infinite";
      setTimeout(() => {
        element.style.animation = "";
      }, 5000);
    }
    timeWhenMouseEnter.current = 0;

    element.style.transform = "rotateX(0deg) rotateY(0deg)";
    initialMousePosition.current = { x: 0, y: 0 };
  };

  return (
    <StyledAnchorWrapper href={href} target={target || "_blank"}>
      <StyledLogoLink3dWrapper
        ref={wrapperRef}
        className={defaultSize ? "defaultSize" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <StyledLogoLink3D>
          <StyledLogoImg src={logoSrc} alt={alt} />
        </StyledLogoLink3D>
      </StyledLogoLink3dWrapper>
    </StyledAnchorWrapper>
  );
};

const StyledAnchorWrapper = styled.a`
  height: 100%;
  width: 100%;
`;

const StyledLogoLink3dWrapper = styled.div`
  border-radius: var(--size-border-radius-medium);
  cursor: pointer;
  display: flex;
  overflow: visible;
  perspective: 500px;
  transition: transform 0.2s ease-out;
  width: 100%;
  height: 100%;
  user-select: none;

  &.defaultSize {
    height: var(--size-icon-4xl);
    width: var(--size-icon-4xl);
  }

  &:hover,
  &:focus {
    transform: scale3d(1.1, 1.1, 1.1);
  }
`;

const StyledLogoLink3D = styled.div`
  background-color: var(--colors-app-neutral-200);

  height: 100%;
  width: 100%;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  pointer-events: none;
  overflow: hidden;

  @keyframes rotateAnimation {
    0% {
      transform: rotate3d(1, 1, 0, 0deg);
    }
    25% {
      transform: rotate3d(0.1, 0.5, 0, 90deg);
    }
    50% {
      transform: rotate3d(0.2, 0.5, 0, 180deg);
    }
    75% {
      transform: rotate3d(0.3, 0.75, 0, 270deg);
    }
    100% {
      transform: rotate3d(0.4, 1, 0, 360deg);
    }
  }
`;

const StyledLogoImg = styled.img`
  width: 85%;
  object-fit: contain;
`;
