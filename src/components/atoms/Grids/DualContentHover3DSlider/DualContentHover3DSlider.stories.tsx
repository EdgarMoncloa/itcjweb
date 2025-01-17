import { Meta, StoryObj } from "@storybook/react";
import { DualContentHover3DSlider } from "./DualContentHover3DSlider";
import {
  ExampleContainer,
  ExampleContainerColors,
} from "../../Examples/ExampleContainer";
import { TextTypes } from "../../../../types/GlobalTypes";

interface MyStory {
  defaultSize?: boolean;
  colorVariant: "primary";
  firstContent: string;
  secondContent: string;
}

export default {
  title: "Atoms/Grids/DualContentHover3DSlider",
  component: DualContentHover3DSlider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    colorVariant: {
      description: "Variante del componente",
      control: {
        type: "select",
        options: ["primary", "neutral"],
      },
      firstContent: {
        description: "Contenido del componente",
        control: {
          type: "text",
        },
      },
      secondContent: {
        description: "Contenido del componente",
        control: {
          type: "text",
        },
      },
    },
  },
} as Meta<MyStory>;

export const Default: StoryObj<MyStory> = {
  args: {
    colorVariant: "primary",
    firstContent: "Contenido 1",
    secondContent: "Contenido 2",
  },
  render: (args) => {
    const firstContent = (
      <ExampleContainer
        color={ExampleContainerColors.transparent}
        textType={TextTypes.H4}
      >
        {args.firstContent}
      </ExampleContainer>
    );
    const secondContent = (
      <ExampleContainer
        color={ExampleContainerColors.transparent}
        textType={TextTypes.H4}
      >
        {args.secondContent}
      </ExampleContainer>
    );
    return (
      <DualContentHover3DSlider
        {...args}
        firstContent={firstContent}
        secondContent={secondContent}
        defaultSize
      />
    );
  },
};
