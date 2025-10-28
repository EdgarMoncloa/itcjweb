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
const headerTecItems = [
  {
    content: "",
    icon: <AiOutlineFacebook />,
    link: "https://www.facebook.com/TecNMCampusCdJuarez/?locale=es_LA",
    subitems: [],
  },
  {
    content: "",
    icon: <AiOutlineLinkedin />,
    link: "https://www.linkedin.com/school/instituto-tecnológico-de-ciudad-juárez/posts/?feedView=all",
    subitems: [],
  },
  {
    content: "Conocenos",
    link: "/Conocenos",
    subItems: [],
  },
  {
    content: "Aspirantes",
    link: "#",
    subItems: [
      {
        content: "Programas académicos",
        link: "#",
      },
      { content: "Proceso de admisión", link: "#" },
      { content: "Plan de estudios", link: "#" },
      { content: "Becas y ayudas financieras", link: "#" },
      { content: "Infraestructura", link: "#" },
      { content: "Servicios de apoyo", link: "#" },
      { content: "Clubes y actividades", link: "#" },
      { content: "Mapa", link: "#" },
    ],
  },
  {
    content: "Alumnos",
    link: "/alumnos",
    subItems: [],
  },
  {
    content: "Personal",
    link: "#",
    subItems: [],
  },
  {
    content: "Egresados",
    link: "#",
    subItems: [],
  },
];

export function LandingPageContainer() {
  return (
    <LandingPage
      headerTecItems={headerTecItems}
      heroContentLinks={news}
      undergraduateContent={undergraduateItems}
      blogsContent={blogsMock}
      postgraduateContent={{
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
  );
}
