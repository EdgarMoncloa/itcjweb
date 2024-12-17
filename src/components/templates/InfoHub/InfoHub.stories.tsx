import { StoryObj, Meta } from '@storybook/react';
import { InfoHub, InfoHubProps } from './InfoHub';

export default {
  title: 'Templates/InfoHub',
  component: InfoHub,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<InfoHubProps>;

type MyStoryProps = Omit<InfoHubProps, 'icon'> & {
  icon: string;
};
type Story = StoryObj<MyStoryProps>;

export const Template: Story = {
  args: {
    icon: 'Fa500Px',
  },
  render: (args) => <InfoHub {...args} />,
};
