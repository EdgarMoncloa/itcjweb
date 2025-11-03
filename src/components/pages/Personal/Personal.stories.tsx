import { StoryObj, Meta } from "@storybook/react";
import { Personal } from "./";
import { ARG_TYPES } from "../../../tokens/StorybookArgTypes";

export default {
  title: "Pages/Personal",
  component: Personal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  argTypes: {
    numPersonals: {
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
    return <Personal />;
  },
};
