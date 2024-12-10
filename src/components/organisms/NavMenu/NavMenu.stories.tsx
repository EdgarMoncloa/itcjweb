import { Meta, StoryObj } from '@storybook/react';
import { NavMenu } from './NavMenu';

export default {
  title: 'Organisms/NavMenu',
  component: NavMenu,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof NavMenu>;

export const Base: StoryObj<typeof NavMenu> = {
  render: () => {
    return <NavMenu />;
  },
};
