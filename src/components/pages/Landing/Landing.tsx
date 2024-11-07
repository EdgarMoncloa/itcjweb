import { BiBlanket } from 'react-icons/bi';
import { RelevantSite } from '../../atoms/RelevantSite';
import { SepHeader } from '../../molecules/SepHeader';
import { TecHeader } from '../../molecules/TecHeader';
import { RelevantSites } from '../../molecules/RelevantSites';
import { BlogsSection } from '../../organisms/BlogsSection';
import { BlogCardProps } from '../../molecules/BlogCard';
import styled from 'styled-components';
import { CustomDivider } from '../../atoms/CustomDivider';
import { LogosHeader } from '../../molecules/LogosHeader';
import { HeroSection } from '../../organisms/HeroSection';

export const LandingPage = () => {
  const blogCards = Array.from({ length: 10 }, (_, index) => ({
    title: `Titulo ${index}`,
    imgSrc: 'https://random.imagecdn.app/v1/image?width=500&height=500',
    content:
      'Contenido de la card: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  })) as BlogCardProps[];

  return (
    <div>
      <SepHeader />
      <LogosHeader />
      <TecHeader />
      <CustomDivider />
      <StyledHeroGap />
      <HeroSection />
      <StyledBaseMaringContainer>
        <RelevantSites />
      </StyledBaseMaringContainer>
      <CustomDivider content='Blogs' />
      <StyledBaseMaringContainer>
        <BlogsSection blogCards={blogCards} />
      </StyledBaseMaringContainer>
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
