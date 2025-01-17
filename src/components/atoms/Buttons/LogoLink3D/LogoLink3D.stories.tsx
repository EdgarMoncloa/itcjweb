import { Meta, StoryObj } from "@storybook/react";
import { LogoLink3D, LogoLink3DProps } from "./LogoLink3D";

export default {
  title: "Buttons/LogoLink3D",
  component: LogoLink3D,
  tags: ["autodocs"],
  argTypes: {
    href: {
      description: "Enlace a la página",
      control: {
        type: "text",
      },
    },
    logoSrc: {
      description: "Ruta de la imagen",
      control: {
        type: "text",
      },
    },
    target: {
      description: "Target del enlace",
      control: {
        type: "text",
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
} as Meta;

export const Default: StoryObj<LogoLink3DProps> = {
  args: {
    href: "https://www.tecnm.mx",
    logoSrc: "/images/LOGO_CONACYT.png",
    target: "_blank",
    alt: "texto alternativo",
  },
  render: (args) => <LogoLink3D {...args} defaultSize />,
};
