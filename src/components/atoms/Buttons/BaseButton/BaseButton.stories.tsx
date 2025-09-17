import { StoryObj, Meta } from "@storybook/react";
import { BaseButton } from ".";
import { ARG_TYPES } from "../../../../tokens/StorybookArgTypes";
import { FaPlus } from "react-icons/fa";

export default {
  title: "Atoms/Buttons/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
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
    return <BaseButton icon={<FaPlus />}>Add</BaseButton>;
  },
};
