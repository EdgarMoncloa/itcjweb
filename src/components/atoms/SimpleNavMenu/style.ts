import styled, { css } from 'styled-components';
import { SimpleNavMenuTypes } from '.';

const getColorsFromType = (type: SimpleNavMenuTypes) => {
  let colors = {
    background: '',
    color: '',
    hover: '',
  };
  switch (type) {
    case SimpleNavMenuTypes.gob:
      colors = {
        background: 'var(--colors-tecnm-pantone-627-c)',
        color: 'var(--colors-app-text-light)',
        hover: 'var(--colors-tecnm-pantone-626-c)',
      };
      break;
    case SimpleNavMenuTypes.itcj:
      colors = {
        background: 'var(--colors-app-primary-700)',
        color: 'var(--colors-app-text-light)',
        hover: 'var(--colors-app-primary-300)',
      };
      break;
    case SimpleNavMenuTypes.tecnm:
      colors = {
        background: 'var(--colors-app-secondary-950)',
        color: 'var(--colors-app-text-light)',
        hover: 'var(--colors-app-secondary-900)',
      };
      break;
    default:
      break;
  }
  return colors;
};

// ANCHOR Main Container
export const StyledMainContainer = styled.div`
  height: 100%;
  overflow: visible;
  position: relative;
`;

// ANCHOR Main Item
interface TypeOfMenuStyle {
  $type: SimpleNavMenuTypes;
  $isSubItem?: boolean;
}
const NavMenuGobStyle = css`
  background-color: var(--colors-tecnm-pantone-627-c);
  color: var(--colors-app-text-light);

  &:hover {
    background-color: var(--colors-tecnm-pantone-626-c);
  }
`;
const NavMenuItcjStyle = css`
  background-color: var(--colors-app-primary-700);
  color: var(--colors-app-text-light);

  &:hover {
    background-color: var(--colors-app-primary-300);
  }
`;
const NavMenuTecnmStyle = css`
  background-color: var(--colors-app-secondary-950);
  color: var(--colors-app-text-light);

  &:hover {
    background-color: var(--colors-app-secondary-900);
  }
`;
const NavMenuSubItemStyle = css`
  min-width: calc(var(--size-width-4-cols) / 2);
  padding: var(--size-padding-xs) var(--size-padding-medium);
  position: relative;
`;
export const StyledNavMainItem = styled.div<TypeOfMenuStyle>`
  width: max-content;
  display: flex;
  padding: 0 var(--size-padding-medium);
  height: 100%;
  cursor: pointer;
  user-select: none;
  position: relative;

  ${(p) => p.$isSubItem === true && NavMenuSubItemStyle};

  ${(p) => {
    switch (p.$type) {
      case SimpleNavMenuTypes.gob:
        return NavMenuGobStyle;
      case SimpleNavMenuTypes.tecnm:
        return NavMenuTecnmStyle;
      case SimpleNavMenuTypes.itcj:
        return NavMenuItcjStyle;
      default:
        return;
    }
  }}
`;

// ANCHOR Main Text
export const StyledMainText = styled.a`
  display: grid;
  color: var(--colors-app-text-light);
  font-size: var(--font-size-body2);
  text-decoration: none;
  align-items: center;
  align-content: center;
  height: 100%;
`;

// ANCHOR Sub Options Container
export const StyledSubOptionsWrapper = styled.div`
  min-width: calc(var(--size-width-4-cols) / 2);
  width: max-content;
  min-height: var(--size-height-medium);
  padding-top: var(--size-padding-small);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  display: none;
  background-color: transparent;

  &:hover,
  ${StyledMainContainer}:hover & {
    display: block;
  }
`;

interface TypeOfMenuStyle {
  $type: SimpleNavMenuTypes;
  $isMouseInside?: boolean;
}
export const StyledSubOptionsContainer = styled.div<TypeOfMenuStyle>`
  display: flex;
  flex-direction: column;
  gap: var(--size-padding-xs);
  padding: var(--size-padding-small) 0;
  height: 100%;

  background-color: ${(p) => getColorsFromType(p.$type).background};
`;
