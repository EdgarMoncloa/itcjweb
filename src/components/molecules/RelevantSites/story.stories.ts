import type { Meta, StoryObj } from '@storybook/react';
import { RelevantSites } from '.';

const meta = {
  title: 'Molecules/Relevant Sites',
  component: RelevantSites,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof RelevantSites>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  
};
