import { StoryObj } from "@storybook/react";
import {
  ExampleContainer_Colors,
  ExampleContainer,
  ExampleContainerProps,
} from "./ExampleContainer";

export default {
  title: "Atoms/Examples/ExampleContainer",
  component: ExampleContainer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: Object.keys(ExampleContainer_Colors),
    },
    text: {
      control: {
        type: "text",
      },
    },
  },
};

type MyComponentStoryProps = Omit<ExampleContainerProps, "color"> & {
  color: keyof typeof ExampleContainer_Colors;
};

export const Default: StoryObj<MyComponentStoryProps> = {
  args: {
    color: "Primary300",
    children: "Example",
  },
  render: (args) => {
    const colorValue =
      ExampleContainer_Colors[args.color as keyof typeof ExampleContainer_Colors];

    return <ExampleContainer {...args} color={colorValue} defaultSize />;
  },
};
