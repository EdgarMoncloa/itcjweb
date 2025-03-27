import { StoryObj } from "@storybook/react";
import {
  GridWithTitleSeparator,
  GridWithTitleSeparatorProps,
} from "./GridWithTitleSeparator";
import { StyledBody1, StyledH4 } from "../../../../tokens/CustomText";
import { ARG_TYPES } from "../../../../tokens/StorybookArgTypes";
import { GridWithTitleSeparatorProps_TextAlign } from "./GridWithTitleSeparator.types";

export default {
  title: "Atoms/Grids/GridWithTitleSeparator",
  component: GridWithTitleSeparator,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      source: {
        type: "code",
      },
    },
  },
  args: {
    title1: "Ingenieria en sistemas computacionales",
    element1:
      "La carrera de Ingeniería en Sistemas es una disciplina que combina conocimientos de informática, matemáticas y gestión para desarrollar soluciones tecnológicas innovadoras. Los ingenieros en sistemas se encargan del diseño, implementación y mantenimiento de software, redes y bases de datos, asegurando el correcto funcionamiento de los sistemas informáticos en distintos ámbitos, como la industria, la educación y la salud. Además, trabajan en la optimización de procesos mediante el uso de herramientas digitales, contribuyendo al avance de la tecnología y la transformación digital de las organizaciones.",
    title2: "Ingenieria en sistemas computacionales",
    element2:
      "La carrera de Ingeniería en Sistemas es una disciplina que combina conocimientos de informática, matemáticas y gestión para desarrollar soluciones tecnológicas innovadoras. Los ingenieros en sistemas se encargan del diseño, implementación y mantenimiento de software, redes y bases de datos, asegurando el correcto funcionamiento de los sistemas informáticos en distintos ámbitos, como la industria, la educación y la salud. Además, trabajan en la optimización de procesos mediante el uso de herramientas digitales, contribuyendo al avance de la tecnología y la transformación digital de las organizaciones.",
    textAlign: GridWithTitleSeparatorProps_TextAlign.JUSTIFY,
  },
  argTypes: {
    // ANCHOR Storybook
    title1: ARG_TYPES.Text_OnlyStorybook,
    title2: ARG_TYPES.Text_OnlyStorybook,
    element1: ARG_TYPES.Text_OnlyStorybook,
    element2: ARG_TYPES.Text_OnlyStorybook,
    // ANCHOR Style
    textAlign: ARG_TYPES.enumSelect_fun(GridWithTitleSeparatorProps_TextAlign),
    // ANCHOR Code
    items: {
      ...ARG_TYPES.object_OnlyCode,
      description: "2 objetos con las propiedades: title, element",
    },
  },
};

type MyCustomStoryProps = {
  title1: string;
  title2: string;
  element1: string;
  element2: string;
};
type MyStoryProps = GridWithTitleSeparatorProps & MyCustomStoryProps;
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ title1, title2, element1, element2, ...args }) => {
    return (
      <GridWithTitleSeparator
        {...args}
        items={[
          {
            title: <StyledH4>{title1}</StyledH4>,
            element: <StyledBody1>{element1}</StyledBody1>,
          },
          {
            title: <StyledH4>{title2}</StyledH4>,
            element: <StyledBody1>{element2}</StyledBody1>,
          },
        ]}
      />
    );
  },
};
