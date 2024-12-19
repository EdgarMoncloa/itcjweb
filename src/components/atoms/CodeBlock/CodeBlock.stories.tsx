import { Meta, StoryObj } from "@storybook/react";
import { CodeBlock, codeBlockProps } from "./CodeBlock";

export default {
  title: "Atoms/CodeBlock",
  component: CodeBlock,
  tags: ["autodocs"],
} satisfies Meta<codeBlockProps>;

type Story = StoryObj<codeBlockProps>;

export const Base: Story = {
  args: {
    children: "Codigo",
  },
  render: (args) => {
    return <CodeBlock {...args} />;
  },
};
