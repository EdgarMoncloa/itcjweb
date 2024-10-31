import type { Meta, StoryObj } from '@storybook/react';
import { LandingPage } from './';

const meta = {
  title: 'Pages/Landing Page',
  component: LandingPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {};
