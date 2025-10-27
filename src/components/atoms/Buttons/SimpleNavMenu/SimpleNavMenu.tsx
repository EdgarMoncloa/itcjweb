import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export enum SimpleNavMenuTypes {
  gob = 'gob',
  tecnm = 'tecnm',
  itcj = 'itcj',
}

interface subItem {
  link: string;
  content: string | ReactNode | ReactNode[];
  icon?: ReactNode;
}

interface multipleSubItems extends subItem {
  subItems?: subItem[];
}

export interface SimpleNavMenuProps extends subItem {
  type: SimpleNavMenuTypes;
  subItems?: multipleSubItems[];
}

export const SimpleNavMenu = ({
  type,
  content,
  icon,
  subItems,
  link,
}: SimpleNavMenuProps) => {
  const typeClassName = type.toString();

  return (
    <StyledMainContainer>
      <StyledNavMainItem className={typeClassName}>
        {icon && <StyledIcon>{icon}</StyledIcon>}
        <StyledText href={link}>{content}</StyledText>
      </StyledNavMainItem>
      {subItems && subItems.length > 0 && (
        <StyledSubOptionsWrapper>
          <StyledSubOptionsContainer className={typeClassName}>
            {subItems?.map((option, idx) => (
              <StyledNavMainItem
                key={idx}
                className={`${typeClassName} subItem`}
              >
                {option.icon && <StyledIcon>{option.icon}</StyledIcon>}
                <StyledText href={link}>{option.content}</StyledText>
              </StyledNavMainItem>
            ))}
          </StyledSubOptionsContainer>
        </StyledSubOptionsWrapper>
      )}
    </StyledMainContainer>
  );
};

// ANCHOR Main Container
const StyledMainContainer = styled.div`
  height: 100%;
  overflow: visible;
  position: relative;
  margin: 0 var(--size-margin-xs);
  text-align: center;
`;

// ANCHOR Main Item
const StyledNavMainItem = styled.div`
  width: max-content;
  display: flex;
  padding: 0 var(--size-padding-small);
  height: 100%;
  cursor: pointer;
  user-select: none;
  position: relative;

  &.subItem {
    min-width: calc(var(--size-width-4-cols) / 2);
    padding: var(--size-padding-xs) var(--size-padding-medium);
    position: relative;
    width: 100%;
  }

  &.gob {
    background-color: var(--colors-gob-primary-dark);
    color: var(--colors-app-text-light);
    &:hover {
      background-color: var(--colors-gob-primary);
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

// ANCHOR Main Content
const StyledIcon = styled.div`
  /* width: var(--size-icon-2xl); */
  /* height: var(--size-icon-2xl); */
  font-size: var(--size-icon-large);
  margin: auto;
`;

const StyledText = styled.a`
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
  padding-top: var(--size-padding-2xs);
  position: absolute;
  left: 50%;
  transform: translate(-50%, calc(var(--size-height-1-rows) * -1));
  background-color: transparent;
  opacity: 0;
  transition:
    var(--transition-fast) opacity,
    var(--transition-fast) transform;
  pointer-events: none;
  z-index: var(--z-index-background-highest);

  &:hover,
  ${StyledMainContainer}:hover & {
    z-index: var(--z-index-background-highest);

    opacity: 1;
    pointer-events: auto;
    transform: translate(-50%, 0%);
  }
`;

const StyledSubOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-padding-xs);
  padding: var(--size-padding-small) 0;
  height: 100%;

  &.gob {
    background-color: var(--colors-gob-primary-dark);
  }
  &.tecnm {
    background-color: var(--colors-app-secondary-950);
  }
  &.itcj {
    background-color: var(--colors-app-primary-700);
  }
`;
