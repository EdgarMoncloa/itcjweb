import { Component, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { LoadingSection } from "../../atoms/LoadingSection";

export interface CustomImgProps {
  src: string;
  alt: string;
  defaultSize?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const COMPONENT_STATES = {
  LOADING: "LOADING",
  LOADED: "LOADED",
  ERROR: "ERROR",
};

export const CustomImg = ({
  src,
  alt,
  defaultSize = false,
  style,
  className = "",
}: CustomImgProps) => {
  const elementClassName = defaultSize ? "defaultSize" : "";
  const [state, setState] = useState(COMPONENT_STATES.LOADING);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setState(COMPONENT_STATES.LOADED);
    };
    img.onerror = () => {
      setState(COMPONENT_STATES.ERROR);
    };
  }, []);

  let renderComponent;
  switch (state) {
    case COMPONENT_STATES.LOADING:
      renderComponent = <LoadingSection />;
      break;
    case COMPONENT_STATES.LOADED:
      renderComponent = (
        <StyledCustomImg
          src={src}
          alt={alt}
          style={style}
          className={`${elementClassName} ${className}`}
        />
      );
      break;
    case COMPONENT_STATES.ERROR:
      renderComponent = <StyledError>Error al cargar imagen</StyledError>;
      break;
  }

  return <StyledContainer>{renderComponent}</StyledContainer>;
};

// SECTION Styles

// ANCHOR Components
const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: var(--size-border-radius-small);
  border: var(--size-border-small) solid var(--colors-app-primary-700);
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;

  &.defaultSize {
    height: var(--size-height-6-rows);
    width: var(--size-width-6-cols);
  }
`;

const StyledCustomImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const StyledError = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// !SECTION Styles
