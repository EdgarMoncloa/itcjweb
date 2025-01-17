import styled from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../tokens/CustomText';
import { TextTypes } from '../../../types/GlobalTypes';
import { Tag } from '../../atoms/Tag';
import { DualContentHoverReveal } from '../../atoms/Grids/DualContentHoverReveal';
import { DynamicIcon } from '../../atoms/Icons/DynamicIcon';

export interface InfoCardDualRevealProps {
  defaultSize?: boolean;
  icon?: React.ReactNode;
  title: string;
  tags?: string[];
  subtitle: string;
  description: string;
  colorVariant?: 'primary' | 'neutral';
}

export const InfoCardDualReveal = ({
  defaultSize = false,
  icon,
  title,
  tags,
  subtitle,
  description,
  colorVariant = 'primary',
}: InfoCardDualRevealProps) => {
  return (
    <StyledInfoCardDualReveal className={defaultSize ? 'defaultSize' : ''}>
      <DualContentHoverReveal
        colorVariant={colorVariant}
        primaryContent={
          <>
            <DynamicIcon icon={icon} size={'4xl'} colorVariant={colorVariant} />
            <StyledTitle as={StyledH6}>{title}</StyledTitle>
            {tags && (
              <StyledTagsContainer>
                {tags.map((tag, index) => {
                  return (
                    <Tag
                      key={index}
                      text={tag}
                      colorVariant={colorVariant}
                      hasPadding={true}
                      textSize={TextTypes.overline}
                    />
                  );
                })}
              </StyledTagsContainer>
            )}
          </>
        }
        secondaryContent={
          <>
            <StyledSubtitle as={StyledH6}>{subtitle}</StyledSubtitle>
            <StyledDescription>{description}</StyledDescription>
          </>
        }
      />
    </StyledInfoCardDualReveal>
  );
};

const StyledInfoCardDualReveal = styled.div`
  &.defaultSize {
    width: var(--size-width-4-cols);
    height: calc(var(--size-height-10-row));
  }
`;

const StyledTitle = styled.div`
  text-align: center;

  /* Variants */
  .primary & {
    color: var(--colors-itcj-primary);
  }
  .neutral & {
    color: var(--colors-app-text-dark);
  }
`;

const StyledSubtitle = styled(StyledTitle)`
  .neutral & {
    color: var(--colors-app-text-light);
  }
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

const StyledDescription = styled(StyledBody1)`
  max-height: 100%;
  height: max-content;
  text-align: center;
  line-height: var(--line-height-xs);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: visible;
  text-overflow: ellipsis;
  -webkit-line-clamp: 6;
`;
