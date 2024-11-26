import styled from 'styled-components';
import { StyledBody1, StyledH6 } from '../../../tokens/CustomText';

export const StyledIconWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: var(--size-icon-4xl);
  height: var(--size-icon-4xl);
  justify-content: center;
  width: var(--size-icon-4xl);
  color: var(--colors-app-primary-700);
`;
export const StyledTitle = styled.div`
  text-align: center;
  line-height: var(--line-height-xs);
  color: var(--colors-itcj-primary);
`;

export const StyledTagsContainer = styled.div`
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
export const StyledDescription = styled(StyledBody1)<StyledDescriptionProps>`
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
