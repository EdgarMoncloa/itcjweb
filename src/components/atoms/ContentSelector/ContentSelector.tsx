import styled, { keyframes } from 'styled-components';

export interface ContentLinkProps {
  img: string;
  title: string;
  caption?: string;
  alt?: string;
}

export const ContentSelector = ({
  img,
  title,
  caption,
  alt = 'Imagen de noticia principal',
}: ContentLinkProps) => {
  return (
    <StyledContentSelector>
      <StyledDescriptionTooltip>{title}</StyledDescriptionTooltip>
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

  transition: 1s opacity;

  visibility: hidden;
`;

const StyledContentSelector = styled.div`
  width: var(--size-icon-large);
  height: var(--size-icon-large);
  border-radius: var(--size-border-radius-medium);
  background-color: var(--colors-itcj-main);
  position: relative;
  cursor: pointer;

  fill: var(
    --Colors-App-Glass-Glass-border,
    radial-gradient(197.67% 143.49% at 100% 0%, #f63d4f 0%, #831924 100%)
  );
  /* filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.4)); */

  &:hover ${StyledDescriptionTooltip} {
    opacity: 1;
    visibility: visible;
  }
`;
