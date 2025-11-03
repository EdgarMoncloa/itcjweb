import {
  IoIosConstruct,
  IoIosStats,
  IoMdBriefcase,
  IoMdRocket,
} from "react-icons/io";
import { InfoCardTrialSliderProps } from "../../components/molecules/InfoCardTriadSlider";
import { PostGraduateSectionProps } from "../../components/organisms/PostgraduateSection";
import { LandingPage } from "../../components/pages/Landing";
import { blogsMock } from "../../mocks/blogs";
import { news } from "../../mocks/news";
import { ServicesMoock } from "../../mocks/services.mock";
import { undergraduatePrograms } from "../../mocks/undergraduatePrograms";
import { useNavigate } from "react-router";

export function LandingPageContainer() {
  const navigate = useNavigate();

  const undergraduateItems: InfoCardTrialSliderProps[] =
    undergraduatePrograms.map((item) => ({
      title: item.title,
      subtitle: item.key,
      description: item.description,
      tags: item.campus,
      icon: item.icon,
      onClick: () => {
        navigate(`/aspirantes/programas-academicos/${item.id}`);
      },
    }));

  const posgraduateContent: PostGraduateSectionProps = {
    postgraduatePrograms: [
      {
        name: "Maestría en Ingeniería Administrativa",
        key: "MIA",
        description:
          "Desarrolla habilidades para gestionar proyectos y recursos en el ámbito de la ingeniería. 🏗️💼",
        campuses: ["Campus 1", "Presencial"],
        icon: <IoIosStats />,
        link: "/posgrados",
      },
      {
        name: "Maestría en Ingeniería Industrial",
        key: "MII",
        description:
          "Optimiza procesos y gestiona la producción en diversas industrias. 🏭📈",
        campuses: ["Campus 1", "Presencial"],
        icon: <IoIosConstruct />,
        link: "/posgrados",
      },
      {
        name: "Maestría en Administración de Negocios Internacionales",
        key: "MABI",
        description:
          "Adquiere conocimientos para gestionar negocios en el contexto global. 🌍💼",
        campuses: ["Campus 1", "Presencial"],
        icon: <IoMdBriefcase />,
        link: "/posgrados",
      },
      {
        name: "Doctorado en Ciencias de la Ingeniería",
        key: "DCI",
        description:
          "Investiga y desarrolla soluciones innovadoras en el campo de la ingeniería. 🔬🛠️",
        campuses: ["Campus 1", "Presencial"],
        icon: <IoMdRocket />,
        link: "/posgrados",
      },
    ],
  };

  return (
    <LandingPage
      heroContentLinks={news}
      undergraduateContent={undergraduateItems}
      blogsContent={blogsMock}
      postgraduateContent={posgraduateContent}
      servicesSection={{
        services: ServicesMoock,
      }}
    />
  );
}
