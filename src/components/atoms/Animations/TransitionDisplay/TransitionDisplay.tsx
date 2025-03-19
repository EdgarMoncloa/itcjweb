import styled, { css, keyframes } from "styled-components";
import React from "react";
import { CSS_VAR_DURATION } from "../../../../types/GlobalTypes";
import { TransitionDisplay_TransitionType } from "./TransitionDisplay.types";

// SECTION Component
export interface TransitionDisplayProps {
  fromElement?: React.ReactNode;
  fromElementKey?: string;
  toElement: React.ReactNode;
  toElementKey?: string;
  haveDefaultSize?: boolean;
  delay?: CSS_VAR_DURATION;
  animate?: boolean;
  transitionType?: TransitionDisplay_TransitionType;
  preserveFromElement?: boolean;
}
export const TransitionDisplay = ({
  haveDefaultSize = false,
  fromElement,
  fromElementKey,
  toElement,
  toElementKey,
  delay = CSS_VAR_DURATION.fast,
  animate = true,
  transitionType = TransitionDisplay_TransitionType.fade,
  preserveFromElement = true,
}: TransitionDisplayProps) => {
  return (
    <StyledContentDisplay className={haveDefaultSize ? "default-size" : ""}>
      {fromElement && (
        <StyledFromElementWrapper
          $delay={delay}
          className={animate === true ? transitionType : ""}
          $preserveFromElement={preserveFromElement}
          key={fromElementKey}
        >
          {fromElement}
        </StyledFromElementWrapper>
      )}
      <StyledToElementWrapper
        className={animate === true ? transitionType : ""}
        $delay={delay}
        key={toElementKey}
      >
        {toElement}
      </StyledToElementWrapper>
    </StyledContentDisplay>
  );
};
// !SECTION Component

// SECTION Styles
// ANCHOR Keyframes
const framesCircleFromCenter_From = keyframes`
0% {
  opacity: 1;
}
99%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`;
const framesFade_From = keyframes`
0%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`;
const framesCircleFromCenter_To = keyframes`
  0% {
    clip-path: circle(0% at 50% 50%);
  }
  100% {
    clip-path: circle(100% at 50% 50%);
    border: none; 
  }
`;
const framesCircleFromCenterMask_To = keyframes`
  0% {
    opacity: 1;
    clip-path: circle(10% at 50% 50%);
  }
  100% {
    opacity: 0;
    clip-path: circle(100% at 50% 50%);
    border: none; 
  }
`;
const framesFade_To = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// SECTION Elements
// ANCHOR StyledContentDisplay
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

// ANCHOR StyledFromElementWrapper
type FromElementWrapperProps = {
  $delay: CSS_VAR_DURATION;
  $preserveFromElement: boolean;
};
const cssNotPreserveElement = (delay: string) => css`
  opacity: 0;
  &.circleFromCenter {
    animation: ${framesCircleFromCenter_From} var(--transition-slow) forwards;
    animation-delay: var(${delay});
  }

  &.fade {
    animation: ${framesFade_From} var(--transition-very-slow) forwards;
    animation-delay: var(${delay});
  }
`;
const StyledFromElementWrapper = styled.div<FromElementWrapperProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${(props) =>
    props.$preserveFromElement === false && cssNotPreserveElement(props.$delay)}
`;

// ANCHOR StyledToElementWrapper
type ToElementWrapperProps = {
  $delay?: CSS_VAR_DURATION;
};
const StyledToElementWrapper = styled.div<ToElementWrapperProps>`
  width: 100%;
  height: 100%;
  overflow: hidden;

  &.circleFromCenter {
    animation: ${framesCircleFromCenter_To} var(--transition-slow) forwards;
    animation-delay: ${(props) => `var(${props.$delay})`};

    &::after {
      animation: ${framesCircleFromCenterMask_To} var(--transition-slow)
        forwards;
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

  &.fade {
    animation: ${framesFade_To} var(--transition-very-slow) forwards;
    animation-delay: ${(props) => `var(${props.$delay})`};
  }
`;
// !SECTION Elements
// !SECTION Styles
