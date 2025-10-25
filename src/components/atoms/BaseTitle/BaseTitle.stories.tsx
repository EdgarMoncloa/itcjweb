import { StoryObj, Meta } from "@storybook/react";
import { BaseTitle } from "./";

export default {
  title: "Atoms/Titles/BaseTitle",
  component: BaseTitle,
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
    return <BaseTitle>Titulo base</BaseTitle>;
  },
};
