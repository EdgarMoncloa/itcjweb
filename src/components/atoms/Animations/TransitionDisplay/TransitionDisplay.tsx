import styled, { keyframes, useTheme } from "styled-components";
import { ContentLink, ContentLinkProps } from "../../ContentLink";
import React, { useEffect, useRef } from "react";
import { ThemeType } from "../../../../tokens/theme";
import { CSS_VAR_DURATION } from "../../../../types/GlobalTypes";

export type TransitionDelayType =
  | "none"
  | "very-fast"
  | "fast"
  | "normal"
  | "slow";

export interface TransitionDisplayProps {
  fromElement?: React.ReactNode;
  toElement: React.ReactNode;
  toElementKey?: string;
  haveDefaultSize?: boolean;
  transition?: "circleFromCenter";
  /**
   * Delay in miliseconds
   */
  delay?: CSS_VAR_DURATION;
  animate?: boolean;
}

export const TransitionDisplay = ({
  haveDefaultSize = false,
  fromElement,
  toElement,
  toElementKey,
  transition = "circleFromCenter",
  delay,
  animate = true,
}: TransitionDisplayProps) => {
  return (
    <StyledContentDisplay className={haveDefaultSize ? "default-size" : ""}>
      {fromElement && (
        <StyledFromElementWrapper>{fromElement}</StyledFromElementWrapper>
      )}
      <StyledToElementWrapper
        className={animate === true ? transition : ""}
        $delay={delay}
        key={toElementKey}
      >
        {toElement}
      </StyledToElementWrapper>
    </StyledContentDisplay>
  );
};

const StyledContentDisplay = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  &.default-size {
    width: var(--size-width-10-cols);
    height: var(--size-height-10-rows);
  }
`;

const keyFramesClipPath = keyframes`
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
    border: none; 
  }
`;
const keyFramesClipPathMask = keyframes`
  0% {
    opacity: 1;
    clip-path: circle(10% at 50% 50%);
  }
  100% {
    opacity:  0;
    clip-path: circle(100% at 50% 50%);
    border: none; 
  }
`;

const StyledFromElementWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledToElementWrapper = styled.div<{
  $delay?: CSS_VAR_DURATION;
}>`
  width: 100%;
  height: 100%;
  overflow: hidden;

  &.circleFromCenter {
    animation: ${keyFramesClipPath} var(--transition-slow) forwards;
    animation-delay: ${(props) => `var(${props.$delay})`};

    &::after {
      animation: ${keyFramesClipPathMask} var(--transition-slow) forwards;
      animation-delay: ${(props) => `var(${props.$delay})`};
      background-color: var(--colors-itcj-primary);
      border-radius: var(--size-border-radius-full);
      content: "";
      height: 200%;
      left: 50%;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 200%;
    }
  }
`;
