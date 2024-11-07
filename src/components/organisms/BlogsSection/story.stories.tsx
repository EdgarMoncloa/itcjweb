import type { Meta, StoryObj, StoryFn } from '@storybook/react';
import { BlogsSection } from '.';
import { BlogCardProps } from '../../molecules/BlogCard';

interface MyComponentStoryProps {
  numItems: number;
}

const meta: Meta = {
  title: 'Organisms/BlogsSection',
  component: BlogsSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  argTypes: {
    numItems: {
      control: { type: 'number', min: 0, max: 10 }, // Control tipo número
      defaultValue: 3, // El valor por defecto es 3
    },
  },
};
export default meta;

const Template: StoryFn<MyComponentStoryProps> = (args) => {
  const blogCards = Array.from({ length: args.numItems }, (_, index) => ({
    title: `Titulo ${index}`,
    imgSrc: 'https://random.imagecdn.app/v1/image?width=500&height=500',
    content:
      'Contenido de la card: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.',
  })) as BlogCardProps[];

  return <BlogsSection blogCards={blogCards} />;
};

export const Base = Template.bind({});
Base.args = {
  numItems: 3,
};
