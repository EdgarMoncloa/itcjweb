import { StoryObj, Meta } from '@storybook/react';
import { DynamicIcon } from './DynamicIcon';
import * as Icons from 'react-icons/fa';

const iconNames = Object.keys(Icons);

const meta: Meta<typeof DynamicIcon> = {
  title: 'Atoms/Icons/DynamicIcon',
  component: DynamicIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: 'Fa500Px',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
      },
      options: iconNames,
    },
  },
};

export default meta;

export const Base: StoryObj<typeof DynamicIcon> = {
  args: {
    icon: 'Fa500Px',
    size: '4xl',
  },
  render: (args) => <DynamicIcon {...args} />,
};
