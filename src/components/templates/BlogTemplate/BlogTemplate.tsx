import styled from 'styled-components';
import { AllHeaders } from '../../organisms/AllHeaders';
import { StyledBody3, StyledH4 } from '../../../tokens/CustomText';
import { useEffect, useRef, useState } from 'react';
import { TitleWithGearRotating } from '../../molecules/TitleWIthGearRotating';

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
  const refBlogImage = useRef<HTMLDivElement>(null);
  const [HeaderTecHaveOpacity, setHeaderTecHaveOpacity] = useState(false);

  const handleWindowScroll = (event: Event) => {
    if (refBlogImage.current) {
      const blogImageBottomPosition =
        refBlogImage.current.offsetTop + refBlogImage.current.offsetHeight;
      const blogImageTopPosition = refBlogImage.current.offsetTop;
      const haveOpacity =
        window.scrollY <= blogImageBottomPosition &&
        window.scrollY >= blogImageTopPosition;

      setHeaderTecHaveOpacity(haveOpacity);
    }
  };

  useEffect(() => {
    if (refBlogImage.current) {
      console.log(refBlogImage.current.offsetTop);
      window.scrollTo(0, refBlogImage.current.offsetTop);

      window.addEventListener('scroll', handleWindowScroll);

      return () => {
        window.removeEventListener('scroll', handleWindowScroll);
      };
    }
  }, []);

  return (
    <StyledBLogTemplate>
      <AllHeaders headerTecHaveOpacity={HeaderTecHaveOpacity} />
      <StyledBlogImage ref={refBlogImage}>
        <StyledImg src={imgSrc} alt={alt} />
      </StyledBlogImage>
      <StyledBlogContent>
        <TitleWithGearRotating>{title}</TitleWithGearRotating>
      </StyledBlogContent>
    </StyledBLogTemplate>
  );
};

const StyledBLogTemplate = styled.div`
  width: 100%;
  min-height: 200vh;
`;

const StyledBlogImage = styled.div`
  width: 100%;
  position: relative;
`;
const StyledImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: var(--size-height-10-rows);
`;

const StyledBlogContent = styled.div`
  margin-top: var(--size-margin-medium);
  padding: 0 var(--size-margin-body-large);
  width: 100%;
`;
