import { GoTriangleRight } from 'react-icons/go';
import styled from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../tokens/CustomText';
import { MdExpandMore } from 'react-icons/md';
import { DropdownContainer } from '../../atoms/Grids/DropdownContainer';
import { useState } from 'react';
import { StyledUnstyledButton } from '../../../tokens/UnstyledElements';
import { BorderHoverReveal } from '../../atoms/Grids/BorderHoverReveal/BorderHoverReveal';
import { DynamicIcon } from '../../atoms/Icons/DynamicIcon';

interface NavItem {
  content: string;
  link: string;
}

export interface NavOptionProps {
  content: string;
  link?: string;
  leftIcon?: React.ReactNode | string;
  subitems?: NavItem[];
}

export const NavOption = ({
  content,
  link = '#',
  leftIcon,
  subitems,
}: NavOptionProps) => {
  const haveSubitems = subitems && subitems.length > 0;
  const [showSubitems, setShowSubitems] = useState(false);

  const primaryContentElement = (
    <StyledOptionWrapper
      href={!haveSubitems ? link : undefined}
      className={showSubitems ? 'expanded' : ''}
      as={haveSubitems ? StyledUnstyledButton : 'div'}
      onClick={() => setShowSubitems(!showSubitems)}
    >
      <BorderHoverReveal>
        <StyledOptionContent>
          {leftIcon && (
            <StyledIconWrapper>
              <DynamicIcon
                icon={leftIcon}
                size={'medium'}
                colorVariant='neutral'
              />
            </StyledIconWrapper>
          )}

          <StyledBody1>{content}</StyledBody1>

          {haveSubitems && (
            <StyledRightIconWrapper>
              <DynamicIcon icon={<MdExpandMore />} size={'medium'} />
            </StyledRightIconWrapper>
          )}
        </StyledOptionContent>
      </BorderHoverReveal>
    </StyledOptionWrapper>
  );

  const secondaryContentElement = (
    <StyledSecondaryContent>
      {subitems?.map((item, index) => (
        <StyledOptionWrapper
          key={index}
          href={item.link}
          as={BorderHoverReveal}
        >
          <StyledSubitemOptionContent>
            <StyledSecondatyLefticonWrapper>
              <DynamicIcon
                icon={<GoTriangleRight />}
                size={'large'}
                colorVariant='neutral'
              />
            </StyledSecondatyLefticonWrapper>
            <StyledBody1>{item.content}</StyledBody1>
          </StyledSubitemOptionContent>
        </StyledOptionWrapper>
      ))}
    </StyledSecondaryContent>
  );

  return (
    <StyledNavOption>
      <DropdownContainer
        showContent={haveSubitems && showSubitems}
        primaryContent={primaryContentElement}
        secondaryContent={secondaryContentElement}
      />
    </StyledNavOption>
  );
};

const StyledNavOption = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--size-border-radius-medium);
`;

const StyledOptionWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const StyledOptionContent = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding: var(--size-padding-small);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--size-gap-small);
  transition: background-color var(--transition-normal);
  min-height: var(--size-height-large);

  &:hover {
    background-color: var(--colors-app-primary-200);
  }
`;
const StyledSubitemOptionContent = styled(StyledOptionContent)`
  padding: var(--size-padding-xs);
`;

const StyledSecondaryContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  gap: var(--size-gap-small);
  padding: var(--size-gap-small);
`;

const StyledIconWrapper = styled.div`
  width: var(--size-icon-large);
  height: var(--size-icon-large);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--size-border-radius-small);
  color: var(--colors-app-text-light);
`;

const StyledSecondatyLefticonWrapper = styled(StyledIconWrapper)`
  background-color: transparent;
  color: var(--colors-app-primary-700);
`;

const StyledRightIconWrapper = styled(StyledIconWrapper)`
  background-color: transparent;
  color: var(--colors-app-text-dark);
  margin-left: auto;
  opacity: 0;
  transition:
    var(--transition-fast) opacity,
    var(--transition-fast) transform;
  transform: translateY(-25%);

  &:hover,
  ${StyledOptionWrapper}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  .expanded & {
    transform: rotate(90deg) translateX(0);
    opacity: 1;
  }
  ${StyledOptionWrapper}.expanded:hover & {
    opacity: 1;
    transform: rotate(90deg) translateX(0);
  }
`;
