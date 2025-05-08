import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

type position = "top" | "bottom";
type direction = "toLeft" | "toRight" | "toTop" | "toBottom";

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

const keyFramesHorizontalIn = keyframes`
  0%{
    left:100%;
  }
  99%{
    left: -50%;
  }
  100%{
    left: -50%;
  }
`;
const keyframesHorizontalOut = keyframes`
  0%{
    left:-50%;
  }
  99%{
    left: -200%;
  }
  100%{
    left: -200%;
  }
`;
const keyframesVerticalIn = keyframes`
  0%{
    top: 100%;
  }
  99%{
    top: -50%;
  }
  100%{
    top: -50%;
  }
`;
const keyFramesVerticalin = keyframes`
  0%{
    top: -50%;
  }
  99%{
    top: -200%;
  }
  100%{
    top: -200%;
  }
`;

const animations = {
  toLeft: {
    in: css`
      animation-name: ${keyFramesHorizontalIn};
    `,
    out: css`
      animation-name: ${keyframesHorizontalOut};
    `,
  },
  toRight: {
    in: css`
      animation-name: ${keyframesHorizontalOut};
      animation-direction: reverse;
    `,
    out: css`
      animation-name: ${keyFramesHorizontalIn};
      animation-direction: reverse;
    `,
  },
  toTop: {
    in: css`
      animation-name: ${keyframesVerticalIn};
    `,
    out: css`
      animation-name: ${keyFramesVerticalin};
    `,
  },
  toBottom: {
    in: css`
      animation-name: ${keyFramesVerticalin};
      animation-direction: reverse;
    `,
    out: css`
      animation-name: ${keyframesVerticalIn};
      animation-direction: reverse;
    `,
  },
};

const cssHorizontalStyle = css`
  left: 100%;
  top: 0;
  height: 100%;
  width: 200%;
  grid-template-columns: 1fr 1fr 4fr 50% 4fr 1fr 1fr;

  & > * {
    width: 75%;
    height: 100%;
    background-color: var(--colors-itcj-primary);
  }

  & > :nth-child(4) {
    width: 100%;
  }
`;
const cssVerticalStyle = css`
  left: 0;
  top: 100%;
  height: 200%;
  width: 100%;
  grid-template-rows: 1fr 1fr 4fr 50% 4fr 1fr 1fr;

  & > * {
    width: 100%;
    height: 75%;
    background-color: var(--colors-itcj-primary);
  }

  & > :nth-child(4) {
    height: 100%;
  }
`;
interface StyledAnimationContainerProps {
  $position: position;
  $isVisible: boolean;
  $haveOutAnimation: boolean;
  $animationDirection: direction;
}
const StyledAnimationContainer = styled.div<StyledAnimationContainerProps>`
  position: absolute;
  display: grid;
  z-index: ${(p) =>
    p.$position === "top"
      ? "var(--z-index-above-background)"
      : "var(--z-index-background-middle)"};
  justify-items: center;

  /* ANCHOR CHILDREN */
  ${(p) => {
    if (
      p.$animationDirection === "toLeft" ||
      p.$animationDirection === "toRight"
    ) {
      return [cssHorizontalStyle];
    }
    return [cssVerticalStyle];
  }}

  /* ANCHOR ANIMATIONS */
  animation-duration: 400ms;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  ${(p) => {
    let inAnimation;
    let outAnimation;

    switch (p.$animationDirection) {
      case "toTop":
        inAnimation = animations.toTop.in;
        outAnimation = animations.toTop.out;
        break;
      case "toRight":
        inAnimation = animations.toRight.in;
        outAnimation = animations.toRight.out;
        break;
      case "toBottom":
        inAnimation = animations.toBottom.in;
        outAnimation = animations.toBottom.out;
        break;
      case "toLeft":
        inAnimation = animations.toLeft.in;
        outAnimation = animations.toLeft.out;
        break;
    }

    if (p.$haveOutAnimation) {
      return p.$isVisible ? inAnimation : outAnimation;
    } else if (p.$isVisible) {
      return inAnimation;
    }
  }}
`;
