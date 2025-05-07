import { useEffect, useState } from "react";
import styled, { css, keyframes, Styled } from "styled-components";

type position = "top" | "bottom";
type direction = "toLeft" | "toRight";

interface SlideCoverProps {
  position?: position;
  isVisible?: boolean;
  haveOutAnimation?: boolean;
  animationDirection?: direction;
}

export const SlideCover = ({
  position = "bottom",
  isVisible = false,
  haveOutAnimation = false,
  animationDirection = "toLeft",
}: SlideCoverProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible === true) {
      setShouldAnimate(true);
    }
  }, [isVisible]);

  return (
    <StyledAnimationContainer
      $position={position}
      $isVisible={isVisible}
      $haveOutAnimation={shouldAnimate && haveOutAnimation}
      $animationDirection={animationDirection}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledAnimationContainer>
  );
};

const inTransition = keyframes`
  0%{
    left:100%;
  }
  99%{
    left: -50%;
    /* left:0; */
  }
  100%{
    left: -50%;
    transform: rotateX('180')
  }
`;

const outTransition = keyframes`
  0%{
    left:-50%;
  }
  99%{
    left: -200%;
    /* left:0; */
  }
  100%{
    left: -200%;
    transform: rotateX('180')
  }
`;

interface StyledAnimationContainerProps {
  $position: position;
  $isVisible: boolean;
  $haveOutAnimation: boolean;
  $animationDirection: direction;
}
const toLeftInAnimation = css`
  animation: ${inTransition} 400ms ease forwards;
`;
const toLeftOutAnimation = css`
  animation: ${outTransition} 400ms ease forwards;
`;
const toRightInAnimation = css`
  animation: ${outTransition} 400ms ease forwards reverse;
`;
const toRightOutAnimation = css`
  animation: ${inTransition} 400ms ease forwards reverse;
`;
const StyledAnimationContainer = styled.div<StyledAnimationContainerProps>`
  position: absolute;
  display: grid;
  left: 100%;
  top: 0;
  height: 100%;
  width: 200%;
  grid-template-columns: 1fr 1fr 4fr 50% 4fr 1fr 1fr;
  z-index: ${(p) =>
    p.$position === "top"
      ? "var(--z-index-above-background)"
      : "var(--z-index-background-middle)"};
  justify-items: center;

  & > * {
    width: 75%;
    height: 100%;
    background-color: var(--colors-itcj-primary);
  }

  & > :nth-child(4) {
    width: 100%;
  }

  ${(p) => {
    const [inAnimation, outAnimation] =
      p.$animationDirection === "toLeft"
        ? [toLeftInAnimation, toLeftOutAnimation]
        : [toRightInAnimation, toRightOutAnimation];

    if (p.$haveOutAnimation) {
      return p.$isVisible ? inAnimation : outAnimation;
    } else if (p.$isVisible) {
      return inAnimation;
    }
  }}
`;
