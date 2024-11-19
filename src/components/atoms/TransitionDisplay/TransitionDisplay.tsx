import styled, { keyframes } from 'styled-components';
import { ContentLink, ContentLinkProps } from '../ContentLink';
import React, { useEffect, useRef } from 'react';

type DelayType = 'none' | 'very-fast' | 'fast' | 'normal' | 'slow';

export interface TransitionDisplayProps {
  fromElement?: React.ReactNode;
  toElement: React.ReactNode;
  toElementKey?: string;
  haveDefaultSize?: boolean;
  transition?: 'circleFromCenter';
  /**
   * Delay in miliseconds
   */
  delay?: DelayType;
  animate?: boolean;
}

export const TransitionDisplay = ({
  haveDefaultSize = false,
  fromElement,
  toElement,
  toElementKey,
  transition = 'circleFromCenter',
  delay,
  animate = true,
}: TransitionDisplayProps) => {
  return (
    <StyledContentDisplay className={haveDefaultSize ? 'default-size' : ''}>
      {fromElement && (
        <StyledFromElementWrapper>{fromElement}</StyledFromElementWrapper>
      )}
      <StyledToElementWrapper
        className={animate === true ? transition : ''}
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
    height: var(--size-height-10-row);
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
  $delay?: DelayType;
}>`
  width: 100%;
  height: 100%;
  overflow: hidden;

  &.circleFromCenter {
    animation: ${keyFramesClipPath} var(--transition-slow) forwards;
    animation-delay: ${(props) =>
      props.$delay && props.$delay !== 'none'
        ? `var(--delay-${props.$delay})`
        : '0s'};

    &::after {
      pointer-events: none;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 200%;
      height: 200%;
      background-color: var(--colors-itcj-main);
      border-radius: var(--size-border-radius-full);
      animation: ${keyFramesClipPathMask} var(--transition-slow) forwards;
      animation-delay: ${(props) =>
        props.$delay && props.$delay !== 'none'
          ? `var(--delay-${props.$delay})`
          : '0s'};
    }
  }
`;
