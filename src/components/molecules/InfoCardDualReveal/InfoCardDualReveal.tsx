import styled from 'styled-components';
import { StyledBody1, StyledH4, StyledH6 } from '../../../tokens/CustomText';
import { colorVariant, TextTypes } from '../../../types/GlobalTypes';
import { Tag } from '../../atoms/Tag';
import { DualContentHoverReveal } from '../../atoms/DualContentHoverReveal';

type InfoCardColorVariants = Omit<colorVariant, 'secondary'>;

export interface InfoCardDualRevealProps {
  defaultSize?: boolean;
  icon?: React.ReactNode;
  title: string;
  tags?: string[];
  subtitle: string;
  description: string;
  colorVariant?: colorVariant;
}

export const InfoCardDualReveal = ({
  defaultSize = false,
  icon,
  title,
  tags,
  subtitle,
  description,
  colorVariant = 'neutral',
}: InfoCardDualRevealProps) => {
  return (
    <StyledInfoCardDualReveal className={defaultSize ? 'defaultSize' : ''}>
      <DualContentHoverReveal
        colorVariant={colorVariant}
        primaryContent={
          <>
            <StyledIconWrapper>{icon}</StyledIconWrapper>
            <StyledTitle as={StyledH4}>{title}</StyledTitle>
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
            <StyledTitle as={StyledH4}>{subtitle}</StyledTitle>
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

const StyledIconWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--size-icon-4xl);
  height: var(--size-icon-4xl);
  justify-content: center;
  width: var(--size-icon-4xl);

  /* Variants */
  .primary & {
    color: var(--colors-app-primary-700);
  }
  .neutral & {
    color: var(--colors-app-text-dark);
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
