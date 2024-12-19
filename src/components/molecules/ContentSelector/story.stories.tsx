import type { Meta, StoryObj } from "@storybook/react";

import { ContentSelector } from ".";

const meta = {
  title: "Molecules/ContentSelector",
  component: ContentSelector,
  tags: ["autodocs"],
  parameters: {
    // layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ContentSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = (args: any) => {
  return (
    <ContentSelector
      title="Título de la noticia"
      caption="Esta es la descripcion corta que ira en la imagen"
      defaultSize
    />
  );
};
