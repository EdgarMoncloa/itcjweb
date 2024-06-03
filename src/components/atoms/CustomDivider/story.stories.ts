import type { Meta, StoryObj } from "@storybook/react";

import CustomDivider from ".";

const meta = {
  title: "Atoms/CustomDivider",
  component: CustomDivider,
  tags: ["autodocs"],
  parameters: {
    // layout: "centered",
  },
  args: {},
} satisfies Meta<typeof CustomDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    content: "Contenido",
  },
};
