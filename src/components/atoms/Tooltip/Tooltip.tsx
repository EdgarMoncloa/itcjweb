import styled from "styled-components";
import ReactDOM from "react-dom";
import { useRef, useState } from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  children: React.ReactNode;
  tooltipContent: React.ReactNode;
  position?: TooltipPosition;
  isVisible?: boolean;
  colorVariant?: "primary" | "neutral";
}

export const Tooltip = ({
  children,
  tooltipContent,
  position = "bottom",
  isVisible = undefined,
  colorVariant = "primary",
}: TooltipProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [positionXY, setPositionXY] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const tooltipPadding = 10;

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const tooltipHeight = tooltipRef?.current?.offsetHeight || 0;
    const tooltipWidth = tooltipRef?.current?.offsetWidth || 0;

    switch (position) {
      case "top":
        setPositionXY({
          top: rect.top + window.scrollY - tooltipHeight - tooltipPadding,
          left: rect.left + rect.width / 2 + window.scrollX - tooltipWidth / 2,
        });
        break;
      case "bottom":
        setPositionXY({
          top: rect.top + rect.height + window.scrollY + tooltipPadding,
          left: rect.left + rect.width / 2 + window.scrollX - tooltipWidth / 2,
        });
        break;
      case "left":
        setPositionXY({
          top: rect.top + rect.height / 2 + window.scrollY - tooltipHeight / 2,
          left: rect.left + window.scrollX - tooltipWidth - tooltipPadding,
        });
        break;
      case "right":
        setPositionXY({
          top: rect.top + rect.height / 2 + window.scrollY - tooltipHeight / 2,
          left: rect.left + rect.width + window.scrollX + tooltipPadding,
        });
        break;
    }

    setIsHovering(true);
  };
  const handleMouseLeave = () => setIsHovering(false);

  let localIsVisible = false;
  if (isVisible !== undefined) {
    localIsVisible = isVisible;
  } else {
    localIsVisible = isHovering;
  }
  const tooltipClasses = [
    `color-variant-${colorVariant}`,
    localIsVisible ? "visible" : "",
  ].join(" ");

  return (
    <TooltipParent
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {ReactDOM.createPortal(
        <StyledTooltip
          className={tooltipClasses}
          ref={tooltipRef}
          style={{
            top: `${positionXY.top}px`,
            left: `${positionXY.left}px`,
          }}
        >
          {tooltipContent}
        </StyledTooltip>,
        document.body
      )}
    </TooltipParent>
  );
};

const TooltipParent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledTooltip = styled.div`
  align-items: center;
  border-radius: var(--size-border-radius-medium);
  flex-direction: column;
  opacity: 0;
  padding: var(--size-padding-small) var(--size-padding-medium);
  position: absolute;
  width: max-content;
  max-width: var(--size-width-6-cols);
  z-index: var(--z-index-tooltip);
  transition: var(--transition-normal) opacity;

  &.visible {
    opacity: 1;
    pointer-events: auto;
  }

  &.color-variant-primary {
    background-color: var(--colors-app-primary-500);
    color: var(--colors-app-text-light);
  }

  &.color-variant-neutral {
    background-color: var(--colors-app-neutral-800);
    color: var(--colors-app-text-light);
  }
`;
