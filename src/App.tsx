import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/Landing";
import { undergraduatePrograms } from "./mocks/undergraduatePrograms";
import { news } from "./mocks/news";
import { blogsMock } from "./mocks/blogs";
import { postgraduatePrograms } from "./mocks/postgraduatePrograms";
import { ServicesMoock } from "./mocks/services.mock";
import { relevantSitesMock } from "./mocks/relevantSitesMock";
import { InfoCardTrialSliderProps } from "./components/molecules/InfoCardTriadSlider";

const undergraduateItems: InfoCardTrialSliderProps[] =
  undergraduatePrograms.map((item) => ({
    title: item.title,
    subtitle: item.key,
    description: item.description,
    tags: item.campus,
    icon: item.icon,
  }));
export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            heroContentLinks={news}
            undergraduateContent={undergraduateItems}
            blogsContent={blogsMock}
            postgraduateContent={{
              // title: 'Programas de postgrado',
              postgraduatePrograms: postgraduatePrograms,
            }}
            servicesSection={{
              services: ServicesMoock,
            }}
            interestSitesContent={{
              sites: relevantSitesMock,
              title: "Sitios de interés",
            }}
          />
        }
      />
    </Routes>
  );
}
