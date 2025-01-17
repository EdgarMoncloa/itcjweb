import type { Meta, StoryObj } from '@storybook/react';

import { SimpleNavMenu, SimpleNavMenuTypes } from '.';

const meta = {
  title: 'Atoms/Buttons/SimpleNavMenu',
  component: SimpleNavMenu,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: SimpleNavMenuTypes,
  },
  args: {
    content: 'Link X',
    subItems: [
      { content: 'option 1', link: '#' },
      { content: 'option 2', link: '#' },
      { content: 'option 3', link: '#' },
    ],
  },
} satisfies Meta<typeof SimpleNavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    type: SimpleNavMenuTypes.gob,
    link:"#"
  },
};
