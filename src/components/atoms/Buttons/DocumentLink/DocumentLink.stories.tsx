import { StoryObj } from "@storybook/react";
import { DocumentLink } from "./";
import { ARG_TYPES } from "../../../../tokens/StorybookArgTypes";

export default {
  title: "Atoms/Buttons/DocumentLink",
  component: DocumentLink,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {},
  argTypes: {
    numDocumentLinks: {
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
    return (
      <DocumentLink href="https://www.google.com">Documento de ejemplo</DocumentLink>
    );
  },
};
