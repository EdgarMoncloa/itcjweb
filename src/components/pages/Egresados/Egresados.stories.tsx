import { StoryObj, Meta } from "@storybook/react";
import { ARG_TYPES } from "../../../tokens/StorybookArgTypes";
import { Egresados } from "./Egresados";

export default {
  title: "Pages/Egresados",
  component: Egresados,
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
    return <Egresados />;
  },
};
