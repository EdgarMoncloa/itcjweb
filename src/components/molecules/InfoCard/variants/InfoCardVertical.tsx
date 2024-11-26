import styled from 'styled-components';
import { StyledH4 } from '../../../../tokens/CustomText';
import { Tag } from '../../../atoms/Tag';
import { TextTypes } from '../../../../types/GlobalTypes';
import { InfoCardProps } from '../InfoCard';
import {
  StyledDescription,
  StyledIconWrapper,
  StyledTagsContainer,
  StyledTitle,
} from '../styles';

export const InfoCardVertical = ({
  title,
  description,
  tags,
  icon,
  defaultSize = false,
}: InfoCardProps) => {
  return (
    <StyledMainContainer className={defaultSize ? 'defaultSize' : ''}>
      <StyledPrimaryContent>
        <StyledIconWrapper>{icon}</StyledIconWrapper>
        <StyledTitle as={StyledH4}>{title}</StyledTitle>
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
      </StyledPrimaryContent>
      {description && (
        <StyledSecondaryContent>
          <StyledTitle as={StyledH4}>{description.title}</StyledTitle>
          <StyledDescription $lineClamp={description.maxLines}>
            {description?.text}
          </StyledDescription>
        </StyledSecondaryContent>
      )}
    </StyledMainContainer>
  );
};

const StyledPrimaryContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
  height: 100%;
  justify-content: center;
  padding: var(--size-padding-medium);
  width: 100%;
`;

const StyledSecondaryContent = styled(StyledPrimaryContent)`
  background-color: var(--colors-app-primary-100);
  height: 100%;
  left: 0;
  opacity: 0;
  padding: var(--size-padding-large);
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: var(--transition-normal) opacity;
  width: 100%;
  will-change: opacity;
`;

const StyledMainContainer = styled.div`
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-primary);
  cursor: pointer;
  height: var(--size-height-8-row);
  overflow: hidden;
  position: relative;
  width: 100%;

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-9-row));
  }

  &:hover ${StyledSecondaryContent} {
    opacity: 1;
    pointer-events: all;
  }
`;
