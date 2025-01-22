import { AiFillAlert } from "react-icons/ai";
import { StoryObj, Meta } from "@storybook/react";
import { MajorTemplate, MajorTemplateProps } from "./MajorTemplate";

export default {
  title: "Templates/MajorTemplate",
  component: MajorTemplate,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta<MajorTemplateProps>;

type MyStoryProps = MajorTemplateProps;
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  args: {
    name: "Ingeniería en Sistemas Computacionales",
    descriptionImage: "https://picsum.photos/300/300?random=1",
    description:
      "Ingeniería en Sistemas Computacionales es una carrera enfocada en el diseño, desarrollo e implementación de soluciones tecnológicas para resolver problemas complejos. Los estudiantes adquieren habilidades en programación, desarrollo de software, administración de bases de datos, redes y ciberseguridad. Además, aprenden a optimizar sistemas y a integrar tecnologías emergentes, preparándolos para enfrentar los retos de la transformación digital en diversas industrias.",
    oportunities: {
      description:
        "Ingeniería en Sistemas Computacionales ofrece amplias oportunidades laborales en el mundo de la tecnología y la innovación. Los egresados de esta carrera están preparados para liderar proyectos tecnológicos en diversas áreas de la industria, aplicando sus conocimientos para resolver problemas complejos y optimizar procesos mediante soluciones digitales.",
      areas: [
        { title: "Desarrollo de software", icon: <AiFillAlert /> },
        { title: "Ciberseguridad", icon: <AiFillAlert /> },
        { title: "Administración de bases de datos", icon: <AiFillAlert /> },
        { title: "Redes y telecomunicaciones", icon: <AiFillAlert /> },
        {
          title: "Inteligencia artificial y machine learning",
          icon: <AiFillAlert />,
        },
        { title: "Gestión de proyectos tecnológicos", icon: <AiFillAlert /> },
        { title: "Tecnologías emergentes", icon: <AiFillAlert /> },
        { title: "Consultoría tecnológica", icon: <AiFillAlert /> },
        { title: "Industria de videojuegos", icon: <AiFillAlert /> },
      ],
    },
    competencies: {
      description:
        "Ingeniería en Sistemas Computacionales ofrece amplias oportunidades laborales en el mundo de la tecnología y la innovación. Los egresados de esta carrera están preparados para liderar proyectos tecnológicos en diversas áreas de la industria, aplicando sus conocimientos para resolver problemas complejos y optimizar procesos mediante soluciones digitales.",
      specifics: [
        "Diseño y desarrollo de software eficiente, confiable y escalable.",
        "Gestión de bases de datos y sistemas de información.",
        "Implementación de redes y seguridad informática.",
        "Solución de problemas tecnológicos mediante el análisis crítico y creativo.",
        "Integración de tecnologías emergentes como inteligencia artificial, IoT y big data.",
      ],
      generals: [
        "Habilidades de comunicación efectiva y trabajo en equipo multidisciplinario.",
        "Pensamiento analítico para la resolución de problemas complejos.",
        "Adaptabilidad a nuevos entornos tecnológicos y metodologías de desarrollo.",
        "Gestión ética y responsable de los recursos tecnológicos.",
        "Compromiso con el aprendizaje continuo y la innovación.",
      ],
    },
  },
  render: (args) => <MajorTemplate {...args} />,
};
