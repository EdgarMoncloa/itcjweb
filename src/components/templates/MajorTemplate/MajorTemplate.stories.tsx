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
      description: "Oportunidades de trabajo",
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
  },
  render: (args) => <MajorTemplate {...args} />,
};
