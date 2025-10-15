import { StoryObj, Meta } from "@storybook/react";
import { BaseButton } from ".";
import { ARG_TYPES } from "../../../../tokens/StorybookArgTypes";
import { FaPlus } from "react-icons/fa";
import { COLOR_VARIANT } from "../../../../types/GlobalTypes";

export default {
  title: "Atoms/Buttons/BaseButton",
  component: BaseButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    colorVariant: COLOR_VARIANT.primary,
  },
  argTypes: {
    numElements: {
      ...ARG_TYPES.numItems,
    },
    colorVariant: ARG_TYPES.colorVariant,
  },
};

type MyStoryProps = {
  temp: string;
};
type Story = StoryObj<MyStoryProps>;

export const Base: Story = {
  render: ({ ...args }) => {
    return (
      <BaseButton icon={<FaPlus />} {...args}>
        Add
      </BaseButton>
    );
  },
};
