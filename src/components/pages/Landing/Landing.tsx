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

interface LandingProps {
  heroContentLinks: ContentLinkProps[];
  degreesContent: InfoCardProps[];
}

export const LandingPage = ({ heroContentLinks }: LandingProps) => {
  const blogCards = news.map((item) => ({
    title: item.title,
    imgSrc: item.img,
    content: item.caption,
  }));

  const undergraduateItems = undergraduatePrograms.map((item) => ({
    title: item.title,
    description: {
      title: item.key,
      text: item.description,
      maxLines: 6,
    },
    tags: item.campus,
    icon: item.icon,
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
        <StyledUndergraduatesContainer
          title='Licenciaturas'
          items={undergraduateItems}
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

const StyledUndergraduatesContainer = styled(UndergraduateSection)``;
