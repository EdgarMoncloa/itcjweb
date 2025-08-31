import { StoryObj, Meta } from "@storybook/react";
import { InfoHub, InfoHubProps } from "./InfoHub";

export default {
  title: "Templates/InfoHub",
  component: InfoHub,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} as Meta<InfoHubProps>;

type MyStoryProps = Omit<InfoHubProps, "icon"> & {
  icon: string;
};
type Story = StoryObj<MyStoryProps>;

const content = [
  {
    label: "Misión",
    content: (
      <>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
        <p>
          Formar profesionistas en educación superior tecnológica de calidad,
          capaces de contribuir a la ciencia, tecnología e investigación con un
          enfoque creativo e innovador, mediante una educación integral basada
          en competencias para el desarrollo sustentable de una sociedad
          incluyente, globalizada, equitativa y humana.
        </p>
      </>
    ),
  },
  {
    label: "Visión",
    content: (
      <>
        <p>
          Ser una institución de alto desempeño en educación superior
          tecnológica, que forme profesionales e investigadores que contribuyan
          al desarrollo sostenido, sustentable y equitativo de la sociedad.
        </p>
        <p>
          Ser una institución que promueva la innovación, la creatividad y la
          excelencia en la educación, la tecnología y la investigación.Con esta
          visión el Tecnológico Nacional de México / Instituto Tecnológico de
          Ciudad Juárez busca contribuir a la transformación educativa en
          México, orientando sus esfuerzos hacia el desarrollo humano
          sustentable y la competitividad.
        </p>
      </>
    ),
  },
  {
    label: "Calidad",
    content: (
      <p>
        El Instituto Tecnológico de Ciudad Juárez establece el compromiso de
        implementar sus procesos con eficacia, orientados hacia la satisfacción
        de sus clientes, sustentada en la calidad del proceso educativo,
        promoviendo la protección del medio ambiente y previniendo la
        contaminación por impactos ambientales de sus actividades y servicios,
        este compromiso se refleja a través del sistema de gestión integral,
        cumpliendo los objetivos ambientales, requisitos legales aplicables y
        otros requisitos mediante la mejora continua, conforme a las normas ISO
        9001:2015 e ISO 14001:2015. Rev. 3
      </p>
    ),
  },
  {
    label: "Escudo",
    content: "Escudo",
  },
  {
    label: "Valores",
    content: "Valores",
  },
  {
    label: "Ética",
    content: "Ética",
  },
  {
    label: "Infraestructura",
    content: "Infraestructura",
  },
  {
    label: "Historia",
    content: "Historia",
  },
  {
    label: "Directorio",
    content: "Directorio",
  },
  {
    label: "Organigrama",
    content: "Organigrama",
  },
];
const defaultItemIndex = 0;
const title = "Identidad institucional";

export const Template: Story = {
  args: {
    icon: "Fa500Px",
  },
  render: (args) => {
    return (
      <InfoHub
        {...args}
        content={content}
        defaultItemIndex={defaultItemIndex}
        title={title}
      />
    );
  },
};
