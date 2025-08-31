import { StoryObj, Meta } from "@storybook/react";
import { ARG_TYPES } from "../../../tokens/StorybookArgTypes";
import { NosotrosPage } from "./NosotrosPage";

export default {
  title: "Pages/Nosotros",
  component: NosotrosPage,
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
  numElements: number;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ ...args }) => {
    return <NosotrosPage />;
  },
};
