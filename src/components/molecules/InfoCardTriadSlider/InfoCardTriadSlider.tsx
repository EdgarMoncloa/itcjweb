import styled, { css } from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../tokens/CustomText';
import { TextTypes } from '../../../types/GlobalTypes';
import { Tag } from '../../atoms/Tag';
import {
  TriadContentHoverSlider,
  TriadContentHoverSliderSize,
} from '../../atoms/Grids/TriadContentHoverSlider';

export interface InfoCardTrialSliderProps {
  title: string;
  subtitle: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
  defaultSize?: boolean;
  gridSize?: TriadContentHoverSliderSize;
}

export const InfoCardTrialSlider = ({
  title,
  subtitle,
  description,
  tags,
  icon,
  defaultSize,
  gridSize = '2-1-2',
}: InfoCardTrialSliderProps) => {
  const primaryContent = (
    <StyledPrimaryContent>
      <StyledTitle as={StyledH6}>{title}</StyledTitle>
      {tags && (
        <StyledTagsContainer>
          {tags.map((tag, index) => {
            return (
              <Tag
                key={index}
                text={tag}
                colorVariant='primary'
                hasPadding={true}
                textSize={TextTypes.overline}
              />
            );
          })}
        </StyledTagsContainer>
      )}
    </StyledPrimaryContent>
  );
  const secondaryContent = (
    <StyledSecondaryContent>{icon}</StyledSecondaryContent>
  );
  const tertiaryContent = description && (
    <StyledTertiaryContainer>
      <StyledTitle as={StyledH6}>{subtitle}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
    </StyledTertiaryContainer>
  );

  return (
    <StyledGridSliderInfoCard className={defaultSize ? 'default-size' : ''}>
      <TriadContentHoverSlider
        primaryContent={primaryContent}
        secondaryContent={secondaryContent}
        tertiaryContent={tertiaryContent}
        gridSize={gridSize}
      />
    </StyledGridSliderInfoCard>
  );
};

const StyledGridSliderInfoCard = styled.div`
  overflow: hidden;
  &.default-size {
    width: var(--size-width-5-cols);
    height: var(--size-height-4-rows);
  }
`;

const CssBaseContainer = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--size-gap-small);
`;

const StyledPrimaryContent = styled.div`
  ${CssBaseContainer}
  gap: var(--size-gap-small);
`;

const StyledTertiaryContainer = styled.div`
  ${CssBaseContainer}
  overflow: hidden;
`;

const StyledSecondaryContent = styled.div`
  ${CssBaseContainer}
  font-size: var(--size-icon-4xl);
  color: var(--colors-app-primary-700);
`;

const StyledTitle = styled.div`
  text-align: center;
  line-height: var(--line-height-xs);
  color: var(--colors-itcj-primary);
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
