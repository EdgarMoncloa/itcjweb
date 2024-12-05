import { StoryObj, Meta } from '@storybook/react';
import { BlogTemplate } from './BlogTemplate';
import { generateRandomImageLink } from '../../../utils/generateRandomImageLink';

export default {
  title: 'Templates/BlogTemplate',
  component: BlogTemplate,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  argTypes: {
    title: {
      description: 'Titulo del blog',
      control: {
        type: 'text',
      },
    },
  },
} as Meta<typeof BlogTemplate>;

export const Base: StoryObj<typeof BlogTemplate> = {
  args: {
    title: 'Titulo del blog',
  },
  render: (args) => {
    const imgSrc = generateRandomImageLink(1280, 720);
    return <BlogTemplate {...args} imgSrc={imgSrc} />;
  },
};
