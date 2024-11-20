import styled from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../tokens/CustomText';
import { Tag } from '../../atoms/Tag';
import { TextTypes } from '../../../types/GlobalTypes';

export interface InfoCardProps {
  title: string;
  description?: {
    title?: string;
    text?: string;
    maxLines?: number;
  };
  tags: string[];
  icon: React.ReactNode;
}

export const InfoCard = ({ title, description, tags, icon }: InfoCardProps) => {
  return (
    <StyledMainWrapper className='defaultSize'>
      <StyledMainContainer>
        <StyledLeftContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledTagsContainer>
            {tags.map((tag, index) => {
              return (
                <Tag
                  key={index}
                  text={tag}
                  variant='primary'
                  hasPadding={false}
                  textSize={TextTypes.body3}
                />
              );
            })}
          </StyledTagsContainer>
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
  display: grid;
  grid-template-columns: 3fr 2fr 3fr;
  justify-content: center;
  padding: var(--size-padding-small);
  width: 160%;
  height: 100%;
  transition: var(--transition-fast) transform;
  will-change: transform;
`;

const StyledMainWrapper = styled.div`
  align-items: center;
  border-radius: var(--size-border-radius-medium);
  border: var(--size-border-small) solid var(--colors-itcj-main);
  cursor: pointer;
  overflow: hidden;
  transition: var(--transition-fast) background-color;
  width: 100%;

  &:hover {
    background-color: var(--colors-app-main-100);
  }

  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-4-row));
  }

  &:hover ${StyledMainContainer} {
    transform: translateX(-40%);
  }
`;

const StyledLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-gap-small);
`;

const StyledTitle = styled(StyledH6)`
  text-align: center;
  line-height: var(--line-height-xs);
  color: var(--colors-itcj-main);
`;

const StyledTagsContainer = styled.div`
  width: 100%;
  column-gap: var(--size-gap-small);
  row-gap: var(--size-gap-xs);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
`;

const StyledIconWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--size-icon-4xl);
  height: 100%;
  justify-content: center;
  width: 100%;
  color: var(--colors-app-main-700);
`;

const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-gap-small);
  overflow: hidden;
`;

interface StyledDescriptionProps {
  $lineClamp: number | undefined;
}
const StyledDescription = styled(StyledBody1)<StyledDescriptionProps>`
  max-height: 100%;
  height: max-content;
  text-align: center;
  line-height: var(--line-height-xs);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => props.$lineClamp && `-webkit-line-clamp: ${props.$lineClamp}`};
`;
