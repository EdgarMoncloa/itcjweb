import styled, { keyframes } from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../tokens/CustomText';

export interface ContentSelectorProps {
  title: string;
  caption?: string;
  defaultSize?: boolean;
}

export const ContentSelector = ({
  title,
  caption,
  defaultSize = false,
}: ContentSelectorProps) => {
  return (
    <StyledContentSelector className={defaultSize ? '' : 'fillParent'}>
      <StyledDescriptionTooltip>
        <StyledH6>{title}</StyledH6>
        <StyledBody1>{caption}</StyledBody1>
      </StyledDescriptionTooltip>
    </StyledContentSelector>
  );
};

const StyledDescriptionTooltip = styled.div`
  position: absolute;
  width: max-content;
  opacity: 0;
  background-color: var(--colors-app-main-500);
  padding: var(--size-padding-small) var(--size-padding-medium);
  left: calc(100% + var(--size-margin-small));
  top: 50%;
  border-radius: var(--size-border-radius-medium);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: var(--colors-app-text-light);
  z-index: var(--z-index-background);
  transition: 1s opacity;

  visibility: hidden;
`;

const StyledContentSelector = styled.div`
  background-color: var(--colors-itcj-main);
  border-radius: var(--size-border-radius-full);
  cursor: pointer;
  height: var(--size-icon-medium);
  position: relative;
  width: var(--size-icon-medium);

  fill: var(
    --Colors-App-Glass-Glass-border,
    radial-gradient(197.67% 143.49% at 100% 0%, #f63d4f 0%, #831924 100%)
  );
  /* filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4)); */

  &.fillParent {
    width: 100%;
    height: 100%;
  }

  &:hover ${StyledDescriptionTooltip} {
    opacity: 1;
    visibility: visible;
    z-index: var(--z-index-tooltip);
  }
`;
