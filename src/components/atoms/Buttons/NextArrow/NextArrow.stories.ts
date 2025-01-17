import type { Meta, StoryObj } from '@storybook/react';

import { NextArrow } from '.';

const meta = {
  title: 'Atoms/Buttons/NextArrow',
  component: NextArrow,
  tags: ['autodocs'],
  parameters: {
    // layout: "centered",
  },
  args: {},
} satisfies Meta<typeof NextArrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    // content: 'Contenido',
  },
};
