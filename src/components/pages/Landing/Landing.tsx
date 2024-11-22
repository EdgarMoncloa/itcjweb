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
import { InfoCardProps } from '../../molecules/InfoCard';
import { news } from '../../../mocks/news';
import { undergraduatePrograms } from '../../../mocks/undergraduatePrograms';
import { BlogCardProps } from '../../molecules/BlogCard';

interface LandingProps {
  heroContentLinks: ContentLinkProps[];
  undergraduateContent: InfoCardProps[];
  blogsContent: BlogCardProps[];
}

export const LandingPage = ({
  heroContentLinks,
  undergraduateContent,
  blogsContent,
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
