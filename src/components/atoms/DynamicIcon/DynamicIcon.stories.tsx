import { StoryObj, Meta } from '@storybook/react';
import { DynamicIcon } from './DynamicIcon';

const meta: Meta<typeof DynamicIcon> = {
  title: 'Atoms/DynamicIcon',
  component: DynamicIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    icon: 'Fa500Px',
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
