import { StoryObj, Meta } from '@storybook/react';
import { BlogTemplate } from './BlogTemplate';

export default {
  title: 'Templates/BlogTemplate',
  component: BlogTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} as Meta<typeof BlogTemplate>;

export const Base: StoryObj<typeof BlogTemplate> = {
  render: (args) => {
    return <BlogTemplate {...args} />;
  },
};
