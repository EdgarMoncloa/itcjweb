import { Meta, StoryObj } from '@storybook/react';
import { GobFooter } from './GobFooter';

export default {
  title: 'Molecules/GobFooter',
  component: GobFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} as Meta<typeof GobFooter>;

export const Base: StoryObj<typeof GobFooter> = {
  render: () => <GobFooter />,
};
