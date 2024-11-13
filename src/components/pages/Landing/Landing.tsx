import { BiBlanket } from 'react-icons/bi';
import { RelevantSite } from '../../atoms/RelevantSite';
import { GobHeader } from '../../molecules/GobHeader';
import { TecHeader } from '../../molecules/TecHeader';
import { RelevantSites } from '../../molecules/RelevantSites';
import { BlogsSection } from '../../organisms/BlogsSection';
import { BlogCardProps } from '../../molecules/BlogCard';
import styled from 'styled-components';
import { CustomDivider } from '../../atoms/CustomDivider';
import { LogosHeader } from '../../molecules/LogosHeader';
import { HeroSection } from '../../organisms/HeroSection';
import { ContentLinkProps } from '../../atoms/ContentLink';
import { TecFooter } from '../../molecules/TecFooter';
import { GobFooter } from '../../molecules/GobFooter';

interface LandingProps {
  heroContentLinks: ContentLinkProps[];
}

export const LandingPage = ({ heroContentLinks }: LandingProps) => {
  const blogCards = Array.from({ length: 10 }, (_, index) => ({
    title: `Titulo ${index}`,
    imgSrc: 'https://random.imagecdn.app/v1/image?width=500&height=500',
    content:
      'Contenido de la card: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  })) as BlogCardProps[];

  return (
    <div>
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
      {/*  */}
      <TecFooter />
      <GobFooter />
    </div>
  );
};

const StyledBaseMaringContainer = styled.div`
  /* display: flex; */
  /* gap: var(--size-gap-medium); */
  /* flex-direction: column; */
  margin: var(--size-margin-small);
`;

const StyledHeroGap = styled.div`
  height: var(--size-gap-small);
`;
