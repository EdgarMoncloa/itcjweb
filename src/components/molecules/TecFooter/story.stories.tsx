import { Meta, StoryObj } from '@storybook/react';
import { TecFooter } from './TecFooter';

export default {
  title: 'Molecules/TecFooter',
  component: TecFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} as Meta<typeof TecFooter>;

export const Base: StoryObj<typeof TecFooter> = {
  render: () => <TecFooter />,
};
