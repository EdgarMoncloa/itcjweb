import { StoryObj, Meta } from "@storybook/react";
import { Posgrados } from "./";
import { ARG_TYPES } from "../../../tokens/StorybookArgTypes";

export default {
  title: "Pages/Posgrados",
  component: Posgrados,
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
    return <Posgrados />;
  },
};
