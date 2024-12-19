import styled, { keyframes } from "styled-components";
import { StyledBody1, StyledH6 } from "../../../tokens/CustomText";
import { useEffect, useRef, useState } from "react";
import { useAppConfig } from "../../../store/useAppConfig";
import { Tooltip } from "../../atoms/Tooltip";

export interface ContentSelectorProps {
  title: string;
  caption?: string;
  defaultSize?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const ContentSelector = ({
  title,
  caption,
  defaultSize = false,
  onClick,
}: ContentSelectorProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const { transition } = useAppConfig();
  const inTransitionTimeout = useRef<null | NodeJS.Timeout>(null);
  const animationTimeout = useRef<null | NodeJS.Timeout>(null);

  const handleOnClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setIsClicked(true);
    inTransitionTimeout.current = setTimeout(() => {
      if (onClick) {
        onClick(event);
      }
    }, transition["fast"]);

    animationTimeout.current = setTimeout(() => {
      setIsClicked(false);
    }, transition["normal"]);
  };

  useEffect(() => {
    return () => {
      // document.body.removeEventListener('mouseup', handleMouseUp);
      if (inTransitionTimeout.current) {
        clearTimeout(inTransitionTimeout.current);
      }
    };
  }, []);

  return (
    <StyledContentSelector className={defaultSize ? "defaultSize" : ""}>
      <Tooltip
        tooltipContent={
          <>
            <StyledH6>{title}</StyledH6>
            <StyledBody1>{caption}</StyledBody1>
          </>
        }
        position="right"
      >
        <StyledSelectorIcon
          onClick={handleOnClick}
          className={isClicked ? "animate-on-click" : ""}
        />
      </Tooltip>
    </StyledContentSelector>
  );
};

const StyledContentSelector = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  /* filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4)); */

  &.defaultSize {
    height: var(--size-icon-xl);
    width: var(--size-icon-xl);
  }
`;

const clickAnimation = keyframes`
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(0.75);
  }
  100%{
    transform: scale(1.1);
  }
`;
const StyledSelectorIcon = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
  background-color: var(--colors-itcj-primary);
  border-radius: var(--size-border-radius-full);
  transition: var(--transition-normal) transform;

  fill: var(
    --Colors-App-Glass-Glass-border,
    radial-gradient(197.67% 143.49% at 100% 0%, #f63d4f 0%, #831924 100%)
  );

  &:hover {
    transform: scale(1.2);
  }

  &.animate-on-click {
    animation: ${clickAnimation} var(--transition-normal) alternate;
  }
`;
