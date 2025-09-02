import { StoryObj, Meta } from "@storybook/react";
import { Estudiantes } from "./";
import { ARG_TYPES } from "../../../tokens/StorybookArgTypes";

export default {
  title: "Pages/Estudiantes",
  component: Estudiantes,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  argTypes: {
    numElements: {
      ...ARG_TYPES.numItems,
    },
  },
};

type MyStoryProps = {
  temp: string;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ ...args }) => {
    return <Estudiantes />;
  },
};
