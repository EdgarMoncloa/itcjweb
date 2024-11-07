import styled from 'styled-components';
import { StyledBody1, StyledH2, StyledH4 } from '../../../tokens/CustomText';

export interface ContentLinkProps {
  img: string;
  title: string;
  caption?: string;
  alt?: string;
}

export const ContentLink = ({
  img,
  title,
  caption,
  alt = 'Imagen de noticia principal',
}: ContentLinkProps) => {
  return (
    <StyledContentLink>
      <StyledImgWrapper>
        <StyledImg src={img} alt={alt} />
      </StyledImgWrapper>
      <StyledDescriptionContainer>
        <StyledTitle>{title}</StyledTitle>
        <StyledBody1>{caption}</StyledBody1>
      </StyledDescriptionContainer>
    </StyledContentLink>
  );
};

const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: var(--size-border-radius-medium);
  transition: var(--transition-normal) border-radius;
`;
const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
`;
const StyledDescriptionContainer = styled.div`
  position: absolute;
  bottom: var(--size-margin-very-large);
  right: 0;
  padding: var(--size-padding-small) var(--size-padding-very-large);
  padding-left: var(--size-padding-large);
  text-align: center;
  height: 20%;
  bottom: 0;
  width: 100%;
  color: var(--colors-app-text-light);

  background-color: var(--colors-transparent-itcj-main);
  backdrop-filter: blur(4px);
`;
const StyledTitle = styled(StyledH4)``;

const StyledContentLink = styled.div`
  position: relative;
  background-color: var(--colors-itcj-main);
  padding: var(--size-padding-medium);
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: var(--size-border-radius-large);
  cursor: pointer;
  transition: var(--transition-normal) padding;

  &:hover {
    /* padding: var(--size-padding-very-small); */
    padding: 0;
  }

  &:hover ${StyledImgWrapper} {
    border-radius: var(--size-border-radius-large);
  }
`;
