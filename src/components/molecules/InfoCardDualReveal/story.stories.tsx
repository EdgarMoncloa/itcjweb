import { SiPhpmyadmin } from 'react-icons/si';
import { Meta, StoryObj } from '@storybook/react';
import {
  InfoCardDualReveal,
  InfoCardDualRevealProps,
} from './InfoCardDualReveal';
import { postgraduatePrograms } from '../../../mocks/postgraduatePrograms';

export default {
  title: 'Molecules/InfoCardDualReveal',
  component: InfoCardDualReveal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} as Meta<typeof InfoCardDualReveal>;

type MyComponentStoryProps = Omit<
  InfoCardDualRevealProps,
  'tags' | 'description'
> & {
  tags: string;
  description: string;
};

export const Base: StoryObj<MyComponentStoryProps> = {
  args: {
    title: postgraduatePrograms[0].title,
    description: postgraduatePrograms[0].description,
    tags: postgraduatePrograms[0].campus.join(','),
    icon: postgraduatePrograms[0].icon,
    subtitle: postgraduatePrograms[0].key,
  },
  render: (args) => {
    const tags = args.tags.split(',');
    return <InfoCardDualReveal {...args} tags={tags} defaultSize />;
  },
};
