import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { GobHeader } from '.';

const meta = {
  title: 'Molecules/GobHeader',
  component: GobHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof GobHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
