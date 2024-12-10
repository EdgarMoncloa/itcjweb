import { StoryObj, Meta } from '@storybook/react';
import { NavOption, NavOptionProps } from './NavOption';
import * as Icons from 'react-icons/fa';

const iconNames = Object.keys(Icons);

export default {
  title: 'Molecules/NavOption',
  component: NavOption,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: iconNames,
    },
    defaultSize: {
      control: {
        type: 'boolean',
        disable: true,
      },
    },
  },
} as Meta<typeof NavOption>;

type MyStoryProps = Omit<NavOptionProps, 'icon'> & {
  icon: string;
};
type Story = StoryObj<MyStoryProps>;

export const Template: Story = {
  args: {
    icon: 'Fa500Px',
    content: 'NavOption',
    link: '#',
    defaultSize: true,
  },
  render: (args) => <NavOption {...args} />,
};
