import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { HeroSection } from ".";
interface MyComponentStoryProps {
  numItems: number;
}

const meta: Meta = {
  title: "Organisms/HeroSection",
  component: HeroSection,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    numItems: 5,
  },
  argTypes: {
    numItems: {
      control: {
        type: "range",
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
};
export default meta;

const Template: StoryFn<MyComponentStoryProps> = (args) => {
  const contentLikItems = [
    {
      img: `https://storage.googleapis.com/pod_public/750/177679.jpg`,
      title: `Imagen Alta`,
      caption: "Este es un texto de prueba",
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJt3e_-wd8i6DJP8jA-1qq-L_DI93zynb_Eg&s`,
      title: `Imagen Cuadrada`,
      caption: "Este es un texto de prueba",
    },
    {
      img: `https://img.freepik.com/premium-photo/bright-abstract-waves-rainbow-celebration-flow-smoothly-generated-by-ai_188544-9530.jpg?semt=ais_hybrid`,
      title: `Imagen Ancha`,
      caption: "Este es un texto de prueba",
    },
    {
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSUCTw93YX-C0tIyAHP-2iySLP2OlE9CWPgQ&s`,
      title: `Imagen Panoramica`,
      caption: "Este es un texto de prueba",
    },
  ];
  for (let i = 4; i < args.numItems; i++) {
    contentLikItems.push({
      img: `https://random.imagecdn.app/v1/image?width=500&height=500`,
      title: `Ejemplos extra`,
      caption: "Este es un texto de prueba",
    });
  }
  return <HeroSection contentLikItems={contentLikItems} defaultSize />;
};

export const Base = Template.bind({});
Base.args = {
  numItems: 5,
};
