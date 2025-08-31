import { StoryObj, Meta } from "@storybook/react";
import { Servicios } from "./Servicios";
import { ARG_TYPES } from "../../../tokens/StorybookArgTypes";

export default {
  title: "Pages/Servicios",
  component: Servicios,
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
    return <Servicios />;
  },
};
