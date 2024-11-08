import styled, { keyframes } from 'styled-components';
import { ContentLink, ContentLinkProps } from '../ContentLink';
import React, { useEffect, useRef } from 'react';

type DelayType = 'none' | 'very-fast' | 'fast' | 'normal' | 'slow';

export interface TransitionDisplayProps {
  fromElement?: React.ReactNode;
  toElement: React.ReactNode;
  haveDefaultSize?: boolean;
  transition?: 'circleFromCenter';
  /**
   * Delay in miliseconds
   */
  delay?: DelayType;
}

export const TransitionDisplay = ({
  haveDefaultSize = false,
  fromElement,
  toElement,
  transition = 'circleFromCenter',
  delay,
}: TransitionDisplayProps) => {
  return (
    <StyledContentDisplay className={haveDefaultSize ? 'default-size' : ''}>
      <StyledFromElementWrapper>{fromElement}</StyledFromElementWrapper>
      <StyledToElementWrapper className={transition} $delay={delay}>
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
    height: var(--size-height-5-row);
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

const StyledFromElementWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  .circleFromCenter {
  }
`;

const StyledToElementWrapper = styled.div<{
  $delay?: DelayType;
}>`
  width: 100%;
  height: 100%;
  overflow: hidden;

  animation: ${keyFramesClipPath} var(--transition-slow) forwards;
  animation-delay: ${(props) =>
    props.$delay && props.$delay !== 'none'
      ? `var(--delay-${props.$delay})`
      : '0s'};
`;
