import { IoMdRocket } from "react-icons/io";
import { IoIosStats } from "react-icons/io";
import { IoIosConstruct, IoMdBriefcase } from "react-icons/io";

export const postgraduatePrograms = [
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
];
