import { StoryObj, Meta } from '@storybook/react';
import {
  DynamicContentRender,
  DynamicContentRenderProps,
} from './DynamicContentRender';

export default {
  title: 'Organisms/DynamicContentRender',
  component: DynamicContentRender,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
} as Meta<DynamicContentRenderProps>;

type Story = StoryObj<DynamicContentRenderProps>;

export const Template: Story = {
  args: { content: 'Hello World' },
  render: (args) => <DynamicContentRender {...args} />,
};
