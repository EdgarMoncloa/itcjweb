import styled from 'styled-components';
import { AllHeaders } from '../../organisms/AllHeaders';
import { StyledBody3, StyledH4 } from '../../../tokens/CustomText';

export interface BlogTemplateProps {
  title: string;
  content: string;
  imgSrc: string;
  alt: string;
}

export const BlogTemplate = ({
  title,
  content,
  imgSrc,
  alt,
}: BlogTemplateProps) => {
  return (
    <StyledBlogTemplate>
      <AllHeaders />
      {/* Imagen de portada */}
      <StyledImgWrapper>
        <StyledImg src={imgSrc} alt={alt} />
      </StyledImgWrapper>
      <StyledContentContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledBody1>{content}</StyledBody1>
      </StyledContentContainer>
    </StyledBlogTemplate>
  );
};

const StyledBlogTemplate = styled.div`
  h1 {
    font-size: var(--size-font-large);
    font-weight: var(--weight-bold);
  }

  p {
    font-size: var(--size-font-medium);
  }
`;

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--size-border-radius-medium);
  transition: var(--transition-normal) border-radius;
  background-color: var(--colors-app-primary-200);
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const StyledContentContainer = styled.div`
  border-bottom-left-radius: var(--size-border-radius-large);
  border-bottom-right-radius: var(--size-border-radius-large);

  backdrop-filter: blur(4px);
  background-color: var(--colors-transparent-itcj-primary);
  bottom: 0;
  color: var(--colors-app-text-light);
  height: 20%;
  padding-left: var(--size-padding-large);
  padding: var(--size-padding-small) var(--size-padding-xl);
  position: absolute;
  right: 0;
  text-align: center;
  width: 100%;
`;
const StyledTitle = styled(StyledH4)``;

const StyledBody1 = styled(StyledBody3)``;
