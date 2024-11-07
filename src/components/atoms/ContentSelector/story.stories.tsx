import type { Meta, StoryObj } from '@storybook/react';

import { ContentSelector } from '.';

const meta = {
  title: 'Atoms/ContentSelector',
  component: ContentSelector,
  tags: ['autodocs'],
  parameters: {
    // layout: "centered",
  },
  args: {},
} satisfies Meta<typeof ContentSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    img: 'https://picsum.photos/1280/720',
    title: 'Título de la noticia',
    caption: 'Esta es la descripcion corta que ira en la imagen',
  },
};
