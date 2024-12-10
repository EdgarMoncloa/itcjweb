import styled, { css } from 'styled-components';
import { StyledH6 } from '../../../tokens/CustomText';
import { DynamicIcon } from '../../atoms/DynamicIcon/DynamicIcon';

export interface NavOptionProps {
  content: string;
  link: string;
  defaultSize?: boolean;
  icon?: React.ReactNode | string;
}

export const NavOption = ({
  content,
  link,
  defaultSize = true,
  icon,
}: NavOptionProps) => {
  return (
    <StyledNavOption href={link} className={defaultSize ? 'defaultSize' : ''}>
      <StyledContent>
        <StyledIconWrapper>
          <DynamicIcon icon={icon} size={'large'} />
        </StyledIconWrapper>
        <StyledH6>{content}</StyledH6>
      </StyledContent>
      <StyledBorderX />
      <StyledBorderY />
    </StyledNavOption>
  );
};

const StyledNavOption = styled.a`
  text-decoration: none;
  color: inherit;
  border-radius: var(--size-border-radius-medium);
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  padding: var(--size-padding-small);

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: var(--size-height-1-row);
  }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--size-gap-small);
  width: 100%;
  height: 100%;
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

const StyledBorderBase = css`
  border-radius: var(--size-border-radius-medium);
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  transition: transform var(--transition-fast);

  ${StyledNavOption}:hover & {
    transform: translateX(0);
  }
`;

const StyledBorderX = styled.div`
  &::after {
    ${StyledBorderBase};
    border-top: var(--size-border-small) solid var(--colors-app-primary-600);
    transform: translateX(-100%);
  }
  &::before {
    ${StyledBorderBase};
    border-bottom: var(--size-border-small) solid var(--colors-app-primary-600);
    transform: translateX(100%);
  }
`;
const StyledBorderY = styled.div`
  &::after {
    ${StyledBorderBase};
    transform: translateY(-100%);
    border-right: var(--size-border-small) solid var(--colors-app-primary-600);
  }
  &::before {
    ${StyledBorderBase};
    transform: translateY(100%);
    border-left: var(--size-border-small) solid var(--colors-app-primary-600);
  }
`;
