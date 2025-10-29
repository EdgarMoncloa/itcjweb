import { RelevantSites } from "../../molecules/RelevantSites";
import { BlogsSection } from "../../organisms/BlogsSection";
import styled from "styled-components";
import { CustomDivider } from "../../atoms/CustomDivider";
import { HeroSection } from "../../organisms/HeroSection";
import { ContentLinkProps } from "../../atoms/ContentLink";
import { TecFooter } from "../../molecules/TecFooter";
import { GobFooter } from "../../molecules/GobFooter";
import { UndergraduateSection } from "../../organisms/UnderGraduateSection";
import { BlogCardProps } from "../../molecules/BlogCard";
import { InfoCardTrialSliderProps } from "../../molecules/InfoCardTriadSlider";
import {
  PostGraduateSectionProps,
  PostgraduateSection,
} from "../../organisms/PostgraduateSection";
import {
  ServicesSection,
  ServicesSectionProps,
} from "../../organisms/ServicesSection";
import Logo_ITCJ_base from "/images/Logo_ITCJ_base.png";
import { Logo3DGrid, Logo3DGridProps } from "../../molecules/Logo3DGrid";
import { AllHeaders } from "../../organisms/AllHeaders";
import { headerTecItem } from "../../molecules/HeaderTec";
import { headerTecItems } from "../../../data/headerTecItems";
import { relevantSites } from "../../../data/relevantSites.data";

interface LandingProps {
  heroContentLinks: ContentLinkProps[];
  undergraduateContent: InfoCardTrialSliderProps[];
  blogsContent: BlogCardProps[];
  postgraduateContent: PostGraduateSectionProps;
  servicesSection: ServicesSectionProps;
}

export const LandingPage = ({
  heroContentLinks,
  undergraduateContent,
  blogsContent,
  postgraduateContent,
  servicesSection,
}: LandingProps) => {
  const blogCards = blogsContent.map((item) => ({
    title: item.title,
    imgSrc: item.imgSrc,
    content: item.content,
  }));

  return (
    <StyledLanding>
      <AllHeaders headerTecItems={headerTecItems} />
      <CustomDivider />
      <StyledHeroGap />
      <StyledHeroWrapper>
        <HeroSection contentLikItems={heroContentLinks} />
      </StyledHeroWrapper>
      <StyledBaseMaringContainer>
        <RelevantSites />
      </StyledBaseMaringContainer>
      <CustomDivider content="Blogs" />
      <StyledBaseMaringContainer>
        <BlogsSection blogCards={blogCards} />
      </StyledBaseMaringContainer>
      <CustomDivider content="Oferta académica" />
      <StyledBaseMaringContainer>
        <UndergraduateSection
          title="Licenciaturas"
          items={undergraduateContent}
        />
      </StyledBaseMaringContainer>
      <PostgraduateSection {...postgraduateContent} />
      <StyledTitleMargin />
      <CustomDivider content="Servicios" />
      <ServicesSection {...servicesSection} />
      <StyledTitleMargin />
      <StyledTitleMargin />
      <StyledInterestSitesWrapper>
        <Logo3DGrid title="Sitios de interés" sites={relevantSites} />
      </StyledInterestSitesWrapper>
      <CustomDivider
        content={<img src={Logo_ITCJ_base} alt="Logo ITCJ" />}
        dividerOnSides
      />
      <TecFooter />
      <GobFooter />
    </StyledLanding>
  );
};

const StyledLanding = styled.div``;

const StyledHeroWrapper = styled.div`
  @media (min-width: ${(props) => props.theme.breakpoints.extraLargeDesktop}) {
  }
`;

const StyledBaseMaringContainer = styled.div`
  /* display: flex; */
  /* gap: var(--size-gap-medium); */
  /* flex-direction: column; */
  margin: var(--size-margin-large) var(--size-margin-body);
`;

const StyledHeroGap = styled.div`
  height: var(--size-gap-small);
`;

const StyledTitleMargin = styled.div`
  margin: var(--size-margin-large) 0;
`;

const StyledInterestSitesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--size-gap-medium);
  margin: var(--size-margin-large) var(--size-margin-body);
`;
