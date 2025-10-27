import { StoryObj, Meta } from "@storybook/react";
import { Contraloria } from "./";

export default {
  title: "Pages/Contraloria",
  component: Contraloria,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
  argTypes: {},
};

type MyStoryProps = {
  temp: string;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ ...args }) => {
    return <Contraloria />;
  },
};
