import styled, { css } from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../tokens/CustomText';
import { TextTypes } from '../../../types/GlobalTypes';
import { Tag } from '../../atoms/Tag';
import { InteractiveTriadGrid } from '../../atoms/InteractiveTriadGrid';

interface UndergraduateInfoCardProps {
  major: string;
  majorKey: string;
  description?: {
    text?: string;
    maxLines?: number;
  };
  campuses?: string[];
  icon?: React.ReactNode;
  defaultSize?: boolean;
}

export const UndergraduateInfoCard = ({
  major,
  majorKey,
  description,
  campuses,
  icon,
  defaultSize,
}: UndergraduateInfoCardProps) => {
  const primaryContent = (
    <StyledPrimaryContent>
      <StyledTitle as={StyledH6}>{major}</StyledTitle>
      {campuses && (
        <StyledTagsContainer>
          {campuses.map((campus, index) => {
            return (
              <Tag
                key={index}
                text={campus}
                variant='primary'
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
      <StyledTitle as={StyledH6}>{majorKey}</StyledTitle>
      <StyledDescription $lineClamp={description.maxLines}>
        {description?.text}
      </StyledDescription>
    </StyledTertiaryContainer>
  );

  return (
    <InteractiveTriadGrid
      primaryContent={primaryContent}
      secondaryContent={secondaryContent}
      tertiaryContent={tertiaryContent}
    />
  );
};

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
  /* height: var(--size-icon-4xl); */
  /* width: var(--size-icon-4xl); */
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
  overflow: visible;
  text-overflow: ellipsis;
  ${(props) => props.$lineClamp && `-webkit-line-clamp: ${props.$lineClamp}`};
`;
