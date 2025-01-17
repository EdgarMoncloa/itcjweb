import { StoryObj, Meta } from "@storybook/react";
import { ExampleImage } from "./ExampleImage";

export default {
  title: "Atoms/Examples/ExampleImage",
  component: ExampleImage,
  tags: ["autodocs"],
  argTypes: {
    alt: {
      description: "Texto alternativo de la imagen",
      control: {
        type: "text",
      },
    },
    seed: {
      description: "Seed para generar una imagen aleatoria",
      control: {
        type: "text",
      },
    },
    width: {
      description: "Ancho de la imagen",
      control: {
        type: "number",
      },
    },
    height: {
      description: "Alto de la imagen",
      control: {
        type: "number",
      },
    },
    defaultSize: {
      description: "Define un tamaño estandar para mostrar en storybook",
      control: {
        type: "boolean",
        disable: true,
      },
    },
  },
} as Meta<typeof ExampleImage>;

export const Base: StoryObj<typeof ExampleImage> = {
  args: {
    alt: "Imagen de ejemplo",
    width: 480,
    height: 240,
  },
  render: (args) => <ExampleImage {...args} defaultSize />,
};
