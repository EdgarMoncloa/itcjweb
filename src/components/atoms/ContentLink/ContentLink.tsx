import styled from 'styled-components';
import { StyledBody1, StyledH2, StyledH4 } from '../../../tokens/CustomText';

export interface ContentLinkProps {
  img: string;
  title: string;
  caption?: string;
  alt?: string;
  haveDefaultSize?: boolean;
}

export const ContentLink = ({
  img,
  title,
  caption,
  alt = 'Imagen de noticia principal',
  haveDefaultSize = false,
}: ContentLinkProps) => {
  return (
    <StyledContentLink className={haveDefaultSize ? 'default-size' : ''}>
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
  background-color: var(--colors-app-main-200);
`;
const StyledImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const StyledDescriptionContainer = styled.div`
  border-bottom-left-radius: var(--size-border-radius-large);
  border-bottom-right-radius: var(--size-border-radius-large);

  backdrop-filter: blur(4px);
  background-color: var(--colors-transparent-itcj-main);
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

const StyledContentLink = styled.div`
  position: relative;
  /* background-color: var(--colors-itcj-main); */
  background-color: var(--colors-app-main-100);
  padding: var(--size-padding-medium);
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: var(--size-border-radius-large);
  cursor: pointer;
  transition: var(--transition-normal) padding;

  &:hover {
    /* padding: var(--size-padding-xs); */
    padding: 0;
  }

  &:hover ${StyledImgWrapper} {
    border-radius: var(--size-border-radius-large);
  }

  &.default-size {
    height: var(--size-height-5-row);
    width: var(--size-width-10-cols);
  }
`;
