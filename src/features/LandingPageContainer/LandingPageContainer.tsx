import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import { InfoCardTrialSliderProps } from "../../components/molecules/InfoCardTriadSlider";
import { LandingPage } from "../../components/pages/Landing";
import { blogsMock } from "../../mocks/blogs";
import { news } from "../../mocks/news";
import { postgraduatePrograms } from "../../mocks/postgraduatePrograms";
import { relevantSitesMock } from "../../mocks/relevantSitesMock";
import { ServicesMoock } from "../../mocks/services.mock";
import { undergraduatePrograms } from "../../mocks/undergraduatePrograms";

const undergraduateItems: InfoCardTrialSliderProps[] =
  undergraduatePrograms.map((item) => ({
    title: item.title,
    subtitle: item.key,
    description: item.description,
    tags: item.campus,
    icon: item.icon,
  }));

export function LandingPageContainer() {
  return (
    <LandingPage
      heroContentLinks={news}
      undergraduateContent={undergraduateItems}
      blogsContent={blogsMock}
      postgraduateContent={{
        postgraduatePrograms: postgraduatePrograms,
      }}
      servicesSection={{
        services: ServicesMoock,
      }}
    />
  );
}
