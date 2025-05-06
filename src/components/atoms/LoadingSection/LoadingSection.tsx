import { useState } from "react";
import styled, { keyframes } from "styled-components";

export const LoadingSection = () => {
  const [size, setSize] = useState(0);

  return (
    <StyledLoadingWrapper>
      <StyledLoading />
    </StyledLoadingWrapper>
  );
};

// ANCHOR Keyframes
const KeyframeGradient = keyframes`
  0% {
		background-position: 0% 50%;
	}
	100% {
		background-position: 200% 50%;
	}
`;

const StyledLoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const StyledLoading = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);

  background: #c11627;
  background: linear-gradient(
    90deg,
    var(--colors-app-primary-300),
    var(--colors-app-primary-200),
    var(--colors-app-primary-300),
    var(--colors-app-primary-200),
    var(--colors-app-primary-300)
  );

  background-size: 200% 200%;

  animation: ${KeyframeGradient} 2s cubic-bezier(0.06, 0.34, 0.91, 0.65)
    infinite;
`;
