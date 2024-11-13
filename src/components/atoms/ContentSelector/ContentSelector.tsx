import styled, { keyframes } from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../tokens/CustomText';
import { useEffect, useState } from 'react';

export interface ContentSelectorProps {
  title: string;
  caption?: string;
  defaultSize?: boolean;
  onClick?: (event: Event) => void;
}

export const ContentSelector = ({
  title,
  caption,
  defaultSize = false,
  onClick,
}: ContentSelectorProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseUp = (event: Event) => {
    if (onClick) {
      onClick(event);
    }
    // TODO SETITEOUT
    // setIsClicked(false);
  };

  useEffect(() => {
    return () => {
      document.body.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <StyledContentSelector
      // onClick={onClick}
      className={defaultSize ? 'defaultSize' : ''}
    >
      <StyledSelectorIcon
        onMouseDown={() => {
          setIsClicked(true);
          document.addEventListener('mouseup', handleMouseUp);
        }}
        className={isClicked ? 'animate-on-click' : ''}
      />
      <StyledDescriptionTooltip>
        <StyledH6>{title}</StyledH6>
        <StyledBody1>{caption}</StyledBody1>
      </StyledDescriptionTooltip>
    </StyledContentSelector>
  );
};

const StyledDescriptionTooltip = styled.div`
  align-items: center;
  background-color: var(--colors-app-main-500);
  border-radius: var(--size-border-radius-medium);
  color: var(--colors-app-text-light);
  display: flex;
  flex-direction: column;
  left: calc(100% + var(--size-margin-small));
  opacity: 0;
  padding: var(--size-padding-small) var(--size-padding-medium);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 1s opacity;
  width: max-content;
  z-index: var(--z-index-background-middle);

  visibility: hidden;
`;

const StyledContentSelector = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  /* filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4)); */

  &.defaultSize {
    border: 1px solid red;
    height: var(--size-icon-very-large);
    width: var(--size-icon-very-large);
  }

  &:hover ${StyledDescriptionTooltip} {
    opacity: 1;
    visibility: visible;
    z-index: var(--z-index-tooltip);
  }
`;

const clickAnimation = keyframes`
  0% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.1);
  }
`;
const StyledSelectorIcon = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
  background-color: var(--colors-itcj-main);
  border-radius: var(--size-border-radius-full);
  transition: var(--transition-fast) transform;

  fill: var(
    --Colors-App-Glass-Glass-border,
    radial-gradient(197.67% 143.49% at 100% 0%, #f63d4f 0%, #831924 100%)
  );

  &:hover {
    transform: scale(1.2);
  }

  &.animate-on-click {
    animation: ${clickAnimation} var(--transition-normal);
  }
`;
