import { CustomDivider } from '../../atoms/CustomDivider';
import styled from 'styled-components';
import { StyledBody1, StyledH5, StyledH6 } from '../../../tokens/CustomText';

export interface BlogCardProps {
  imgSrc: string;
  title: string;
  content: string;
  url?: string;
  defaultSize?: boolean;
}

export const BlogCard = ({
  imgSrc,
  title,
  content,
  url,
  defaultSize,
}: BlogCardProps) => {
  return (
    <StyledBlogCard
      href={url}
      target='_blank'
      className={defaultSize ? 'defaultSize' : ''}
    >
      <StyledImageContainer>
        <StyledImg src={imgSrc} />
      </StyledImageContainer>
      <CustomDivider />
      <StyledContentContainer>
        <StyledContentTitle>{title}</StyledContentTitle>
        <StyledContent>{content}</StyledContent>
      </StyledContentContainer>
    </StyledBlogCard>
  );
};

export const StyledBlogCard = styled.a`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 2fr;
  /* grid-template-rows: 150px 150px 150px; */
  width: 100%;
  overflow: hidden;
  height: 100%;
  /* max-height: var(--size-height-8-row); */

  border-radius: var(--size-border-radius-medium, 8px);
  border: var(--size-border-small, 2px) solid
    var(--colors-app-primary-700, #c11627);
  background: var(--colors-app-Background, #fcfcfc);
  cursor: pointer;
  text-decoration: none;
  color: var(--colors-app-text-dark);

  /* Main Shadow */
  box-shadow: var(--shadow-primary);
  transition: border-width var(--transition-fast);

  &:hover {
    border-width: var(--size-border-xl);
  }

  &.defaultSize {
    width: var(--size-width-3-cols);
    height: var(--size-height-8-row);
  }
`;
export const StyledImageContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 100%;
  /* max-width: var(--size-width-2-cols); */
  overflow: hidden;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const StyledContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  padding: var(--size-padding-small);
`;

export const StyledContentTitle = styled(StyledH6)`
  width: 100%;
  height: 100%;
`;

export const StyledContent = styled(StyledBody1)`
  height: 100%;
  width: 100%;
  overflow: hidden;
  line-height: calc(var(--font-size-body1) + 4px);
`;
