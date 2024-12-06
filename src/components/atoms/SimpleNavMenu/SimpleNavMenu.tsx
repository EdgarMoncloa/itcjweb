import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export enum SimpleNavMenuTypes {
  gob = 'gob',
  tecnm = 'tecnm',
  itcj = 'itcj',
}

export type SimpleNavMenuProps = {
  type: SimpleNavMenuTypes;
  content: string | ReactNode | ReactNode[];
  icon?: ReactNode;
  link?: string;
  subItems?: Array<{
    link: string;
    content: string | ReactNode | ReactNode[];
    subItems?: Array<{
      link: string;
      content: string | ReactNode | ReactNode[];
    }>;
  }>;
};

export const SimpleNavMenu = ({
  type,
  content,
  subItems,
  link,
}: SimpleNavMenuProps) => {
  const typeClassName = `${type}`;
  const SubItems = subItems && subItems.length > 0 && (
    <StyledSubOptionsWrapper>
      <StyledSubOptionsContainer $type={type} className={typeClassName}>
        {subItems.map((option, idx) => (
          <StyledNavMainItem
            key={idx}
            $type={type}
            $isSubItem
            className={typeClassName}
          >
            <StyledMainText href={link}>{option.content}</StyledMainText>
          </StyledNavMainItem>
        ))}
      </StyledSubOptionsContainer>
    </StyledSubOptionsWrapper>
  );
  return (
    <StyledMainContainer>
      <StyledNavMainItem $type={type} className={typeClassName}>
        <StyledMainText href={link}>{content}</StyledMainText>
      </StyledNavMainItem>
      {SubItems}
    </StyledMainContainer>
  );
};

// ANCHOR Main Container
const StyledMainContainer = styled.div`
  height: 100%;
  overflow: visible;
  position: relative;
`;

// ANCHOR Main Item
interface TypeOfMenuStyle {
  $type: SimpleNavMenuTypes;
  $isSubItem?: boolean;
}
const NavMenuSubItemStyle = css`
  min-width: calc(var(--size-width-4-cols) / 2);
  padding: var(--size-padding-xs) var(--size-padding-medium);
  position: relative;
`;
const StyledNavMainItem = styled.div<TypeOfMenuStyle>`
  width: max-content;
  display: flex;
  padding: 0 var(--size-padding-medium);
  height: 100%;
  cursor: pointer;
  user-select: none;
  position: relative;

  ${(p) => p.$isSubItem === true && NavMenuSubItemStyle};

  &.gob {
    background-color: var(--colors-tecnm-pantone-627-c);
    color: var(--colors-app-text-light);
    &:hover {
      background-color: var(--colors-tecnm-pantone-626-c);
    }
  }
  &.tecnm {
    background-color: var(--colors-app-secondary-950);
    color: var(--colors-app-text-light);
    &:hover {
      background-color: var(--colors-app-secondary-900);
    }
  }
  &.itcj {
    background-color: var(--colors-app-primary-700);
    color: var(--colors-app-text-light);
    &:hover {
      background-color: var(--colors-app-primary-300);
    }
  }
`;

// ANCHOR Main Text
const StyledMainText = styled.a`
  display: grid;
  color: var(--colors-app-text-light);
  font-size: var(--font-size-body2);
  text-decoration: none;
  align-items: center;
  align-content: center;
  height: 100%;
`;

// ANCHOR Sub Options Container
const StyledSubOptionsWrapper = styled.div`
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
const StyledSubOptionsContainer = styled.div<TypeOfMenuStyle>`
  display: flex;
  flex-direction: column;
  gap: var(--size-padding-xs);
  padding: var(--size-padding-small) 0;
  height: 100%;

  &.gob {
    background-color: var(--colors-tecnm-pantone-627-c);
  }
  &.tecnm {
    background-color: var(--colors-app-secondary-950);
  }
  &.itcj {
    background-color: var(--colors-app-primary-700);
  }
`;
