import { Meta, StoryObj } from '@storybook/react';
import { NavMenu } from './NavMenu';

export default {
  title: 'Organisms/NavMenu',
  component: NavMenu,
  tags: ['autodocs'],
  argTypes: {
    defaultSize: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Solo para storybook',
      },
    },
  },
} as Meta<typeof NavMenu>;

export const Base: StoryObj<typeof NavMenu> = {
  args: {
    defaultSize: true,
  },
  render: (args) => {
    return <NavMenu {...args} />;
  },
};
