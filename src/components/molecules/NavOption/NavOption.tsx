import styled, { css } from 'styled-components';
import { StyledH6 } from '../../../tokens/CustomText';
import { DynamicIcon } from '../../atoms/DynamicIcon/DynamicIcon';
import { MdExpandMore } from 'react-icons/md';
import { DropdownContainer } from '../../atoms/DropdownContainer';
import { useState } from 'react';
import { StyledUnstyledButton } from '../../../tokens/UnstyledElements';
import { StyledRelevantSite } from '../../atoms/RelevantSite';
import { BorderHoverReveal } from '../../atoms/BorderHoverReveal/BorderHoverReveal';

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
    <StyledOptionContent
      href={!haveSubitems ? link : undefined}
      className={showSubitems ? 'expanded' : ''}
      as={haveSubitems ? StyledUnstyledButton : 'div'}
      onClick={() => setShowSubitems(!showSubitems)}
    >
      <BorderHoverReveal>
        <StyledBorderHoverRevealContent>
          {leftIcon && (
            <StyledIconWrapper>
              <DynamicIcon icon={leftIcon} size={'large'} />
            </StyledIconWrapper>
          )}

          <StyledH6>{content}</StyledH6>

          {haveSubitems && (
            <StyledRightIconWrapper>
              <DynamicIcon icon={<MdExpandMore />} size={'large'} />
            </StyledRightIconWrapper>
          )}
        </StyledBorderHoverRevealContent>
      </BorderHoverReveal>
    </StyledOptionContent>
  );

  const secondaryContentElement = (
    <StyledSecondaryContent>
      {subitems?.map((item, index) => (
        <StyledOptionContent
          key={index}
          href={item.link}
          as={BorderHoverReveal}
        >
          <StyledBorderHoverRevealContent>
            <StyledH6>{item.content}</StyledH6>
          </StyledBorderHoverRevealContent>
        </StyledOptionContent>
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

const StyledOptionContent = styled.a`
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StyledBorderHoverRevealContent = styled.div`
  width: 100%;
  height: 100%;
  padding: var(--size-padding-small);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: var(--size-gap-small);
`;

const StyledSecondaryContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  gap: var(--size-gap-medium);
  padding: var(--size-gap-medium);
`;

const StyledIconWrapper = styled.div`
  width: var(--size-icon-xl);
  height: var(--size-icon-xl);
  background-color: var(--colors-app-primary-700);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--size-border-radius-medium);
  color: var(--colors-app-text-light);
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
  ${StyledOptionContent}:hover & {
    opacity: 1;
    transform: translateX(0);
  }

  .expanded & {
    transform: rotate(90deg) translateX(0);
    opacity: 1;
  }
  ${StyledOptionContent}.expanded:hover & {
    opacity: 1;
    transform: rotate(90deg) translateX(0);
  }
`;
