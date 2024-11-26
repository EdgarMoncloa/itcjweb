import styled from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../../tokens/CustomText';
import { Tag } from '../../../atoms/Tag';
import { TextTypes } from '../../../../types/GlobalTypes';
import { InfoCardProps } from '../InfoCard';
import {
  StyledDescription,
  StyledIconWrapper,
  StyledTagsContainer,
  StyledTitle,
} from '../styles';

export const InfoCardHorizontal = ({
  title,
  description,
  tags,
  icon,
  defaultSize = false,
}: InfoCardProps) => {
  return (
    <StyledMainWrapper className={defaultSize ? 'defaultSize' : ''}>
      <StyledMainContainer>
        <StyledLeftContainer>
          <StyledTitle as={StyledH6}>{title}</StyledTitle>
          {tags && (
            <StyledTagsContainer>
              {tags.map((tag, index) => {
                return (
                  <Tag
                    key={index}
                    text={tag}
                    variant='primary'
                    hasPadding={true}
                    textSize={TextTypes.overline}
                  />
                );
              })}
            </StyledTagsContainer>
          )}
        </StyledLeftContainer>
        <StyledIconWrapper>{icon}</StyledIconWrapper>
        {description && (
          <StyledRightContainer>
            <StyledTitle as={StyledH6}>{description.title}</StyledTitle>
            <StyledDescription $lineClamp={description.maxLines}>
              {description?.text}
            </StyledDescription>
          </StyledRightContainer>
        )}
      </StyledMainContainer>
    </StyledMainWrapper>
  );
};

const StyledMainContainer = styled.div`
  align-items: center;
  display: grid;
  gap: 5%;
  grid-template-columns: 3fr 2fr 3fr;
  height: 100%;
  justify-content: center;
  padding: var(--size-padding-small);
  transition: var(--transition-fast) transform;
  width: 160%;
  will-change: transform;
`;

const StyledMainWrapper = styled.div`
  align-items: center;
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-primary);
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-fast) background-color;
  width: 100%;
  height: calc(var(--size-height-4-row));
  will-change: background-color;

  &:hover {
    background-color: var(--colors-app-primary-100);
  }

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-4-row));
  }

  &:hover ${StyledMainContainer} {
    transform: translateX(-38%);
  }
`;

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-gap-small);
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-gap-small);
  overflow: hidden;
`;
