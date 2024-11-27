import { IoMdRocket } from 'react-icons/io';
import { IoIosStats } from 'react-icons/io';
import { IoIosConstruct, IoMdBriefcase } from 'react-icons/io';

export const postgraduatePrograms = [
  {
    title: 'Maestría en Ingeniería Administrativa',
    key: 'MIA',
    description:
      'Desarrolla habilidades para gestionar proyectos y recursos en el ámbito de la ingeniería. 🏗️💼',
    campus: ['Campus 1', 'Campus 2', 'Presencial', 'EAD'],
    icon: <IoIosStats />,
  },
  {
    title: 'Maestría en Ingeniería Industrial',
    key: 'MII',
    description:
      'Optimiza procesos y gestiona la producción en diversas industrias. 🏭📈',
    campus: ['Campus 1', 'Campus 2', 'Presencial', 'EAD'],
    icon: <IoIosConstruct />,
  },
  {
    title: 'Maestría en Administración de Negocios Internacionales',
    key: 'MABI',
    description:
      'Adquiere conocimientos para gestionar negocios en el contexto global. 🌍💼',
    campus: ['Campus 1', 'Campus 2', 'Presencial', 'EAD'],
    icon: <IoMdBriefcase />,
  },
  {
    title: 'Doctorado en Ciencias de la Ingeniería',
    key: 'DCI',
    description:
      'Investiga y desarrolla soluciones innovadoras en el campo de la ingeniería. 🔬🛠️',
    campus: ['Campus 1', 'Campus 2', 'Presencial'],
    icon: <IoMdRocket />,
  },
];
