import { GobHeader } from '../../molecules/GobHeader';
import { TecHeader } from '../../molecules/TecHeader';
import { RelevantSites } from '../../molecules/RelevantSites';
import { BlogsSection } from '../../organisms/BlogsSection';
import styled from 'styled-components';
import { CustomDivider } from '../../atoms/CustomDivider';
import { LogosHeader } from '../../molecules/LogosHeader';
import { HeroSection } from '../../organisms/HeroSection';
import { ContentLinkProps } from '../../atoms/ContentLink';
import { TecFooter } from '../../molecules/TecFooter';
import { GobFooter } from '../../molecules/GobFooter';
import { UndergraduateSection } from '../../organisms/UnderGraduateSection';
import { BlogCardProps } from '../../molecules/BlogCard';
import { TriadGridSliderInfoCardProps } from '../../molecules/TriadGridSliderInfoCard';
import {
  PostGraduateSectionProps,
  PostgraduateSection,
} from '../../organisms/PostgraduateSection';

interface LandingProps {
  heroContentLinks: ContentLinkProps[];
  undergraduateContent: TriadGridSliderInfoCardProps[];
  blogsContent: BlogCardProps[];
  postgraduateContent: PostGraduateSectionProps;
}

export const LandingPage = ({
  heroContentLinks,
  undergraduateContent,
  blogsContent,
  postgraduateContent,
}: LandingProps) => {
  const blogCards = blogsContent.map((item) => ({
    title: item.title,
    imgSrc: item.imgSrc,
    content: item.content,
  }));

  return (
    <StyledLanding>
      <GobHeader />
      <LogosHeader />
      <TecHeader />
      <CustomDivider />
      <StyledHeroGap />
      <HeroSection contentLikItems={heroContentLinks} />
      <StyledBaseMaringContainer>
        <RelevantSites />
      </StyledBaseMaringContainer>
      <CustomDivider content='Blogs' />
      <StyledBaseMaringContainer>
        <BlogsSection blogCards={blogCards} />
      </StyledBaseMaringContainer>
      <CustomDivider content='Oferta académica' />
      <StyledBaseMaringContainer>
        <UndergraduateSection
          title='Licenciaturas'
          items={undergraduateContent}
        />
      </StyledBaseMaringContainer>
      <PostgraduateSection {...postgraduateContent} />
      <StyledTitleMargin />
      <CustomDivider content='Servicios' />
      <TecFooter />
      <GobFooter />
    </StyledLanding>
  );
};

const StyledLanding = styled.div``;

const StyledBaseMaringContainer = styled.div`
  /* display: flex; */
  /* gap: var(--size-gap-medium); */
  /* flex-direction: column; */
  margin: var(--size-margin-large) var(--size-margin-xl);
`;

const StyledHeroGap = styled.div`
  height: var(--size-gap-small);
`;

const StyledTitleMargin = styled.div`
  margin: var(--size-margin-large) 0;
`;
